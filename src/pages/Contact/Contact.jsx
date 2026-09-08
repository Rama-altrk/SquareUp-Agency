import './Contact.css'
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SquareUp from '../../components/SquareUp/SquareUp';
import CtaSection from '../../components/ctaSection/CtaSection';

export default function Contact() {
  return (
    <>
      <SectionHeading
        className= "rtProcessHeading"
        title= "Contact Us"
        description= "Get in touch with us today and let us help you with any questions or inquiries you may have."
        background="doubleWaveToUp.png"
      />
      <CtaSection className= "rtCtaContact"/>
    </>
  )
}
