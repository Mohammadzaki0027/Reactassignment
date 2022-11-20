import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import FormDetail from './components/FormDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Form></Form>

<div><FormDetail></FormDetail></div>
    </div>
  )
}

export default App
