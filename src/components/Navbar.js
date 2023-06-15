import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import WeatherDropdown from './WeatherDropdown';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3" id="mainNav">
      <div className="container-fluid">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
        <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
          <a className="navbar-brand" href="/"><h2><b>CINCY TOURS</b></h2></a> 
          </div><div className="col-lg-3">
          <NavDropdown id="nav-dropdown-dark-example"
              title="Browse Categories"
              menuVariant="dark">
              <Link className='dropdown-item' to="/artsmusic">Arts & Music</Link>
              <Link className='dropdown-item' to="/familyfun">Family Fun</Link>
              <Link className='dropdown-item' to="/fooddrink">Food & Drink</Link>
              <Link className='dropdown-item' to="/heritagehistory">Heritage & History</Link>
              <Link className='dropdown-item' to="/outdoors">Outdoors</Link>
              <Link className='dropdown-item' to="/sports">Sports & Gaming</Link>
              </NavDropdown>
          </div>
           <div className="col-lg-3"><Link className="nav-link" to="/contact"><h4><b>CONTACT</b></h4></Link></div>
            <div className="col-lg-3"><Link className="nav-link" to="/about"><h4><b>ABOUT</b></h4></Link></div>
            <div className="col-lg-1"><WeatherDropdown /></div>
        </div></div></div>
      </div>
    </nav>
    </div>
      )
    }
    
    export default Navbar