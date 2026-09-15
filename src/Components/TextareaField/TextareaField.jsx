import { COLORS } from '../../assets/constants/colors'
import { FONTS } from '../../assets/constants/fonts'
import './TextareaField.css'

export default function TextareaField({className , labelName , width}) {
    return (
        <div className={`${className} rtThirdRow`} style={{width: width}}>
            <label htmlFor="message" style={{...FONTS.medium , color: COLORS.absolutefff}}>{labelName}</label>
            <div>
                <textarea name="message" id="message" placeholder="Type here" style={{...FONTS.regular , color: COLORS.absolutefff}}></textarea>
            </div>
        </div>
    )
}
 