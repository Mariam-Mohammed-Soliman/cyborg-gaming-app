import './FeaturedCard.scss';
import colors from '../../App/App.scss';
import { FaStar,FaDownload } from "react-icons/fa";
import Button from '../Buttons/Button';
const FeaturedCard = ( props) => {
  return (
    <div id='FeaturedCard' className='item m-auto'>
        <div className="card">

            <div className="cardImg">
                <img src={props.imgURL} className="w-100" />

                <div className='streamInfo'>
                    <Button btnName="2.4K Streaming" />
                </div>
            </div>

            <div className="cardBody py-3 text-capitalize row justify-content-between">

                <div className="cardTitle col-xl-7 col-sm-6 col-7">
                    <h5>{props.title}</h5>
                    <p>{props.subtitle}</p>
                </div>

                <div className="cardRate col-xl-5 col-sm-6 col-5">
                    <h6>
                        <span style={{color:colors.main_icon}}><FaStar/></span>  {props.rate}
                    </h6>
                    <h6>
                        <span style={{color:colors.primary_icon}}><FaDownload/> </span>{props.dowenload}
                    </h6>
                </div>

            </div>
        </div>
    </div>
  )
}

export default FeaturedCard;
