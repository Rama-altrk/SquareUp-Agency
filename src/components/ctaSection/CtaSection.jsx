import Button from '../Button/Button'
import './CtaSection.css'

function CtaSection() {
    return (
        <section className="mr-sectionCta">

            <div className="mr-container">
                <div className="mr-logo-cta"><img src="/img/squareIcon.png" alt="squareIcon" /></div>
                <div className="mr-text-cta">
                    <h2>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h2>
                    <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on  their journey and discover how they can help bring your digital ideas to life.</p>
                </div>
            </div>
            <div className="mr-subContainer">
                <h4>Welcome to SquareUp</h4>
                <div className="mr-p-container">
                <p>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</p>
                </div>
                <Button  
                className="startProjcet"
                name="Start Project"
                width={170}
                height={63}
                backgroundColor="var(--green50)"
                color="var(--grey10)"
                border="none"
                borderRadius={6}
                fontSize={18}
                />
            </div>

        </section>
    )
}

export default CtaSection