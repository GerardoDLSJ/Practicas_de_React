import Layout from '@/components/layout'
import Link from 'next/link'
import React from 'react'

export default function Pagina404() {
  return (
    <Layout
      title={`Pagina no encontrada`}>
      <p className='error'>Hemos revisado por todos lados y no hemos encontrado la página</p>
      <Link className='error-enlace' href="/">
        Ir a inicio
      </Link>
    </Layout>
  )
}
