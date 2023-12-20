

import { useLoaderData } from '@remix-run/react';
import {getPost} from '~/models/posts.server'
import { formatDate } from '~/utils/helpers';
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export function meta({data}){
  if(!data || data === undefined || data === null || data?.status === 404){
    return [
      {
        title: 'GuitarLA - Entrada no encontrada',
        description: `Guitarras, venta de guitarras, guitarra no encontrada`
      }
    ]
  }

  return [
    {
      title: `GuitarLA - ${data?.data[0]?.attributes.nombre}`
    },
    {
      description: 'GuitarLA, Blog de musica, Venta de guitarras'
    }
  ]
}

export async function loader({params}){
  const {postUrl} = params;
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Entrada no encontrada'
    }) 
  }


  return post
}

export default function Blog(){

  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes
  return(
    <article className='post mt-3'>
      <img className="imagen" src={imagen.data?.attributes?.url} alt={`Imagen blog ${titulo}`}/>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )

}