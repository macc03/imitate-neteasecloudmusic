import './home.css'
import Navbar from "../../components/navbar/Navbar"
import Nav from "../../components/nav/Nav"
import LoginDialog from '../../components/login-dialog/LoginDIalog'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Nav />
      <Outlet />
      <LoginDialog />
    </div>
  )
}

export default Home