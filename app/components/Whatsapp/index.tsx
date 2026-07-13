"use client";

import styles from "./Styled.module.scss";
import Image from "next/image";

export const FloatingWhatsApp = () => {
  const WHATSAPP_NUMBER = "551121445700"; // +55 11 2144-5700

  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre o empreendimento."
    );

    // GTM (opcional)
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "ClickWhatsApp",
        eventCategory: "contato",
        eventAction: "floating_button",
      });
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <button
      className={styles.floatingButton}
      onClick={handleClick}
      aria-label="WhatsApp"
    >
      <span className={styles.iconWrapper}>
        <Image
          src="/images/wpp.png"
          width={40}
          height={40}
          alt="WhatsApp"
        />
      </span>

      <span className={styles.label}>Fale com um consultor</span>
    </button>
  );
};
