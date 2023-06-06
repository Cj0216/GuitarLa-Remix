export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const resultado = await respuesta.json()
    return resultado
}
export async function getPostInd(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
        const resultado = await respuesta.json()
        return resultado
}