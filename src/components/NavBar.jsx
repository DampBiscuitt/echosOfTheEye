import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
const NavBar = ({ menuOpen, setMenuOpen }) => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    const handleScroll = (sectionId) => (e) => {
        e.preventDefault();
        const go = () => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        if (location.pathname === '/') {
            go();
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-black">
            <div className="max-w-5xl mx-auto px-4">
                <div className='flex justify-between items-center h-12'>
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-auto"
                        />
                        <span className="text-white font-bold hidden sm:inline">
                        </span>
                    </Link>

                    <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen(prev => !prev)}>
                        &#9776;
                    </div>

                    <div className='hidden md:flex items-center space-x-8'>
                        <a href="#home" onClick={handleScroll('home')} className='text-gray-300 hover:text-white transition-colors'>
                            Home
                        </a>
                        <a href="#about" onClick={handleScroll('about')} className='text-gray-300 hover:text-white transition-colors'>
                            {" "}
                            About
                            {" "}
                        </a>
                        <Link to="/gallery" className='text-gray-300 hover:text-white transition-colors'>
                            Gallery
                        </Link>
                        {/* <a href="#blog" onClick={handleScroll('blog')} className='text-gray-300 hover:text-white transition-colors'>
                            {" "}
                            Blog
                            {" "}
                        </a> */}
                        <a href="portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white transition-colors'>
                            {" "}
                            Resume
                            {" "}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
