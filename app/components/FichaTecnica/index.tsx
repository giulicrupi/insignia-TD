"use client";

import Image from "next/image";
import Styled from "./Styled.module.scss";

export default function FichaTecnica() {

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
    <section className={Styled.sectionFicha} id="ficha">
      <div className={`container ${Styled.container}`}>
        <div className={`row ${Styled.row}`}>

          {/* COLUNA ESQUERDA – IMAGEM */}
          <div className={`col-lg-6 ${Styled.colLeft}`}>
            <Image
              src="/images/FACHADA1.png"
              width={1386}
              height={1024}
              alt="Fachada"
              className={Styled.fachada}
            />
          </div>

          {/* COLUNA DIREITA – FICHA TÉCNICA */}
          <div className={`col-lg-6  ${Styled.colRight}`}>
            <div className={Styled.contentBox}>
              <h2 className={Styled.title}>Ficha técnica</h2>

              <ul className={Styled.infoList}>
                <li><strong>Localização:</strong> SÃO PAULO | SP – Brasil</li>
                <li><strong>Endereço:</strong> R. Furnas, 55 – Brooklin, São Paulo</li>
                <li><strong>Tipo:</strong> Residencial</li>
                <li><strong>Área do Terreno:</strong> 4.472,50 m²</li>
                <li><strong>Projeto de Arquitetura:</strong> Marchi Arquitetura</li>
                <li><strong>Projeto Paisagístico:</strong> Neusa Nakata Arquitetura Paisagística</li>
                <li><strong>Projeto de Decoração:</strong> Carlos Rossi Arquitetura</li>
                <li><strong>Número de unidades:</strong> 136</li>
                <li><strong>Número de torres:</strong> 02</li>
                <li><strong>Número de pavimentos:</strong> 24</li>
                <li><strong>Tipologia:</strong> 88 a 187 m² | 2 a 4 dorms. | Unidades duplex</li>
                <li><strong>Total de vagas:</strong> Até 4 vagas por unidade</li>
              </ul>

            <div className={`botao ${Styled.botao}`}>
              <button className={Styled.btnContato} onClick={handleScroll}>
                FALE COM UM CORRETOR
              </button>                
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
