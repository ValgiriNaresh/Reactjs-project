
import React, { useState } from "react";
import st from "./nav.module.css";
import { Link } from "react-router-dom";


function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={st.nav}>

            <div className={st.logo}>
                <a href="#">DELUX HOTEL</a>
            </div>
            <ul className={`${st.navLinks} ${isMenuOpen ? st.mobileActive : ""}`} >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/testimonial">Testimonial</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>

            <div className={st.navBtns}>
              <Link to="/booknow">
               <button>Book Now</button>
              </Link>
            </div>

            <div className={st.mobileMenuIcon} onClick={toggleMenu}>
                {isMenuOpen ? "✖" : "☰"}
            </div>
        </nav>
    );
}

export default Navbar;

