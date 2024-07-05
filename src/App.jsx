import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'

function App() {


  return (
    <>
       <Outlet></Outlet>
       <Footer></Footer>
    </>
  )
}

export default App
