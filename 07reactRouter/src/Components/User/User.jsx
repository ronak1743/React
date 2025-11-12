import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {uid}=useParams();
    return(
        <h1 className="p-5 mx-30 text-center text-gray-500 font-bold text-3xl">User : {uid}</h1>
    )
}

export default User