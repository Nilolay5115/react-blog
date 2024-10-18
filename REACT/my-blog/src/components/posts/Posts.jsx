import "./posts.css"
import Post from "../post/Post"
import { Link } from "react-router-dom"

export default function Posts() {
  return (
    <div className="posts">
      <Link className="link" to={"/post/:postId"}><Post /></Link>
      
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
