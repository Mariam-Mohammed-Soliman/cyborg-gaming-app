import './ProfileInfoFirstSec.scss';
import profilePicture from './../../Assets/images/profile.jpg';
import Button from '../Buttons/Button';
const ProfileInfoFirstSec = () => {
  return (
    <div id="ProfileInfoFirstSec" className='p-xl-4'>
      <div className="row">
        <div className="col-lg-4 p-5 p-lg-1 col-12">
            <img src={profilePicture} className="w-100" alt="profilePicture" />
        </div>
        <div className="col-lg-4 p-5 p-lg-3 col-12">
            <div className="offline my-5 mb-3 text-capitalize text-center">offline</div>
            <div className="h3 text-capitalize fw-bolder">alan smithee</div>
            <p className='profileDesc my-xl-4'>
                You Haven't Gone Live yet. Go Live By Touching The Button Below.
            </p>
            <div className="StartLiveStream">
                <Button btnName="start live stream"/>
            </div>
        </div>
        <div className="col-lg-4 col-12 statisticInfo">
            <div className="infoContent text-capitalize">
                <div className="row">
                    <div className="col-md-10">games downloaded</div>
                    <div className="col-md-2">3</div>
                </div>
                <div className="row">
                    <div className="col-md-10">friends online</div>
                    <div className="col-md-2">16</div>
                </div>
                <div className="row">
                    <div className="col-md-10">live streams</div>
                    <div className="col-md-2">none</div>
                </div>
                <div className="row ">
                    <div className="col-md-10">clips</div>
                    <div className="col-md-2">26</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileInfoFirstSec
