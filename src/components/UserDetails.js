import React from "react";
import{useParams}from "react-router-dom";
import userData from "./userData";
function UserDetails(){
    const {userId}=useParams();
    const UserDetailsData=userData.find((eachUser)=>eachUser.id==userId);
    return(
        <div>
            <h1>UserDetails</h1>
            <h2>{UserDetailsData.name}</h2>
            <h2>{UserDetailsData.email}</h2>
            <h2>{UserDetailsData.username}</h2>
        </div>
    );
}
export default UserDetails;