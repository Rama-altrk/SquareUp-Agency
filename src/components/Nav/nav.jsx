import { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from './../Logo/logo'; 
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import Button from '../Button/Button';

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

      <Button className="nav-btn"
        name= "Contact Us"
        width= "135px"
        height= "59px"
        fontSize= "18px"
        borderRadius= "8px"
        backgroundColor= "var(--green50)"
        color= "var(--grey15)"
        border= "none"
      />
      
      <div className='rtBackMenuToggle'>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;