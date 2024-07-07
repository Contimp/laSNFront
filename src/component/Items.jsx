import React from "react";
import menu from "../menu";
import "./Items.css";

export default function Items() {
  return (
    <div className="items">
      {menu.map((b) => (
        <div key={b.nombre}>
          <h3>{b.nombre}</h3>
          <p>{b.precio}</p>
        </div>
      ))}
    </div>
  );
}
