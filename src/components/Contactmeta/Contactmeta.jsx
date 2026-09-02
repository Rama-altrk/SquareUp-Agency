import { FONTS } from '../../assets/constants/fonts'
import './Contactmeta.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

function Contactmeta() {
  return (
    <div className='bh-Contactmeta'>
        <div className='bh-Contactmeta1'>
          <div className="box1">
              <span className='bh-spn1'style={{...FONTS.medium}}>Operating Days</span>
            <span className='bh-spn2'style={{...FONTS.medium}}>Monday to Friday</span>
          </div>
        </div>
        <div className='bh-Contactmeta2'>
           <div className="bh-box">
             <span className='bh-spn3' style={{...FONTS.medium}}>Stay Connected</span>
            <div className='bh-icon'>
                <div className=' bh-i'><i class="fa-brands fa-facebook"></i> </div>
                <div className="bh-i"><i class="fa-brands fa-twitter"></i></div>
                <div className="bh-i"> <i class="fa-brands fa-linkedin"></i></div>
            </div>
            
           </div>
        </div>
    
    </div>
  )
}

export default Contactmeta


