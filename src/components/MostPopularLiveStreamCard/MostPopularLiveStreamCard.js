import './MostPopularLiveStreamCard.scss';
import { FaCheckCircle,FaEye,FaGamepad } from "react-icons/fa";
const MostPopularLiveStreamCard = (props) => {
  return (
    <div id='PopularLiveStreamCard' className='col-lg-3 col-md-6 col-12 my-3'>
      <div className="popularStreamCardImg mb-3">
        <img src={props.imgURL} className=" w-100" alt="" />

        <div className="imgHover text-center">
          <div className="live p-1">
            <span>live</span>
          </div>

          <div className="rate">
            <div className="watch">
              <span><FaEye/></span>
              <span>1.2K</span>
            </div>

            <div className="game">
              <span><FaGamepad/></span>
              <span>CS-GO</span>
            </div>
          
          </div>
          
        </div>
      </div>

      <div className="popularStreamContent row  justify-content-between">
        <div className="profileImg col-2">
            <img src={props.imgProfile} className="rounded-circle" alt="" />
        </div>
        <div className="popularInfo col-9">
            <h6 className='mb-3'> 
            <FaCheckCircle/> 
            {props.title} 
            </h6>
            <h5>{props.subtitle}</h5>
        </div>
      </div>
    </div>
  )
}

export default MostPopularLiveStreamCard
