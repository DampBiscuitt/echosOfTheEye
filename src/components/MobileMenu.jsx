import { useLocation, useNavigate } from 'react-router-dom'

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (sectionId) => (e) => {
        e.preventDefault();
        const go = () => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setMenuOpen(false);
        };
        if (location.pathname === '/') {
            go();
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
            setMenuOpen(false);
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        
                        ${menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
                        `}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href="#home"
                onClick={handleScroll('home')}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Home
            </a>

            <a
                href="#about"
                onClick={handleScroll('about')}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                About
            </a>
            <a
                href="#gallery"
                onClick={handleScroll('gallery')}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Gallery
            </a>
            <a
                href="#blog"
                onClick={handleScroll('blog')}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Blog
            </a>
            <a
                href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Resume
            </a>
            <a
                href="#contact"
                onClick={handleScroll('contact')}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Contact
            </a>
        </div>
    )
}

export default MobileMenu
