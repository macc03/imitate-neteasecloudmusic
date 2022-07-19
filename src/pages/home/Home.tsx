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
        </div>
        <div className="mn-2">

        </div>
      </section>
    </div>
  )
}

export default Home