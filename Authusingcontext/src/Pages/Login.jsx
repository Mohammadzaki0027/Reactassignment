import React  from 'react'
import axios from "axios";
import Styles from "../components/comp.css"
import { useContext, useState } from "react";
import { AppContext } from "../context/Authcontext.jsx";
//import {axios} from 'axios'



const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=React.useState("")
  const [state, dispatch] = useContext(AppContext);
const handlesubmit=(e)=>{
e.preventDefault()
axios({
  url:"https://reqres.in/api/login",
  method:"POST",
  data:{
    email,
  password,
}
}).then((res)=>{
alert("sucesss")
console.log(res)
dispatch({
type:"LOGIN_SUCCESS",
token:res.data.token

})

}).catch((err)=>{
  console.log(err)
})








  

}
if (state.isAuth) {
  alert("unsucessfull")
  }
  return (
    <div>
      <form action="" id='formtag' onSubmit={handlesubmit}>
        Enter User Information
        <div >
          <input type="text" placeholder='enter email' value={email}  required onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="text" placeholder='enter password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
         <button type='submit' >submit</button>
        </div>
      </form>

    </div>
  )
}

export default Login