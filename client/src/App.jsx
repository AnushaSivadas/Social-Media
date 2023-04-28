import React,{ useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Login from './components/Login/Login'
import Register from './components/SignUp/Register'
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
