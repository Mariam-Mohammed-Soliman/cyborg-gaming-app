import './Details.scss';
import DetailsHeader from '../../DetailsHeader/DetailsHeader';
import GameDetails from '../../GameDetails/GameDetails';
import OtherRelatedGames from '../../OtherRelatedGames/OtherRelatedGames';

const Details = () => {
  return (
    <>
      <DetailsHeader/>

      <GameDetails/>

      <OtherRelatedGames/>
    </>
  )
}

export default Details
