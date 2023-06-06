import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/posts.server"
import ListadoGuitarras from "../components/listado-guitarras"
import stylesGuitarras from '../styles/guitarras.css'
import stylesPosts from "../styles/posts.css"
import ListadoPosts from "../components/listado-posts"


export function meta() {
  return[
    {
      title:'GuitarLA Inicio',
      description:'GuitarLA Inicio'
    }
  ]

}
export function links() {
  return [{
    rel: 'stylesheet',
    href: stylesGuitarras
  },
  {
    rel: 'stylesheet',
    href: stylesPosts
  }
  ]
}
export async function loader() {
  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data
  }
}
const _Index = () => {
  const { guitarras, posts } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          data={guitarras}
        />

        <section className="contenedor">
          <ListadoPosts
            postsData={posts}
          />
        </section>
      </main>
    </>
  )
}

export default _Index