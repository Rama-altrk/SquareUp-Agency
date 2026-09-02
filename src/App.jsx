import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Process from './pages/Process/Process';
import About from './pages/About/About';

import ServicesCards from './Components/ServicesCards/ServicesCards'
import SquareUp from './Components/SquareUp/SquareUp'
import ProjectCards from './Components/ProjectCards/ProjectCards'
function App() {
  const navItems = [
    { content: 'Home', path: '/' },
    { content: 'Work', path: '/work' },
    { content: 'Process', path: '/process' },
    { content: 'About', path: '/about' },
  ];

  return (
    <Router>
    <>
      <Nav 
        items={navItems} 
        activePath="Home" 
        btnText="Contact Us" 
      /> 
      <div className='rtMainContainer'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/process" element={<Process/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer />
    </>
    </Router>
    <div className='mainContainer'>
      <ServicesCards/>
      <SquareUp 
          title="Thank you for your Interest in SquareUp."
          description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
          button={<button>Start Project</button>}
/>
<ProjectCards/>
    </div>
  )
}

export default App
