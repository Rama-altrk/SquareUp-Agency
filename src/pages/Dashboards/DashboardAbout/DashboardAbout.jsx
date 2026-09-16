import Button from '../../../components/Button/Button'
import './DashboardAbout.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getItemFromLocalstorage } from '../../../utils/localStorag'
import RtCardNumber from '../../../Components/RtCardNumber/RtCardNumber'

export default function DashboardAbout() {
    const [rtAboutCards] = useState(() => {
        return getItemFromLocalstorage('rtAboutStorage'); 
    });
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
                />
            </Link>
            <div className="rtAboutDash">
                {rtAboutCards.map((item) => (
                <RtCardNumber
                    key={item.id}
                    cardNumber={item.cardNumber}
                    cardTitle={item.cardTitle}
                    contentCard={item.contentCard}
                    className= "rtAboutCardDash"
                />
                ))}
            </div>
        </>
    )
}
