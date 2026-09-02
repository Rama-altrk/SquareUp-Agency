import './Home.css'
import WyhChooseSeciton from '../../components/wyhChooseSection/WyhChooseSeciton'
import CardWyhChoose from '../../components/CardWyhChoose/CardWyhChoose'

export default function Home() {

    const Card = [
        {
            id: 1,
            image: "/img/homeImg/ExpertiseIcon.png",
            title: "Expertise",
            content: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
        },

        {
            id: 2,
            image: "/img/homeImg/ClientCentricIcon.png",
            title: "Client-Centric Approach",
            content: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",

        },

        {
            id: 3,
            image: "/img/homeImg/Results-DrivenIcon.png",
            title: "Results-Driven Solutions",
            content: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
        },
        {
            id: 4,
            image: "/img/homeImg/CollaborativeIcon.png",
            title: "Collaborative Partnership",
            content: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
        }
    ]
    return (
        <div>
            <div className="container-Card">
                <WyhChooseSeciton />
                {
                    Card.map((item) => {
                    return (
                    <CardWyhChoose
                    title={item.title}
                    image={item.image}
                    contnet={item.content}
                    />
                    )
                    })
                }
            </div>
        </div>
    )
}
