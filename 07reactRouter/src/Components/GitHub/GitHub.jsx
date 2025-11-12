import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
function GitHub(){

    // const [data,setData]=useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ronak1743')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // },[]);
    const data=useLoaderData();
    return(
        <>
            <div className="text-center mx-20 text-gray-500 font-bold text-3xl flex p-10 justify-center">
                <img src={data.avatar_url} alt="Git pic" width={300}/> 
                <div className="mx-10 text-left">GitHub Username : <span className="text-black">{data.login}</span>
                    <br />
                    GitHub Followers : <span className="text-black">{data.followers}</span>
                    <br />
                    GitHub Repos : <span className="text-black">{data.public_repos}</span>
                    <br/>
                    GitHub Bio:<span className="text-black">{data.bio}</span>
                </div>
            </div>
        </>
    )
}

export default GitHub

export  const getGitHubData= async()=>{
    const res=await fetch('https://api.github.com/users/ronak1743')
    return res.json();
}


// // src/Components/GitHub/GitHub.jsx
// import React from "react";
// import { useLoaderData } from "react-router-dom";

// function GitHub() {
//   const data = useLoaderData();

//   return (
//     <div className="text-center mx-20 text-gray-500 font-bold text-3xl flex p-10 justify-center">
//       <img src={data.avatar_url} alt="Git pic" width={300}/>
//       <div className="mx-10 text-left">
//         GitHub Username : <span className="text-black">{data.login}</span><br />
//         GitHub Followers : <span className="text-black">{data.followers}</span><br />
//         GitHub Repos : <span className="text-black">{data.public_repos}</span><br />
//         GitHub Bio : <span className="text-black">{data.bio}</span>
//       </div>
//     </div>
//   );
// }

// export default GitHub;

// // 👇 This must be outside the component and correctly exported
// export const getGitHubData = async () => {
//   const res = await fetch('https://api.github.com/users/octocat'); // use your username here
//   return res.json();
// };
