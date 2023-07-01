import React from "react";

const Button =({children,clichandler})=>{
    console.log(`${children} rendered`);
    return <Button onClick={clichandler}>{children}</Button>;
};
export default React.memo(Button);