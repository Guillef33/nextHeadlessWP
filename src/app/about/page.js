"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Proyectos } from "../components/proyectos/List";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import AddEmpleados from "../components/about/AddEmpleados";
import { db } from "../lib/Firebase";

function About() {
  const [items, setItems] = useState([
    // { nombre: "Guillermo Flores", puesto: "Front End Developer" },
    // { nombre: "Juan Flores", puesto: "WordPress Developer" },
    // { nombre: "Alfredo Palmieri", puesto: "WordPress Developer" },
  ]);

  const [newItem, setNewItem] = useState({ nombre: "", puesto: "" });

  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.nombre !== "" && newItem.puesto !== "") {
      // setItems([...items, newItem]);
      await addDoc(collection(db, "empleados"), {
        nombre: newItem.nombre.trim(),
        puesto: newItem.puesto,
      });
      setNewItem({ nombre: "", puesto: "" });
    }
  };

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, "empleados"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      // // Read total from itemsArr
      // const calculateTotal = () => {
      //   const totalPrice = itemsArr.reduce(
      //     (sum, item) => sum + parseFloat(item.price),
      //     0
      //   );
      //   setTotal(totalPrice);
      // };
      // calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // Delete items from database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>Sobre nosotros</h1>
      <div className="grid grid-cols-3">
        {items.map((item, index) => {
          return (
            <div className="p-6 border" key={index}>
              <h2>{item.nombre}</h2>
              <h2>{item.puesto}</h2>
            </div>
          );
        })}
      </div>
      <div>
        {/* <AddEmpleados
          newItem={newItem}
          setNewItem={setNewItem}
          addItem={addItem}
        /> */}
        <div>
          <h2>Agregar un nuevo Empleado</h2>
          <div>
            <input
              type="text"
              placeholder="name"
              value={newItem.nombre}
              onChange={(e) =>
                setNewItem({ ...newItem, nombre: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="puesto"
              value={newItem.puesto}
              onChange={(e) =>
                setNewItem({ ...newItem, puesto: e.target.value })
              }
            />

            <button onClick={addItem}>Add Empleado</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
