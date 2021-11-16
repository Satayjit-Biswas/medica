import React from 'react';
import TopHeader from './TopHeader';
import logo from '../../../assets/logo.png';
import userlogo from '../../../assets/user_logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
            <TopHeader></TopHeader>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="logo">
                        <NavLink to='/' className="navbar-brand" href="/"><img src={logo} alt="" className="w-100"/></NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="header_login_area">
                                {
                                    user.email ?
                                    <div className="d-flex">
                                    <button onClick={logOut} className="btn_custom">log out</button>
                                    <div className="login_area_details">
                                        <div className="login_area_img">
                                            <img src={user.photoURL?user.photoURL:userlogo} className="img-fluid" alt="" />
                                        </div>
                                        <p>{user.displayName}</p>
                                    </div> 
                                </div>:<div><NavLink to='/login' className="btn_custom">log in</NavLink>
                                <NavLink to='/register' className="btn_custom header_Sign_in_btn">Sign in</NavLink></div>
                                }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;