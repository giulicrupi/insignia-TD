"use client";

import Image from "next/image";
import Styled from "./Styled.module.scss";

export default function Diferenciais() {
  
const itens = [
  // {
  //   icon: "/images/infinity/diferenciais/terr.svg",
  //   title: "TERRENO COM MAIS DE 4.400 M²",
  //   text: <>
  //     Terreno com frente para 4 ruas, sendo a R. Furnas praticamente privativa. 
  //     <span className="obs">
  //       *Área total do terreno que inclui três subcondomínios.
  //     </span>
  //   </>
  // },
  {
    icon: "/images/icones-diferenciais/icone-bairro-jardim.png",
    title: "BAIRRO-JARDIM",
    text: <>Um Autêntico bairro-jardim, na região que concentra a maior quantidade de áreas verdes por habitante da cidade.</>
  },
  {
    icon: "/images/icones-diferenciais/icone-terreno.png",
    title: "MAIS DE 3.600 M² DE TERRENO",
    text: <>Terreno amplo, com frente para 3 ruas importantes do bairro.</>
  },
  {
    icon: "/images/icones-diferenciais/icone-bioformismo.png",
    title: "BIOMORFISMO",
    text: <>Área de lazer completa que integra arte, design e natureza.</>
  },
  {
    icon: "/images/icones-diferenciais/icone-casa-vista.png",
    title: "CASAS COM VISTA",
    text: <>Apartamentos com layouts semelhantes aos de casas, com espaços amplos e poucos corredores.</>
  },
  {
    icon: "/images/icones-diferenciais/icone-por-do-sol.png",
    title: "PISCINA COM PRAÇA DO PÔR DO SOL",
    text: <>Ambientes integrados com vista para o pôr do sol mais desejado da zona oeste de São Paulo.</>
  },
  {
    icon: "/images/icones-diferenciais/icone-pickleball3.png",
    title: "PICKLEBALL",
    text: <>Quadra recreativa com possibilidade de configuração de Pickleball, o esporte que mais cresce nos Estados Unidos.</>
  },
        

];

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
    <section className={Styled.diferenciais} id="diferenciais">
      <div className={`container ${Styled.container}`}>
        <p className={`text-center ${Styled.title}`}>Características que fazem a diferença</p>
        <div className={`line ${Styled.line}`}>

          {itens.map((item, index) => (
            <div className={`column ${Styled.col}`} key={index}>
              <div className={Styled.forma}>

                {/* <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.06 330.65">

                  <g id="Layer_1" data-name="Layer 1">
                    <path                fill="#231f20"
                    fillRule="evenodd" className="cls-1" d="M291.06,301.28c0,16.22-13.15,29.37-29.37,29.37H93.45c-13.76,0-24.92-11.16-24.92-24.92v-34.24c0-16.22-13.15-29.37-29.37-29.37h-14.24c-13.76,0-24.92-11.16-24.92-24.92V29.37C0,13.15,13.15,0,29.37,0h168.24c13.77,0,24.92,11.16,24.92,24.92v14.24c0,16.22,13.15,29.37,29.37,29.37h14.24c13.77,0,24.92,11.16,24.92,24.92v207.82h0Z"/>
                  </g>
                </svg> */}
                {/* Conteúdo */}
                <div className={Styled.conteudo}>
                  <div className={Styled.contentImage}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={632}
                      height={729}
                      className={`img-fluid ${Styled.icon}`}
                    />
                  </div>

                  <p className={Styled.title}>{item.title}</p>

                  <div className={Styled.contentTexto}>
                    <p className={Styled.texto}>{item.text}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
        <div className={Styled.botao}>
          <button onClick={handleScroll}>Fale com um corretor</button>
        </div>
      </div>
    </section>
  );
}
