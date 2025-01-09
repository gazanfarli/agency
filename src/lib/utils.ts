import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (
  text: string | undefined | null,
  length: number,
  suffix = "..."
) => {
  if (!text || text.length === 0) return "";
  if (text.length <= length) return text;

  return text.slice(0, length) + suffix;
};
