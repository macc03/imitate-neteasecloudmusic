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
              ['', '', '', '', '', '', '', ''].map(() => <div className="rm-list-item">
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
        </div>
        <div className="mn-2">

        </div>
      </section>
    </div>
  )
}

export default Home