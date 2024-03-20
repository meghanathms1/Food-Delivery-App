import React from 'react'
import NavBar from './components/navbar/NavBar'
import {Route,Routes} from "react-router-dom"
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import PlaceOrder from './pages/placeorder/PlaceOrder'


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
       
      </Routes>
    </div>
  )
}

export default App