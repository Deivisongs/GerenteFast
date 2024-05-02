import "./styles.css";

import SectionPrincipal from "./sections/sectionPrincipal/SectionPrincipal.jsx";
import SectionFacilidades from "./sections/sectionFacilidades/SectionFacilidades.jsx";
import SectionFuncoes from "./sections/sectionFuncoes/SectionFuncoes.jsx";
import SectionFacilUsabilidade from "./sections/sectionFacilUsabilidade/SectionFacilUsabilidade.jsx";
import SectionNossosPlanos from "./sections/sectionNossosPlanos/SectionNossosPlanos.jsx";
import SectionMultiplataforma from "./sections/sectionMultiplataforma/SectionMultiplataforma.jsx";
import SectionSobre from "./sections/sectionSobre/SectionSobre.jsx";
import Footer from "./sections/footer/Footer.jsx";

export default function App() {
  return (
    <div className="App">
      <SectionPrincipal />
      <SectionFacilidades />
      <SectionFuncoes />
      <SectionMultiplataforma />
      <SectionFacilUsabilidade />
      <SectionNossosPlanos />
      <SectionSobre />
      <Footer />
    </div>
  );
}
