// import ProssecAndAboutForm from '../../../../Components/ProcessAndAboutForm/ProcessAndAboutForm'
import Button from '../../../../Components/Button/Button'
import InputsField from '../../../../Components/InputsField/InputsField'
import TextareaField from '../../../../Components/TextareaField/TextareaField'
import './AddAndEditProcess.css'
import { useState , useEffect} from 'react'
import { useNavigate , useLocation  , useParams} from 'react-router-dom'
import { addToLocalstorage , updateLocalstorage , getItemFromLocalstorage  ,setItemInLocalstorage} from '../../../../utils/localStorag'

const PROCESS_KEY = 'rtProcessStorage'
export default function AddAndEditProcess() {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()

  const [cardToEdit , setCardToEdit] = useState(()=>{
    if (location.state?.cardToEdit) {
      // return {...location.state.cardToEdit}
      return JSON.parse(JSON.stringify(location.state.cardToEdit))
    }
    if(id){
      const savedCards = getItemFromLocalstorage(PROCESS_KEY)
      const card = savedCards.find(card => parseInt(card.id) === parseInt(id))
      return card ? JSON.parse(JSON.stringify(card)) : null
    }
    return null
  })


  const [cardNumber, setCardNumber] = useState(cardToEdit ? cardToEdit.cardNumber : '');
  const [cardTitle, setCardTitle] = useState(cardToEdit ? cardToEdit.cardTitle : '');
  const [contentCard, setContentCard] = useState(cardToEdit ? cardToEdit.contentCard : '');


  useEffect(()=>{
    if(cardToEdit) {
        setCardNumber(cardToEdit.cardNumber || '')
        setCardTitle(cardToEdit.cardTitle || '');
        setContentCard(cardToEdit.contentCard || '');
    }else{
      setCardNumber('')
      setCardTitle('')
      setContentCard('')
    }
  }, [id ,cardToEdit])

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log("submit")
    
    const cardData = {cardNumber , cardTitle , contentCard}

    const savedCards = getItemFromLocalstorage(PROCESS_KEY)
    if(cardToEdit && cardToEdit.id){
      const copyOfCards = [...savedCards]
      const updatedCards = copyOfCards.map(card => {
        if (parseInt(card.id) === parseInt(cardToEdit.id)){
          return { ...card, ...cardData }
      }
          return {...card}
    })
      setItemInLocalstorage(PROCESS_KEY , updatedCards)
    }else{
      addToLocalstorage(PROCESS_KEY , cardData)
    }

    navigate('/dashboard/process')
  }

  return (
    <form className='rtProcessAndAboutForm' onSubmit={handleSubmit}>
        <InputsField
            labelId= "idCard"
            inputType= "text"
            widthField= "100%"
            labelField= "Number of card"
            value={cardNumber}
            onChange={(event)=> setCardNumber(event.target.value)}
        />

        <InputsField
            labelId= "titleCard"
            inputType= "text"
            widthField= "100%"
            labelField= "Please Enter your card title"
            value = {cardTitle}
            onChange={(event) => setCardTitle(event.target.value)} 
        />
        <TextareaField
            width= "100%"
            labelName="Please enter your card's content"
            value={contentCard}
            onChange={(event) => setContentCard(event.target.value)} 
        />
        <Button 
            name= {cardToEdit ? "Save Change" : "add" }
            width= "145px"
            height= "63px"
            borderRadius= "8px"
            border= "1px solid var(--green50)"
            backgroundColor= "var(--green50)"
            color= "var(--grey10)"
            fontSize= "18px"
            type= "submit"
            className= "rtSubmitAddForm"
        />

        {cardToEdit && (
          <Button 
            name= "Cencel"
            width= "145px"
            height= "63px"
            borderRadius= "8px"
            border= "1px solid var(--green50)"
            backgroundColor= "var(--green50)"
            color= "var(--grey10)"
            fontSize= "18px"
            type= "button"
            onClick={() => navigate('/dashboard/process')}
            className= "rtSubmitAddForm"
          />
        )}

    </form>
  )
}
