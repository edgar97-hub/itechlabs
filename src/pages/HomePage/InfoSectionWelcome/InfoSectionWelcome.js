import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./InfoSectionWelcome.scss";
// import { particleNet } from "./particle.js";
// import * as service from "./particle";
import { startCanvas } from "./particle2";
import logo from "../../../images/svg-1.svg";

function InfoSectionWelcome() {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    addDoc(collection(db, "contacts"), {
      email: email,
    })
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");
  };
  useEffect(() => {
    var canvas = document.getElementById("nokey");
    var can_w = parseInt(canvas?.getAttribute("width"));
    var can_h = parseInt(canvas?.getAttribute("height"));
    console.log(canvas, can_w, can_h);
    if (canvas && can_w && can_h) {
      startCanvas();
    }
  }, []);
  return (
    <div id="particle-canvas">
      <canvas id="nokey" width="800" height="800"></canvas>
      <div className="infoSec">
        <div className="infoRow">
          <div className="infoColumn">
            <div className="textWrapper">
              <div className="topLine"></div>
              <h1 className="heading">
                Empresa líder en desarrollo de Software
              </h1>
              <p className="subtitle">
                Brindamos experiencias de aplicaciones móviles que hacen que su
                aplicación móvil sea tendencia en las tiendas de aplicaciones.
              </p>
              {/** <Link to='/contact'>
                 <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>*/}
              {/* <section className="subscription"> */}
              {/** <SubText>Puedes darte de baja en cualquier momento.</SubText>*/}
              <form className="formSubscription" onSubmit={handleSubmit}>
                <input
                  className="formInput"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <button
                  className="formButton"
                  style={{
                    background: loader ? "#ccc" : " rgb(29, 110, 202)",
                  }}
                >
                  Empezar
                </button>
              </form>
              {/* </section> */}
            </div>
          </div>
          <div className="infoColumn">
            <div className="imgWrapper">
              <img className="img" src={logo} alt={""} />
            </div>
          </div>
        </div>
      </div>

      {/* <InfoSec lightBg={lightBg}> */}

      {/* </InfoSec> */}
    </div>
  );
}

export default InfoSectionWelcome;
