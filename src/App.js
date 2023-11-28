import React from 'react'
import Header from "./Components/Header/Header"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home/Home"
const App = () => {
  return (
    <> 
   <BrowserRouter>
   <Header/>

   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App