import Button from '../../../../components/Button/Button'
import './ServiceSectionCrud.css'
import { Link } from 'react-router-dom'

export default function ServiceSectionCrud() {
  return (
    <>
      <Link to="add">
                <Button 
                    name= "add"
                    width="100%"
                    height= "34px"
                    fontSize= "18px"
                    backgroundColor= "var(--green50)"
                    border= "1px solid var(--green50)"
                    color= "var(--grey30)"
                    borderRadius= "8px"
                />
            </Link>
    </>
  )
}
