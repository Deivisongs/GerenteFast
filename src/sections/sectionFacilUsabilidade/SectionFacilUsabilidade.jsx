import style from "./SectionFacilUsabilidade.module.css";

import imgFacilidade from "../../assets/imgBannerFacilidade.png";

export default function SectionFacilUsabilidade() {
  return (
    <section className={style.sectionMain}>
      <section className={style.sectionPrincipal}>
        <div className={style.divLeft}>
          <h2>Fácil Usabilidade</h2>
          <p>
            Nós te entregamos um sistema <strong>intuitivo</strong> e de{" "}
            <strong>fácil</strong> acesso para todas as idades.
          </p>
          <div className={style.divMensagem}>
            <span className="material-symbols-outlined">chat</span>
            <p>Nos preocupamos com sua equipe!!!</p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=5531995882112&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20GerenteFast"
                target="_blank"
                rel="noreferrer">Entre em contato conosco</a>
        </div>
        <div className={style.divRigth}>
          <img src={imgFacilidade} alt="Imagem senhor mexendo no tablet" />
        </div>
      </section>
    </section>
  );
}
