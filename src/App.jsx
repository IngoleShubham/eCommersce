import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  // window.querySelector('body').backgroundColor = '#fff'
  // document.body.style.backgroundColor = "#fff"
  // document.body.style.color = "#000"
  // document.getElementByClassName('card').style.backgroundColor = "#000"
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
      </>
  )
}
