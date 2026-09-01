
import './WyhChooseSeciton.css'

function WyhChooseSeciton() {
    return (
        <section className="mr-wyhChooseUs">

            <div className="mr-textContainer">
                <img src="/img/backgrounds/waveToDown.png" alt="waveToDown" className="bg-wave" />

                <h1>Why Choose SquareUp?</h1>
                <p>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
            </div>

            <div className="mr-container-card">
                <div className="card-top">

                    <div className="mr-card">
                        <div className="mr-title-logo">
                            <div className="mr-logo"><img src="/img/homeImg/ExpertiseIcon.png" alt="ExpertiseIcon.png" /></div>
                            <h1>Expertise</h1>
                        </div>

                        <p>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>

                    </div>

                    <div className="mr-card">
                        <div className="mr-title-logo">

                            <div className="mr-logo"><img src="/img/homeImg/ClientCentricIcon.png" alt="ClientCentricIcon.png" /></div>
                            <h1>Client-Centric Approach</h1>
                        </div>
                        <p>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>

                    </div>
                </div>

                <div className="card-bottom">
                    <div className="mr-card">

                        <div className="mr-title-logo">

                            <div className="mr-logo"><img src="/img/homeImg/Results-DrivenIcon.png" alt="Results-DrivenIcon.png" /></div>
                            <h1>Results-Driven Solutions</h1>

                        </div>

                        <p>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>

                    </div>

                    <div className="mr-card">
                        <div className="mr-title-logo">

                            <div className="mr-logo"><img src="/img/homeImg/CollaborativeIcon.png" alt="CollaborativeIcon.png" /></div>
                            <h1>Collaborative Partnership</h1>
                        </div>
                        <p>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default WyhChooseSeciton