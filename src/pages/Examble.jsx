// import React from 'react'
import React,{useState,useCallback} from 'react'
const Examble = () => {
    const [count,setCount]=useState(0);
    const updateCount=useCallback(()=>{
        setCount(prevCount=>prevCount+1)
    },[]);
  return (
    <button onClick={updateCount}>Clickme({count})</button>
  )
}

export default Examble