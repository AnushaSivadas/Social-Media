import React,{ useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <div className='blur' style={{top:'-18%',right:'0'}}></div>
      <div className='blur' style={{top:'36%',left:'-8rem'}}></div> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>        
        </Routes>
    </div>
  )
}

export default App
