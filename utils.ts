import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
  const baseUrl = "https://mrsvenezuela.com";
  const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path;
  return `${baseUrl}${normalizedPath}`;
}
