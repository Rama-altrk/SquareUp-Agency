import { COLORS } from '../../assets/constants/colors'
import { FONTS } from '../../assets/constants/fonts'
import './InputsField.css'

export default function InputsField({widthField , labelField , labelId , inputType}) {
    return (
        <div className='rtContainerInput' style={{width: widthField}}>
            <label htmlFor={labelId} className='rtLabelForm' style={{...FONTS.medium , color : COLORS.absolutefff}}>{labelField}</label>
            <input type={inputType} className='rtInputForm' name={labelId} id={labelId} placeholder='Type here' style={{...FONTS.regular , color: COLORS.absolutefff}}/>
        </div>
    )
}
