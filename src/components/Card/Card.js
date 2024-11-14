import './Card.scss';
import colors from '../../App/App.scss';
import { FaStar,FaDownload } from "react-icons/fa";
const Card = ( props) => {
  return (
    <div className='cardWrapper my-3 col-lg-3 col-md-6 mx-lg-2'>
        <div className="card pt-5 pt-md-3 pt-xl-4 px-2">

            <div className="cardImg">
                <img src={props.imgURL} className="w-100" />
            </div>

            <div className="cardBody py-3 text-capitalize row justify-content-between">

                <div className="cardTitle col-xl-7 col-sm-6 col-7">
                    <h5>{props.title}</h5>
                    <p>{props.subtitle}</p>
                </div>

                <div className="cardRate col-xl-5 col-sm-6 col-5">
                    <h6><span style={{color:colors.main_icon}}><FaStar/></span>  {props.rate}</h6>
                    <h6> <span style={{color:colors.primary_icon}}><FaDownload/> </span>{props.dowenload}</h6>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card
