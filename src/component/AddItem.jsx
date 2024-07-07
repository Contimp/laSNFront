import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./AddItem.css";

// const URI = 'http://localhost:3000/items/'

const URI = "https://pamela.alwaysdata.net/items/";

export default function AddItem() {
  const [plato, setPlato] = useState("");
  const [cantidad, setCantidad] = useState("");
  const navigate = useNavigate();
  const { email } = useParams();

  const postItem = async (e) => {
    e.preventDefault();
    await axios.post(URI + email, { plato, cantidad });
    navigate(`/home/${email}`);
  };

  return (
    <div className="additem">
      <form onSubmit={postItem}>
        <br />
        <div>
          <label className="plato">Plato</label>
          <input value={plato} onChange={(e) => setPlato(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Cantidad</label>
          <input
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <br />
        <button>Add item</button>
      </form>
    </div>
  );
}
