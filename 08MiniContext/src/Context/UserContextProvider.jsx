import React, { Children, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    let [user,setuser]=useState(null);
    return(
        <UserContext.Provider value={{user,setuser}}>
            {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider;
