import React, {useState,useEffect} from "react";
import useFetch from "./useFectchapi";

const URL ="https://jsonplaceholder.typicode.com/users";
const Firstapi=()=>{

    const [userData,loading,isError]=useFetch(URL);
    if(isError){
    return <h3>something was haapend</h3>;
    }
    if(loading){
        return<h3>loading....</h3>;
    }
return(
    <div>
        <h1>users</h1>
         <ul>
            {userData.map((eachuser)=>{
                return<li key={eachuser.id}>{eachuser.username}</li>;

             })}

        </ul>
    </div>
);
};
export default Firstapi;