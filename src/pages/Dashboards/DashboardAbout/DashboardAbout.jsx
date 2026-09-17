import Button from '../../../components/Button/Button'
import './DashboardAbout.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { getItemFromLocalstorage } from '../../../utils/localStorag'
import RtCardNumber from '../../../Components/RtCardNumber/RtCardNumber'


const ABOUT_KEY = 'rtAboutStorage'
export default function DashboardAbout() {
    const navigate = useNavigate()

    const [cards , setCards] = useState(()=>{
        return getItemFromLocalstorage(ABOUT_KEY)
    })

    const freshData = () => {
        const saved = getItemFromLocalstorage(ABOUT_KEY)
        if (saved) {
            setCards([...saved])
        }else{
            setCards([])
        }
    }

    useEffect(() => {
        freshData()
    }, [location.key])

    return (
        <>
            <Link to="add">
                <Button 
                    name= "add"
                    width="100%"
                    height= "34px"
                    fontSize= "28px"
                    backgroundColor= "var(--green50)"
                    border= "1px solid var(--green50)"
                    color= "var(--grey30)"
                    borderRadius= "8px"
                    onClick={() => navigate('add')}
                />
            </Link>
            <div className="rtAboutDash">
                {cards.map((item) => (
                <RtCardNumber
                    key={item.id}
                    cardNumber={item.cardNumber}
                    cardTitle={item.cardTitle}
                    contentCard={item.contentCard}
                    className= "rtAboutCardDash"
                    linkEdit= {`/dashboard/about/edit/${item.id}`}
                    classNameAction= "rtDashActionAbout"
                    classNameMainContainer= "rtMainAbout"
                    onClickEdit={() => navigate(`/dashboard/about/edit/${item.id}`, { state: { cardToEdit: item } })}
                />
                ))}
            </div>
        </>
    )
}
