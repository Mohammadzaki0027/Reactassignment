import React from 'react'

const AddTodo = ({handleclick}) => {
  const[text,setText]=React.useState("")
  
    return (
    <div>

        <input type="text" placeholder='enter todo'  onChange={(e)=>{
          setText(e.target.value)
        }}/>
        <button onClick={()=>handleclick(text)}>Add Todo</button>
    </div>
  )
}

export default AddTodo