import './SpecificGameDetails.scss';
import colors from '../../App/App.scss';
import { FaStar,FaDownload} from "react-icons/fa";
const specificGameDetails = (props) => {
  return (
    <>
    <div className="row OtherRelatedCard py-5 px-2">
        <div className="col-3 col-xl-2 col-md-3 OtherCardImg">
            <img className='' src={props.gameImg} alt="" />
        </div>

        <div className="col-3 col-xl-4 col-md-3 pt-3">
            <h5>{props.gameName} </h5>
            <p>{props.gameParagraph} </p>
        </div>

        <div className="col-6  pt-3 cardRate">
            <h6>
                <span> 4.8</span>
                <span style={{color:colors.main_icon}}><FaStar/></span>
            </h6>
            <h6>
                <span>2.3M</span>
                <span style={{color:colors.primary_icon}}><FaDownload/></span>
            </h6>
        </div>
    </div>

    
    </>
  )
}

export default specificGameDetails
