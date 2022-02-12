import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare
}
    from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcon] = useState(false);
    return (

        <>
            <nav className="main-nav">
                {/* ist part  */}
                <div className="logo">
                    <h2>
                        <span>P</span>anio
                        <span>T</span>oken
                    </h2>
                </div >
                {/* second part  */}
                <div className={
                    showMediaIcons ? "nav-manu mobile-menu-link" : "nav-manu"
                    }>
                    <ul>
                        <li>
                            <a>
                                <NavLink className="navlink" end to={"/*"}>
                                    HOME
                                </NavLink>
                            </a>
                        </li>

                        <li>
                            <a>
                                <NavLink className="navlink" end to={"/about"}>
                                    ABOUT
                                </NavLink>
                            </a>
                        </li>

                        <li>
                            <a>
                                <NavLink className="navlink" end to={"/token"}> TOKEN </NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* 3rd social media logo */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.facebook.com/" target="_w3school">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/" target="_w3school">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/" target="_w3school">
                                <FaYoutubeSquare className="youtube" />
                            </a>
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcon(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>

                </div>


            </nav>



        </>

    )

}


export default Navbar;