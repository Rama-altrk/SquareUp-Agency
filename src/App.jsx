import SectionHeading from './components/SectionHeading/SectionHeading';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Hero />

      <SectionHeading
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        background="straight.png"
      />

      <SectionHeading
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        background="waveToDown.png"
      />

      <SectionHeading
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        background="waveToUp.png"
      />

      <SectionHeading
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        background="straight.png"
      />
    </>
  );
}

export default App;