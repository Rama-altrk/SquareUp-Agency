
import './Home.css'
import CardWyhChoose from '../../components/CardWyhChoose/CardWyhChoose'
import Hero from '../../components/Hero/Hero'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import SquareUp from '../../components/SquareUp/SquareUp'


export default function Home() {

    const Card = [
        {
            id: 1,
            image: "/img/homeImg/ExpertiseIcon.png",
            title: "Expertise",
            content: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
        },

        {
            id: 2,
            image: "/img/homeImg/ClientCentricIcon.png",
            title: "Client-Centric Approach",
            content: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",

        },

        {
            id: 3,
            image: "/img/homeImg/Results-DrivenIcon.png",
            title: "Results-Driven Solutions",
            content: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
        },
        {
            id: 4,
            image: "/img/homeImg/CollaborativeIcon.png",
            title: "Collaborative Partnership",
            content: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
        }
    ]
    return (
// <<<<<<< rasheed
       
// =======
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
             
            <div>
                <div className="container-Card">
                    {
                        Card.map((item) => {
                        return (
                        <CardWyhChoose
                        title={item.title}
                        image={item.image}
                        contnet={item.content}
                        />
                        )
                        })
                    }
                </div>
            </div>  

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
// >>>>>>> main
    )
}
