import './LiveStream.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import LiveStreamData from'../Data/LiveStreamData';
import LiveStreamCard from '../LiveStreamCard/LiveStreamCard';
import Button from '../Buttons/Button';

const LiveStream = () => {
    const LiveStreamCards=LiveStreamData.map((LiveCard)=>{
            return <LiveStreamCard key={LiveCard.id} imgURL={LiveCard.imgURL} title={LiveCard.title} subtitle={LiveCard.subtitle}/>
    });
  return (
    <div id='LiveStreamSection' className=' my-5'>

        <div className="text-center">
            <SectionHeader firstPart="how to start your" secondPart="live stream"/>
        </div>

        <div className="row justify-content-between">
            {LiveStreamCards}
        </div>

        <div className='btnBrowseGo mx-auto my-5'>
        <Button btnName="GO TO Profile"/>
      </div>

    </div>
  )
}

export default LiveStream
