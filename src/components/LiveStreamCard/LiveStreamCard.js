import './LiveStreamCard.scss';

const LiveStreamCard = (props) => {
  return (
    <div className='LiveStreamCard col-lg-3 col-12 mt-5 p-4'>
      <div className="StreamCardImg mb-3">
        <img src={props.imgURL} className="rounded-circle" alt="" />
      </div>

      <div className="streamContent">
        <h5 className='mb-3 fw-bold'> {props.title} </h5>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default LiveStreamCard
