import SectionHeader from '../SectionHeader/SectionHeader';
import './MostPopularClips.scss';
import MostPopularClipsData from '../Data/MostPopularClipsData';
import CardMostPopularClips from '../CardMostPopularClips/CardMostPopularClips';

const MostPopularClips = () => {
    const cardClips=MostPopularClipsData.map((cardClip)=>{
        return <CardMostPopularClips key={cardClip.id} imgURL={cardClip.imgURL} title={cardClip.title} rate={cardClip.rate} />
    });
  return (
    <div id="MostPopularClips" className="my-5 mx-3">
      <SectionHeader firstPart="your most popular" secondPart="clips"/>

      <div className="sectionWrapper">
                <div className="row justify-content-between">
                {cardClips}
                </div>
            </div>
    </div>
  )
}

export default MostPopularClips
