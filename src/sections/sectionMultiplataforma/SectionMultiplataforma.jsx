import style from "./SectionMultiplataforma.module.css";

import sistema from "../../assets/sistema.png";

export default function SectionMultiplataforma() {
  return (
    <section className={style.sectionMain}>
      <section className={style.sectionPrincipal}>
        <div className={style.divLeft}>
          <h2>Sistema Multiplataforma</h2>
          <p>
            Use a<strong> qualquer hora </strong>e em{" "}
            <strong>qualquer lugar.</strong>
          </p>
          <div className={style.divMensagem}>
            <span className="material-symbols-outlined">devices</span>
            <p>Controle de onde você estiver!!!</p>
          </div>
        </div>
        <div className={style.divRigth}>
          <img src={sistema} alt="Imagem do sistema" />
        </div>
      </section>
    </section>
  );
}
