"use client";

import { useState } from "react";
import Image from "next/image";
import Styled from "./Styled.module.scss";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    aceiteTermos: false,
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Máscara do telefone
    if (name === "phone") {
      let cleaned = value.replace(/\D/g, ""); // remove tudo que não é número

      // (XX)XXXXX-XXXX
      if (cleaned.length >= 1)
        cleaned = cleaned.replace(/^(\d{2})(\d)/, "($1)$2");
      if (cleaned.length >= 7)
        cleaned = cleaned.replace(/(\d{5})(\d)/, "$1-$2");

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
      aceiteTermos: formData.aceiteTermos,
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

      // 🔥 Evento GTM somente no sucesso
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "Lead",
          eventCategory: "sucesso_cadastro",
          eventAction: "clicked",
        });
      }

      setSent(true);
      setFormData({ name: "", phone: "", email: "", aceiteTermos: false, });

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={Styled.sectionContato} id="contato">
      <div className={`container ${Styled.container}`}>
        <p className={Styled.titleContato}>Cadastre-se para mais informações:</p>

        <div className={Styled.form}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Camada_2"
            data-name="Camada 2"
            viewBox="0 0 1071 394"
          >
            <g id="Camada_1-2" data-name="Camada 1">
              <path
                className={Styled.cls1}
                d="M41.5.5C18.86.5.5,18.86.5,41.5v287c0,22.64,18.36,41,41,41h687c21.38,0,41.88,24,63.25,24h237.75c22.64,0,41-18.36,41-41v-216c0-22.64-18.36-41-41-41h-15c-22.09,0-40-17.91-40-40v-14c0-22.64-18.36-41-41-41H41.5Z"
              />
            </g>
          </svg> */}

          <div className={`${Styled.formBox} ${sent ? Styled.enviado : ""}`}>
            {!sent ? (
              <>

                <form className={Styled.formGeral} onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome"
                      className={Styled.formControl}
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
                      className={Styled.formControl}
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

                        if (allowedKeys.includes(e.key)) return;
                        if (!/^[0-9]$/.test(e.key)) e.preventDefault();
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
                      className={Styled.formControl}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`mb-3 ${Styled.aceite}`}>
                    <input
                      type="checkbox"
                      name="aceiteTermos"
                      checked={formData.aceiteTermos}
                      onChange={handleChange} />
                      {" "}
                      Aceito receber contato e comunicações.
                  </div>

                  <button
                    type="submit"
                    className={Styled.button}
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "ENVIAR"}
                  </button>
                </form>
              </>
            ) : (
              <div className={Styled.obrigadoBox}>
                <h3>Obrigado!</h3>
                <p>
                  Seus dados foram enviados com sucesso. Em breve entraremos em
                  contato.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={Styled.tl}>
          <p></p>
        </div>
      </div>
    </section>
  );
}
