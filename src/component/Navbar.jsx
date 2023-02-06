import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({size}) => {
   

    //const state=useSelector((state)=>state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="/">Mandi Collection</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>

                        </ul>
                        <div className="buttons">
                            <a href="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>login</a>
                            <a href="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</a>
                            <a href="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart ({size})</a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
/*
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Mandi Collection</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart (0)</NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;*/