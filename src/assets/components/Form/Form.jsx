import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import InputsField from "../InputsField/InputsField";
import './Form.css'

export default function Form() {
    return (
        <form className="rtContactForm">
            <div className="rtFirstRow">
                <InputsField
                    widthField= "39.3vw"
                    labelField= 'Full Name'
                    labelId= 'fullName'
                    inputType= 'text'
                />
                <InputsField
                    widthField= '39.3vw'
                    labelField= 'Email'
                    labelId= 'emailfield'
                    inputType= 'email'
                />
                
            </div>
            <div className="rtSecondRow">
                <span style={{...FONTS.medium , color: COLORS.absolutefff}}>Why are you contacting us?</span>
                <div className="rtContainerChecks">
                    <div className="rtRowChecks">
                        <div>
                            <input type="checkbox" name="webDesign" id="web" />
                            <label htmlFor="web">Web Design</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Collaboration" id="collaboration" />
                            <label htmlFor="collaboration">Collaboration</label>
                        </div>
                    </div>
                    <div className="rtRowChecks">
                        <div>
                            <input type="checkbox" name="app" id="app" />
                            <label htmlFor="app">Mobile App Design</label>
                        </div>
                        <div>
                            <input type="checkbox" name="other" id="others" />
                            <label htmlFor="others">Others</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rtThirdRow">
                <label htmlFor="message" style={{...FONTS.medium , color: COLORS.absolutefff}}>Your Message</label>
                <div>
                    <input name="message" id="message" style={{...FONTS.regular , color: COLORS.grey40}} placeholder="Type here"/>
                    <div></div>
                </div>
            </div>
        </form>
    )
}
