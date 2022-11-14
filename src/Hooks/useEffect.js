import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {
    const initialData = 5;
    const [myNum,setMyNum] = useState(initialData);
    useEffect(()=>{
       document.title = `Chats(${myNum})`
    });
    
  return (
  <>
  <div className="center_div">
    {/* <h3>useEffect</h3> */}
    <p>{myNum}</p>
    <div className="button2" onClick={()=>setMyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
    </div>
  </div>
  </>
  )
}

export default UseEffect
