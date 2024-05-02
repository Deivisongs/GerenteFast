import style from "./footer.module.css";

//imagens
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import foto from "../../assets/deivison.png";
import logobranco from "../../assets/logoBranco.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.divTop}>
        <div className={style.divRedesSociais}>
          <h3>Siga-nos nas Redes sociais.</h3>
          <div>
            <a
              href="https://www.instagram.com/deivvisonn/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="imagem logo instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/deivison-gon%C3%A7alves-62b23523a/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="imagem logo linkedin" />
            </a>
          </div>
        </div>
        <div className={style.divCard}>
          <img src={foto} alt="" />
          <div>
            <h4>Deivison Gonçalves</h4>
            <p>CEO Fundador</p>
            <hr />
            <div className="divRedes">
              <p>Siga as Redes Sociais</p>
              <div>
                <a
                  href="https://www.instagram.com/deivvisonn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="imagem logo instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deivison-gon%C3%A7alves-62b23523a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="imagem logo linkedin" />
                </a>
                <a
                  href="https://github.com/Deivisongs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="imagem logo github" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.divLogo}>
          <img src={logobranco} alt="logo GerenteFast" />
          <p>GerenteFast</p>
        </div>
      </div>

      <p>© 2024 GerenteFast | Todos os Direitos Reservados.</p>
    </footer>
  );
}
