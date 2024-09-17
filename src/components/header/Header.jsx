import { useState } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <div className="main__header" id="header">
            <nav className='header'>
                <div className='header__content'>
                    <div>
                        <h1 className='logo'>Be</h1>
                    </div>
                    <div>
                        <ul className= {isOpen ? "navbar active ": 'navbar'}>
                            <div className="nav__name">Zura Beridze</div>
                            <li onClick={closeMenu} className='item'><a href="#header">Home</a></li>
                            <li onClick={closeMenu} className='item'><a href="#aboutme">About</a></li>
                            <li onClick={closeMenu} className='item'><a href="#portfolio">Portfolio</a></li>
                            <li onClick={closeMenu} className='item'><a href="#contact">Contact</a></li>
                            <div className="rights">© 2024 Zura. All rights are reserved</div>
                        </ul>
                    </div>
                    <div onClick={toggleMenu} className='burger'>
                        <div className={
                            isOpen ? "burger__line burger__line__1 active ": "burger__line burger__line__1"
                            }></div>
                        <div className={
                            isOpen ? "burger__line burger__line__2 active ": "burger__line burger__line__2"
                        }></div>
                        <div className={
                            isOpen ? "burger__line burger__line__3 active ": "burger__line burger__line__3"
                        }></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
