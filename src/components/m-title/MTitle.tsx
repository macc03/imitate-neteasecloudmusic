import './m-title.css'
interface MTitleProps {
  title: string,
  to?: string,
  children?: JSX.Element,
  [prop: string]: any
}

const MTitle = ({ title, children, style }: MTitleProps) => {
  return (
    <div className="m-title" style={style}>
      <a className="title" href="#" >{title}</a>
      <div className='categories'> 
      {
        children ?
          children :
          null
      }
      </div>
      <span className='more'>
        <a href="#">更多</a>
        <i className='m-bg'>&nbsp;</i>
      </span>
    </div>
  )
}

export default MTitle