import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { resetData } from '../../Store/redux/actions';
import { useDispatch } from 'react-redux';
import './Navbar.scss';

function Navbar() {
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = useState<boolean>(false);
    return (
        <nav>
            <ul className="navbar">
                <h3 className="logo">Rick and Morty</h3>
                <img className="icon-logo" src="https://img.icons8.com/plasticine/100/000000/rick-sanchez.png" />
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                    <NavLink to="/" className="Home" onClick={() => dispatch(resetData())}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink exact to="/character" className="AboutCharacter">
                        <li>Characters</li>
                    </NavLink>
                    <NavLink exact to="/location" className="AboutLocation">
                        <li>Locations</li>
                    </NavLink>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {
                        isMobile ? <i className="fas fa-times" />
                            : <i className="fas fa-bars" />
                    }
                </button>
            </ul>
        </nav>
    )
}

export default Navbar
