import React ,{useState,useEffect} from 'react'
import axios from "axios";
const Feed = () => {

  const [posts, setPosts] = React.useState([
    {
      id: 1,
      image: 'https://ik.imagekit.io/pn7lb8nxs/image_M0ZUQXiUh.jpg',
      caption: 'This is a sample post'
    }
  ])

  useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
      setPosts(res.data.posts)
    })
  },[])


  return (
    <section className="feed-section">
      {
        posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt="Post" />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )
      }
    </section>
  )
}

export default Feed