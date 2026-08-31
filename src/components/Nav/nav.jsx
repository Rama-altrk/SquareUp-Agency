import { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from './../Logo/logo'; 
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; 
const Nav = ({ items, activePath = 'Home', btnText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Logo />

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {items?.map((item, index) => {
          const isCurrent = item.content === activePath;
          return (
            <li key={index}>
              <Link 
                to={item.path || '#'} 
                className={isCurrent ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.content}
              </Link>
            </li>
          );
        })}
      </ul>

      {btnText && <button className="nav-btn">{btnText}</button>}
      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
      </button>
    </nav>
  );
};

export default Nav;