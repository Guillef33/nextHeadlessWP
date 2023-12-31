"use client";

import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../lib/Firebase";
import Heading from "../components/proyectos/Heading";
import Card from "../components/Card";
import Description from "../components/proyectos/description";

function About() {
  const [items, setItems] = useState([]);

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

  useEffect(() => {
    const q = query(collection(db, "empleados"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      return () => unsubscribe();
    });
  }, []);

  // Delete items from database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold sm:text-4xl m-8">Sobre nosotros</h1>
      <Heading title="Sobre nosotros" />
      <Description description="Esta es la página sobre nosotros" />
      <div className="grid grid-cols-3">
        {items.map((item, index) => {
          return (
            <div
              className="bg-blue-50 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 m-8 w-32 h-20"
              key={index}
            >
              <h2 className="text-sm font-semibold leading-6 text-indigo-600">
                {item.nombre}
              </h2>
              <h2 className="text-sm font-semibold leading-6 text-indigo-600">
                {item.puesto}
              </h2>
            </div>
          );
        })}
      </div>
      <div>

        <div>
          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
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

            <button
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={addItem}
            >
              Add Empleado
            </button>
          </div>
        </div>
        <div className="ListadoDeEmpleadosFijos">
          <Card />

        </div>
      </div>
    </div>
  );
}

export default About;
