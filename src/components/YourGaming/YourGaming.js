import  './YourGaming.scss';
import LibraryCard from '../LibraryCard/LibraryCard';
import YourGamingData from '../Data/YourGamingData';
import SectionHeader from '../SectionHeader/SectionHeader'
import Button from '../Buttons/Button'
const YourGaming = () => {

    const libraryCards=YourGamingData.map((libraryCard)=>{
        return <LibraryCard key={libraryCard.id} imgURL={libraryCard.imgURL} title={libraryCard.title} subtitle={libraryCard.subtitle} date={libraryCard.date} hours={libraryCard.hours} current={libraryCard.current} />
    });

  return (
    <div id='YourGaming'>
      <div className='mostPopular'>
            <SectionHeader firstPart="your gaming" secondPart="library"/>

            <div className="sectionWrapper">
                <div className="row justify-content-between">
                {libraryCards}
                </div>
            </div>
        </div>

        <div className="discovrBtn mx-auto">
            <Button btnName="view your library"/>
        </div>

    </div>
  )
}

export default YourGaming
