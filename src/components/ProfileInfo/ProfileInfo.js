import './ProfileInfo.scss';
import ProfileInfoFirstSec from '../ProfileInfoFirstSec/ProfileInfoFirstSec';
import MostPopularClips from '../MostPopularClips/MostPopularClips';

const ProfileInfo = () => {
  return (
    <div id="ProfileInfo" className='my-3 p-3'>
      
      <ProfileInfoFirstSec/>


      <MostPopularClips/>

    </div>
  )
}

export default ProfileInfo
