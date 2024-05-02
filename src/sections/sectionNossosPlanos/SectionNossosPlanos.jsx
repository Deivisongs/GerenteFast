import style from "./SectionNossosPlanos.module.css";

export default function SectionNossosPlanos() {
  return (
    <section className={style.sectionMain}>
      <section className={style.sectionPrincipal}>
        <div className={style.divTitle}>
          <h2 id="planos">Nossos Planos</h2>
          <hr />
        </div>
        <div className={style.divPlanos}>
          <div className={style.card}>
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <h3>Basic</h3>
            <p>Ideal para empresas de pequeno porte.</p>
            <div className={style.divBeneficios}>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Implantação e Treinamento.</p>
              </li>
              <li className={style.iconClose}>
                <span className="material-symbols-outlined">close</span>
                <p>Suporte Via Chat.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Armazenado Localmente.</p>
              </li>
              <li className={style.iconClose}>
                <span className="material-symbols-outlined">close</span>
                <p>Backups semanais.</p>
              </li>
              <li className={style.iconClose}>
                <span className="material-symbols-outlined">close</span>
                <p>Acesso Via internet.</p>
              </li>
              <li className={style.iconClose}>
                <span className="material-symbols-outlined">close</span>
                <p>Acesso Multiplataforma.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Pagamento unico.</p>
              </li>
              <li className={style.iconClose}>
                <span className="material-symbols-outlined">close</span>
                <p>0 Funçoes exclusivas.</p>
              </li>
            </div>

            <div className={style.divPreco}>
              <div className={style.divPromo}>
                <p>R$59,90</p>
                <hr />
              </div>

              <div className={style.preco}>
                <p className={style.pFixo}>R$</p>
                <p className={style.pPreco}>49,90</p>
                <p className={style.pFixo}></p>
              </div>
            </div>

            <a href="https://pag.ae/7-uud7GM3" target="_blank">Contratar</a>
          </div>
          <div className={style.card} id={style.cardPrincipal}>
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <h3>Prata</h3>
            <p>Ideal para empresas de pequeno e médio porte.</p>
            <div className={style.divBeneficios}>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Implantação e Treinamento.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Suporte Via Chat.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>100GB de Armazenamento SSD.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Backups semanais.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Acesso Via internet.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Acesso Multiplataforma.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Sistema sempre atualizado.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>1 Função exclusiva.</p>
              </li>
            </div>

            <div className={style.divPreco}>
              <div className={style.divPromo}>
                <p>R$89,90</p>
                <hr />
              </div>

              <div className={style.preco}>
                <p className={style.pFixo}>R$</p>
                <p className={style.pPreco}>69,90</p>
                <p className={style.pFixo}>/Mês</p>
              </div>
            </div>

            <a href="https://pag.ae/7-uufnQEq" target="_blank">Contratar</a>
          </div>
          <div className={style.card}>
            <div className={style.divIcon}>
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <h3>Ouro</h3>
            <p>Ideal para empresas de médio e grande porte.</p>
            <div className={style.divBeneficios}>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Implantação e Treinamento.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Suporte Via Chat.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>200GB de Armazenamento SSD.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Backups semanais.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Acesso Via internet.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Acesso Multiplataforma.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>Sistema sempre atualizado.</p>
              </li>
              <li>
                <span className="material-symbols-outlined">check</span>
                <p>3 Funções exclusivas.</p>
              </li>
            </div>

            <div className={style.divPreco}>
              <div className={style.divPromo}>
                <p>R$119,90</p>
                <hr />
              </div>

              <div className={style.preco}>
                <p className={style.pFixo}>R$</p>
                <p className={style.pPreco}>89,90</p>
                <p className={style.pFixo}>/Mês</p>
              </div>
            </div>

            <a href="https://pag.ae/7-uugnyjr" target="_blank">Contratar</a>
          </div>
        </div>
      </section>
    </section>
  );
}
