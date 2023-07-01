import React,{useState} from "react";



const Index2 =()=>{

//const initialobj={
 //   firstName:"anil",
 //   lastName:"kumar",
 //   age:24,
//}
/*const[firstName,setfirstName]=useState("ajay");
const[lastName,setlastName]=useState("pavan");
const[age,setage]=useState("43");*/



function initialData(){
    return{
        
            firstName:"anil",
            lastName:"kumar",
            age:24,
        
    };
}


const[data, setData]=useState(initialData)
   // firstName:"anil",
   // lastName:"kumar",+++++++++++
   // age:24,
//});

const chengeFirstName=()=>{
    setData({
        ...data,
        firstName:"ajay"
    });
}
    const chengeLastName=()=>{
        setData({
            ...data,
            lastName:"pavan"
        });
    }



    return(
    <div>
        <h1>my name is {data.firstName}</h1>
        <button onClick={chengeFirstName}>chenge firstNamename</button>
        <h1>my name is {data.lastName}</h1>
        <button onClick={chengeLastName}>chengelastName</button>
        <h1>age{data.age}</h1>
    </div>
    )
 
 }

 export default Index2;
