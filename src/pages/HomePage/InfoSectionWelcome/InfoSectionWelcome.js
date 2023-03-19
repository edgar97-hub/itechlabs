import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "../InfoSection.elements";
import { Subscription, SubText, Form, FormInput } from "../elements";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./InfoSectionWelcome.scss";
// import { particleNet } from "./particle.js";
// import * as service from "./particle";
import { startCanvas } from "./particle2";

function InfoSectionWelcome({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
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
        <div className="wrapper">
          <div className="infoRow">
            <div className="infoColumn">
              <div className="textWrapper">
                <div className="topLine">{topLine}</div>
                <h1 className="heading">{headline}</h1>
                <p className="subtitle">{description}</p>
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
                <img className="img" src={img} alt={alt} />
              </div>
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
