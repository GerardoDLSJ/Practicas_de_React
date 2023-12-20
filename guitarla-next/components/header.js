import Image from 'next/image'
import logo from '@/public/img/logo.svg'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href='/'>
          <Image src={logo.src} alt="Logo guitarLA" width={300} height={40}/>
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/" 
            className={`link ${pathname   === '/' ? styles.active : ''}`}  
          >Inicio</Link>
          <Link href="/nosotros" 
            className={`link ${pathname === '/nosotros' ? styles.active : ''}`}  
          >Nosotros</Link>
          <Link href="/tienda" 
            className={`link ${pathname === '/tienda' ? styles.active : ''}`}>
          Tienda</Link>
          <Link href="/blog" 
            className={`link ${pathname === '/blog' ? styles.active : ''}`}
          >Blog</Link>
          <Link href="/carrito">
            <Image width={30} height={25} src="/img/carrito.png" alt="carrito"/>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header