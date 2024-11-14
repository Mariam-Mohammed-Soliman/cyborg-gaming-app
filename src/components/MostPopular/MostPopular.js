import './MostPopular.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import Card from '../Card/Card'
import Button from '../Buttons/Button'

import MostPopularData from '../Data/MostPopularData';

const MostPopular = () => {
        const cards=MostPopularData.map((card)=>{
            return <Card key={card.id} imgURL={card.imgURL} title={card.title} subtitle={card.subtitle} rate={card.rate} dowenload={card.dowenload} />
        });
    
  return (
    <div id='MostPopularComponent'>
        <div className='mostPopular'>
            <SectionHeader firstPart="most popular" secondPart="right now"/>

            <div className="sectionWrapper">
                <div className="row justify-content-between">
                {cards}
                </div>
            </div>
        </div>

        <div className="discovrBtn mx-auto">
            <Button btnName="Discover popular"/>
        </div>

    </div>
  )
}

export default MostPopular
