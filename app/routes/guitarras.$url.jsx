import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
export async function loader({params}){
  const guitarra = await getGuitarra(params.url)
  if (guitarra.data.length === 0) {
    throw new Response('',{
      status: 404,
      statusText: 'Esta guitarra no existe'
    })
  }
  return guitarra.data[0].attributes
}


const Guitarras = () => {
  const data = useLoaderData()
  console.log(data)
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
      </div>
    </div>
  )
}

export default Guitarras