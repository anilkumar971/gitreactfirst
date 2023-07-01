import { useEffect, useRef, useState } from "react";

const First3 =()=> {

    const[firstName,setfirstName]=useState("");
    const inputDom=useRef("");
    useEffect(()=>{
        console.log(inputDom);
    });
    const focus=()=>{
        inputDom.current.focus();
    };
      return(
        <>
        <input
        ref={inputDom}
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e)=>{
            setfirstName(e.target.value);
        }
        }
        />
        <h5>Typing:{firstName}</h5>
        <button onClick={focus}>focus</button>
        </>
    );
};
export default First3;