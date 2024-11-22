import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/all.scss';
import logoWhite from '../assets/img/logo-white.png'

const Footer = ()=>{
    return(
        <footer>
        <div className="maxWidth m-auto px-3">
          <div className="footer_left justify-content-md-start">
            <a href="#">
              <img src={logoWhite} alt="logo" />
            </a>
            <h6>© 2020. All Rights Reserved.</h6>
          </div>
          <div className="d-none d-flex justify-content-center align-items-center gap-3 d-md-block">
          <ul >
            <li>
              <Link to='/product' className='text-decoration-none'>
              Products
              </Link>
            </li>
            <li><a href="#" className='text-decoration-none'>Blog</a></li>
            <li><a href="#" className='text-decoration-none'>Contact</a></li>
          </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer;