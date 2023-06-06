import { useLoaderData } from "@remix-run/react";
import { getPostInd } from "../models/posts.server";
import { formatearFecha } from "../utils/helpers";

export async function loader({ params }) {
  const { url } = params;
  const postInd = await getPostInd(url)
  if (postInd.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no existe',
    })
  }
  return postInd
}
const PostInd = () => {
  const postInd = useLoaderData()
  const post = postInd.data[0].attributes
  return (
    <article className="post">
      <img src={post.image.data.attributes.url} alt={`imagen blog ${post.title}`} className="imagen mt-3" />
      <div className="contenido">
        <h3>{post.title}</h3>
        <p className="fecha">{formatearFecha(post.publishedAt)}</p>
        <p className="texto">{post.description}</p>

      </div>
    </article>
  )
}

export default PostInd