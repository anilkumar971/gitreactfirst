import { useEffect, useState } from "react";
 
const URL="https://jsonplaceholder.typicode.com/users";
const Final2 =()=> {


    const[usersData, setusersData]=useState([]);
    const[loading, setloading]=useState(false);
    const[isError, setisError]=useState({status:false, msg: "" });

    const fetchUsersData=async(apiURL)=>{
        setloading(true)
        setisError({status:false,msg:""});
        try{
         const response = await fetch(apiURL)
         const data =await response.json();
       
           setusersData(data);
           setloading(false);
            setisError({status:false, msg:""});
            if(response.status ===404){
                throw new Error('data not found');
            }
        }
        catch(error)
        {
 
          setloading(false);
          setisError({status:true, msg: error.message || "something went wrong,pls try again"});
        }
    };
    useEffect(()=>{
        fetchUsersData(URL);
    },[]);
    if(loading)
    {
        return(
            <div>
                <h3>loading...</h3>
            </div>
        );
    }
    if(isError?.status)
    {
        return(
        
            <div>
                <h3 style={{color:'red'}}>{isError?.msg}</h3>
            </div>
        )

    }
    return(
        <div>
        <h1>hdkdj</h1>
        <ul>
            {
                usersData.map((eachUser) => {
                    const { id, name, email}=eachUser;
                    return (
                    <li key={id}>
                        <div>{name}</div>
                        <div>{email}</div>
                    </li>
                    );
             } )  }
        
        </ul>
        </div>
    )
}
export default Final2;