import './home.css'
import Navbar from "../../components/navbar/Navbar"
import Nav from "../../components/nav/Nav"
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Nav />
      <Outlet />
    </div>
  )
}

export default Home