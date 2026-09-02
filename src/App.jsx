import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Process from './pages/Process/Process';
import About from './pages/About/About';

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
  )
}

export default App
