import MostPopularLiveStreamCard from '../MostPopularLiveStreamCard/MostPopularLiveStreamCard';
import SectionHeader from '../SectionHeader/SectionHeader';

import './MostPopularLiveStreamBrowse.scss';
 import PopularLiveStreamCardData from './../Data/PopularLiveStreamCardData.js';
import Button from './../Buttons/Button';
const MostPopularLiveStreamBrowse = () => {

    const PopularLiveStreamCards=PopularLiveStreamCardData.map((PopularLiveStreamCard)=>{
        return <MostPopularLiveStreamCard key={PopularLiveStreamCard.id} imgURL={PopularLiveStreamCard.imgURL} title={PopularLiveStreamCard.title} subtitle={PopularLiveStreamCard.subtitle} imgProfile={PopularLiveStreamCard.imgProfile} />
    });
  return (
    <>
      <div id='PopularLiveStream' className='mx-4 p-5'>

        <SectionHeader firstPart="most popular" secondPart="live stream"/>

        <div className="row justify-content-between mt-3">
          {PopularLiveStreamCards}
        </div>
        
      </div>
      <div className='discoverAll mx-auto mb-5'>
          <Button btnName="discover all streams "/>
        </div>
    </>
    
  )
}

export default MostPopularLiveStreamBrowse
