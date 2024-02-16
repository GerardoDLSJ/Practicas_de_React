import Formulario from "./Formulario";
import Resultado from "./Resultado";
import { useClima } from "../hooks/useClima";
import Loader from "./Loader";

export const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Loader />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va mostrar aquí </p>
        )}
      </main>
    </>
  );
};
