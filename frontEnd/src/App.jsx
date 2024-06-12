import { useState } from 'react';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";

import './App.css'

function App() {
  

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Signup/> */}
      <Home/>
    </div>
  );
}

export default App
