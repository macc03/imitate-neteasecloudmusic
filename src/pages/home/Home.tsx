import './home.css'
import Navbar from "../../components/navbar/Navbar"
import Nav from "../../components/nav/Nav"
import Banner from "../../components/banner/Banner"
import MTitle from "../../components/m-title/MTitle"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Nav />
      <Banner />
      <section className="main">
        <div className="mn-1">
          <MTitle title="热门推荐" >
            <div>
              <a href='#'>华语</a>
              <span className='line'>|</span>
              <a href='#'>流行</a>
              <span className='line'>|</span>
              <a href='#'>摇滚</a>
              <span className='line'>|</span>
              <a href='#'>民谣</a>
              <span className='line'>|</span>
              <a href="#">电子</a>
            </div>
          </MTitle>
          <div className="rm-list">
            {
              ['', '', '', '', '', '', '', ''].map((item, index) => <div className="rm-list-item" key={index}>
                <div className="rm-cover">
                  <img src='http://p2.music.126.net/xAlvsSAln2k2b7cmIqGvRQ==/109951165225268862.jpg?param=140y140' />
                  <div className="bottom">
                    <span className='icon-headset'></span>
                    <span className='num'>14664万</span>
                    <a title='播放' className='icon-play' href="#"></a>
                  </div>
                  <a className='tip' href="#">[民谣盛宴] 100首必
                    听欧美民谣
                  </a>
                </div>
              </div>)
            }
          </div>
          {/* <MTitle title='新碟上架' /> */}
        </div>
        <div className="mn-2">
          <div className="user-profile">
            <p>登录网易云音乐，可以享受无限收藏的
              乐趣，并且无限同步到手机
            </p>
            <input className='login-btn' type='button' value='用户登录' />
          </div>
          <div className="singer">
            <div className="top">
              <span>入驻歌手</span>
              <a href="#">查看全部&gt;</a>
            </div>
            <ul>
              <li>
                <a href='#'>
                  <div className="head">
                    <img src='https://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62' />
                  </div>
                  <div className='info'>
                    <h4>张惠妹aMEI</h4>
                    <p>台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
            </ul>
            <input className='singer-apply-btn' type='button' value='申请成为网易音乐人' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home