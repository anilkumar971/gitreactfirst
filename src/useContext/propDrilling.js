
import Childcomponent from "./childcomponent";

 




 const Parentcomponent =()=>{
   
    return(
        <div>
        <h1>Parentcomponent</h1>
        <Childcomponent  />
        </div>
    );
 };
 

 /*const Childcomponent =(props)=>{
    return(
        <div>
        <h1>childcomponent</h1>
        <Subchildcomponent  userDetailes={props.userDetailes}/>
        </div>
    );
 };*/
 /*const Subchildcomponent =({userDetailes})=>{
    return(
        <div>
        <h1>Subchildcomponent</h1>
        <div>name:{userDetailes.firstName}</div>
        <div>name:{userDetailes.lastName}</div>
        <div>name:{userDetailes.email}</div>
        </div>
    );
 };*/
 export default Parentcomponent;