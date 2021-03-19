import Categorias from "./Categorias";
import "./style.css";

const App = () => {
  return (
    <div className="contenedor-categorias">
      <div className="lista-categorias">
        <Categorias />
      </div>
      <div className="menu-categorias">
        <Categorias />
      </div>
    </div>
  );
};

export default App;
