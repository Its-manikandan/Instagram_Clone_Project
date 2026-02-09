import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Suggestions() {

  const [profile, setprofile] = useState(null);
  const [Suggestions, setsuggestion] = useState([]);

  useEffect(() => {
    fetch("https://json-backend-sntc.onrender.com/profile")
      .then(data => data.json())
      .then(data => setprofile(data))
      .catch(error => console.log(error))

    fetch("https://json-backend-sntc.onrender.com/suggestions")
      .then(data => data.json())
      .then(data => setsuggestion(data))
      .catch(error => console.log(error))

  }, []);

  const handleFollow = async (id,username)=>{
    axios.post('https://json-backend-sntc.onrender.com/followers',{"id":id, "username" : username})
    .then(alert('followed'))
    .catch(error=> console.log(error))
  }

  return (
    <div>
      <div className='suggestions w-75 m-4'>
        {profile ?
          <div className='d-flex'>
            <img className="dp rounded-circle" src={profile.profilePic} alt="Profilepic" />
            <h6>{profile.username}</h6>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
          : <p>Loading</p>}

        <div className="d-flex">
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>

        {Suggestions.length > 0 ? (
          <div>
            {Suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className='d-flex'>
                  <img className="dp rounded-circle" src={suggestion.profilePic} alt="Profilepic" />
                  <h5>{suggestion.username}</h5>
                  <a className="text-primary ms-auto" onClick={()=>{handleFollow(suggestion.id , suggestion.username)}}>Follow</a>
                </div>
              </div>

            ))}
          </div>
        ) : (
          <div>
            Loading 
          </div>
        )}
      </div>

    </div>
  )
}

export default Suggestions;
