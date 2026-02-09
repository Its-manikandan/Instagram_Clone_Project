import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
    const [profile,setprofile] = useState(null);
    const [followers,setfollowers] = useState([]);
    const [unfollowed,setunfollwed] = useState(0);

    useEffect(()=>{
        axios.get('https://json-backend-sntc.onrender.com/profile')
        .then(data=> setprofile(data.data))
        .catch(error => console.log(error))

        axios.get('https://json-backend-sntc.onrender.com/followers')
        .then(data => setfollowers(data.data))
        .catch(error => console.log(error))
    }, [unfollowed])

    function handleonChange(e){
        setprofile(prev => ({
            ...prev,
            [e.target.name] : e.target.value

        }))
    }

    const handleUpdate = async ()=> {
        axios.put('https://json-backend-sntc.onrender.com/profile',profile)
        .then(console.log("Updated"))
        .catch(error=> console.log(error))
    }

    const handleunfollow = async (id)=>{
        axios.delete(`https://json-backend-sntc.onrender.com/followers/${id}`)
        .then(alert("Unfollowed"))
        .then(setunfollwed(!unfollowed))
        .catch(error=> console.log(error))

    }

  return (
    <div className='m-5'>
        {profile ? (
            <div>
                <img src={profile.profilePic} className="profile rounded-circle" alt="" />
                <h5>{profile.username}</h5>

                <input type="text"
                 value={profile.username}
                 name="username"
                 className='form-control my-5'
                 onChange={handleonChange} />

                 <input type="text" 
                 name="profile_pic" 
                 value={profile.profilePic}
                className='form-control' 
                onChange={handleonChange} />

                <button className='btn btn-primary my-2' onClick={handleUpdate}>Update</button>

            </div>
        ) : (
            <div>Loading Profile</div>  
        )  }

        {followers.length >0 ? (
                 followers.map(follower =>(
                    <div key={follower.id} className='d-flex my-2'>
                        {follower.username}
                        <button className='btn btn-secondary ms-auto' onClick={()=>{handleunfollow(follower.id)}}>UnFollow</button>
                    </div>
                 ))
        ) : (
            <div>Loading Followers</div>
        )}
    </div>
  )

}

export default Profile