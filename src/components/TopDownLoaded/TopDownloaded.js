import  './TopDownloaded.scss';
import colors from '../../App/App.scss';
import { FaStar,FaDownload } from "react-icons/fa";

const TopDownloaded = (props) => {
  return (
    <>
        <div className='col-12 my-3'>
            <div className="row align-items-center TopCard px-md-2 px-0 m-0">
                <div className="col-lg-4 col-4 py-2 cardImg">
                    <img src={props.imgURL}/>
                </div>
                <div className="col-lg-5 col-6 pt-md-2">
                    <h5 className='m-0'>{props.title}</h5>
                    <p className='m-0 mb-1'>{props.subtitle}</p>
                    <h6 className='m-0'>
                        <span style={{color:colors.main_icon}}><FaStar/></span>  {props.rate}
                        <span className='ms-lg-1' style={{color:colors.primary_icon}}><FaDownload/> </span>{props.dowenload}
                    </h6>
                </div>
                <div className="circleDownload col-lg-3 col-2 mt-5 mx-auto">
                    <p>
                    <span className='ms-1 rounded-circle p-2 p-sm-3' style={{color:colors.primary_icon}}><FaDownload/> </span>
                    </p>
                </div>
            </div>
        </div>
        <hr className='py-0 m-auto bg-info'/>
    </>
  )
}

export default TopDownloaded
