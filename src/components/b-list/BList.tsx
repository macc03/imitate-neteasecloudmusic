import './b-list.css'

interface BListProps {
  title: string,
  coverUrl: string
}

const BList = ({ title, coverUrl }: BListProps) => {
  return (
    <div className="b-list">
      <div className="top">
        <img src={coverUrl} />
        <div className='r-pd'>
          <h3>{title}</h3>
          <a className='icon icon-play'></a>
          <a className='icon icon-add'></a>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <span className='no no-top'>1</span>
            <a href="#">爱立刻有</a>
          </li>
          <li>
            <span className='no no-top'>2</span>
            <a href="#">周周</a>
          </li>
          <li>
            <span className='no no-top'>3</span>
            <a href="#">泉水</a>
          </li>
          <li>
            <span className='no'>4</span>
            <a href="#">我本将心向明月</a>
          </li>
          <li>
            <span className='no'>5</span>
            <a href="#">在你的身边</a>
          </li>
          <li>
            <span className='no'>6</span>
            <a href="#">一席之地</a>
          </li>
          <li>
            <span className='no'>7</span>
            <a href="#">Daylight</a>
          </li>
          <li>
            <span className='no'>8</span>
            <a href="#">礼拜日 Lise goes on</a>
          </li>
          <li>
            <span className='no'>9</span>
            <a href="#">Empty Love</a>
          </li>
          <li>
            <span className='no'>10</span>
            <a href="#">City Of Stars</a>
          </li>
          <li>
            <a href='#' className='more'>查看全部&gt;</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BList