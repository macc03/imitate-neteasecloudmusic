import { useState } from 'react'
import LoginDialog from '../login-dialog/LoginDIalog'
import './navbar.css'

const Navbar = () => {
  const [status, setStatus] = useState<boolean>(false)

  const openLoginDialog = () => {
    setStatus(true)
  }

  const closeLoginDialog = () => {
    setStatus(false)
  }

  return (
    <div className="nav-bar">
      <header>
        <h1 className="logo"></h1>
        <ul>
          <li><span><a className='active' href="#">发现音乐</a></span></li>
          <li><span><a href="#">我的音乐</a></span></li>
          <li><span><a href="#">关注</a></span></li>
          <li><span><a href="#">商城</a></span></li>
          <li><span><a href="#">音乐人</a></span></li>
          <li className='lst'>
            <span><a href="#">下载客户端</a></span>
            <sup className='hot'></sup>
          </li>
        </ul>
        <a href='javascript:void(0)' onClick={openLoginDialog} className='login'>登录</a>
        <a href='#' className='creator'>创作者中心</a>
        <div className="search">
          <span className="search-bg">
            <input type="text" placeholder='音乐/视频/电台/用户' />
          </span>
        </div>
      </header>
      {
        status
          ? <LoginDialog state={status} closeLoginDialog={closeLoginDialog} />
          : null
      }
    </div>
  )
}

export default Navbar