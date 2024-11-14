import  './GameDetails.scss';
import SpecificGameDetails from './../SpecificGameDetails/SpecificGameDetails';
import colors from '../../App/App.scss';
import { FaStar,FaDownload} from "react-icons/fa";
import { HiServer} from "react-icons/hi";
import { RiGamepadFill} from "react-icons/ri";
import details_01 from './../../Assets/images/details-01.jpg';
import details_02 from './../../Assets/images/details-02.jpg';
import details_03 from './../../Assets/images/details-03.jpg';
import Button from './../Buttons/Button';

const GameDetails = () => {
  return (
    <div id='GameDetails' className='mb-5'>
        <div className="fortniteHeader my-5">
            <h1 className='text-uppercase fw-bold text-center'>fortnite details</h1>
        </div>

        <div className="fortniteContent">

            <div className="row justify-content-between fortniteContentHead p-3 m-1">
                <div className="col-lg-6 col-12 m-lg-3 m-md-1 mx-0 my-2 row justify-content-between fortniteContentHeadText p-3">

                    <div className="col-3">
                        <h5>fortnite</h5>
                        <p>Sandbox</p>
                    </div>
                    <div className="col-3 cardRate">
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

                <div className="col-lg-6 col-12 m-lg-3 m-md-1 m-0  my-2 row justify-content-evenly p-3 text-center fortniteContentHeadRate">
                    <div className="col-2">
                        <p style={{color:colors.main_icon}}><FaStar/></p>
                        <p>4.8</p>
                    </div>

                    <div className="col-2">
                        <p style={{color:colors.primary_icon}}><FaDownload/></p>
                        <p>2.3M</p>
                    </div>

                    <div className="col-2">
                        <p style={{color:colors.primary_icon}}><HiServer/></p>
                        <p>36GB</p>
                    </div>

                    <div className="col-2">
                        <p style={{color:colors.primary_icon}}><RiGamepadFill/></p>
                        <p>Action</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-between fortniteContentBody p-4 m-1">
                <div className="col-lg-4  col-12"><img src={details_01}/></div>
                <div className="col-lg-4  col-12"><img src={details_02}/></div>
                <div className="col-lg-4  col-12"><img src={details_03}/></div>
            </div>

            <div className='fortniteContentBodyParagraph p-3 m-1'>
                <p className='mx-4'>
                Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a
                <span className='paragraphLink'>
                    small contribution via PayPal
                </span> 
                to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
                </p>
            
            </div>

            <div className='downloadNow mb-5'>
            <Button btnName="download fortnite now!"/>
            </div>
        </div>
    </div>
  )
}

export default GameDetails
