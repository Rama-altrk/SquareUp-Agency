import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Process from './pages/Process/Process';
import About from './pages/About/About';
import SectionHeading from './components/SectionHeading/SectionHeading';
import Hero from './components/Hero/Hero';
  
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
        <Hero />

      <SectionHeading
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        background="straight.png"
      />

      <SectionHeading
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        background="waveToDown.png"
      />

      <SectionHeading
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        background="waveToUp.png"
      />

      <SectionHeading
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        background="straight.png"
      />
      </div>
      <Footer />

      
    </>
    </Router>
  )
}

export default App;