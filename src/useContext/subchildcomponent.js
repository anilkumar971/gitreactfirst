import React,{useContext} from "react";
import { UserContext } from "./maincontext";

const Subchildcomponent =()=>{
    const data=useContext(UserContext);
    console.log(data);
const {firstName,lastName,email}=data;

    return(
        <div>
        <h1>Subchildcomponent</h1>
        <div>firstName:{firstName}</div>
        <div>lastName:{lastName}</div>
        <div>email:{email}</div>
        </div>
    );
 };
 export default Subchildcomponent;