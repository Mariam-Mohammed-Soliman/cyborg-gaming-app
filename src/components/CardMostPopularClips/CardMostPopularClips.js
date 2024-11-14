import './CardMostPopularClips.scss';
import colors from '../../App/App.scss';
import {FaEye,FaPlay} from "react-icons/fa";
const CardMostPopularClips = (props) => {
  return (
    <div className='cardWrapper my-3 col-lg-3 col-md-6 mx-lg-2'>
        <div className="card pt-5 pt-md-3 pt-xl-4 px-2">

            <div className="cardImg">
                <img src={props.imgURL} className="w-100" />

                <div className="videoLink">
                <a href='https://youtu.be/r1b03uKWk_M' target="_blank">
                <FaPlay/>
                </a>
            </div>
            </div>

            <div className="cardBody py-3 text-capitalize row justify-content-between">

                <div className="cardTitle col-xl-7 col-sm-6 col-7">
                    <h5>{props.title}</h5>

                </div>

                <div className="cardRate col-xl-5 col-sm-6 col-5">
                    <p> {props.rate}<span style={{color:colors.primary_icon}}><FaEye/> </span></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CardMostPopularClips
