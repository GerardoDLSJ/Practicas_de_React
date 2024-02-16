import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado, setResultado] = useState({});

  const [cargando, setCargando] = useState(false);

  const [noResultado, setNoResultado] = useState("");

  const consultarClima = async (datos) => {
    try {
      setCargando(true);
      setNoResultado(false);
      const { ciudad, pais } = datos;

      const apaid = import.meta.env.VITE_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apaid}`;

      const { data } = await axios.get(url);

      const { lat, lon } = data.coord;

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apaid}`;

      const { data: dataClima } = await axios.get(urlClima);

      setResultado(dataClima);
    } catch (error) {
      setNoResultado("No hay resultados para mostrar");
    } finally {
      setCargando(false);
    }
  };

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };

export default ClimaContext;
