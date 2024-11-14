import './Header.scss';
import logo from '../../Assets/images/logo.png';
import profileHeader from'../../Assets/images/profile-header.jpg';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <section id="HeaderComponent">
      <nav className="navbar navbar-expand-lg py-xl-2 mx-lg-0">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="logo"/>
    </NavLink>
    <button className="navbar-toggler border-0 fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="input-group-lg search">
        <input type="text" className="form-control border-0 rounded-pill" placeholder="&#xF002; &nbsp; type something"/>
      </div>
      <ul className="navbar-nav ms-auto mb-lg-0 w-lg-50 w-md-100">
        <li className="nav-item">
          <NavLink to="/" className="nav-link m-md-3">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-md-3" to="/Browse">Browse</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-md-3" to="/Details">Details</NavLink>
        </li>
        <li className="nav-item  mb-sm-2 mb-xs-1">
          <NavLink className="nav-link m-md-3" to="/Streams">Streams</NavLink>
        </li>
        <li className="nav-item btn porfile">
          <NavLink className="nav-link py-md-0" to="/profile">
            Profile
            <img src={profileHeader}  className='rounded-circle ms-md-2'/>
            </NavLink>
            
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>
  )
}

export default Header
