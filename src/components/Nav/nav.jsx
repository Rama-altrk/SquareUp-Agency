import { useState } from 'react';
import './nav.css';
import Logo from './../Logo/logo'; 
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import Button from '../Button/Button'
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
              <a 
                href={item.path || '#'} 
                className={isCurrent ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.content}
              </a>
            </li>
          );
        })}
      </ul>

     {btnText && <Button text={btnText} className="nav-btn" />}
      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
      </button>
    </nav>
  );
};

export default Nav;