import React from "react";
import PropTypes, { func } from "prop-types";
import "./Movie.css"

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt="title" title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                {/* <p class="movie__genres">{genres}</p> */}
                <ul className="movie__genres">
                    {genres.map((genre, index) => {      //genres props가 배열이라 map()사용 //key props에 index
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                </ul>
                {/* <p className="movie__summary">{summary.slice(0, 180)}..</p>  */} {/* 책 기본코드 */}
                {/* =>변경 */}
                <p className="movie__summary">
                    {summary
                        ? summary.length > 180
                            ? `${summary.slice(0, 180)}...`  // 180자 넘을 때만 `...` 붙이기
                            : summary                          // 180자 이하일 땐 그대로 출력
                        : ""}         
                </p>



            </div>
        </div>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie