import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  return (
  <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img className="logo-text" src="https://res.cloudinary.com/dnorbxzhr/image/upload/v1770638585/instagram_text_bddk3e.jpg" alt="Instagram" />
        <div><i className="bi bi-house"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass-fill"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-right-text-fill"></i>Message</div>
        <div><i className="bi bi-bell"></i>Notifications</div>
        <div><i className="bi bi-plus-square"></i>Create</div>
        <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 m'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-three-dots"></i>More</div>
    </div>
  </div>
  )
}

export default Sidebar;