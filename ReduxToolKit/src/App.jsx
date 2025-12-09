import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return(
    <div className="flex flex-col items-center w-full">
  <h1 className="text-3xl font-bold mb-4">Hello</h1>

  <AddTodo />

  <div className="w-full p-4">
    <Todos />
  </div>
</div>


  )
}

export default App
