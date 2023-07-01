import React from "react";
import { useAuth } from "./Auth";
import {  Navigate } from "react-router-dom";
function Private({children}){
    const {user} =useAuth();
    if(!user){
        return<Navigate to="/login" />
    }
    return(
        children
    )
}
export default Private;