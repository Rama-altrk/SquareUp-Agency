
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Process from './pages/Process/Process';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PublicPages from './Components/PublicPages/PublicPages';
import DashboardPages from './pages/Dashboards/DashboardPages/DashboardPages';
import DashboardHome from './pages/Dashboards/DashboardHome/DashboardHome';
import DashboardWork from './pages/Dashboards/DashboardWork/DashboardWork';
import DashboardProcess from './pages/Dashboards/DashboardProcess/DashboardProcess';
import DashboardAbout from './pages/Dashboards/DashboardAbout/DashboardAbout';
import ServiceSectionCrud from './pages/Dashboards/DashboardHome/ServiceSectionCrud/ServiceSectionCrud';
import ChooseSectionCrud from './pages/Dashboards/DashboardHome/ChooseSectionCrud/ChooseSectionCrud';
import ReviewSectionCrud from './pages/Dashboards/DashboardHome/ReviewSectionCrud/ReviewSectionCrud';
import FaqSectionCrud from './pages/Dashboards/DashboardHome/FaqSectionCrud/FaqSectionCrud';
import AddAndEditService from './pages/Dashboards/DashboardHome/ServiceSectionCrud/addAndEditService/addAndEditService';
import AddAndEditChoose from './pages/Dashboards/DashboardHome/ChooseSectionCrud/addAndEditChoose/addAndEditChoose';
import AddAndEditReview from './pages/Dashboards/DashboardHome/ReviewSectionCrud/addAndEditReview/addAndEditReview';
import AddAndEditFaq from './pages/Dashboards/DashboardHome/FaqSectionCrud/addAndEditFaq/addAndEditFaq';
import AddAndEditWork from './pages/Dashboards/DashboardWork/addAndEditWork/addAndEditWork';
import AddAndEditProcess from './pages/Dashboards/DashboardProcess/addAndEditProcess/addAndEditProcess';
import AddAndEditAbout from './pages/Dashboards/DashboardAbout/addAndEditAbout/addAndEditAbout';




function App() {

  const navItems = [
    { content: 'Home', path: '/' },
    { content: 'Work', path: '/work' },
    { content: 'Process', path: '/process' },
    { content: 'About', path: '/about' },
    { content: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <Router>
    <>
      {/* <Nav 
        items={navItems} 
        activePath="Home" 
        btnText="Contact Us" 
      /> 
      <div className='rtMainContainer'>
        <Routes>
          
        </Routes>
      </div>
      <Footer /> */}
      <Routes>
        <Route element={<PublicPages navItems={navItems}/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/process" element={<Process/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
// <<<<<<< Batoul-Hasan-Branch
//         </Routes>
//       </div>
//       <Footer />
// =======
        </Route>
      

        <Route path='/dashboard' element={<DashboardPages/>}>
          <Route index element= {<DashboardHome/>}/>
            <Route path="services" element={<ServiceSectionCrud/>} />
              <Route path='services/add' element={<AddAndEditService/>}/>
            <Route path="chooseUs" element={<ChooseSectionCrud/>} />
              <Route path='chooseUs/add' element={<AddAndEditChoose/>}/>
            <Route path="feedback" element={<ReviewSectionCrud/>} />
              <Route path='feedback/add' element={<AddAndEditReview/>}/>
            <Route path="faq" element={<FaqSectionCrud/>} />
              <Route path='faq/add' element={<AddAndEditFaq/>}/>
          <Route path='work' element={<DashboardWork/>}/>
            <Route path='work/add' element={<AddAndEditWork/>}/>
          <Route path='process' element={<DashboardProcess/>}/>
            <Route path='process/add' element={<AddAndEditProcess/>}/>
          <Route path='about' element={<DashboardAbout/>}/>
            <Route path='about/add' element={<AddAndEditAbout/>}/>
        </Route>
        
      </Routes>
// >>>>>>> main
    </>
    </Router>
  )
}

export default App



