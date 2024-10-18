// import React from "react";

// function Detail(props){
//     console.log(props)
//     return <span>hello</span>
// }

// export default Detail

// import React from "react";
// import { useLocation } from "react-router-dom";

// function Detail() {
//     const location = useLocation(); // location 객체를 사용하여 props 접근

//     // location.state가 존재하는지 확인 후, 콘솔에 출력
//     if (location.state) {
//         console.log("Received props:", location.state);
//     } else {
//         console.log("No props received");
//     }

//     return (
//         <div>
//             <span>Check the console for details.</span>
//         </div>
//     );
// }

// export default Detail;


// import React from "react";
// import { useLocation } from "react-router-dom";

// function Detail() {
//     const location = useLocation(); // location 객체 가져오기
//     console.log(location); // 전체 location 객체를 출력
//     const { state } = location; // location.state에서 필요한 데이터 추출

//     console.log(state); // state 확인

//     return (
//         <div>
//             <h1>Movie Detail</h1>
//             {state ? (
//                 <div>
//                     <h2>{state.title}</h2>
//                     <p>{state.summary}</p>
//                     <p>Year: {state.year}</p>
//                     <img src={state.poster} alt={state.title} />
//                     <ul>
//                         {state.genres.map((genre, index) => (
//                             <li key={index}>{genre}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <span>No movie data found</span>
//             )}
//         </div>
//     );
// }

// export default Detail;


// src/components/Detail.js
// import React, { useEffect } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';

// function Detail() {
//   const { id } = useParams(); // URL에서 파라미터 가져오기
//   const location = useLocation(); // 현재 위치 정보 가져오기
//   const navigate = useNavigate(); // 프로그램적으로 페이지 이동하기

//   useEffect(() => {
//     if (!location.state) {  // location.state가 없을 때
//       navigate('/');  // 홈으로 리다이렉트
//     }
//   }, [location, navigate]);  // location이나 navigate가 변경될 때마다 실행

//   return <span>hello</span>;
// }


// return (
//   <div>
//     <h1>영화 ID: {id}</h1>
//     <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
//   </div>
// );
// }

// export default Detail;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Detail.css"

function Detail() {
  const { id } = useParams();  // URL에서 영화 ID 가져오기
  const navigate = useNavigate();  // 리다이렉트를 위한 훅
  const [movie, setMovie] = useState(null);  // 영화 데이터를 저장할 state
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    // 영화 ID가 없으면 홈으로 리다이렉트
    if (!id) {
      navigate('/');
      return;
    }

    // 영화 정보를 API에서 불러오기
    const getMovie = async () => {
      try {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);  // 영화 데이터를 state에 저장
      } catch (error) {
        console.error("Error fetching movie details:", error);
        navigate('/');  // 에러 발생 시 홈으로 리다이렉트
      }
    };

    getMovie();
  }, [id, navigate]);

  if (!movie) {
    return <div>Loading...</div>;  // 영화 데이터를 불러오는 동안 로딩 표시
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  return (
    <div className="detail-container">
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <div className="movie-info">
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Genres: {movie.genres.join(', ')}</p>
      </div>
      <p>
        {showFullDescription
          ? movie.description_full  // 전체 내용을 보여줌
          : movie.description_full && movie.description_full.length > 300  // 설명이 존재하고 300자를 초과하는 경우
            ? `${movie.description_full.slice(0, 300)}...`  // 300자 이상일 때 처음 300자 + '...'
            : movie.description_full  // 300자 이하일 때 그대로 출력
        }
      </p>

      {/* 설명이 300자 이상일 때만 버튼 표시 */}
      {movie.description_full && movie.description_full.length > 300 && (
        <button onClick={toggleDescription}>
          {showFullDescription ? 'Show Less' : 'Show More'}
        </button>
      )}

      <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
    </div>
  );
}

export default Detail;


