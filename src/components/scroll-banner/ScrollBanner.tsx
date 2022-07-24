import { useRef } from 'react'
import { useState } from 'react'
import './scroll-banner.css'

const ScrollBanner = () => {

  const [index, setIndex] = useState(0)

  const Roll = useRef(null)

  
  const onPrevClick = () => {
    (Roll.current as unknown as HTMLElement).children[0].classList.add('left')
  }

  return (
    <div className="scroll-banner">
      <div className="roll" ref={Roll}>
        <ul>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <span className='mask'></span>
              </div>
            </a>
            <a href='#' className='tit'>Humble Swag GT Mixtape</a>
            <a href='#' className='tit'>A Few Good Kids Records</a>
          </li>
        </ul>
      </div>
      <a onClick={onPrevClick} className="icon left"></a>
      <a className="icon right"></a>
    </div>
  )
}

export default ScrollBanner