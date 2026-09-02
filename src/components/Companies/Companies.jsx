import { COLORS } from '../../assets/constants/colors'
import './Companies.css'
function Companies({images,text}) {
  return (
    <>
    <div className='trusted'>
      <p style={{color:COLORS.green99,display:'flex',justifyContent:'center',alignItems:'center'}}>{text}</p>
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
