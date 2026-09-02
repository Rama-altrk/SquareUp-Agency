import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        A Digital Product Studio <br /> that will Work
      </h1>

      <div className="hero-tags">
        <span className="hero-tag-plain">For</span>
        <span className="hero-tag">Startups</span>
        <span className="hero-tag-plain">,</span>
        <span className="hero-tag">Enterprise leaders</span>
        <span className="hero-tag-plain">,</span>
        <span className="hero-tag">Media & Publishers</span>
        <span className="hero-tag-plain">and</span>
        <span className="hero-tag">Social Good</span>
      </div>

      <div className="hero-tags-mobile">
        <p>For startups, enterprise leaders, media & publishers, and social good.</p>
      </div>

      <div className="hero-buttons">
        <button className="btn-outline-temp">Our Works</button>
        <button className="btn-primary-temp">Contact Us</button>
      </div>

      <div className="hero-bg-wrapper">
        <img
          src="/img/homeImg/HeroBackground.png"
          alt=""
          className="hero-bg"
        />
      </div>

      <div className="trusted-badge">
        <p className="trusted-text">Trusted By 250+ Companies</p>
      </div>
    </section>
  );
}

export default Hero;