import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Navbar = () => {
    const {showMenu, setShowMenu} = useContext(AppContext)
    return (
        <header>
            <p className="logo">DevIm</p>
            <nav className="n">
                <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                    <p className={`line line-1 ${showMenu && 'rotateLinePlus'}`} ></p>
                    <p className={`line line-2 ${showMenu && 'hidden'}`} ></p>
                    <p className={`line line-3 ${showMenu && 'rotateLineMinus'}`} ></p>
                </div>
                <ul className={`n-m ${showMenu && 'show-translate'}`} >
                    <li><NavLink to="/" onClick={() => setShowMenu(!showMenu)}>Home</NavLink></li>
                    <li><NavLink to="/courses" onClick={() => setShowMenu(!showMenu)}>Courses</NavLink></li>
                    <li><NavLink to="/blog" onClick={() => setShowMenu(!showMenu)}>Blog</NavLink></li>
                    <li><NavLink to="/mailing" onClick={() => setShowMenu(!showMenu)}>Get Notified</NavLink></li>
                    <NavLink to='/login' onClick={() => setShowMenu(!showMenu)}>
                    <button className="btn n-btn">Login</button>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar