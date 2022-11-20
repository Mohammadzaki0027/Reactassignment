import React from 'react'
import Styles from "../todo.modules.css"
const Todoitems = ({name,id,status,handletoggle,handledelet}) => {

  return (
    <div id='outer'>
  <div>{name}</div>
  <div>{status?"Done":"NotDone"}</div>
  <div><button onClick={()=>handledelet(id)}>Delet</button></div>
  <button onClick={()=>{handletoggle(id)}} className="btn">Toggle</button>
    </div>
  )
}

export default Todoitems