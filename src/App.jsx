import { useState } from 'react'
import apiUrl from '../api'
import './App.css'

//components

 
import Main from './assets/layout/Main'

//-----------------------------------------------





function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Main/> 
    </>
  )
}


export default App
