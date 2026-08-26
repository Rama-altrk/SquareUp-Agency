import './App.css'
import Companies from './components/Companies/Companies'
function App() {
  let images=[
  '/img/homeImg/zapier.png',
  '/img/homeImg/spotify.png',
  '/img/homeImg/zoom.png',
  '/img/homeImg/slack.png',
  '/img/homeImg/amazon.png',
  '/img/homeImg/adobe.png',
  
]

  return (
    <div className='mainContainer'>
        <Companies 
        text="Trusted By 250+ Companies"
        images={images}/>
    </div>
  )
}

export default App