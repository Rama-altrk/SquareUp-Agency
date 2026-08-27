import React from 'react'
import './ServicesCards.css'
import '../assets/styles/colors.css'
import '../assets/styles/fonts.css'

const servicesData =[
    {
        id: 1,
        title: "Design",
        description: "At SquareUp, our design team is passionate about creating beautiful, user-centric designs that captivate your audience and elevate your brand.",
        icon: "public/img/homeImg/DesignIcon.png" 
    },
    {
        id: 2,
        title: "Engineering",
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust, scalable, and secure digital solutions.",
        icon: "public/img/homeImg/EngineeringIcon.png"
    },
    {
        id: 3,
        title: "Project Management",
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
        icon: "public/img/homeImg/ProjectManagementIcon.png"
    }
]

const ServicesCards = () => {
return (
    <section className='bs-services-section'>
        <div className="bs-services-grid">
        {servicesData.map((service) => (
        <div key={service.id} className="bs-service-card">
            <div className="card-icon-box">
                <div className="bs-Square">
                    <img src={service.icon} alt={service.title} />
                </div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="bs-learn-more-btn">Learn More</button>
        </div>
        ))}
        </div>

    </section>
)
}

export default ServicesCards
