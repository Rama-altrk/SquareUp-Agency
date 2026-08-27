import './App.css'
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
    <div className='mainContainer'>
     <Nav 
        items={navItems} 
        activePath="Home" 
        btnText="Contact Us" 
      /> 
      <Footer />
    </div>
  )
}

export default App
