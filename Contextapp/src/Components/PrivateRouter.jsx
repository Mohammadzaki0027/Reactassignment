import React from 'react'

import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
 const {auth}=useContext(AuthContext)
console.log("private",auth);


 if(!auth.status)
 {
return <Navigate to="/login"/>
 }
  return children
    
  
}

export default PrivateRoute