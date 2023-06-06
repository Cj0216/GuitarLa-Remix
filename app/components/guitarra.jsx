import { Link } from "@remix-run/react"

const Guitarra = ({ guitarra }) => {

  return (
    <div className="guitarra">
      <img src={guitarra.image.data.attributes.formats.medium.url} alt={`img-guitarra-${guitarra.name}`} />
      <div className="contenido">
        <h3>{guitarra.name}</h3>
        <p className="descripcion"> {guitarra.description} </p>
        <p className="precio"> ${guitarra.price} </p>
        <Link className="enlace" to={`/guitarras/${guitarra.url}`}> Ver producto</Link>

      </div>
    </div>
  )
}

export default Guitarra