import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, SoftwareServices } from "../../components";
import InfoSectionWelcome from "./InfoSectionWelcome/InfoSectionWelcome";
import Contact from "../../components/contact/Contact";

function Home() {
  return (
    <div id="home">
      <InfoSectionWelcome />
      <SoftwareServices />
      {/* <InfoSection {...homeObjFour} /> */}
      <Contact />
    </div>
  );
}

export default Home;
