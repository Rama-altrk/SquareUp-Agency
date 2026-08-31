import './App.css'
import Button from './components/Button/Button'
import CtaSection from './components/ctaSection/CtaSection'
import WyhChooseSeciton from './components/wyhChooseSection/WyhChooseSeciton'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
function App() {
  const navItems = [
    { content: 'Home', path: '/' },
    { content: 'Services', path: '/services' },
    { content: 'Work', path: '/work' },
    { content: 'Process', path: '/process' },
    { content: 'About', path: '/about' },
  ];

  return (
    <Router>
    <div className='mainContainer'>
      <Button
        name="submit"
        width={100}
        height={60}
        backgroundColor="var( --grey20)"
        color="var( --green99)"
        borderRadius={10}
        fontSize={18}
        border="none"
      />


      <CtaSection />

      <WyhChooseSeciton />

     <Nav 
        items={navItems} 
        activePath="Home" 
        btnText="Contact Us" 
      /> 
     <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/services" element={<div></div>} />
          <Route path="/work" element={<div></div>} />
          <Route path="/process" element={<div></div>} />
          <Route path="/about" element={<div></div>} />
        </Routes>
      <Footer />
    </div>
   </Router>
  )
}

export default App
