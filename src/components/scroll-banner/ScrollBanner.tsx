import './scroll-banner.css'

const ScrollBanner = () => {

  const onPrevClick = () => {

  }

  return (
    <div className="scroll-banner">
      <div className="roll">
        <ul className='cur'>
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
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src="	https://p3.music.126.net/mBWkuKXTHjme6pV26GNd4w==/109951167604112526.jpg?param=100y100" alt="" />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="cover">
                <img src='	https://p3.music.126.net/Z2qKcAdS0eAYrJuJMwa3VA==/109951167611690026.jpg?param=100y100' />
                <a className='mask' href="#"></a>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <a onClick={onPrevClick} className="icon left"></a>
      <a className="icon right"></a>
    </div>
  )
}

export default ScrollBanner