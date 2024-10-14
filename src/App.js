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



import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
// df

export default App;


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

