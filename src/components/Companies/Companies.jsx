import { COLORS } from '../../assets/constants/colors'
import { FONTS } from '../../assets/constants/fonts'
import './Companies.css'
function Companies({images,text}) {
  return (
    <>
    <div className='trusted'>
      <p style={{color:COLORS.green99,display:'flex',justifyContent:'center',alignItems:'center',...FONTS.medium}}>{text}</p>
    </div>
     <div className='count'  style={{ backgroundColor: COLORS.grey10 }}>
    {
      images.map((img,index)=>{
        return(
      <div className="cell"  key={index} >
          <img   src={img} style={{ color: COLORS.grey90 }}></img>
      </div>
        )
      })
    }
    </div>
    </>
  )
}
export default Companies
