import React from 'react'
import Register from './Register'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Todolist from './Todolist'
const App = () => {
  return (
    <div className='app'>  
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/todolist' element={<Todolist/>}/>
      </Routes>
    </div>
  )
}

export default App