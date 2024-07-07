import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditItem.css";

// const URI = 'http://localhost:3000/items/'

const URI = "https://pamela.alwaysdata.net/items/";

export default function EditItem() {
  const [plato, setPlato] = useState("");
  const [cantidad, setCantidad] = useState("");

  const navigate = useNavigate();
  const { id, email } = useParams();

  const updateItem = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, { plato, cantidad });
    navigate(`/home/${email}`);
  };

  return (
    <div className="edititem">
      EditItem
      <div>
        <form onSubmit={updateItem}>
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
          <button>Actualizar Orden </button>
        </form>
      </div>
    </div>
  );
}
