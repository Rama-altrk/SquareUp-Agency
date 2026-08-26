import './Button.css'
function Button({ width, height, name, className, color, radius, background }) {
    return (
        <div className={`${className} Button`}>
            <button
                style={{
                    width: width
                    , height: height
                    , color: color
                    , borderRadius: radius
                    , background: background
                }}>
                {name}</button>
        </div>
    )
}


export default Button