import { useState } from 'react'
import './App.css'
import MyForms from './components/forms/MyForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyForms />
    </>
  )
}

export default App
