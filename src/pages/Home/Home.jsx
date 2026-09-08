import React from 'react'
import Companies from '../../components/Companies/Companies';
import Slider from '../../components/Slider/Slider';
import Hero from '../../components/Hero/Hero'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import SquareUp from '../../components/SquareUp/SquareUp'
import WyhChooseSeciton from '../../components/wyhChooseSection/WyhChooseSeciton'



export default function Home() {
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
            
            <Hero /> 
            <Companies 
        text="Trusted By 250+ Companies"
        images={images}/>
            <SectionHeading
                title="Our Services"
                description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                background="straight.png"
            />
            
            <ServicesCards/>

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
            <Slider cards={reviews}></Slider>

            <SectionHeading
                title="Frequently Asked Questions"
                description="Still you have any questions? Contact our Team via hello@squareup.com"
                background="doubleWaveToUp.png"
            />
            
            <SquareUp 
                title="Thank you for your Interest in SquareUp."
                description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                
            />
        </>
// =======
// import ServicesCards from './components/ServicesCards/ServicesCards'
// import SquareUp from './Components/SquareUp/SquareUp'


// export default function Home() {
//     return (
//         <div>
//         <ServicesCards/>
//         <SquareUp 
//             title="Thank you for your Interest in SquareUp."
//             description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
//             button={<button>Start Project</button>}
// />
//         </div>
// >>>>>>> bb1cb34019e06d67b2b29c688efbf59374d43af7
    )
}