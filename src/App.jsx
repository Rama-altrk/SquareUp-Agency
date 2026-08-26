import './App.css'
import Nav from './components/Nav/nav'
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
    </div>
  )
}

export default App
