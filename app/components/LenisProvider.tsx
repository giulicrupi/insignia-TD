"use client";

import { useLenis } from "../hooks/useLenis";

export function LenisProvider() {
  useLenis();
  return null; // não renderiza nada, apenas ativa o smooth scroll
}
