import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/Home.jsx"
import Navbar from "../components/Navbar/Navbar.jsx";
import Myaccount from "../pages/Myaccount/Myaccount.jsx"
import Myorders from "../pages/Myorders/Myorders.jsx"
import Signin from "../pages/Signin/Signin.jsx"
import Notfound from "../pages/Notfound/Notfound.jsx"

function App() {
  let nombre = "Andres";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/my-account' element={<Myaccount />} />
        <Route exact path='/my-orders' element={<Myorders />} />
        <Route exact path='/sign-in' element={<Signin />} />
        <Route exact path='/*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
