import React from 'react'
import './SquareUp.css'
import '../../assets/styles/colors.css'
import '../../assets/styles/fonts.css'

const SquareUp = ({ title, description, button }) => {
return (
    <section className="bs-squareup">
        <div className="bs-square">
            <img src="./public/img/squareIcon.png" alt="{title}" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        {button}
    </section>
)
}

export default SquareUp