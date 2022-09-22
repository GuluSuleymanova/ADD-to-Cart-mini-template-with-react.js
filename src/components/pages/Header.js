import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import logo from '../../assets/img/logo.svg';
import logo1 from '../../assets/img/logo1.svg';

const Header = () => {
  const{totalItems}=useCart();
  return (
         <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container-fluid p-0">
          <a className="navbar-brand p-0" href="#"><img src={logo} alt=""  className='logoimg'/></a>
          <a className="navbar-brand" href="#"><img src={logo1} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Produce</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Visit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Join Our CSA</a>
              </li>
             
            </ul>
            <form className="d-flex align-items-center">
            <span><i className="fa-regular fa-heart px-3 py-3"></i></span>
            <span><i className="fa-regular fa-user px-3 py-3"></i></span>
            <span><i className="fa-solid fa-magnifying-glass px-3 py-3"></i></span>
            <span><i className="fa-solid fa-sun px-3 py-3"></i></span>
            <button type="button" className="btn">
             <NavLink className="fa-solid fa-bag-shopping px-3 iconbag" to="/basket">
             <span className="sifir">{totalItems}</span></NavLink>
             </button>
            </form>
          </div>
        </div>
      </nav>
   </div>
  )
}

export default Header