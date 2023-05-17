import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./InfoSectionWelcome.scss";
import { startCanvas } from "./particle2";
import logo from "../../../images/svg-1.svg";
import { NotificationManager } from "react-notifications";

function InfoSectionWelcome() {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Ingrese tu correo electrónico");
      return false;
    }
    setLoader(true);

    try {
      await addDoc(collection(db, "contacts"), {
        email: email,
      });
      alert("Tu correo ha sido enviado");
    } catch (error) {
      alert(error);
      console.log(error);
    }
    setLoader(false);
    setEmail("");
  };
  useEffect(() => {
    var canvas = document.getElementById("nokey");
    var can_w = parseInt(canvas?.getAttribute("width"));
    var can_h = parseInt(canvas?.getAttribute("height"));

    if (canvas && can_w && can_h) {
      // canvas.setAttribute("width", window.innerWidth);
      // canvas.setAttribute("height", window.innerHeight);
      // console.log("width", window.innerWidth);
      // console.log("height", window.innerHeight);
      // var dataUrl = canvas.toDataURL();
      // console.log(dataUrl);
      // document.querySelector(".infoSec").style.background =
      // "url(" + dataUrl + ")";

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
              <h1 className="heading">Desarrollo de software a la medida</h1>
              <p className="subtitle">
                Experimente el desarrollo ágil de productos de clase mundial
              </p>
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
            </div>
          </div>
          {/* <div className="infoColumn">
            <div className="imgWrapper">
              <img className="img" src={logo} alt={""} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InfoSectionWelcome;
