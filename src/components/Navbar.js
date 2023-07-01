import React from "react";
import {NavLink} from "react-router-dom";
import{useAuth} from "./Auth";


function Navbar(){

    const {user,logout}=useAuth();
    return(
    <div>
        <nav className="primary-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/users">Users</NavLink>
            {
             user ?  (
            <NavLink to="/logout" onClick={logout}>logout </NavLink>
              ) :(
            <NavLink to="/login">login</NavLink>
              )
           }
        </nav>
    </div>
    );
}

export default Navbar;