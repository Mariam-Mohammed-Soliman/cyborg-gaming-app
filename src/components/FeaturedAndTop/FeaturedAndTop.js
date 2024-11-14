import SectionHeader from '../SectionHeader/SectionHeader';
import './FeaturedAndTop.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';
import FeaturedData from '../Data/FeaturedGamesData';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import TopDownloadData from '../Data/TopDownloadData';
import TopDownloaded from '../TopDownLoaded/TopDownloaded';
const FeaturedAndTop = (props) => {
  
  const cards=FeaturedData.map((card)=>{
    return <FeaturedCard key={card.id} imgURL={card.imgURL} title={card.title} subtitle={card.subtitle} rate={card.rate} dowenload={card.dowenload} />
});

const TopDownloadedCards=TopDownloadData.map((TopDownloadedCard)=>{
  return <TopDownloaded key={TopDownloadedCard.id} imgURL={TopDownloadedCard.imgURL} title={TopDownloadedCard.title} subtitle={TopDownloadedCard.subtitle} rate={TopDownloadedCard.rate} dowenload={TopDownloadedCard.dowenload}/>
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
    
    <div id='FeaturedAndTopComponent'>
      <div className="row px-1 m-0 justify-content-around">
        <div className="col-lg-7">
        <SectionHeader firstPart="featured" secondPart="games"/>
        
        <OwlCarousel className='owl-theme mt-md-5' loop margin={30} nav autoplay {...options}>
          {cards}
        </OwlCarousel>

        </div>
        <div className="col-lg-4">
        <SectionHeader firstPart="top" secondPart="downloaded"/>

        <div className="sectionWrapper">
                <div className="row justify-content-between">
                {TopDownloadedCards}

                <div className="viewGames col-12 text-center my-3 mt-md-4">
                  <NavLink to="/Browse">View All Games</NavLink>
              </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedAndTop
