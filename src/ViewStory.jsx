import React, { useState, useEffect } from 'react'
import { useParams , Link , useNavigate} from 'react-router-dom'

function ViewStory() {
    const { id,tot } = useParams();

    const [story, setstory] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://json-backend-sntc.onrender.com/story/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Story Data:",data);
                setstory(data)})
            .catch(err => console.log(err));
    }, [id]);

    if (id > tot || id<=0){
        navigate("/");
    }
    return (
        <div>
            {story? (
                <div className="d-flex justify-content-center align-items-center">
                    <Link to={`https://json-backend-sntc.onrender.com/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
                    <img className="vh-100" src={story.image} alt="story" />
                    <Link to={`https://json-backend-sntc.onrender.com/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}

export default ViewStory

// const { id, tot } = useParams();

// const currentId = Number(id);
// const total = Number(tot);
// useEffect(() => {
//   if (currentId > total) {
//     navigate("/");
//   }
// }, [currentId, total, navigate]);
// const goNext = () => {
//   if (currentId === total) {
//     navigate("/"); // go home on last story
//   } else {
//     navigate(`/story/${currentId + 1}/${total}`);
//   }
// };

// const goPrev = () => {
//   if (currentId > 1) {
//     navigate(`/story/${currentId - 1}/${total}`);
//   }
// };
// return (
//   <div>
//     {story ? (
//       <div className="d-flex justify-content-center align-items-center">

//         {/* PREVIOUS */}
//         {currentId > 1 && (
//           <i
//             className="bi bi-arrow-left-circle-fill fs-2 me-3"
//             style={{ cursor: "pointer" }}
//             onClick={goPrev}
//           ></i>
//         )}

//         {/* STORY IMAGE */}
//         <img
//           src={story.image}
//           alt="story"
//           className="vh-100"
//         />

//         {/* NEXT */}
//         <i
//           className="bi bi-arrow-right-circle-fill fs-2 ms-3"
//           style={{ cursor: "pointer" }}
//           onClick={goNext}
//         ></i>

//       </div>
//     ) : (
//       <div>Loading...</div>
//     )}
//   </div>
// );

