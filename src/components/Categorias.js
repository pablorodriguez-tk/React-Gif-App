import axios from "axios";
import { useEffect, useState } from "react";

const Categorias = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerResultado = async () => {
      const KEY = "5lflkze5XFzJn4I6liF0DE0XaxojOBKs";
      const URL = "https://api.giphy.com/v1/gifs/categories";
      const { data } = await axios.get(`${URL}?key=${KEY}`);
      setCategorias(data.data);
    };
    obtenerResultado();
  }, []);

  const ListaCategorias = categorias.map((result) => {
    return (
      <div className="categoria" key={result.name}>
        <a href="#">
          <p>{result.name}</p>
        </a>
      </div>
    );
  });

  const MenuCategorias = categorias.map((result) => {
    return (
      <div className="categoria" key={result.name}>
        <a href="#">
          <img src={result.gif.images.fixed_width.url} alt="Gif"></img>
          <p>{result.name}</p>
        </a>
      </div>
    );
  });

  return (
    <div>
      <h1>Categorias</h1>
      <div className="flex-categorias">
        {props.lista ? [ListaCategorias] : [MenuCategorias]}
      </div>
    </div>
  );
};

export default Categorias;
