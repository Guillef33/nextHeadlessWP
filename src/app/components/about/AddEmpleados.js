"use client";

import React, { useState } from "react";

function AddEmpleados({ newItem, setNewItem, addItem }) {
  return (
    <div>
      <h2>Agregar un nuevo Proyecto</h2>
      <div>
        <input
          type="text"
          placeholder="name"
          value={newItem.nombre}
          onChange={(e) => setNewItem({ ...newItem, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="puesto"
          value={newItem.puesto}
          onChange={(e) => setNewItem({ ...newItem, puesto: e.target.value })}
        />

        <button onClick={addItem}>Add Empleado</button>
      </div>
    </div>
  );
}

export default AddEmpleados;
