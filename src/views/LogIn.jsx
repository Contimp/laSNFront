import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// const URI = 'http://localhost:3000/log/'

const URI = "https://pamela.alwaysdata.net/log/";

export default function LogIn() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const postLog = async (e) => {
    e.preventDefault();
    await axios.post(URI, { nombre, email });
    navigate(`/home/${email}`);
  };

  return (
    <div className="textos">
      <h1>la Sarten Negra</h1>
      <h3>Restaurante de comida familiar</h3>
      <form onSubmit={postLog}>
        <br />
        <div>
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <br />
        <div>
          <label className="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />

        <button>Ingresar</button>
      </form>
    </div>
  );
}
