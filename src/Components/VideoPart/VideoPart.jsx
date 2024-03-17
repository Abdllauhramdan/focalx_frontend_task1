import './VideoPart.css'
import videoframe from '/video-frame.jpg'
const VideoPart = () => {
  return (
    <div>
      <div className="htwoandsix">
        <h6>VIDEO VIEW</h6>
        <h2>Get Closer View &<br/> Different Feeling</h2>
      </div>
      <div className="videocontent">
        <img className='myimg' src={videoframe} />
        <a className='alink' href='https://youtube.com'><i className='fa fa-play'></i></a>
      </div>
    </div>
  )
}

export default VideoPart
