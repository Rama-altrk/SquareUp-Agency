
import Faq from '../../components/FaqSection/faq'
export default function Home() {
       const faqList = [
        {
      id: "01",
      question: "What services does SquareUp provide?",
      answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
        id: "02",
        question: "How can SquareUp help my business?",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
         id: "03",
         question: "What industries does SquareUp work with?",
         answer:"SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            id: "04",
            question: "How long does it take to complete a project with SquareUp?",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            id: "05",
            question:"Do you offer ongoing support and maintenance after the project is completed?",
            answer:"SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            id: "06",
            question: "Can you work with existing design or development frameworks?",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            id: "07",
            question: "How involved will I be in the project development process?",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            id:"08",
            question: "Can you help with website or app maintenance and updates?",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
    ];
    return (
        <div>
<Faq items={faqList} />
        </div>
    )
}
