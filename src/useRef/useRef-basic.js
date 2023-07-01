import { useEffect, useRef, useState } from "react";

const First2 =()=> {

    const[firstName,setfirstName]=useState("");
    const renderCount=useRef(1);
    useEffect(()=>{
        renderCount.current=renderCount.current + 1;
    });
      return(
        <>
        <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e)=>{
            setfirstName(e.target.value);
        }
        }
        />
        <h5>Typing:{firstName}</h5>
        <h5>component renderd {renderCount.current} times</h5>
        </>
    );
};
export default First2;