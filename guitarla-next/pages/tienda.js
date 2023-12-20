import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from "@/styles/grid.module.css"
import Link from "next/link"

function Tienda({guitarras}) {
  console.log(guitarras)
  return (
    <Layout    
      title={'Tienda'}
      description="Sobre Tienda, guitarla, tienda de musica"   
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        <div className={styles.grid}>

          {guitarras?.map(guitarra => (
            <Guitarra 
            key={guitarra.id}
            guitarra={guitarra.attributes}
            />
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tienda



export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json();
  return {
    props: {
     guitarras 
    }
  }
}