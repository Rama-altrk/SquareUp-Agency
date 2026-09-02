import { COLORS } from '../../assets/constants/colors'
import { FONTS } from '../../assets/constants/fonts'
import './Socialmedia.css'

function Socialmedia() {
  return (
    <div className='bh-container'>
        <div className="bh-child1" style={{...FONTS .medium}}> <i class="fa-solid fa-envelope" style={{color:COLORS.green60,fontSize:26.25}}></i>hello@squareup.com</div>
        <div className="bh-child1"style={{...FONTS .medium}}><i class="fa-solid fa-phone" style={{color:COLORS.green60,fontSize:26.25}}></i>+91 91813 23 2309</div>
        <div className="bh-child1" style={{...FONTS .medium}}><i class="fa-solid fa-location-dot" style={{color:COLORS.green60,fontSize:26.25}}></i> Get Location</div>

    </div>
  )
}

export default Socialmedia


