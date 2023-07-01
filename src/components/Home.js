 import React from "react";
 import { useNavigate} from "react-router-dom";
 
import Success from "./Success";
import { useAuth } from "./Auth";
function Home(){

    const navigate=useNavigate();

    const data=useAuth();
    console.log(data);
    const navigatetoSuccesspage=()=>{
        navigate("/success");
    };
    return(
        <div>
            <h1>Home</h1>
            <button onClick={navigatetoSuccesspage}>submit form</button>
        </div>
    );
}
export default Home;