import './CardWyhChoose.css'

function CardWyhChoose({ className, image, title, contnet }) {
    return (
        <>
            <div className={`${className} mr-card`}>
            <div className="mr-title-logo">
            <div className="mr-logo"><img src={image} alt="ExpertiseIcon.png" /></div>
            <h1>{title}</h1>
            </div>
            <p>{contnet}</p>
            </div>
        </>

    )
}

export default CardWyhChoose