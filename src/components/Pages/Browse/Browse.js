import FeaturedAndTop from '../../FeaturedAndTop/FeaturedAndTop'
import LiveStream from '../../LiveStream/LiveStream'
import MostPopularLiveStreamBrowse from '../../MostPopularLiveStreamBrowse/MostPopularLiveStreamBrowse'
import './Browse.scss'

const Browse = () => {
  return (
    <>
      <FeaturedAndTop/>

      <LiveStream/>

      <MostPopularLiveStreamBrowse/>
    </>
  )
}

export default Browse
