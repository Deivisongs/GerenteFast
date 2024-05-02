import style from "./SectionFacilidades.module.css";

export default function SectionFacilidades() {
  return (
    <section className={style.sectionMain}>
      <section className={style.sectionPrincipal}>
        <div className={style.divTitle}>
          <h2>Mais Facilidade</h2>
          <hr />
        </div>
        <div className={style.divCards}>
          <div className={style.card}>
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">language</span>
            </div>
            <h3>Inovação</h3>
            <p>
              Aposente o caderno bagunçado, Tenha anotações mais organizadas e
              Seguras.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">devices</span>
            </div>
            <h3>Multiplataforma</h3>
            <p>
              Faça seu gerenciamento pelo Celular, Tablet, Notebook e
              Computador.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">
                sentiment_very_satisfied
              </span>
            </div>
            <h3>Fácil Acesso</h3>
            <p>
              O sistema conta com uma interface intuitiva e de fácil utilização.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
