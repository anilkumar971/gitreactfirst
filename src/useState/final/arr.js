import { fireEvent } from "@testing-library/react";
import React,{useState} from "react";

const Index3 =()=>{

const intialArray=[
    {
        id:"jdheufh",
        firstName:"anil",
        lastName:"kumar",
        age:22

    },
    {
        id:"jhfdu",
        firstName:"pavan",
        lastName:"arjun",
        age:33
    }
]
  const[data,setData]=useState(intialArray)

  const handleDelete=(comingid)=>{
    console.log(data);
  }


    return (
      <div >
       <ul>
        {  data.map((eachItem, index) => {
                const {firstName,lastName,age,id}=eachItem;
                return(
                    <li key={index}>
                    <div>firstName<strong>{firstName}</strong></div>
                    <div>lastName:{lastName}</div>
                    <div>age:{age}</div>
                    <button onClick={()=>handleDelete(id)}>delete me</button>
                    </li>
                );
          })
        }
       </ul>
       
      </div>
    );
  }
  
  export default Index3 ;