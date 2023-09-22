"use client";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../lib/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";
import { Proyectos } from "../components/proyectos/List";
import AddProyecto from "../components/proyectos/AddProyecto";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Heading from "../components/proyectos/Heading";
import { login, logout } from "../store/slices/auth/authSlice";

function ProyectosPage() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(status);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, displayName, email, photoURL } = user;

      console.log(user);
      dispatch(login({ uid, displayName, email, photoURL }));
    });
  }, []);

  const [proyectos, setProyectos] = useState(Proyectos);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("proyectos"));
    if (savedProjects) {
      setProyectos(savedProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
  }, [proyectos]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <Heading title="Nuestros proyectos" />
        <Link href="proyectos/add-proyectos">
          <button>Agregar nuevo proyecto</button>
        </Link>
      </div>
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 grid grid-cols-3 rounded overflow-hidden shadow-lg">
        {proyectos.map((item, index) => {
          return (
            <div
              className="p-6 border rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8"
              key={index}
            >
              <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                Cliente: {item.nombre}
              </h1>
              <h4 className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                Url: {item.url}
              </h4>
              <p className="text-blue-600 dark:text-blue-500">
                Technologia: {item.tecnologia}
              </p>
              <p>{item.año}</p>
              <p className="text-blue-600 dark:text-blue-500">
                Pais: {item.pais}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProyectosPage;
