import React from 'react'
import ServicesCards from './Components/ServicesCards/ServicesCards'
import SquareUp from './Components/SquareUp/SquareUp'


export default function Home() {
    return (
        <div>
        <ServicesCards/>
        <SquareUp 
            title="Thank you for your Interest in SquareUp."
            description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
            button={<button>Start Project</button>}
/>
        </div>
    )
}
