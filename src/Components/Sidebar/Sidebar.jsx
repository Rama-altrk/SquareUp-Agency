import { useState } from 'react';
import Logo from '../Logo/logo'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { FaTimes } from 'react-icons/fa';



export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    console.log("حالة المنيو" , isOpen);
    
    return (
        <>
            <aside className= {`rtSidebar`}>
                <div className='rtDashWrapper'>
                    
                    <div className='rtHeaderDash'>
                        <Link to="/"><IoIosArrowBack className='rtBackHome'/></Link>
                        <h1>Dashboard</h1>
                    </div>

                    <nav className= {`rtSidebarMenu ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/dashboard" end={true} onClick={() => setIsOpen(false)}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/work" onClick={() => setIsOpen(false)}>
                                    Work
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/process" onClick={() => setIsOpen(false)}>
                                    Process
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/about" onClick={() => setIsOpen(false)}>
                                    About
                                </NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <Logo className="rtDashLogo"/>
                <div className='rtDashMobileContainer'>
                    <button className="rtMenuIconDash"  onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={28}/> : <HiMenuAlt3 size={28}/>}
                    </button>
                </div>
            </aside>
            
        </>
    )
}
