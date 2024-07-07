import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Order.css";

// const URI = 'http://localhost:3000/items/'

const URI = "https://pamela.alwaysdata.net/items/";

export default function Order() {
  const [items, setItems] = useState([]);
  const { email } = useParams();

  useEffect(() => {
    getAllItems();
  }, []);

  //procedimiento para buscar todos los items del menu
  const getAllItems = async () => {
    const res = await axios.get(URI + email);
    console.log(res.data);
    setItems(res.data);
  };

  //procedimiento para eliminar un item
  const deleteItem = async (id) => {
    await axios.delete(`${URI}${id}`);
    getAllItems();
  };

  console.log(items);

  return (
    <div className="ordercontainer">
      <Link to={`/add/${email}`}>Agregar Plato</Link>
      {items.length > 0 &&
        items.map((item) => (
          <div key={item.id}>
            <p>{item.plato}</p>
            <p>{item.cantidad}</p>
            <Link to={`/edit/${item.id}/${email}`}>Editar</Link>
            <button className="btn" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </div>
        ))}
      <br />
      <br />
      <Link to={"/"}>Ir a inicio</Link>
    </div>
  );
}
