"use client";

import Styled from "./Styled.module.scss";
import LeadForm from "../LeadForm/index";

export default function Banner() {
  return (
    <>
    <section
      className={Styled.banner}
      style={{ backgroundImage: `url(/images/banner/banner-fachada-desk_v3.jpg)` }}
      id="home"
    >
      <div className={`container ${Styled.container}`}>
        <div className="row align-items-center">

          {/* COLUNA ESQUERDA - TEXTO */}
          <div className="col-lg-6 col-md-7 col-12">
            <div className={Styled.contentForm}>
                <div className={Styled.textBlock}>
                <div className={Styled.mude}>
                  <p>Em Construção</p>
                  <hr />
                </div>

                <p className={Styled.title}>
                  CASAS SUSPENSAS COM VISTA PRIVILEGIADA NO ALTO DA LAPA
                </p>

                <div className={Styled.subtitle}>
                  <p className={Styled.metragem}>130, 178 e 192M²</p> 
                  <p className={Styled.comando}>2 A 4 SUÍTES</p>
                  <p className={Styled.subComando}>ESPAÇOS AMPLOS E <br />  POUCOS CORREDORES</p>
                </div>
              </div>
              <div className={Styled.formBanner}>
                <LeadForm />
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - FORM */}
          <div className="col-lg-4 col-md-5 col-12 d-flex justify-content-md-end justify-content-center">
          
          </div>
        </div>
      </div>
    </section>   
    <div className={Styled.formMobile}>
      <LeadForm />
    </div>
    </>
  );
}
