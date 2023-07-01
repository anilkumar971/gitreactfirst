import React, { useState } from "react";

const Index4 =()=>
{

 const[showData,setShowadta]=useState(false);

const handleChenge= ()=>{
    setShowadta(!showData);
};
    return  <div> 
       <button onClick={handleChenge}>{showData ? "hide":"show"}</button>
          {/*{showData &&(
        <div className="content">
            lorem yegrgfef  rtuj ur r urjriuw  ut r
            efufhfbefhjfndfnd  u bd df gfdkfhffaljigrig arie eekeijjf utj
             eeueufb  aaasjrj  rjir iwow jer o ewr  r i  
             euhuefh ereyrhebfryfuhrur rufhruyrhfjsfhryaabhuj fgf
        </div>
        )} */}
        {
            showData ?(
                <div>orem yegrgfef  rtuj ur r urjriuw  ut r
                efufhfbefhjfndfnd  u bd df gfdkfhffaljigrig arie eekeijjf utj
                 eeueufb  aaasjrj  rjir iwow jer o ewr  r i  
                 euhuefh ereyrhebfryfuhrur rufhruyrhfjsfhryaabhuj fgf
                 </div>
            ):
            (
                <h3>data is hidden</h3>
            )
        }
    </div>
};

export default Index4;