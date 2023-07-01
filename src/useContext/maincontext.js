import React from "react";


const initialState ={
    firstName:'anil',
    lastName:'kumar',
    email:'anil@.com'
}

export const UserContext=React.createContext();

 export const UserContextProvider=({Children})=>{
    return (
    <UserContext.Provider value={initialState}>
        {Children}
    </UserContext.Provider>
    );
};