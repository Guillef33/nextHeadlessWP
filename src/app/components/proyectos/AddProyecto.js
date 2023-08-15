"use client";

import React, { useState } from "react";

function AddProyecto({ setNewProject, newProject, addTodo }) {
  return (
    <div>
      <h2>Agregar un nuevo Proyecto</h2>
      <div>
        <input
          type="text"
          placeholder="nombre"
          value={newProject.nombre}
          onChange={(e) =>
            setNewProject({ ...newProject, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="url"
          value={newProject.url}
          onChange={(e) =>
            setNewProject({ ...newProject, url: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="pais"
          value={newProject.pais}
          onChange={(e) =>
            setNewProject({ ...newProject, pais: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="tecnologia"
          value={newProject.tecnologia}
          onChange={(e) =>
            setNewProject({ ...newProject, tecnologia: e.target.value })
          }
        />

        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default AddProyecto;
