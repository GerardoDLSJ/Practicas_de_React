export function obtenerDiferenciaYear(anio) {
  return new Date().getFullYear() - anio;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function calcularPLan(plan) {
  return plan === 1 ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
