

export async function getGuitarras(){
  const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?populate=imagen`);

  const resultado = await respuesta.json()

  return resultado;
}

export async function getGuitarra(url){
  
  const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=imagen`);
  return await respuesta.json();
}