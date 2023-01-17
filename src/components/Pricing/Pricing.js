import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingCardCustom
} from './Pricing.elements';

function Pricing() {
  return (
    <div id="services">
      <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }} >
        <PricingSection>
          <PricingWrapper>
            <PricingHeading>Nuestros servicios de desarrollo de software</PricingHeading>
            <PricingContainer>
              <PricingCardCustom href="#contact">
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiRock />
                  </PricingCardIcon>
                  <PricingCardPlan>Aplicaciones web</PricingCardPlan>
                  <PricingCardLength>desarrollamos aplicaciones web centradas en el cliente que brindan resultados comerciales como mayor rentabilidad, optimización de procesos comerciales, atracción de nuevos clientes, reducción del tiempo de comercialización y más</PricingCardLength>

                  {/** <PricingCardCost>$99.99</PricingCardCost>
                  <PricingCardLength>per month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>100 New Users</PricingCardFeature>
                    <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                    <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                  </PricingCardFeatures>
                  */}

                  <Button primary>Empezar</Button>
                </PricingCardInfo>
              </PricingCardCustom>
              <PricingCardCustom href="#contact">
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiCrystalBars />
                  </PricingCardIcon>
                  <PricingCardPlan>Aplicaciones móviles</PricingCardPlan>
                  <PricingCardLength>La experiencia de nuestro equipo interno se dedica a desarrollar aplicaciones móviles que hagan crecer su negocio. todo nuestro trabajo es el resultado de una investigación continua, una creatividad incansable y una ejecución escrupulosa</PricingCardLength>
                  {/** 
                  <PricingCardCost>$299.99</PricingCardCost>
                  <PricingCardLength>per month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>1000 New Users</PricingCardFeature>
                    <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                    <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                  </PricingCardFeatures>
                  */}
                  <Button primary>Empezar</Button>
                </PricingCardInfo>
              </PricingCardCustom>
              <PricingCardCustom href="#contact">
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiCrystalBars />
                  </PricingCardIcon>
                  <PricingCardPlan>Aplicaciones de escritorio</PricingCardPlan>
                  <PricingCardLength>Con nosotros, su próximo producto ganador del mercado estará en buenas manos porque contamos con todas las capacidades internas, incluidos analistas, arquitectos, especialistas en UX/UI, ingenieros y control de calidad para tener éxito en tales proyectos.</PricingCardLength>
                  {/** 
                  <PricingCardCost>$999.99</PricingCardCost>
                  <PricingCardLength>per month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Unlimited Users</PricingCardFeature>
                    <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                    <PricingCardFeature>24/7 Support</PricingCardFeature>
                  </PricingCardFeatures>
                  */}
                  <Button primary>Empezar</Button>
                </PricingCardInfo>
              </PricingCardCustom>
            </PricingContainer>
          </PricingWrapper>
        </PricingSection>
      </IconContext.Provider>
    </div>

  );
}
export default Pricing;
