import  './TopStreamers.scss';
import { FaCheckCircle } from "react-icons/fa";
import Button from '../Buttons/Button';


const TopStreamers = (props) => {
  return (
    <>
        <div className='col-12 my-lg-4 my-1'>
            <div className="row align-items-center TopCard px-md-1 px-0">
                <div className="col-1">
                    <span>{props.topId} </span>
                </div>
                <div className="col-lg-2 col-2 cardImg">
                    <img src={props.imgURL}/>
                </div>
                <div className="col-lg-4 col-9 pt-md-2">
                    <p className='m-0 mb-1 streamerName'><FaCheckCircle/>{props.name}</p>
                </div>

                <div className='followBtn col-lg-4 col-12 mx-auto  p-0'>
                    <Button btnName="follow"/>
                </div>
            </div>
        </div>
        <hr className='py-0 m-auto bg-info'/>
    </>
  )
}

export default TopStreamers
