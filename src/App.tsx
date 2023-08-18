import { Route, BrowserRouter, Routes } from 'react-router-dom';

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
