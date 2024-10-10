import React from "react";

class App extends React.Component {
  state = {             //state가 객체고
    isLoading: true,    //isLoaing, movies는 객체의 속성(프로터피).
    movies: [],
  }

  componentDidMount(){
    //영화데이터 로딩 구현
    setTimeout(()=>{      //첫번째 인자로 setTimeout()전달
      this.setState({isLoading: false}) //state 값 바꾸기 위함
    }, 3000)
  }
  render() {
    const { isLoading } = this.state    //구조분해할당
    return <div>{isLoading ? 'Loading..' : 'We are ready'}</div>
  }
}

export default App