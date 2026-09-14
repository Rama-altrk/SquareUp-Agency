import './RtCardNumber.css'

export default function RtCardNumber({className , cardNumber , cardTitle , contentCard ,classNameTitle}) {
    return (
        <div className={`${className} rtCard`}>
            <div>
                <span>{cardNumber}</span>
                <h3 className={`${classNameTitle}`}>{cardTitle}</h3>
            </div>
            <p>{contentCard}</p>
        </div>
    )
}
