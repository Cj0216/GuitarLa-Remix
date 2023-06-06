import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import ListadoGuitarras from "../components/listado-guitarras"
export function meta() {
    return [
        {

            title: 'GuitarLA-Store',
            description: 'Guitar Store'
        }
    ]
}

export async function loader() {
    const guitarras = await getGuitarras()

    return guitarras.data
}
const Store = () => {
    const data = useLoaderData()

    return (

        <ListadoGuitarras
            data={data}
        />

    )
}

export default Store