import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Email">Email</NavLink>
            <NavLink to="/Work">Work</NavLink>


        </div>
    )
}
export default Navbar;