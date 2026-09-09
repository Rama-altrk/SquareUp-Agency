import './Work.css'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import SquareUp from '../../components/SquareUp/SquareUp'

export default function Work() {
  return (
    <>
      <SectionHeading
        title="Our Works"
        description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        background="waveToUp.png"
        className= "rtWorkHeading"
      />
      <ProjectCards/>
      <SquareUp
        className= "rtWorkSquareUp"
        title= "Let us Bring your Ideas to Life in the Digital World."
        description= "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
    </>
  )
}
