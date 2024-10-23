import React from "react";
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import "./Navigation.css"

// function Navigation(){
//     return(
//         <div>
//             <a href="/">Home</a>
//             <a href="/about">About</a>
//         </div>
//     )
// }

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation