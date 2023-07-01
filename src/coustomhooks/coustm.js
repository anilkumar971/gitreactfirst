import { useEffect } from "react";

 function useCoustom (count){
    useEffect(()=>{
        document.title=`count -${count}`;
    },[count])
     
 };
 export default useCoustom;
