import { useEffect, useState } from "react";

const Final =()=>{

const [count,setcount]=useState(0);
//const[toggle, settoggle]=useState(true);
const [pagewidth, setpagewidth]=useState(window.innerWidth);

    useEffect(()=>{
       const resizeHandler= () =>{
        setpagewidth(window.innerWidth);
    }
    window.addEventListener("resize" ,resizeHandler);
        console.log("helo iam cominfg from use effect",count);

        return ()=>{
            console.log("iam removing");
            window.removeEventListener("resize",resizeHandler);
        }
        
    });
    return(
        <div>
        <h1>learn useEffect</h1>
        <h1>{pagewidth}</h1>
        {/* <h1 onClick={()=>settoggle(!toggle)}>{toggle ? "open" : "close"}</h1> */}
        <h1 >{count}</h1>
        <button onClick={()=>{
            setcount(count+1);
        }}>+</button>
      
        </div>
    )

}
export default Final;