"use client";

import Navbar from "../components/Navbar";
import { Proyectos } from "../components/proyectos/List";
import AddProyecto from "../components/proyectos/AddProyecto";
import React, { useState, useEffect } from "react";

function ProyectosPage() {
  const [proyectos, setProyectos] = useState(Proyectos);

  const [newProject, setNewProject] = useState({
    nombre: "",
    url: "",
    pais: "",
    tecnologia: "",
    key: Math.random().toString(),
  });

  const addTodo = () => {
    setProyectos([...proyectos, newProject]);
    console.log(proyectos);
    setNewProject({
      nombre: "",
      url: "",
      pais: "",
      tecnologia: "",
      key: Math.random().toString(),
    });
  };

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
      <h1 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-violet-800 from-blue-600" >Nuestros Proyectos</h1>
      <AddProyecto
        newProject={newProject}
        setNewProject={setNewProject}
        addTodo={addTodo}
      />

      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 grid grid-cols-3 rounded overflow-hidden shadow-lg">
        {proyectos.map((item, index) => {
          return (
            <div className="p-6 border rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8" key={index}>
              <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">Cliente: {item.nombre}</h1>
              <h4 className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Url: {item.url}</h4>
              <p className="text-blue-600 dark:text-blue-500">
                Technologia: {item.tecnologia}
              </p>
              <p>{item.año}</p>
              <p className="text-blue-600 dark:text-blue-500">Pais: {item.pais}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProyectosPage;
