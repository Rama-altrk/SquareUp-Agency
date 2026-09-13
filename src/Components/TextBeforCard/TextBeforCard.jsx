import './TextBeforCard.css'


export default function TextBeforCard({description , subTitle}) {
    return (
        <div className='rtTextCard'>
            <h2>At SquareUp</h2>
            <p>{description}</p>
            <span>{subTitle}</span>
        </div>
    )
}
