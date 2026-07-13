"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Styled.module.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

interface ImgData {
  src: string;
  caption: string;
}


export const GalleryTabs = () => {

  
  const tabs = [
    { id: "areas", label: "ÁREAS COMUNS" },
    { id: "decorado", label: "DECORADOS" },
    { id: "plantas", label: "PLANTAS" },
    // { id: "implantacao", label: "IMPLANTAÇÃO" },
  ];

  const [active, setActive] = useState("areas");
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 980);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, [active]);

  // === GALERIAS ===
  // === GALERIAS ===
  const galleryData: Record<string, ImgData[]> = {
    areas: [
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__1.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__2.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__3.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__4.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__5.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__6.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__7.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__8.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__9.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__10.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__11.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__12.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__13.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__14.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__15.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__16.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__17.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__18.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__19.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__20.jpg", caption: "" },
      { src: "/images/galerias/areas/Captura_de_tela__2025-01-08__21.jpg", caption: "" },
    ],
    decorado: [
      { src: "/images/galerias/decorado/adfoto_9547.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9564.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9570.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9603.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9615.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9622.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9631.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9638.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9645.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9648.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9713.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9747.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9768.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9779.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9782.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9791.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9815.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9842.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9854.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9875.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9881.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9894.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9910.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9925.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9938.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9946.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9958.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9965.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/adfoto_9967.jpg", caption: "Perspectiva artística do Decorado" },
      { src: "/images/galerias/decorado/Drive_ISGAL.jpg", caption: "Perspectiva artística do Decorado" },
  
    ],
    plantas: [
      { src: "/images/galerias/plantas/PranchasPlantas.jpg", caption: "" },
      { src: "/images/galerias/plantas/PranchasPlantas2.jpg", caption: "" },
      { src: "/images/galerias/plantas/PranchasPlantas3.jpg", caption: "" },
      { src: "/images/galerias/plantas/PranchasPlantas4.jpg", caption: "" },
      { src: "/images/galerias/plantas/PranchasPlantas5.jpg", caption: "" },
      { src: "/images/galerias/plantas/PranchasPlantas6.jpg", caption: "" },
    ],
    // implantacao: [
    //   { src: "/images/infinity/galeria/implantacao.jpg", caption: "" },    
    // ],
  };

  // === PAGINAÇÃO (desktop) ===
  const pages = (arr: ImgData[]) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 7) {
      result.push(arr.slice(i, i + 7));
    }
    return result;
  };

  // 🚀 LÓGICA FINAL DOS SLIDES
  const slides =
    active === "plantas" ||
    active === "implantacao" ||
    isMobile
      ? galleryData[active].map((img) => [img]) // 1 imagem por slide
      : pages(galleryData[active]); // 7 imagens por slide no desktop

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
    <div className={styles.galleryWrapper} id="galeria">
      <div className={styles.conjuntoTabs}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

{/* === SE NÃO FOR PLANTA OU IMPLANTAÇÃO === */}
{active !== "plantas" && active !== "implantacao" && (
  <Swiper
    modules={[Navigation]}
    navigation
    slidesPerView={1}
    spaceBetween={30}
    className={styles.swiper}
  >
    {slides.map((group, index) => (
      <SwiperSlide key={index}>
        <div className={styles.grid}>
          {group.map((img, idx) => (
            <a
              key={idx}
              href={img.src}
              data-fancybox={active}
              data-caption={img.caption}
              className={styles.item}
            >
              <Image src={img.src} alt={img.caption} width={1200} height={900} />
            </a>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)}

{/* === SE FOR PLANTA OU IMPLANTAÇÃO === */}
{(active === "plantas" || active === "implantacao") && (
  <Swiper
    modules={[Navigation]}
    navigation
    slidesPerView={1}
    spaceBetween={30}
    className={styles.swiper}
  >
    {slides.map((group, index) => (
      <SwiperSlide key={index}>
        <div className={`${styles.grid} ${styles.gridPlantas}`}>
          {group.map((img, idx) => (
            <div key={idx} className={styles.itemWrapper}>
              <a
                href={img.src}
                data-fancybox={active}
                data-caption={img.caption}
                className={styles.item}
              >
                <Image src={img.src} alt={img.caption} width={1200} height={900} />
              </a>

              {/* Legenda apenas em plantas */}
              {active === "plantas" && (
                <div className={styles.caption}>
                  <hr />
                  <p>{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)}
      <div className={`botao ${styles.botao}`}>
        <button className={styles.btnContato} onClick={handleScroll}>
          Quero conhecer
        </button>                
      </div>
    </div>
  );
};
