import {Outlet } from "@remix-run/react"
import stylesGuitar from '../styles/guitarras.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitar
    }
  ]
}

const Store = () => {

  return (
    <main className="contenedor">
       <Outlet/>
    </main>
  )
}

export default Store