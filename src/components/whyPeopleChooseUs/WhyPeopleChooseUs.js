import React, { useState, useEffect } from "react";
import "./whyPeopleChooseUs.scss";
import img from "../../images/profile.jpg";

function WhyPeopleChooseUs() {
  return (
    <div className="infoRowChooseUs">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">
            He aquí por qué la gente elige trabajar con ITechflux
          </h1>
          <p className="subtitleChooseUs">
            Lo tratamos como un socio y nos basamos en su visión mostrándole
            nuevas posibilidades y alternativas que se adaptan mejor a usted.
          </p>
          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">Productividad</div>
            <div className="itemDescriptionChooseUs">
              Con un equipo experimentado y talentoso, puede construir
              exactamente lo que necesita.
            </div>
          </div>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">
              100% de garantía de satisfacción
            </div>
            <div className="itemDescriptionChooseUs">
              Su satisfacción es nuestra primera prioridad. Si tiene alguna
              inquietud sobre su projecto, estamos aquí para resolverla de todas
              las formas posibles con flexibilidad.
            </div>
          </div>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">Comunicación 24/7 </div>
            <div className="itemDescriptionChooseUs">
              Siempre estamos ahí para usted a través de correo electrónico,
              llamada o Skype.
            </div>
          </div>
        </div>
      </div>
      <div className="infoColumnChooseUs">
        <div className="imgWrapperChooseUs">
          <img className="imgChooseUs" src={img} alt={""} />
          <div className="infoColumnDescriptionChooseUs">
            ¡Comienza tu proyecto ahora mismo! El tiempo es la esencia. Hablemos
            hoy y veamos qué podemos hacer con su visión.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyPeopleChooseUs;
