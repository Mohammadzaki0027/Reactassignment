import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Login from './Login'
import User from "./User"
import Users from "./Users"
import Home from "./Home"
const Allroutes = () => {
  return (
    <div>
        <Navbar></Navbar>
<Routes>
 <Route path='/' element={<div><Home></Home></div>}></Route>
    <Route path='/User' element={<div><User></User></div>}></Route>
<Route path="/users" element={<div><Users></Users></div>}></Route>
    <Route path="/login" element={<div><Login></Login></div>}></Route>
</Routes>

    </div>
  )
}

export {Allroutes}