import Navbar from "../components/Navbar";
import { Proyectos } from "../components/proyectos/List";

function Proyectos() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>Nuestros Proyectos</h1>
      <div className="grid grid-cols-3">
        {Proyectos.map((item) => {
          return (
            <div className="p-6 border">
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

export default Proyectos;
