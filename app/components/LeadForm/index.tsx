"use client";

import { useState } from "react";
import styles from "./Styled.module.scss";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Máscara do telefone
    if (name === "phone") {
      let cleaned = value.replace(/\D/g, ""); // remove tudo que não é número

      // (XX)XXXXX-XXXX
      if (cleaned.length >= 1) cleaned = cleaned.replace(/^(\d{2})(\d)/, "($1)$2");
      if (cleaned.length >= 7) cleaned = cleaned.replace(/(\d{5})(\d)/, "$1-$2");

      return setFormData((prev) => ({ ...prev, phone: cleaned }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    nome: formData.name,
    telefone: formData.phone,
    email: formData.email,
    data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    origem: window.location.href,
  };

  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Erro ao enviar o lead");

    // 🔥 GTM EVENT — somente se deu sucesso
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "Lead",
        eventCategory: "sucesso_cadastro",
        eventAction: "clicked",
      });
    }

    setSent(true);
    setFormData({ name: "", phone: "", email: "" });

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao enviar. Tente novamente.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={`${styles.formBox} ${sent ? styles.enviado : ""}`}>
      {!sent ? (
        <>
          <h3 className="mb-3">Receba mais informações</h3>

          <form className={styles.formGeral} onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className={styles.formControl}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
            <input
              type="text"
              name="phone"
              placeholder="Celular"
              className={styles.formControl}
              value={formData.phone}
              onChange={handleChange}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                ];

                // permitir teclas especiais
                if (allowedKeys.includes(e.key)) return;

                // bloquear letras
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              maxLength={15}
              required
            />

            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className={styles.formControl}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Enviando..." : "ENVIAR"}
            </button>
          </form>
        </>
      ) : (
        <div className={styles.obrigadoBox}>
          <h3>Obrigado!</h3>
          <p>Seus dados foram enviados com sucesso. Em breve entraremos em contato.</p>
        </div>
      )}
    </div>
  );
}
