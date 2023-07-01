import  { useEffect, useMemo, useState } from "react";

const First4 =()=>{
const[number,setnumber]=useState(0);
const [dark,setdark]=useState(false);
const doublNumber =useMemo(() => {
    return slowFunction(number);
},[number]);

const themeChange =useMemo(()=>{
    return{
        backgroundColor:dark ? "black":"white",
        color:dark? "white":"black",
    };
},[dark]);

useEffect(()=>{
    console.log("theme changed");
},[themeChange]);

return(
    <>
    <div>
        <input
        type="number"
        name="number"
        id="number"
        value={number}
        onChange={(e)=>setnumber(Number(e.target.value))}
        />
    </div>
    <br />
    <div>
        <button onClick={()=>setdark(!dark)}>change theme
</button>   
</div>   

  <h2 style={themeChange}>the number:{doublNumber}</h2>
    
    </>
)
};
const slowFunction =(number)=>{
    for(let index =0;index<10000000;index++){}
    console.log("slow running");
    return number *2;
};
export default First4;