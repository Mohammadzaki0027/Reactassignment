import React from 'react'

const Todoitem = ({data,handledelete,handltoggle}) => {
console.log(data)
  return (
    <div style={{display:'flex',gap:"2rem",justifyContent:"space-around"}}>

<div>
    {data.id}
</div>
<div>
    {data.title}
</div>
<button onClick={()=>handltoggle(data.id,!data.status)}>{data.status?"Done":"NotDone"}</button>
<button onClick={()=>handledelete(data.id)}>Delet</button>
    </div>


  )
}

export default Todoitem