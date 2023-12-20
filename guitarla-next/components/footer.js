import Link from "next/link"

import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link className={styles.enlaces} href="/" >Inicio</Link>
          <Link className={styles.enlaces} href="/nosotros">Nosotros</Link>
          <Link className={styles.enlaces} href="/tienda">Tienda</Link>
          <Link className={styles.enlaces} href="/blog">Blog</Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservadors {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer