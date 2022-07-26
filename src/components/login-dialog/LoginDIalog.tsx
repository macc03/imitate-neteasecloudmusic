import { useState } from 'react'
import './login-dialog.css'

interface LoginDialogProps {
  state: boolean,
  closeLoginDialog: () => void,
}

const LoginDialog = ({ state, closeLoginDialog }: LoginDialogProps) => {
  return (
    <div className="login-dialog">
      <div className="header">
        登录
        <i onClick={closeLoginDialog} className='icon-close'></i>
      </div>
      <div className="code-login">
        <img src={require('../../assets/images/phone.png')} width='125' height='220' alt="" />
        <div>
          <span className='s-login'>扫码登录</span>
          <img src={require('../../assets/images/二维码.png')} width='143' height='143' alt="" />
          <p>使用<a href='#'>网易云音乐APP</a>扫码登录</p>
        </div>
      </div>
      <input type='button' value='使用其他方式登录' />
    </div>
  )
}

export default LoginDialog