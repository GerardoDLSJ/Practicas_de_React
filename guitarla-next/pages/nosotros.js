import Image from "next/image" 
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Blog de música, venta de guitarras, consejos, GuitarLA"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image  src={'/img/nosotros.jpg'} width={1000} height={800} />
          <div>
            <p>Officia duis reprehenderit incididunt nostrud consectetur nostrud voluptate. Minim eiusmod est veniam commodo voluptate nulla excepteur sunt fugiat ex sit veniam. Exercitation enim nulla proident proident eu in in qui ipsum dolore tempor esse aliqua. Laborum dolor labore amet Lorem est.</p>
            <p>Esse sit cupidatat adipisicing esse ea ut do do sit consectetur magna. Ut non Lorem dolore ad. Elit magna consequat exercitation non ex mollit dolore cillum. Enim non ut cillum occaecat sint proident adipisicing consequat. Et irure aute sit minim dolore esse culpa deserunt aliqua cupidatat laborum ad.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros