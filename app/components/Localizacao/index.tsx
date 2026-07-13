"use client";

import Styled from "./Styled.module.scss";

export default function Localizacao() {
  const handleScroll = () => {
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo("#contato", {
        offset: 0,        // ajuste se tiver header fixo
        duration: 1.2,    // tempo do scroll
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing suave
      });
    }
  };

  return (
    <section
      className={Styled.sectionLocal}
      style={{ backgroundImage: `url(/images/localizacao/fotomontagem.jpg)` }}
    >
      <div className={`container ${Styled.container}`}>
        <p className={Styled.title}>Essa pode ser a sua futura vista.</p>

        <div className={`botao ${Styled.botao}`}>
          <button onClick={handleScroll}>Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
