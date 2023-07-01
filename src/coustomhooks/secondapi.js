import React, {useState,useEffect} from "react";
import useFetch from "./useFectchapi";

const URL ="https://jsonplaceholder.typicode.com/posts";
const Secoundapi=()=>{

    const [postsData,loading,isError]=useFetch(URL);
    if(isError){
    return <h3>something was haapend</h3>;
    }
    if(loading){
        return<h3>loading....</h3>;
    }
return(
    <div>
        <h1>posts</h1>
         <ul>
            {postsData.map((eachuser)=>{
                return<li key={eachuser.id}>{eachuser.title}</li>;

             })}

        </ul>
    </div>
);
};
export default Secoundapi;