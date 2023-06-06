import Posts from "./posts"

const ListadoPosts = ({postsData}) => {
  return (
   <>
     <h2 className="heading">Blog</h2>
      <div className="blog">
        {postsData.map(postInd => (
          <Posts key={postInd.id} post={postInd.attributes} />
        ))}
      </div>
   </>
  )
}

export default ListadoPosts