import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPLan,
  formatearDinero,
  obtenerDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;

    // Obtener diferencia de años
    let diferencia = obtenerDiferenciaYear(datos.year);
    console.log(diferencia);
    // Hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%

    resultado *= calcularMarca(datos.marca);

    // Basico aumenta 20%
    // Completo 50%

    resultado *= calcularPLan(datos.plan);

    resultado = formatearDinero(resultado);

    // Total

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
