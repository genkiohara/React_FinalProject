import "./header.css"

export default function header() {
  return (
  <div className='header'>
      <div className="headerTitles">
          <span className="headerTitleSm">about a Journey</span>
          <span className="headerTitleLg">Vancouver</span>
      </div>
      <img className="headerImg" src={`${process.env.PUBLIC_URL}/image/IMG_7511.jpg`} alt="" />
  </div>
  )
}
