import './App.css'
import About from './components/About/About';
import Companies from './components/Companies/Companies'
import Contactmeta from './components/Contactmeta/Contactmeta';
import Slider from './components/Slider/Slider';
import Socialmedia from './components/Socialmedia/Socialmedia';

function App() {
  let images=[
  '/img/homeImg/zapier.png',
  '/img/homeImg/spotify.png',
  '/img/homeImg/zoom.png',
  '/img/homeImg/slack.png',
  '/img/homeImg/amazon.png',
  '/img/homeImg/adobe.png',
  
]

const reviews = [
  {
    title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    image:"./img/homeImg/JohnSmith.png",
    author: "John Smith",
    authorTitle: "CEO of Chic Boutique"
  },
  {
    title: "Working with SquareUp was a breeze.",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
    image:"./img/homeImg/SarahJohnson.png",
    author: "Sarah Johnson",
    authorTitle: "Founder of HungryBites."
  },
  {
    title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
    text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    image:"./img/homeImg/MarkThompson.png",
    author: "Mark Thompson",
    authorTitle: "CEO of EventMasters"
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
    image:"./img/homeImg/LauraAdams.png",
    author: "Laura Adams",
    authorTitle: "COO of ProTech Solutions."
  },
  {
    title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
    image:"./img/homeImg/MichaelAnderson.png",
    author: "Michael Anderson",
    authorTitle: "Founder of Dream Homes Realty."
  },
  {
    title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    image:"./img/homeImg/EmilyTurner.png",
    author: "Emily Turner",
    authorTitle: "CEO of FitLife Tracker"
  }
];

  return (
<>
    <div className='mainContainer'>


        <Companies 
        text="Trusted By 250+ Companies"
        images={images}/>
        {/* <About reviews={reviews} /> */}
        <Slider cards={reviews}></Slider>
        <Socialmedia></Socialmedia>
        <Contactmeta></Contactmeta>
    </div>
    
        </>
  )
}

export default App