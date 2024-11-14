import './LiveStreamAndTopStreamers.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeaturedData from '../Data/FeaturedGamesData';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import TopStreamersData from '../Data/TopStreamersData';
import TopStreamers from '../TopStreamers/TopStreamers';

const LiveStreamAndTopStreamers = (props) => {
    const cards=FeaturedData.map((card)=>{
        return <FeaturedCard key={card.id} imgURL={card.imgURL} title={card.title} subtitle={card.subtitle} rate={card.rate} dowenload={card.dowenload} />
    });


    const TopStreamerscards=TopStreamersData.map((TopStreamersCard)=>{
        return <TopStreamers key={TopStreamersCard.id} topId={TopStreamersCard.id} imgURL={TopStreamersCard.imgURL} name={TopStreamersCard.name}/>
      });


    const options = {
        responsive: {
            0: {
                items: 1,
            },
            
            767: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1200: {
                items: 3,
      
            }
        },
      };

  return (
    <div id="LiveStreamAndTopStreamers" className='mb-5'>
      <div className=" LiveStreamAndTopStreamersContent row px-1 m-0 justify-content-around">
        <div className="col-lg-7">
        <SectionHeader firstPart="live" secondPart="streams"/>
        
        <OwlCarousel className='owl-theme mt-md-5' loop margin={30} nav dots={false} autoplay {...options}>
          {cards}
        </OwlCarousel>

        </div>
        <div className="col-lg-4">
        <SectionHeader firstPart="top" secondPart="streamers"/>

        <div className="sectionWrapperStreamers">
                <div className="row justify-content-between">
                {TopStreamerscards}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStreamAndTopStreamers
