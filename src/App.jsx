import './App.css'
import Button from './components/Button/Button'
import CtaSection from './components/ctaSection/CtaSection'
import WyhChooseSeciton from './components/wyhChooseSection/WyhChooseSeciton'


function App() {

  return (
    <div className='mainContainer'>
{/*       <Button 
      name="submit"
      width={100}
      height={60}
      backgroundColor="var( --grey20)"
      color= "var( --green99)"
      borderRadius={10}
      fontSize={18}
      border="none"
      /> */}
      

{<CtaSection/>}

<WyhChooseSeciton/>

    </div>
  )
}

export default App
