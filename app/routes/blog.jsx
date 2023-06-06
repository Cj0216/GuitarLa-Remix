import {Outlet } from "@remix-run/react"
import stylesPosts from "../styles/posts.css"
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesPosts

    }
  ]
}
const Blog = () => {
  return (
    <main className="contenedor">
      <Outlet/>

    </main>
  )
}

export default Blog