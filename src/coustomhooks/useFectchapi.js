import { useEffect, useState } from "react";


function useFetch(URL)
{
    const[data,setData]=useState([]);
    const[loading,setloading]=useState(false);
    const[isError, setisError]=useState(false);

    const makeApiCall=async()=>{
        setloading(true);
        setisError(false);
        try{

           const response=await fetch(URL) ;
           const compingData=await response.json();
           setData(compingData);
           setloading(false);

        }catch(error){
            setisError(true);
            setloading(false);

        }
    };
    useEffect(()=>{
        makeApiCall(URL);
    }, []);
    return [data,loading,isError];
}
export default useFetch;