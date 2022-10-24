import React from 'react';
import logo from '../../img/logo.png';
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigation = useNavigate();
  const clickHandler = () => {
    navigation('/');
  }
  return (
    <header className='center'>
      <Link to='/'>
      <img src={logo} alt='' /> 
      </Link>
    </header>
  );
};

export default Header;
