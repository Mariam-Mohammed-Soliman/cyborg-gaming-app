import Button from '../Buttons/Button';
import  './LibraryCard.scss';

const LibraryCard = (props) => {
  return (
    <div className='col-12 cardGameWrapper my-3 mx-lg-2'>

      <div className="row align-items-center cardLibrary pt-5 pt-md-3 py-xl-4 px-2">
        <div className="col-lg-2 col-sm-6 col-12 py-2 cardImg">
          <img src={props.imgURL} className="" />
        </div>
        <div className="col-lg-2 col-sm-6 col-6 py-md-1">
          <h5>{props.title}</h5>
          <p>{props.subtitle}</p>
        </div>
        <div className="col-lg-2 col-sm-6 col-6 py-md-1">
          <h5>date added</h5>
          <p>{props.date}</p>
        </div>
        <div className="col-lg-2 col-sm-6 col-6 py-md-1">
          <h5>hours plays</h5>
          <p>{props.hours}</p>
        </div>
        <div className="col-lg-2 col-sm-6 col-6 py-md-1">
          <h5>currently</h5>
          <p>{props.current}</p>
        </div>
        <div className="col-lg-2 col-sm-6 py-md-1 primaryBtn">
          <Button btnName="dowenloaded"/>
        </div>
      </div>
      
    </div>
  )
}

export default LibraryCard
