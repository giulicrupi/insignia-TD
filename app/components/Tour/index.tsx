"use client";

import Image from "next/image";
import Styled from "./Styled.module.scss";

export default function Tour() {
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
    <section className={Styled.sectionTour} id="tour">
        <div className={` container ${Styled.container}`}>
            <p className={Styled.title}>Explore os apartamentos decorados pelo tour virtual</p>
            
            <div className={` row ${Styled.row}`}>
                <div className={` col-12 ${Styled.col}`}>
                    <div className={Styled.tour}>
                        <iframe src="https://my.matterport.com/show/?m=5ifYk2Nuje7"></iframe>
                        {/* <iframe src="https://my.matterport.com/show/?m=Zbb4BpLFjbS&play=1&title=1" width="100%" height="auto"></iframe> */}
                        <div className={` text-left ${Styled.desc}`}>
                            <p>Decorado de  <b>192<span>m²</span></b></p>
                        </div>
                    </div>
                </div>
                {/* <div className={` col-lg-6 ${Styled.col}`}>
                    <div className={Styled.tour}>
                        <iframe src="https://my.matterport.com/show/?m=aywZ8V73F9S&play=1&title=1" width="100%" height="auto"></iframe>
                        <div className={` text-right ${Styled.desc}`}>
                            <p>Decorado de  <b>143<span>m²</span></b></p>
                        </div>                   
                    </div>
                    
                </div> */}
            </div>
            {/* <Image src="/images/Shape-3.png" width={1920} height={80} alt="" className={Styled.linha} /> */}
            <div className={`botao ${Styled.botao}`}>
                <button className={Styled.btnContato} onClick={handleScroll}>
                Quero conhecer
                </button>                
            </div>      
        </div>
    </section>
  );
}
