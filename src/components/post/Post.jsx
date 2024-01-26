

function Post(prop) {
    let {post}  = prop;

    let {title, content} = post;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
  )
}

export default Post;
