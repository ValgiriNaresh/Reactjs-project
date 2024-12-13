import React, { useState } from "react";
 function Login(){

   var [data,setdata]= useState(0)
   var [d,setd]= useState(0)

   var submit=(event)=>{
    setdata(event.target.value)
   }
    return(
        <>
        <h1>WELCOME TO DELUXE HOTEL</h1>

        <form action="" onChange={submit}>
            <label htmlFor="">name:</label>
            <input type="text" />
            <br />
            <label htmlFor="">address:</label>
            <input type="text" />
            <br />
            <label htmlFor="">city:</label>
            <input type="text" />
            <br />
            <button>Book now</button>
        </form>
        </>
    )
 }
 export default Login;
