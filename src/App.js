import React from "react";
// import Potato from "./Potato";


function Food(props){
  // console.log(props)
  // return <h1>I like {props.fav}.</h1>

  const{ fav } = props
  return <h1>I like {fav} </h1>
}


function App() {
  return (
    <div>
      <div><h1>Hello~!</h1></div>
      <Food fav="kimchi"/>
      <Food fav="chukumi"/>
      <Food fav="samgiopsal"/>
    </div>
  )
}

export default App;
