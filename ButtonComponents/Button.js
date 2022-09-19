import React from 'react'
import '../ButtonComponents/Button1.scss'
function Button({children,type,BtnFunc}) {
    
    let localClass="primary"
    if(type==="primary")
    {
       localClass="primary"
    }
    if(type==="disabled")
    {
        localClass="disabled"
    }
  const cls=`${localClass}`
 function Console()
 {
    console.log( 'its working')
 }


  return (
    <div className='btn'>
      <button className={cls} onClick={Console}>{children} </button>
    </div>
  )
}

export default Button
