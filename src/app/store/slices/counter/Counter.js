import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export function Counter() {
  // Leemos algo del store y lo guardamos en la variable count
  const count = useSelector((state) => state.counter.counter);
  // Hago un dispatch para usar las acciones de los reducers
  const dispatch = useDispatch();

  return (
    <div>
      <p>El valor del estado del contador es de </p>

      <div className="flex items-center justify-center">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="text-[2rem] mr-2"
        >
          -
        </button>
        <p className="text-[2rem] mr-2">{count}</p>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="text-[2rem] ml-2"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
          className="text-[2rem]"
        >
          +2
        </button>
      </div>
    </div>
  );
}
