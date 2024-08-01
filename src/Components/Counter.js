import React, { useState } from "react";
import '../Components/Counter.css'

const Counter = ()=>{
const [ Counter,setCount] = useState(0)

    const increase = ()=>{
        setCount(Counter + 1); 
    }
    const decrease = ()=>{
        setCount(Counter - 1)
    }
    
    return(
       <div className="conatiner-fluid">
        <div className="maindiv container text-center my-5">
         <h2 className="my-3">Count: {Counter}</h2>
         <button onClick={increase} className="buttons mx-3 btn btn-success">+</button>
         <button onClick={decrease} className="buttons mx-3 btn btn-danger ">-</button>
        </div>
       </div> 
    )
}

export default Counter