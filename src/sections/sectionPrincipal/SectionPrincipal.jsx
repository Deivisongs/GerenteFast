import React, { useState, useEffect } from "react";

import style from "./SectionPrincipal.module.css";

// imagens
import logo from "../../assets/logo.png";
import imgBanner from "../../assets/imgBannerPrincipal.png";

export default function SectionPrincipal() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scroll > 100) {
      let btnInicio = document.getElementById("btnInicio");
      btnInicio.style.display = "flex";
    } else {
      let btnInicio = document.getElementById("btnInicio");
      btnInicio.style.display = "none";
    }
  }, [scroll]);
  // função fecha a nav na hora que aperta no link
  function fechaNav() {
    let nav = document.getElementById("nav");
    if (window.innerWidth < 940) {
      nav.style.display = "none";
    }
  }

  return (
    <section className={style.sectionMain}>
      <a href="#inicio" className={style.btnInicio} id="btnInicio">
        <span className="material-symbols-outlined">expand_less</span>
      </a>
      <section className={style.sectionPrincipal}>
        <header className={style.header} id="inicio">
          <div className={style.divLogo}>
            <a href="#">
              <img src={logo} alt="imagem logo" />
              <p>
                Gerente<strong>Fast</strong>
              </p>
            </a>
          </div>
          <button
            onClick={() => {
              let nav = document.getElementById("nav");

              if (nav.style.display !== "flex") {
                nav.style.display = "flex";
              } else {
                nav.style.display = "none";
              }
            }}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <nav className={style.nav} id="nav">
            <li className={style.btnClose}>
              <button
                className={style.btnClose}
                onClick={() => {
                  let nav = document.getElementById("nav");
                  nav.style.display = "none";
                }}
              >
                <span className="material-symbols-outlined">expand_less</span>
                <p>Fechar</p>
              </button>
            </li>
            <li>
              <a href="#sobre" onClick={fechaNav}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#planos" onClick={fechaNav}>
                Planos
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5531995882112&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20GerenteFast"
                target="_blank"
                rel="noreferrer">Contato</a>
            </li>
            <li className={style.sac}>
              <a href="https://api.whatsapp.com/send?phone=5531995882112&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20GerenteFast"
                target="_blank"
                rel="noreferrer">
                <span className="material-symbols-outlined">call</span>
                Suporte
              </a>
            </li>
          </nav>
        </header>
        <div className={style.bannerPrincipal}>
          <h1>
            Uma Gestão Facilitada para <strong>Sua Empresa.</strong>
          </h1>
          <div className={style.divLogos}>
            <img
              src={logo}
              alt="imagem logo giratoria"
              className={style.logoSolto}
              id={style.logoA}
            />
            <img
              src={logo}
              alt="imagem logo giratoria"
              className={style.logoSolto}
              id={style.logoB}
            />
            <img
              src={logo}
              alt="imagem logo giratoria"
              className={style.logoSolto}
              id={style.logoC}
            />
            <img src={imgBanner} className={style.imgBanner} alt="imagem grande banner" />
          </div>
        </div>
      </section>
    </section>
  );
}
