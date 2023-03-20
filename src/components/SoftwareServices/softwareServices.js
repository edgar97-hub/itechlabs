import React from "react";
import "./softwareServices.scss";

function softwareServices() {
  return (
    <div id="services">
      <div className="wrapperTitle">
        <h1 className="title">Nuestros servicios</h1>
        <div className="subtitle">
          Desarrollamos sobre todas las plataformas tecnológicas líderes para
          brindarle una amplia gama de servicios.
        </div>
      </div>
      <div className="service">
        <div className="serviceImg"></div>
        <h2 className="title">Aplicaciones web</h2>
        <p className="description">
          Desarrollamos aplicaciones web centradas en el cliente que brindan
          resultados comerciales como mayor rentabilidad, optimización de
          procesos comerciales, atracción de nuevos clientes, reducción del
          tiempo de comercialización y más
        </p>
        <div className="moreService">Saber más</div>
      </div>
      <div className="service">
        <div className="serviceImg"></div>
        <h2 className="title">Aplicaciones móviles</h2>
        <p className="description">
          La experiencia de nuestro equipo interno se dedica a desarrollar
          aplicaciones móviles que hagan crecer su negocio. todo nuestro trabajo
          es el resultado de una investigación continua, una creatividad
          incansable y una ejecución escrupulosa
        </p>
        <div className="moreService">Saber más</div>
      </div>
      <div className="service">
        <div className="serviceImg"></div>
        <h2 className="title">Aplicaciones de escritorio</h2>
        <p className="description">
          Con nosotros, su próximo producto ganador del mercado estará en buenas
          manos porque contamos con todas las capacidades internas, incluidos
          analistas, arquitectos, especialistas en UX/UI, ingenieros y control
          de calidad para tener éxito en tales proyectos.
        </p>
        <div className="moreService">Saber más</div>
      </div>
    </div>
  );
}
export default softwareServices;
