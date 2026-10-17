// Run with MRS_PLAYWRIGHT_PATH pointing to Playwright when not installed locally.
const { chromium } = require(process.env.MRS_PLAYWRIGHT_PATH || "playwright");
const assert = require("node:assert/strict");

(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const base = process.env.MRS_TEST_URL || "http://localhost:3000";
  const expectedIds = ["3j8oMfNbwHl72ycvRJLPLY", "1bUrYhqNRg1fHaoRMWtqSO", "5CHPg4vXdTa1Ji01XDf6qP", "6lxtkQ8Saa9tge8IbOnKG1", "5mG96oKJQ6J1Hp6r9re6BX"];
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  let spotifyRequests = 0;
  page.on("request", (req) => { if (new URL(req.url()).hostname.endsWith("spotify.com")) spotifyRequests++; });
  try {
    await page.goto(`${base}/ciudades-y-cultura#musica`);
    const section = page.locator("#musica");
    await section.getByRole("button", { name: /^Escuchar:/ }).first().waitFor();
    assert.equal(await section.getByRole("button", { name: /^Escuchar:/ }).count(), 5);
    assert.equal(await section.locator("iframe").count(), 0, "No player before consent/click");
    assert.equal(spotifyRequests, 0, "No Spotify connection before click");

    for (let i = 0; i < expectedIds.length; i++) {
      const button = section.locator("button[aria-expanded]").nth(i);
      await button.click();
      assert.equal(await section.locator("iframe").count(), 1, "Only one mounted player");
      const iframe = section.locator("iframe");
      assert.ok((await iframe.getAttribute("src")).includes(expectedIds[i]));
      assert.ok(!(await iframe.getAttribute("src")).includes("autoplay="));
      assert.ok((await iframe.getAttribute("allow")).includes("encrypted-media"));
      assert.equal(await button.getAttribute("aria-expanded"), "true");
      if (process.env.MRS_LIVE_SPOTIFY === "1") {
        const frame = page.frameLocator("#musica iframe");
        await frame.getByRole("button", { name: /^(play|reproducir)$/i }).waitFor({ timeout: 30000 });
        console.log(`Spotify player loaded: ${expectedIds[i]}`);
        if (i === 0) {
          await frame.getByRole("button", { name: /^(play|reproducir)$/i }).click();
          try {
            await frame.getByRole("button", { name: /pause|pausa/i }).first().waitFor({ timeout: 20000 });
          } catch (error) {
            await section.screenshot({ path: `${process.env.TEMP || "/tmp"}/mrs-music-playback-check.png` });
            console.log("Controls after click:", await frame.getByRole("button").evaluateAll((buttons) => buttons.map((b) => ({ label: b.getAttribute("aria-label"), text: b.textContent?.slice(0, 80) }))));
            throw error;
          }
          console.log("Spotify playback started (pause control visible).");
        }
      }
    }
    await section.getByRole("button", { name: /^Cerrar reproductor:/ }).click();
    assert.equal(await section.locator("iframe").count(), 0, "Closing removes audio player");

    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await section.getByRole("button", { name: /^Escuchar:/ }).first().click();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `No overflow at ${width}px`);
      if (process.env.MRS_LIVE_SPOTIFY === "1") {
        await page.frameLocator("#musica iframe").getByRole("button", { name: /^(play|reproducir)$/i }).waitFor({ timeout: 30000 });
      }
      await section.screenshot({ path: `${process.env.TEMP || "/tmp"}/mrs-music-${width}.png` });
      await section.getByRole("button", { name: /^Cerrar reproductor:/ }).click();
    }
    const languages = { en: "Listen", de: "Anhören", fr: "Écouter", zh: "试听", es: "Escuchar" };
    for (const [language, label] of Object.entries(languages)) {
      await page.evaluate((lang) => localStorage.setItem("descubre-venezuela-language", lang), language);
      await page.reload();
      await section.getByRole("button", { name: new RegExp(`^${label}:`) }).first().waitFor();
      assert.equal(await section.getByRole("button", { name: new RegExp(`^${label}:`) }).count(), 5);
    }
    assert.deepEqual(errors, [], "No app JavaScript errors");
    console.log("PASS: five samples; on-demand loading; one player; close; 375/768/1440px; all five languages.");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
