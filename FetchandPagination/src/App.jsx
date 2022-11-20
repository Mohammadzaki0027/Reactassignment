import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <div className="App">
<Addtodo></Addtodo>
<Todo></Todo>
    </div>
  )
}

export default App
