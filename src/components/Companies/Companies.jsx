import './Companies.css'
 export const colors = {
  grey15: "#262626",
  grey90: "#E6E6E6",
 green99: "#FDFFFA",
 grey10: "#191919",
};


function Companies({images,text}) {
  return (
    <>
    <div className='trusted'>
      <p style={{color:colors.green99,borderRadius:100,height:45,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:colors.grey10}}>{text}</p>
    </div>
     <div className='count'  style={{ backgroundColor: colors.grey15 }}>
    {
      images.map((img,index)=>{
        return(
      <img src={img} key={index}  style={{ color: colors.grey90 }}></img>
        )
      })
    }
    </div>
    </>
  )
}

export default Companies
