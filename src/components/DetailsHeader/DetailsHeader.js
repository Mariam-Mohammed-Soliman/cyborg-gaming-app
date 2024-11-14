import './DetailsHeader.scss';
import featureLeft from './../../Assets/images/feature-left.jpg';
import featureRight from './../../Assets/images/feature-right.jpg';
import {FaPlay} from  "react-icons/fa";

const DetailsHeader = () => {
  return (
    <div id='DetailsHeader' className='row justify-content-between mb-5'>

        <div className="col-lg-4 col-12 mb-5">
            <img src={featureLeft} alt="" className='w-100' />
        </div>

        <div className="col-lg-8 col-12">
            <img src={featureRight} alt=""  className='w-100' />

            <div className="videoLink">
                <a href='https://youtu.be/r1b03uKWk_M' target="_blank">
                <FaPlay/>
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default DetailsHeader
