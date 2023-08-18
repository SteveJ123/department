import { useState } from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';

function App() {  

  return (
    <>
     <BrowserRouter>
      <Routes>      
        <Route path="/"  element={<HomePage/>} />
        <Route path="/second-page" element={<SecondPage/>} />      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
