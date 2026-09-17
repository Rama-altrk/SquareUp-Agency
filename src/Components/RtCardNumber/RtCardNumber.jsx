import './RtCardNumber.css'
import { Link } from 'react-router-dom'
import { MdEdit, MdDelete} from "react-icons/md";
import Button from '../Button/Button';



export default function RtCardNumber({className , cardNumber , cardTitle , contentCard ,classNameTitle , linkEdit , classNameAction , classNameMainContainer , onClickEdit}) {
    return (
        <div className={`rtCardAndAction ${classNameMainContainer}`}>
            <div className={`${className} rtCard`}>
                    <div>
                        <span>{cardNumber}</span>
                        <h3 className={`${classNameTitle}`}>{cardTitle}</h3>
                    </div>
                    <p>{contentCard}</p>
            </div>
            <div className={`rtStorageAction ${classNameAction}`}>
                <Link to={linkEdit} className='rtEditPen'>
                    <Button
                    name= {<MdEdit />}
                    width= "46px"
                    height= "46px"
                    fontSize= "30px"
                    backgroundColor= "var(--green50)"
                    border= "1px solid var(--green50)"
                    borderRadius= "6px"
                    onClick={onClickEdit}
                    />
                </Link>
                <Button
                    name= {<MdDelete />}
                    width= "46px"
                    height= "46px"
                    fontSize= "30px"
                    backgroundColor= "red"
                    border= "1px solid red"
                    borderRadius= "6px"
                    className= "rtDelete"
                />
            </div>
        </div>
    )
}
