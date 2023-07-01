import React, { useEffect, useState } from "react";
import useCoustom from "./coustm";

const Page1 =()=> {
    const [count,setcount]=useState(0);

   useCoustom(count);

    
    return(
       <div>
        <button onClick={()=>setcount(count+1)}>count-{count}</button>
       </div>
    );
    };
    export default Page1;