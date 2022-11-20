import axios from 'axios'
import React, { useEffect } from 'react'
import Styles from "../components/comp.css"
const Users = () => {

const[data,setData]=React.useState([])

useEffect(()=>{
axios({
  url:"https://reqres.in/api/users",
  method:'GET',

}).then((res)=>{
 // console.log(res.data)
 //console.log(res.data.data)
  setData(res.data.data)
}).catch((err)=>{
  console.log(err)
})
})






  return (
    <div>
      Users Data list
{data.map((item)=>(
  <div key={item.id} id="divid">
    <div id="imageuser">
      <img src={item.avatar} alt=""/>
    
    
    </div>
 
    <p>First name:  {item.first_name}</p>
  </div>
))}












    </div>
  )
}

export default Users