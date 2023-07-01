import React, { useState } from "react";
import { useAuth } from "./Auth";
import{useNavigate} from "react-router-dom";
function Login(){
  const navigate =useNavigate();
    const {login}=useAuth();
    const[name,setName]=useState('');
    return(
        <div>
            <h1>Login</h1>
            <label>Usernsme</label>
            <input type="text" name="name" id="name" value={name}
            placeholder="enter user name" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>{login(name);
            navigate("/" ,{replace:true});}}>Login</button>
        </div>
    );
}
export default Login;