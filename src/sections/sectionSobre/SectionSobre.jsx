import style from "./SectionSobre.module.css";

//imagens
import seta from "../../assets/seta.png";

export default function SectionSobre() {
  return (
    <section className={style.sectionMain}>
      <section className={style.sectionPrincipal}>
        <div className={style.divTitle}>
          <h2 id="sobre">Sobre Nós</h2>
          <hr />
        </div>
        <div className={style.divHistoria}>
          <div>
            <span className="material-symbols-outlined">lightbulb</span>
            <p>
              A <strong>GerenteFast</strong> surgiu em 07/04/2024 da visão do
              seu fundador, Deivison Gonçalves, que identificou uma necessidade
              premente de inovação na gestão de pequenas lojas e comércios.
            </p>
          </div>
          <img src={seta} alt="seta para baixo" />
          <div>
            <span className="material-symbols-outlined">bolt</span>
            <p>
              Movido por essa percepção, Deivison concebeu a ideia de
              desenvolver um sistema que fosse não apenas rápido, eficiente e
              fácil de usar, mas também capaz de atender às demandas dinâmicas
              desse segmento.
            </p>
          </div>
          <img src={seta} alt="seta para baixo" />
          <div>
            <span className="material-symbols-outlined">apartment</span>
            <p>
              Desse impulso empreendedor, nasceu a <strong>GerenteFast</strong>,
              uma solução concebida para simplificar e otimizar a administração
              desses estabelecimentos, promovendo uma gestão mais ágil e
              assertiva.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
