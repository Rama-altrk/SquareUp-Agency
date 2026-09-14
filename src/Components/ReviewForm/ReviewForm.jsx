import './ReviewForm.css'
import InputsField from '../InputsField/InputsField'
import { FONTS } from '../../assets/constants/fonts'
import { COLORS } from '../../assets/constants/colors'

function ReviewForm({ reviews }) {
  return (
   <>
   <form action="">
        <div style={{display:"flex",gap:10}}>
            <InputsField className="title"
                widthField="50%"
                labelField="title"
                inputType="Text"
                labelId="title">

            </InputsField>

            <div className="rtThirdRow" >
                    <label htmlFor="message" style={{...FONTS.medium , color: COLORS.absolutefff}}>Description</label>
                    <div >
                        <textarea name="Description" id="Description" placeholder="Type here" style={{...FONTS.regular , color: COLORS.absolutefff}}></textarea>
                    </div>
            </div>
    
        </div>
        <div style={{display:"flex",gap:10}}>
            <InputsField className="authorname"
                widthField="50%"
                labelField="author Name"
                inputType="Text"
                labelId="authorTitle">
            </InputsField>
              <InputsField className="authortitle"
                widthField="50%"
                labelField="author Title"
                inputType="Text"
                labelId="authorTitle">
            </InputsField>
            {/* <select className='author' name="" id="" >
                <option value="">Select author</option>
                        {reviews.map((review,id) => (
                                <option key={id}>{review.author}</option>
                                ))}
            </select> */}

        </div>


    
   </form>
    </>
  )
}

export default ReviewForm
