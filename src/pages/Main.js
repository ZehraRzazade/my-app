import React from "react"
import Navbar from "./Navbar"
import {useNavigate} from "react-router-dom"
export default function Main(){
   
      
    const navigate=useNavigate();
    return(
        <>
        <Navbar/>
        <h1>Currently in Main page</h1>
       
        <button onClick={()=>navigate("/about")}>Go to About</button>
        
        </>
        
    )
}
