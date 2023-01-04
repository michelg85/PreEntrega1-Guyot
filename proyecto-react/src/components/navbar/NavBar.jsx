import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"images/taiko.png"} alt={"Logo Taiko"} width="300" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav navbar-left">
                                    <li className="nav-item">
                                        <h4><NavLink className="nav-link text-dark fw-bold" aria-current="page" to={"/category/tablas"}>Tablas</NavLink></h4>
                                    </li>
                                    <li className="nav-item">
                                    <h4><NavLink className="nav-link text-dark fw-bold" to={"/category/ceviche"}>Ceviches</NavLink></h4>
                                    </li>
                                    <li className="nav-item">
                                    <h4><NavLink className="nav-link text-dark fw-bold" to={"/category/rolls"}>Rolls</NavLink></h4>
                                    </li>
                                    <li className="nav-item">
                                    <h4><NavLink className="nav-link text-dark fw-bold" to={"/category/wok"}>Woks</NavLink></h4>
                                    </li>
                                    <li className="nav-item">
                                    <h4><NavLink className="nav-link text-dark fw-bold" to={"/category/entradas"}>Entradas</NavLink></h4>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-cr align-items-center">
            
                    <CartWidget/>
                </div>
            </div>
            
        </div>
        
    )
}

export default NavBar;