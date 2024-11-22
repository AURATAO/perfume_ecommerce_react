import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/all.scss';
import logo from '../assets/img/logo.png'; 
import storeIcon from '../assets/img/header/store-grey.png';
import userIcon from '../assets/img/header/user-grey.png';
import likeIcon from '../assets/img/header/like-grey.png';
import cartIcon from '../assets/img/header/cart-grey.png';
import menuIcon from '../assets/img/header/menu.png';

const Header = ()=>{


    return(
     <header className="header ">
        <nav className="navBar maxWidth">
        <h1>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </h1>
        <ul className="menu d-flex justify-content-center ">
          <li className='d-none d-md-block '>
            <Link to='/product' className='text-decoration-none'>
              <img src={storeIcon} alt="product_icon" />Products
            </Link>
          
          </li>
          <li className='d-none d-md-block'>
            <a href="#" className='text-decoration-none'>
              <img src={userIcon} alt="login_icon" />Login
            </a>
          </li>
          <li className='d-none d-md-block'>
            <Link to="/wishlist" className='text-decoration-none'>
              <img src={likeIcon} alt="like_icon" />Wishlist
            </Link>
          </li>
          <li className='d-none d-md-block'>
            <a href="#" className='text-decoration-none'>
              <img src={cartIcon} alt="shopping_bag_icon" />
              <div className="cartNum">
                <span className="pc">Cart(3)</span><span className="mb"></span>
              </div>
            </a>
          </li>
          <li className="hamburger d-md-none d-flex justify-content-end align-item-center">
          <a href="#" className='text-decoration-none'>
              <img src={cartIcon} alt="login_icon" />
            </a>
            <img src={menuIcon} alt="menu" className='dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false"/>
            <ul class="custom-dropdown dropdown-menu bg-dropdownColor rounded-0 py-0 bg-secondary-hover">
            <li className='border-bottom border-white'><Link className="dropdown-item text-white f-5 text-dark-hover" to="/product">Product</Link></li>
            <li className='border-bottom border-white '><Link className="dropdown-item text-white f-5 text-dark-hover" href="/wishlist">Wishlist</Link></li>
            <li className='border-bottom border-white '><a className="dropdown-item text-white f-5 text-dark-hover" href="#">Blog</a></li>
            <li className='border-bottom border-white '><a className="dropdown-item text-white f-5 text-dark-hover" href="#">Contact</a></li>
            <li className='border-bottom border-secondary '><a className="dropdown-item text-white f-5 text-dark-hover" href="#">Mypage</a></li>
          </ul>
          </li>
        </ul>
      </nav>
     </header>
    )
}

export default Header;


