import './About.css'
import CtaSection from "../../components/ctaSection/CtaSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";


export default function About() {
    return (
        <>
            <SectionHeading
                className= "rtAboutHeading"
                title="About Us"
                description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
                background="straight.png"
            />
            <CtaSection/>
        </>
    )
}
