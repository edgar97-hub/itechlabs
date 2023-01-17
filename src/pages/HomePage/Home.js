import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import InfoSectionCustom  from './InfoSectionCustom';
import Contact from "../../components/contact/Contact";
 

function Home() {
  return (
    <div id="home">
    
      <InfoSectionCustom {...homeObjOne} />
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
