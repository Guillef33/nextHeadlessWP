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
      <h1>Nuestros Proyectos</h1>
      <AddProyecto
        newProject={newProject}
        setNewProject={setNewProject}
        addTodo={addTodo}
      />

      <div className="grid grid-cols-3">
        {proyectos.map((item, index) => {
          return (
            <div className="p-6 border" key={index}>
              <h1>Cliente: {item.nombre}</h1>
              <h4>Url: {item.url}</h4>
              <p>Technologia: {item.tecnologia}</p>
              <p>{item.año}</p>
              <p>Pais: {item.pais}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProyectosPage;
