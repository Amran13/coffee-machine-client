import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
