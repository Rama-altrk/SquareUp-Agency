import './Button.css'
function Button ({name, width , height , fontSize, borderRadius, backgroundColor, color , border ,className } ) {
    return (
        <>
            <button  className={`${className} btn`} style={{width : width
                , height: height 
                , fontSize: fontSize
                , borderRadius : borderRadius
                , backgroundColor :backgroundColor 
                , color : color
                , border: border
                }}>{name}
                </button>
        </>
    )
}
export default Button