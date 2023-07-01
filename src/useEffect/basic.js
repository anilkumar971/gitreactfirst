import { useEffect, useState } from "react";

const Final =()=>{

const [count,setcount]=useState(0);

    useEffect(()=>{
        console.log("helo iam cominfg from use effect",count);
    }, []);
    return(
        <div>
        <h1>learn useEffect</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1);
        }}>+</button>
        </div>
    )

}
export default Final;