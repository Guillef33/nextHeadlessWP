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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <input
          type="text"
          placeholder="url"
          value={newProject.url}
          onChange={(e) =>
            setNewProject({ ...newProject, url: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <input
          type="text"
          placeholder="pais"
          value={newProject.pais}
          onChange={(e) =>
            setNewProject({ ...newProject, pais: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <input
          type="text"
          placeholder="tecnologia"
          value={newProject.tecnologia}
          onChange={(e) =>
            setNewProject({ ...newProject, tecnologia: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />

        <button
          onClick={addTodo}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddProyecto;
