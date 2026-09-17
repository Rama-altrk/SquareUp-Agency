import './Button.css'
function Button ({name, width , height , fontSize, borderRadius, backgroundColor, color , border ,className , onClick , type} ) {
    return (
        <button  className={`${className} btn`} type = "type" style={{width : width
            , height: height 
            , fontSize: fontSize
            , borderRadius : borderRadius
            , backgroundColor :backgroundColor 
            , color : color
            , border: border
            ,onClick: {onClick}
            }}>{name}
        </button>
    ) 
}
export default Button