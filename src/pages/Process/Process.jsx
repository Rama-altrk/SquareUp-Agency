import './Process.css'
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SquareUp from '../../components/SquareUp/SquareUp';

export default function Process() {
  return (
    <>
      <SectionHeading
        className= "rtProcessHeading"
        title= "Process of Starting the Project"
        description= "At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        background="doubleWaveToUp.png"
      />
      <SquareUp 
        title="Thank you for your Interest in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
      />
    </>
  )
}
