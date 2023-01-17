import React, { useState, useEffect } from "react";
import "./contact.scss";
import { db } from "../../firebase";
import {collection,getDocs,deleteDoc,doc,getDoc,onSnapshot,query, where, setDoc,addDoc} from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoader(true);
    addDoc(collection(db, "contacts"),{
        name: name,
        email: email,
        telephone: telephone,
        message: message,
    }).then(() => {
        setLoader(false);
        alert("Tu mensaje ha sido enviado");
    }).catch((error) => {
        alert(error.message);
        setLoader(false);
    });
    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
  };

  return (
    <div className="wrapper-form" id="contact">
     <form className="form" onSubmit={handleSubmit}>
        <h1>Háblanos de tu proyecto</h1>

        <label>Nombre</label>
        <input
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label>Teléfono</label>
        <input
            placeholder="Teléfono"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
        />

        <label>Mensaje</label>
        <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>

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