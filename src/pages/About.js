import React from "react"
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar"
import {useNavigate} from "react-router-dom"
export default function About(){
     const navigator=useNavigate();
    return(
        <>
          <Navbar />
        <h1>Currently we are in About page</h1>
        <button  onClick={()=>navigator("/service")}>Go to Service</button>
        </>
    )
}