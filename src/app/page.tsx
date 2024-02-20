"use client";

/* import type { Metadata } from "next"; */
import Link from "next/link";

/* export const metadata: Metadata = {
  title: "Home",
}; */

export default function Page() {
  const handleInstallClick = () => {
    // Verificar se o navegador suporta a instalação de PWA
    if ("serviceWorker" in navigator && "InstallEvent" in window) {
      // Verificar se já não está instalado
      if (!window.matchMedia("(display-mode: standalone)").matches) {
        // Exibir a opção de instalar o PWA
        window.prompt(
          'Para instalar o aplicativo no seu celular, toque em "Adicionar à tela inicial".'
        );
      }
    } else {
      alert("Seu navegador não suporta a instalação de Progressive Web Apps.");
    }
  };

  return (
    <>
      <h1>Next.js + PWA = AWESOME!</h1>
      <Link href="/about">About page</Link>
      <button onClick={handleInstallClick}>Instale no seu celular</button>
    </>
  );
}
