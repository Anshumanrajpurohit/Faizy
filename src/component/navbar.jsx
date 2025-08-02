import React from "react";
import '../style/navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <img src="" alt="FaiZU Circut wala" height={100} width={100} />
                {/* <h1>NNihit ka</h1> */}
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Services</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar;