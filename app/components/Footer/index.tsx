"use client";

import Image from "next/image";
import Styled from "./Styled.module.scss";

export default function Footer() {
  return (
    <>
     <section className={Styled.footer} >
        <div className={`container ${Styled.container}`}>
            <div className={`row ${Styled.row}`}>
                <div className={`col-lg-6 ${Styled.col}`}>
                    <p className={Styled.legenda}>Realização:</p>
                    <Image src="/images/ass-logo.svg" width={1536} height={729} alt="logo Teixeira Duarte" className={Styled.logoTeixeira} />
                </div>
                <div className={`col-lg-6 ${Styled.col}`}>
                    <p className={Styled.textoLegal}>TDSP - DIÓGENES RIBEIRO DE LIMA. Memorial de Incorporação registrado na Matrícula nº 174.572 do 10º Oficial de Registro de Imóveis de São Paulo, sob R. 2 em 15/11/2024. Todas as imagens são meramente ilustrativas.</p>
                    <div className={Styled.lynq}>
                        <a href="https://lynq.ag/" target="_blank">
                            Desenvolvido por: 
                            <Image
                            className={Styled.imageLynq}
                            src="/images/lynq/LOGO-BRANCO.png"
                            alt="Lynq.ag | Creative Intelligence. Real Connections"
                            width="1200"
                            height="50"
                            ></Image>
                            
                        </a>
                        <a href="https://nexxai.com.br/" target="_blank">
                            <Image
                            className={Styled.imageNexx}
                            src="/images/lynq/LOGO_NEXXLABS_NEG.png"
                            alt="Nexx.labs | Hub de Inovação em IA, Dev & Media"
                            width="1200"
                            height="50"
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section className={Styled.subFooter}>
        <div className={`container ${Styled.container}`}>
            <p className={Styled.subDesc}> Developed by:               <a href="https://lynq.ag/" target="_blank">
                    <Image src="/images/logo_lynq.png" width={4500} height={2061} alt="" />
                </a>  powered by  <a href="https://nexxai.com.br/" target="_blank">
                    <Image src="/images/logo_nexxai_neg.png" width={3038} height={1019} alt="" />
                </a> </p>

        </div>
    </section> */}
    </>
  );
}
