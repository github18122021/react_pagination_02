import axios from "axios"
import { useState, useEffect } from "react"

import Post from "./components/post/Post"
import Paginate from "./components/paginate/Paginate";

function App() {
  let [loading, setLoading] = useState(true);
  let [posts, setPosts] = useState([]);
  let [currentPosts, setCurrentPosts] = useState([]);
  let [totalPagePosts, setTotalPagePosts] = useState(2);
  let [currentPage, setCurrentPage] = useState(1)

  // side effects

  useEffect(() => {
    
    (async () => {
      let res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    let endIndex = currentPage * totalPagePosts;
    let startIndex = endIndex - totalPagePosts;
    setCurrentPosts(posts.slice(startIndex, endIndex)); // [0,2], [2,4], [4,6] || [0,3], [3,6], [6,9]
  }, [posts, totalPagePosts, currentPage]);

  if (loading || posts.length === 0) {
    return (<h1>Loading...</h1>)
  }

  // lifting the state up

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }


  // event handling 
  
  function passedPostsNumber(e) {
    if(e.key === "Enter") {
      let numberOfPosts = Number(e.target.value);
      setTotalPagePosts(numberOfPosts);
      setCurrentPage(1);
    }
  }

  return (
    <div>
      <h1>Hello Pagination</h1>
      {/* {
        posts.length > 0 && posts.map((post) => {
          return (
            <Post key = {post.id} post = {post}/>
          )
        })
      } */}

      {
        currentPosts.length > 0 && currentPosts.map((post) => {
          return (
            <Post key = {post.id} post = {post}/>
          )
        })
      }

      <Paginate totalPosts = {posts.length} totalPagePosts = {totalPagePosts} changePage = {changePage}/>

      <section>
        <label htmlFor="totalPosts">Total Posts Per Page:</label>
        <input type="text" id = "totalPosts" name="totalPosts" onKeyDown={passedPostsNumber}/>
      </section>
    </div>
  )
}

export default App
