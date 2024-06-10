import { useState } from 'react';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";

import './App.css'

function App() {
  

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Signup/>
    </div>
  );
}

export default App
