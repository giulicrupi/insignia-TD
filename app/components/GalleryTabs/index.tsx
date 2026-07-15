"use client";

import { useEffect, useState } from "react";
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
import DecorativeLine from "../decorLine";
import VillaArvosShape from "../Elemento";

interface ImgData {
  src: string;
  caption: string;
}

export const GalleryTabs = () => {
  const tabs = [
    { id: "areas", label: "ÁREAS COMUNS" },
    { id: "fachadas", label: "FACHADAS" },
    { id: "apartamentos", label: "APARTAMENTOS" },
    { id: "decorado", label: "DECORADO" },
    { id: "plantas", label: "PLANTAS" },
    // { id: "implantacao", label: "IMPLANTAÇÃO" },
  ];

  const [active, setActive] = useState("areas");
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    check();

    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  // Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, [active]);

  // === GALERIAS ===
  const galleryData: Record<string, ImgData[]> = {
    fachadas: [
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__9.jpg",
        caption: "Fotomontagem da vista com a perspectiva da Fachada",
      },      
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__7.jpg",
        caption: "Perspectiva ilustrada da Portaria",
      },
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__8.jpg",
        caption: "Perspectiva ilustrada da Fachada",
      },

      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__10.jpg",
        caption: "Fotomontagem da vista com a perspectiva da Fachada",
      },
    ],

    apartamentos: [
       {
        src: "/images/galerias/aptos/Captura_de_tela__2025-01-08__3.jpg",
        caption: "Perspectiva ilustrada do Living ampliado com dois terraços do apartamento de 192m²",
      },     
      {
        src: "/images/galerias/aptos/Captura_de_tela__2025-01-08__2.jpg",
        caption: "Perspectiva ilustrada da Suíte do apartamento de 192m²",
      },      
      {
        src: "/images/galerias/aptos/Captura_de_tela__2025-01-08__1.jpg",
        caption: "Perspectiva ilustrada do Living com terraço do apartamento de 178m²",
      },
      {
        src: "/images/galerias/aptos/Captura_de_tela__2025-01-08__21.jpg",
        caption: "Perspectiva ilustrada do Living com terraço do apartamento de 130m²",
      },         


   
      
    ],

    areas: [
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__12.jpg",
        caption: "Perspectiva ilustrada do Hall Social",
      },      
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__18.jpg",
        caption: "Perspectiva ilustrada do Salão de festas",
      },      

      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__11.jpg",
        caption: "Perspectiva ilustrada do Espaço gourmet e Churrasqueira",
      },      

      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__5.jpg",
        caption: "Perspectiva ilustrada do Coliving",
      },
    //  {
    //     src: "/images/galerias/areas/Captura_de_tela__2025-01-08__19.jpg",
    //     caption: "Perspectiva ilustrada da Piscina",
    //   },  
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__15.jpg",
        caption: "Perspectiva ilustrada da Praça do pôr do sol",
      },         
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__20.jpg",
        caption: "Perspectiva ilustrada do Fitness | Vista",
      },       
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__6.jpg",
        caption: "Perspectiva ilustrada do Bem-Estar | Mirante",
      },
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__14.jpg",
        caption: "Perspectiva ilustrada da Sala de massagem",
      },
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__17.jpg",
        caption: "Perspectiva ilustrada da Quadra recreativa",
      },
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__13.jpg",
        caption: "Perspectiva ilustrada do Salão de jogos Teen",
      },   
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__4.jpg",
        caption: "Perspectiva ilustrada da Brinquedoteca",
      },      
      {
        src: "/images/galerias/areas/Captura_de_tela__2025-01-08__16.jpg",
        caption: "Perspectiva ilustrada do Playground",
      },               







 

  
    ],

    decorado: [
      {
        src: "/images/galerias/decorado/adfoto_9547.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9564.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9570.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9603.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9615.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9622.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9631.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9638.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9645.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9648.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9713.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9747.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9768.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9779.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9782.jpg",
        caption: "Foto do Decoradoo",
      },
      {
        src: "/images/galerias/decorado/adfoto_9791.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9815.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9842.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9854.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9875.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9881.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9894.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9910.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9925.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9938.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9946.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9958.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9965.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/adfoto_9967.jpg",
        caption: "Foto do Decorado",
      },
      {
        src: "/images/galerias/decorado/Drive_ISGAL.jpg",
        caption: "Foto do Decorado",
      },
    ],

    plantas: [
      {
        src: "/images/galerias/plantas/PranchasPlantas.jpg",
        caption: "",
      },
      {
        src: "/images/galerias/plantas/PranchasPlantas2.jpg",
        caption: "",
      },
      {
        src: "/images/galerias/plantas/PranchasPlantas3.jpg",
        caption: "",
      },
      {
        src: "/images/galerias/plantas/PranchasPlantas4.jpg",
        caption: "",
      },
      {
        src: "/images/galerias/plantas/PranchasPlantas5.jpg",
        caption: "",
      },
      {
        src: "/images/galerias/plantas/PranchasPlantas6.jpg",
        caption: "",
      },
    ],

    // implantacao: [
    //   {
    //     src: "/images/infinity/galeria/implantacao.jpg",
    //     caption: "",
    //   },
    // ],
  };

  // Agrupa em páginas de 7 imagens
  const pages = (images: ImgData[]): ImgData[][] => {
    const result: ImgData[][] = [];

    for (let index = 0; index < images.length; index += 7) {
      result.push(images.slice(index, index + 7));
    }

    return result;
  };

  // Usado somente em Áreas, Decorados, Plantas e Implantação
  const slides: ImgData[][] =
    active === "plantas" || active === "implantacao" || isMobile
      ? galleryData[active].map((image) => [image])
      : pages(galleryData[active]);

  const handleScroll = () => {
    const customWindow = window as typeof window & {
      lenis?: {
        scrollTo: (
          target: string,
          options: {
            offset: number;
            duration: number;
            easing: (value: number) => number;
          },
        ) => void;
      };
    };

    customWindow.lenis?.scrollTo("#contato", {
      offset: 0,
      duration: 1.2,
      easing: (value: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * value)),
    });
  };

  return (
    <div className={styles.galleryWrapper} id="galeria">
        <VillaArvosShape
        style={{
            width: "100%",
            height: "auto",
            display: "block",
        }}
        className={styles.elemento}
        />
              
      <DecorativeLine
          color="#5d4e2f"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          className={styles.linha}
        />
      <div className={styles.conjuntoTabs}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${
                active === tab.id ? styles.active : ""
              }`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ÁREAS COMUNS E DECORADOS */}
      {active !== "fachadas" &&
        active !== "apartamentos" &&
        active !== "plantas" &&
        active !== "implantacao" && (
          <Swiper
            key={active}
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={30}
            className={styles.swiper}
          >
            {slides.map((group, index) => (
              <SwiperSlide key={`${active}-${index}`}>
                <div className={styles.grid}>
                  {group.map((image, imageIndex) => (
                    <a
                      key={`${image.src}-${imageIndex}`}
                      href={image.src}
                      data-fancybox={active}
                      data-caption={image.caption}
                      className={styles.item}
                    >
                      <Image
                        src={image.src}
                        alt={
                          image.caption ||
                          `Imagem da galeria ${active} ${imageIndex + 1}`
                        }
                        width={1200}
                        height={900}
                      />
                    </a>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

      {/* FACHADAS E APARTAMENTOS */}
      {(active === "fachadas" || active === "apartamentos") && (
        <Swiper
          key={active}
          modules={[Navigation]}
          navigation
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
            },
            981: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
          }}
          className={`${styles.swiper} ${styles.swiperFachadas}`}
        >
          {galleryData[active].map((image, index) => (
            <SwiperSlide key={`${image.src}-${index}`}>
              <a
                href={image.src}
                data-fancybox={active}
                data-caption={image.caption}
                className={styles.itemFachada}
              >
                <Image
                  src={image.src}
                  alt={
                    image.caption ||
                    `${
                      active === "fachadas" ? "Fachada" : "Apartamento"
                    } ${index + 1}`
                  }
                  width={1200}
                  height={900}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* PLANTAS E IMPLANTAÇÃO */}
      {(active === "plantas" || active === "implantacao") && (
        <Swiper
          key={active}
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={30}
          className={styles.swiper}
        >
          {slides.map((group, index) => (
            <SwiperSlide key={`${active}-${index}`}>
              <div className={`${styles.grid} ${styles.gridPlantas}`}>
                {group.map((image, imageIndex) => (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className={styles.itemWrapper}
                  >
                    <a
                      href={image.src}
                      data-fancybox={active}
                      data-caption={image.caption}
                      className={styles.item}
                    >
                      <Image
                        src={image.src}
                        alt={
                          image.caption ||
                          `Imagem da galeria ${active} ${imageIndex + 1}`
                        }
                        width={1200}
                        height={900}
                      />
                    </a>

                    {active === "plantas" && (
                      <div className={styles.caption}>
                        <hr />
                        <p>{image.caption}</p>
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
        <button
          type="button"
          className={styles.btnContato}
          onClick={handleScroll}
        >
          Quero conhecer
        </button>
      </div>
    </div>
  );
};