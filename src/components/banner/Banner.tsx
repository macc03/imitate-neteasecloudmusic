import './banner.css'
import { useEffect, useState } from 'react'

const Banner = () => {
  const [current, setCurrent] = useState<number>(0)
  const [state, setState] = useState<number>(1)

  const imageList = [
    require('../../assets/images/banner1.jpg'),
    require('../../assets/images/banner2.jpg'),
    require('../../assets/images/banner3.jpg'),
    require('../../assets/images/banner4.jpg'),
    require('../../assets/images/banner5.jpg')
  ]
  let timer: NodeJS.Timeout | null = null

  if (state) {
    timer = setTimeout(function callback() {
      if (current + 1 >= imageList.length) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 1500)
  } else {
    timer = null
  }


  return (
    <div className="banner" style={{ 'backgroundImage': `url(${imageList[current]})` }}>
      <div className="wrap">
        <div className="banner-img">
          <img onMouseOver={() => setState(0)} onMouseOut={() => setState(1)} src={imageList[current]} />
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