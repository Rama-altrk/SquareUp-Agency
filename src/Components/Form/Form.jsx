import { COLORS } from "../../assets/constants/colors";
import { FONTS } from "../../assets/constants/fonts";
import Button from "../Button/Button";
import InputsField from "../InputsField/InputsField";
import './Form.css';
// import Button from "../Button/Button";

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
                        <label htmlFor="web">
                            <input type="checkbox" name="webDesign" id="web" />
                            <div className="rtMyCheckbox"></div>
                            <span>Web Design</span>
                        </label>
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
                    {/* <input name="message" id="message" style={{...FONTS.regular , color: COLORS.grey40}} placeholder="Type here"/> */}
                    <textarea name="message" id="message" placeholder="Type here" style={{...FONTS.regular , color: COLORS.absolutefff}}></textarea>
                    {/* <div></div> */}
                </div>
            </div>
            <Button
                name= "Submit"
                width= "145px"
                height= "63px"
                borderRadius= "8px"
                border= "1px solid var(--green50)"
                backgroundColor= "var(--green50)"
                color= "var(--grey10)"
                fontSize= "18px"
                className= "rtSubmitForm"
            />
        </form>
    )
}
