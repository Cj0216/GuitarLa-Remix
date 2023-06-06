import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

const Posts = ({post}) => {
    

  return (
    <article className="post">
        <img src={post.image.data.attributes.formats.small.url} alt={`imagen blog ${post.title}`} className="imagen" />
        <div className="contenido">
            <h3>{post.title}</h3>
            <p className="fecha">{formatearFecha(post.publishedAt)}</p>
            <p className="resumen">{post.description}</p>
            <Link to={`/blog/${post.url}`} className="enlace"  > Leer Post</Link>
        </div>
    </article>
  )
}

export default Posts