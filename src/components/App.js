import Categorias from "./Categorias";
import "./style.css";

const App = () => {
  return (
    <div className="contenedor-categorias">
      <div className="lista-categorias">
        <Categorias lista={true} />
      </div>
      <div className="menu-categorias">
        <Categorias lista={false} />
      </div>
    </div>
  );
};

export default App;
