import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const suggestions = [
  { name: "Playas, islas y cayos", href: "/playas", text: "Las quince playas más conocidas del país." },
  { name: "Mérida", href: "/estado/merida", text: "Los Andes, el páramo y el Mukumbarí." },
  { name: "Parque Nacional Canaima", href: "/parque-nacional/canaima", text: "Tepuyes, ríos ámbar y el Salto Ángel." },
  { name: "Los Roques", href: "/playa/los-roques", text: "Cayos, arrecifes y lagunas turquesa." },
];

export default function NotFound() {
  return (
    <main className="bg-[#f7f4ec]">
      <section className="container-page pt-36 pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#247c8f]">Error 404</p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] text-[#17201b] md:text-7xl">
          Esta página no existe.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#4d5b54]">
          Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Desde aquí puedes
          seguir explorando Venezuela.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#0f3d2e] px-6 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,61,46,0.22)] transition hover:bg-[#14513d]"
        >
          Volver al inicio
        </Link>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Quizá buscabas</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {suggestions.map((item) => (
              <Link href={item.href} key={item.href} className="group">
                <article className="flex h-full items-start justify-between gap-5 rounded-[26px] border border-[#e6dfd2] bg-white p-6 shadow-[0_18px_55px_rgba(23,32,27,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,32,27,0.10)]">
                  <div className="min-w-0">
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[#17201b]">
                      {item.name}
                    </h2>
                    <p className="mt-3 leading-7 text-[#68726d]">{item.text}</p>
                  </div>
                  <ArrowUpRight className="mt-1 shrink-0 text-[#0f3d2e] transition group-hover:rotate-12" size={19} />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
