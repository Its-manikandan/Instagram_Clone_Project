import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ViewStory() {
  const { id, tot } = useParams();
  const navigate = useNavigate();

  const currentId = Number(id);
  const total = Number(tot);

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (currentId <= 0 || currentId > total) {
      navigate("/");
    }
  }, [currentId, total, navigate]);


  useEffect(() => {
    setLoading(true);

    fetch(
      `https://json-backend-sntc.onrender.com/story?id=${currentId}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setStory(data[0]); 
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Error fetching story:", err);
        navigate("/");
      })
      .finally(() => setLoading(false));
  }, [currentId, navigate]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!story) {
    return null;
  }

  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {}
      <Link
        to={`/story/${currentId - 1}/${total}`}
        className="mx-3"
      >
        <i className="bi bi-arrow-left-circle-fill fs-2"></i>
      </Link>

      {}
      <img
        src={story.image}
        alt="story"
        className="vh-100"
        style={{ objectFit: "contain" }}
      />

      {}
      <Link
        to={`/story/${currentId + 1}/${total}`}
        className="mx-3"
      >
        <i className="bi bi-arrow-right-circle-fill fs-2"></i>
      </Link>
    </div>
  );
}

export default ViewStory;

