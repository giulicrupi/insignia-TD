"use client";

//import Image from "next/image";
import Styled from "./Styled.module.scss";

export default function LocalizacaoCompleta() {
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
    <section className={Styled.sectionLocalCompleta} id="localizacao">
        {/* <Image src="/images/infinity/localizacao/img-local.jpg" className={Styled.imgLocal} width={1920} height={510} alt="" /> */}
        <div className="container">
            <div className={Styled.visite}>
    
            <p className={Styled.decorado}>Rua Sales Júnior, 573 - Alto da Lapa</p>

         
          </div>
        </div>
        <iframe className={Styled.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.014623012931!2d-46.72150202391513!3d-23.531976460514787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef89ad43774d9%3A0x37ec1b16c1801eb6!2sR.%20Jorge%20Americano%2C%20580%20-%20Lapa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005083-130%2C%20Brasil!5e0!3m2!1spt-PT!2sus!4v1783522879607!5m2!1spt-PT!2sus" width="600" height="450"   loading="lazy" ></iframe>
                <div className={Styled.botaoVisite}>
              <button onClick={handleScroll}>
                AGENDE SUA VISITA
              </button>
            </div>
    </section>
  );
}
