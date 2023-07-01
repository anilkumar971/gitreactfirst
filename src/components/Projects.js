import React from "react";
import { Link, Outlet } from "react-router-dom";
function Projects(){
    return(
        <div>
            <h1>projects</h1>
            <nav>
                <Link to='/projects/featuredprojects'>Featuredprojects</Link>
                <Link to='/projects/newprojects'>newprojects</Link>
            </nav>
            <Outlet/>
        </div>
    );
}
export default Projects;