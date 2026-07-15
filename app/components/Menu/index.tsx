"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Styled.module.scss";

export const Menu = () => {
  const [active, setActive] = useState(false);

  // Detectar scroll do Lenis (ativa header scrolled)
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    const update = ({ scroll }: { scroll: number }) => {
      setActive(scroll > 100);
    };

    lenis.on("scroll", update);

    return () => {
      lenis.off("scroll", update);
    };
  }, []);

  // 🚀 SCROLL SUAVE COM LENIS
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const lenis = (window as any).lenis;

    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80, // ajuste caso o header cubra o topo
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // curva suave
      });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // FECHAR MENU MOBILE AUTOMATICAMENTE
    const navbar = document.getElementById("mainNavbar");
    if (navbar && navbar.classList.contains("show")) {
      const collapse = new (window as any).bootstrap.Collapse(navbar);
      collapse.hide();
    }
  };

  return (
    <header className={`${styles.header} ${active ? styles.scrolled : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className={`container ${styles.container}`}>

          {/* LOGO */}
          <Link className="navbar-brand" href="#home" onClick={handleSmoothScroll}>
            <Image
              className={styles.logoMenu}
              src="/images/logo_insignia.svg"
              alt="insignia"
              width={300}
              height={50}
            />
          </Link>

          {/* BOTÃO MOBILE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#home" onClick={handleSmoothScroll}>
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#galeria" onClick={handleSmoothScroll}>
                  GALERIA
                </Link>
              </li>



              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#diferenciais" onClick={handleSmoothScroll}>
                  DIFERENCIAIS
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#tour" onClick={handleSmoothScroll}>
                  TOUR VIRTUAL
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#localizacao" onClick={handleSmoothScroll}>
                  LOCALIZAÇÃO
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#ficha" onClick={handleSmoothScroll}>
                  FICHA TÉCNICA
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="#contato" onClick={handleSmoothScroll}>
                  CONTATO
                </Link>
              </li>
{/* 
              <li className={`nav-item ${styles.dourado}`}>
                <Link className={`nav-link ${styles.link}`} href="#contato" onClick={handleSmoothScroll}>
                  SAIBA MAIS
                </Link>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
