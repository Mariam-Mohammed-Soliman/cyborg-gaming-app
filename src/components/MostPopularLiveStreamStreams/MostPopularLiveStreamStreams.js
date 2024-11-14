import MostPopularLiveStreamCard from '../MostPopularLiveStreamCard/MostPopularLiveStreamCard'
import './MostPopularLiveStreamStreams.scss'
import PopularLiveStreamStreamsPageData from './../Data/PopularLiveStreamStreamsPageData.js';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from './../Buttons/Button';

const MostPopularLiveStreamStreams = () => {

    const PopularLiveStreamCards=PopularLiveStreamStreamsPageData.map((PopularLiveStreamCard)=>{
        return <MostPopularLiveStreamCard key={PopularLiveStreamCard.id} imgURL={PopularLiveStreamCard.imgURL} title={PopularLiveStreamCard.title} subtitle={PopularLiveStreamCard.subtitle} imgProfile={PopularLiveStreamCard.imgProfile} />
    });
  return (
    <>
      <div id='PopularLiveStream' className='mx-4 p-5'>

<SectionHeader firstPart="most popular" secondPart="live stream"/>

<div className="row justify-content-between mt-3">
  {PopularLiveStreamCards}

  {PopularLiveStreamCards}
</div>

</div>
<div className='discoverAll mx-auto mb-5'>
  <Button btnName="load more streams "/>
</div>
    </>
  )
}

export default MostPopularLiveStreamStreams
