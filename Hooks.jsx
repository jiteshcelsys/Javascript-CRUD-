import React,{useState,useEffect} from 'react'
import UsePrevious from './CustomHooks/UsePrevious'
function Hooks() {
    let [data,setData]=useState(21);
    let[value]=UsePrevious(data)
    let DataUpdate=()=>[
        setData(data-1 )
    ]
  return (
    <div>
        {/* <h1>Previous Age:{value}</h1>
        <button onClick={DataUpdate}></button>
        <h1>current Age:{data}</h1>
      */}
      <h1>hello</h1>
    </div>
  )
}

export default Hooks
