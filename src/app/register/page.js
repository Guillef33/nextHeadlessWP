"use client";
import { useMemo, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

import { startCreatingUserWithEmailPassword } from "../store/slices/auth/thunk";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

function RegisterForm() {
  const dispatch = useDispatch();

  const { formState, displayName, email, password, onInputChange } =
    useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, displayName);
    console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <div className="w-[600px] m-auto">
      <h2>Registrate</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
          placeholder="Ingrese tu nombre"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="Ingrese tu email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="Ingrese tu password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
