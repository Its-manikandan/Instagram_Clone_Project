import React, {useEffect, useState} from 'react'


function Posts() {

    const [posts , setposts] = useState([]);

    useEffect(()=>{
        fetch("https://json-backend-sntc.onrender.com/posts")
        .then((data)=> data.json())
        .then((data)=> setposts(data))
        .catch((error)=>{
            console.log(error)
        })
    },[])

  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0 ? (
        <div>
            {posts.map((post)=>(
                <div className="my-3 "key={post.id}>
                    <div className='d-flex'>
                        <img className="dp rounded-circle"src={post.user.profilePic} alt="Profilepic" />
                        <h5>{post.user.username}</h5>
                    </div>
                    <img className="image" src={post.image} alt="post" />
                    <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <div>
                        <b>{post.likes} likes</b>
                        </div>
                        <p>{post.caption}</p>
                </div>

            ))}
            </div>
    ):(
        <div>
            Loading Posts
        </div>    
    )}
        </div>
  )
}

export default Posts