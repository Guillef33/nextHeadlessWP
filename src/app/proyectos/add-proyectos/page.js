"use client";

import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from "react";
import AddProyecto from "../../components/proyectos/AddProyecto";
import { Proyectos } from "../../components/proyectos/List";

function AddProyectosPage({}) {
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
    <AddProyecto
      newProject={newProject}
      setNewProject={setNewProject}
      addTodo={addTodo}
    />
  );
}

export default AddProyectosPage;
