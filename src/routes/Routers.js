import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AllFood from '../pages/AllFood'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDetails from '../pages/FoodDetails'
import Home from '../pages/Home'
import Login from '../auth/Login'
import Register from '../auth/Register'


const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={ <Navigate to='/home'/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/foods' element={<AllFood />} />
          <Route path='/foods/:id' element={<FoodDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register/> } />     
      </Routes>
  )
}
export default Routers