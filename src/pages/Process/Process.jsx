import CardNumber from '../../components/CardNumaber/CardNumber'
import Container from '../../components/Container/Container'
import AtSquareUpSection from '../../components/AtSquareUpSection/AtSquareUpSection'
import './Process.css'
export default function Process() {

  const Card = [
    {
      id: 1,
      title: "01",
      badge: "Discovery",
      content: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
      width: 798,
      height: 463
    },

    {
      id: 2,
      title: "02",
      badge: "Planning and Strategy",
      content: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
      width: 798,
      height: 463
    },

    {
      id: 3,
      title: "03",
      badge: "Design",
      content: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
      width: 798,
      height: 463
    },
    {
      id: 4,
      title: "04",
      badge: "Development",
      content: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
      width: 798,
      height: 463
    },
    {
      id: 5,
      title: "05",
      badge: "Testing and Quality Assurance",
      content: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
      width: 798,
      height: 463
    },
    {
      id: 6,
      title: "06",
      badge: "Deployment and Launch",
      content: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
      width: 798,
      height: 463
    },
    {
      id: 7,
      title: "07",
      badge: "Post-Launch Support",
      content: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
      width: 798,
      height: 463
    },
    {
      id: 8,
      title: "08",
      badge: "Continuous Improvement",
      content: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
      width: 798,
      height: 463
    },

  ]

  return (
    <>
      <Container>
        <AtSquareUpSection />
        {
          Card.map((item) => {
            return (
              <CardNumber
                title={item.title}
                badge={item.badge}
                content={item.content}
                width={item.width}
                height={item.height}
                className="process-Card"
                key={item.id}
              />
            )
          })
        }
      </Container>
    </>
  )
}
