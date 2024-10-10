import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {             //state가 객체고
    isLoading: true,    //isLoaing, movies는 객체의 속성(프로터피).
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data:
        { movies },
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false }) //객체의 키와 대입할 변수의 이름이 같다면 축약버전 가능
  }

  componentDidMount() {
    //영화데이터 로딩 구현
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state    //구조분해할당
    return (
      <section className="container">
        {isLoading ? (
          <div class="loader">
            <span className="loader__text">Loading.. </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (  //movies는 배열이고 배열의 원소 1개가 movie로 넘어온다
              // console.log(movie)
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />  //Movie 컴포넌트 출력
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default App