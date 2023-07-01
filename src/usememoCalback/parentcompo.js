import React, { useCallback, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

 


const ParenCampo =()=>{
    const [age, setage]=useState(0);
    const [salary, setsalary] =useState(7000);

    const incrementage =useCallback(()=>{
        setage(age+1);
    },[age]);

const incrementsalary=useCallback(()=>{
    setsalary(salary+1000);
},[salary]);

return(
    <>
    <Title />
    <Count text={"age"} number={age} />
    <Button clickhandler={incrementage}>increment age</Button>
    <Count text={"salary"}number={salary}/>
    <Button clickhandler={incrementsalary}>increment salary</Button>
    
    </>
);

};
export default ParenCampo;