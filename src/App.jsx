import React from "react";
import EditItem from "./component/EditItem";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import { Routes, Route } from "react-router-dom";
import AddItem from "./component/AddItem";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home/:email" element={<Home />} />
        <Route path="/add/:email" element={<AddItem />} />
        <Route path="/edit/:id/:email" element={<EditItem />} />
      </Routes>
    </div>
  );
}
