import {
  SoftwareServices,
  WhyPeopleChooseUs,
  Contact,
  Footer,
} from "../../components";
import InfoSectionWelcome from "./InfoSectionWelcome/InfoSectionWelcome";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      <InfoSectionWelcome />
      <SoftwareServices />
      <WhyPeopleChooseUs />
      <Contact />
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=51951954633&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20software."
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}

export default Home;
