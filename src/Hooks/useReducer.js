import React, { useEffect, useReducer, useState } from 'react'
import "./style.css"

const reducer =(state,action)=>{
    if(action.type ==="INCR"){
        state = state+1;

    }
    if(state>0 && action.type === "DECR"){
        state = state-1;
    }

    return state;

};

const UseReducer = () => {
    const initialData = 5;
    // const [myNum,setMyNum] = useState(initialData);
  

    //dispatch is used to trigger your reducer function, and inside reducer we have updated function 
   const[state,dispatch] =  useReducer(reducer,initialData);
    
  return (
  <>
  <div className="center_div">
    <p>{state}</p>
    <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
    </div>
    <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       DECR
    </div>
  </div>
  </>
  )
}

export default UseReducer
