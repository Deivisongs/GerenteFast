import style from "./SectionFuncoes.module.css";

// imagens
import imagemMuher from "../../assets/imgBannerFuncoes.png";

export default function SectionFuncoes() {
  return (
    <section className={style.sectionMain}>
      <section className={style.sectionPrincipal}>
        <div className={style.divLeft}>
          <img src={imagemMuher} alt="imagem funções exclusivas" />
        </div>
        <div className={style.divRigth}>
          <h2>Funções Exclusivas</h2>
          <p>
            Desenvolvemos até 5 funções exclusivas pra você{" "}
            <strong>Gratuitamente!!!</strong>
          </p>
          <div className={style.divMensagem}>
            <span className="material-symbols-outlined">verified</span>
            <p>Um sistema que se adapta a sua necessidade.</p>
          </div>
          <div className={style.divButton}>
            <a href="https://api.whatsapp.com/send?phone=5531995882112&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20GerenteFast"
                target="_blank"
                rel="noreferrer">Falar com representante</a>
            <p>Verifique os planos que oferecem essa proposta</p>
          </div>
        </div>
      </section>
    </section>
  );
}
