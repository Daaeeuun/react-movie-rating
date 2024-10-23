// import React from "react";
// import "./App.css";
// import { HashRouter, Route } from 'react-router-dom'
// import About from './routes/About'

// function App() {
//   return (
//     <HashRouter>
//       <Route path="/about" Component={About}/>
//     </HashRouter>
//   )
// }
// export default App



// import React from "react";
// import "./App.css";
// import { HashRouter, Routes, Route } from 'react-router-dom';
// import About from './routes/About';
// import Home from './routes/Home'
// import Navigation from "./components/Navigation";
// import Detail from "./routes/Detail";

// function App() {
//   return (
//     <HashRouter>
//       <Navigation />
//       <Routes>
//         <Route path="/" exact={true} element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/movie-detail" element={<Detail />} />
//         {/* <Route path="/movie-detail" Component={<Detail />} /> */}
//       </Routes>
//     </HashRouter>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './routes/Home'
// // import Navigation from "./components/Navigation";
// import Detail from "./routes/Detail";


// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/movie-detail" element={<Detail />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;



// import React from "react";
// import "./App.css";
// import { HashRouter, Routes, Route } from 'react-router-dom';
// import About from './routes/About';
// import Home from './routes/Home'

// function App() {
//   return (
//     <HashRouter>
//       {/* <Route path="/home">
//         <h1>Route</h1>
//       </Route>
//       <Route path="/home/introduction">
//         <h1>introduction</h1>
//       </Route>
//       <Route path="/home/about">
//         <h1>about</h1>
//       </Route> */}
//       <Routes> {/* Routes로 Route를 감쌉니다 */}
//         <Route path="/home" element={<h1>home</h1>} />
//         <Route path="/home/introduction" element={<h1>introduction</h1>} />
//         <Route path="/home/about" element={<h1>about</h1>} />
//       </Routes>
//     </HashRouter>

//   );
// }

// export default App;

// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import About from './routes/About'
import Navigation from "./components/Navigation";
import "./App.css"
import logo from './logo.jpg';


function App() {
  return (
    <Router>
      <header className="header">
         <img src={logo} alt="FlickRate" />
        {/* <h1>FlickRate</h1>  */}
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
