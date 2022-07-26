import './nav.css'

const Nav = () => {
  return (
    <div className='subnav'>
      <div className="wrap">
        <ul className="nav">
          <li> <a href="/" className='active'><em>推荐</em></a></li>
          <li> <a href="toplist"><em>排行榜</em></a></li>
          <li> <a href="#"><em>歌单</em></a></li>
          <li> <a href="#"><em>主播电台</em></a></li>
          <li> <a href="#"><em>歌手</em></a></li>
          <li> <a href="#"><em>新碟上架</em></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav