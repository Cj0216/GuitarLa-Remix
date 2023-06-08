import { useLoaderData,useOutletContext } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import { useState } from "react";

export async function loader({params}){
  const guitarra = await getGuitarra(params.url)
  if (guitarra.data.length === 0) {
    throw new Response('',{
      status: 404,
      statusText: 'Esta guitarra no existe'
    })
  }
  return guitarra
}


const Guitarras = () => {
  const {agregarCarrito} = useOutletContext()

  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData();
  const data = guitarra.data[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cantidad<1) {
      alert("Debes seleccionar una cantidad")
      return
    }
    const guitarraAñadida = {
      id:guitarra.data[0].id,
      imagen:data.image.data.attributes.url,
      name:data.name,
      price:data.price,
      cantidad
      
    }
    agregarCarrito(guitarraAñadida)

  }
  return (
    <div className="guitarra">
      <img src={data.image.data.attributes.url} alt={`Imagen guitarra ${data.name}`}  className="imagen"/>
      <div className="contenido">
        <h3>{data.name}</h3>
        <p className="texto">
          {data.description}
        </p>
        <p className="precio">
          ${data.price}
        </p>

        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select 
          onChange={(e)=>setCantidad(+e.target.value)}
          id="cantidad">
            <option value="0">---Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Añadir al carrito" />
        </form>
      </div>
    </div>
  )
}

export default Guitarras