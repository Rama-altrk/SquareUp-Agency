import './SectionHeading.css';

function SectionHeading({ title, description, background }) {
  return (
    <section
      className="section-heading"
      style={{ backgroundImage: `url('/img/backgrounds/${background}')` }}
    >
      <div className="section-heading__content">
        <h2 className="section-heading__title">{title}</h2>
        <p className="section-heading__description">{description}</p>
      </div>
    </section>
  );
}

export default SectionHeading;