import React, { useState } from 'react'

function OnChange() {
let [Data,SetData]=useState("")
let [Option,SetOption]=useState("")
   function Submit(e)
   { e.preventDefault()
    console.log(Data)
    console.log(Option)
   
   } 
  return (
    <div>
        <form>
            <input type="text" value={Data} onChange={(e)=>SetData(e.target.value)}/>
            <select  value={Option} onChange={(e)=>{SetOption(e.target.value)}}>
                <option> high</option>
                <option>low</option>
                <option>mid</option>
            </select>
            <input type='submit'  onClick={Submit} />


        </form>

      
    </div>
  )
}

export default OnChange
