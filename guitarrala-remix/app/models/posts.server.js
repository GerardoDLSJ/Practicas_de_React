

export async function getPosts(){
  const respuesta = await fetch(`${process.env.API_URL}/api/posts?populate=imagen`);

  const resultado = await respuesta.json()

  return resultado;
}

export async function getPost(url){
  
  const respuesta = await fetch(`${process.env.API_URL}/api/posts?filters[url]=${url}&populate=imagen`);
  return await respuesta.json();
}