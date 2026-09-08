import React from 'react'
import Hero from '../../components/Hero/Hero'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import SquareUp from '../../components/SquareUp/SquareUp'
import WyhChooseSeciton from '../../components/wyhChooseSection/WyhChooseSeciton'



export default function Home() {
    return (
        <>
            
            <Hero /> 
            
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
