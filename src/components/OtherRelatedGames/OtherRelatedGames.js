import './OtherRelatedGames.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import SpecificGameDetails from './../SpecificGameDetails/SpecificGameDetails';
import OtherGame_01 from './../../Assets/images/popular-05.jpg';
import OtherGame_02 from './../../Assets/images/game-03.jpg';
import OtherGame_03 from './../../Assets/images/game-03.jpg';
import OtherGame_04 from './../../Assets/images/game-02.jpg';
import OtherGame_05 from './../../Assets/images/game-02.jpg';
import OtherGame_06 from './../../Assets/images/popular-05.jpg';
const OtherRelatedGames = () => {
  return (
    <>
    <div id='OtherRelatedGames' className='px-4 mb-5'>
        <div className="OrherHeader py-5">
            <SectionHeader firstPart="other related" secondPart="games"/>
        </div>

        <div className='row justify-content-between'>
            <div className="col-12 col-lg-6">
                <SpecificGameDetails gameImg={OtherGame_01} gameName="Dota 2" gameParagraph="Sandbox"/>
            </div>
            <div className="col-12 col-lg-6">
                <SpecificGameDetails gameImg={OtherGame_02} gameName="Dota 2" gameParagraph="Sandbox"/>
            </div>
            <hr className='py-0 m-auto bg-info'/>
            <div className="col-12 col-lg-6">
                <SpecificGameDetails gameImg={OtherGame_03} gameName="Dota 2" gameParagraph="Sandbox"/>
            </div>
            <div className="col-12 col-lg-6">
                <SpecificGameDetails gameImg={OtherGame_04} gameName="Dota 2" gameParagraph="Sandbox"/>
            </div>
            <hr className='py-0 m-auto bg-info'/>
            <div className="col-12 col-lg-6">
                <SpecificGameDetails gameImg={OtherGame_05} gameName="Dota 2" gameParagraph="Sandbox"/>
            </div>
            <div className="col-12 col-lg-6">
                <SpecificGameDetails gameImg={OtherGame_06} gameName="Dota 2" gameParagraph="Sandbox"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default OtherRelatedGames
