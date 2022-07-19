import './banner.css'
import { useEffect, useState } from 'react'

const Banner = () => {
  const [current, setCurrent] = useState<number>(0)

  const imageList = [
    require('../../assets/images/banner1.jpg'),
    require('../../assets/images/banner2.jpg'),
    require('../../assets/images/banner3.jpg'),
    require('../../assets/images/banner4.jpg'),
    require('../../assets/images/banner5.jpg')
  ]

  let timer = setTimeout(function callback() {
    if (current + 1 >= imageList.length) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }, 1500)

  const pauseShuffling = () => {
    clearInterval(timer)
  }

  useEffect(() => {

  }, [current])

  return (
    <div className="banner" style={{ 'backgroundImage': `url(${imageList[current]})` }}>
      <div className="wrap">
        <div className="banner-img">
          <img src={imageList[current]} />
          <div className="dots">
            {
              imageList.map((item, index) => <span className={`pg ${Number(current) === index ? 'active' : ''}`} key={index}></span>)
            }
          </div>
        </div>
        <a href="#">
          <div className="download">
          </div>
        </a>
      </div>
    </div>
  )
}

export default Banner