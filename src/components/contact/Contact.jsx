import React, { useState, useEffect } from "react";
import "./contact.scss";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        telephone: telephone,
        message: message,
      });
      alert("Tu mensaje ha sido enviado");
    } catch (error) {
      alert(error);
      console.log(error);
    }
    setLoader(false);

    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
  };

  return (
    <div className="wrapper-form" id="contact">
      <h1 className="title">Como podemos ayudarte?</h1>
      <div className="subtitle">
        Póngase en contacto con nosotros y con gusto le responderemos lo antes
        posible. Si necesita un equipo profesional, ITechLabs estará encantado
        de ayudarle a hacer realidad su visión.
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label>Nombre*</label>
          <input
            // placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email*</label>
          <input
            // placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Teléfono*</label>
          <input
            // placeholder="Teléfono"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="form-message">
          <label>Cuentanos más sobre tu proyecto*</label>
          <textarea
            className="message"
            // placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="form-button"
          style={{ background: loader ? "#ccc" : " rgb(29, 110, 202)" }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
