import Subchildcomponent from "./subchildcomponent";

const Childcomponent =(props)=>{
    return(
        <div>
        <h1>Childcomponent</h1>
        <Subchildcomponent  />
        </div>
    );
 };
  export default Childcomponent;