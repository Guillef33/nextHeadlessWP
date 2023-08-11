import Navbar from "../components/Navbar";
import { Proyectos } from "../components/proyectos/List";

function About() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>Sobre nosotros</h1>
      <div className="grid grid-cols-3">
        <div className="p-6 border">
          <h2>Juan Flores</h2>
        </div>
        <div className="p-6 border">
          <h2>Guillermo Flores</h2>
        </div>
        <div className="p-6 border">
          <h2>Alfredo Palmieri</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
