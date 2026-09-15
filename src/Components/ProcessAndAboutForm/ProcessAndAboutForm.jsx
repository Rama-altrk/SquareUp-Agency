import InputsField from '../InputsField/InputsField'
import TextareaField from '../TextareaField/TextareaField'
import './ProcessAndAboutForm.css'

export default function ProssecAndAboutForm() {
    return (
        <div className='rtProcessAndAboutForm' >
            <InputsField
                labelId= "idCard"
                inputType= "text"
                widthField= "100%"
                labelField= "Number of card"
            />
            <InputsField
                labelId= "titleCard"
                inputType= "text"
                widthField= "100%"
                labelField= "Please Enter your card title"
            />
            <TextareaField
                width= "100%"
                labelName="Please enter your card's content"
            />
        </div>
    )
}
