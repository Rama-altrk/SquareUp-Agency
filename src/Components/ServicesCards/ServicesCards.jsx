import React from 'react'
import './ServicesCards.css'
import '../../assets/styles/colors.css'
import '../../assets/styles/fonts.css'

const servicesData = [
    {
        id: 1,
        title: "Design",
        description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        icon: "public/img/homeImg/DesignIcon.png" 
    },
    {
        id: 2,
        title: "Engineering",
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        icon: "public/img/homeImg/EngineeringIcon.png"
    },
    {
        id: 3,
        title: "Project Management",
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        icon: "public/img/homeImg/ProjectManagementIcon.png"
    }
]

const ServicesCards = () => {
return (
    <section className='bs-services-section'>
        <div className="bs-services-grid">
        {servicesData.map((service) => (
            <div key={service.id} className="bs-service-card">
                <div className="bs-container">
                    <div className="bs-service-square">
                        <img src={service.icon} alt={service.title} />
                    </div>
                    <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <button className="bs-learn-more-btn">Learn More</button>
            </div>
        ))}
        </div>
    </section>
)
}

export default ServicesCards