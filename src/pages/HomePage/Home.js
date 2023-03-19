import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import InfoSectionWelcome from "./InfoSectionWelcome/InfoSectionWelcome";
import Contact from "../../components/contact/Contact";




function Home() {
  return (
    <div id="home">
      <InfoSectionWelcome {...homeObjOne} />
      {/** <InfoSection {...homeObjOne} />*/}
      <InfoSection {...homeObjThree} />
      {/** <InfoSection {...homeObjTwo} />*/}
      <Pricing />
      <InfoSection {...homeObjFour} />
      <Contact />
    </div>
  );
}

export default Home;
