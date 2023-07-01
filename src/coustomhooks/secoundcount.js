import { useState } from "react";
import useCount from "./coustomcount";
const Secoundcount =()=>{
    const[count,increment,decrement,reset]=useCount();
    return(
        <div>
            <h1>Count =={count}</h1>
            <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            </div>
        </div>
        
    );
};
export default Secoundcount;