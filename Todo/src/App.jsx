import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styles from "./todo.modules.css"
import Todo from './components/Todo'
function App() {


  return (
    <div className="App">
     <div id='Navbar'>Todo App</div>
     <Todo></Todo>
    </div>
  )
}

export default App
