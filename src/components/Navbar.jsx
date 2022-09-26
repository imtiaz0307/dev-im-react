import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Navbar = () => {
    const {showMenu, setShowMenu} = useContext(AppContext)
    return (
        <header>
            <NavLink to="/" className="logo">DevIm</NavLink>
            <nav className="n">
                <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                    <p className={`line line-1 ${showMenu && 'rotateLinePlus'}`} ></p>
                    <p className={`line line-2 ${showMenu && 'hidden'}`} ></p>
                    <p className={`line line-3 ${showMenu && 'rotateLineMinus'}`} ></p>
                </div>
                <ul className={`n-m ${showMenu && 'show-translate'}`} >
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/mailing">Get Notified</NavLink></li>
                    <button className="btn n-btn">Login</button>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar