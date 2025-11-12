import React from 'react'

const services = [
  { icon: 'bi-rulers', title: 'Architecture', desc: 'Concept design, design development, and working drawings.' },
  { icon: 'bi-diagram-3', title: 'Project Management', desc: 'Planning, governance, risk, and stakeholder management.' },
  { icon: 'bi-building', title: 'Structural & Civil', desc: 'Structural engineering and civil works across sectors.' },
  { icon: 'bi-lightning-charge', title: 'Electrical & Mechanical', desc: 'Building services including HVAC, power, and lighting.' },
  { icon: 'bi-traffic-cone', title: 'Infrastructure & Transport', desc: 'Studies, feasibility, and transport systems planning.' },
]

const pillars = [
  { icon: 'bi-shield-check', title: 'Safety' },
  { icon: 'bi-heart-pulse', title: 'Health' },
  { icon: 'bi-recycle', title: 'Environment' },
  { icon: 'bi-award', title: 'Quality' },
]

const Homepage = () => {
  return (
    <main id="home" className="homepage">
      {/* Hero Section */}
      <section className="hero" aria-label="Hero">
        <div className="hero__content">
          <h1 className="hero__title">Delivering Quality On Time</h1>
          <p className="hero__subtitle">Tshepo Ya Rona is a multidisciplinary construction, engineering, and project management company.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Get in touch</a>
            <a href="#services" className="btn btn--secondary">Our services</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" aria-labelledby="about-title">
        <h2 id="about-title">About Us</h2>
        <p>
          Tshepo Ya Rona (YTR) is a 100% black woman-owned company with over 17 years of experience in the South African
          construction industry. We deliver architecture, engineering, and project management services with a focus on
          quality, safety, and client relationships.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services" aria-labelledby="services-title">
        <h2 id="services-title">Services</h2>
        <ul className="cards" role="list">
          {services.map(s => (
            <li className="card" key={s.title}>
              <i className={`bi ${s.icon}`} aria-hidden="true"></i>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Selected Projects</h2>
        <p>
          Explore our portfolio featuring public and private sector projects—from bridge rail installations and office renovations
          to schools, medical facilities, and housing developments.
        </p>
        <a href="#contact" className="btn btn--link">Request full portfolio</a>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="sustainability" aria-labelledby="sustainability-title">
        <h2 id="sustainability-title">Sustainability Strategy</h2>
        <ul className="pillars" role="list">
          {pillars.map(p => (
            <li className="pillar" key={p.title}>
              <i className={`bi ${p.icon}`} aria-hidden="true"></i>
              <span className="pillar__title">{p.title}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>We are ready to support your next project. Reach out to our team.</p>
        <ul className="contact__list" role="list">
          <li><a href="tel:+27731434440" className="contact__link"><i className="bi bi-telephone" aria-hidden="true"></i> +27 73 143 4440</a></li>
          <li><a href="mailto:info@tyr-trading.co.za" className="contact__link"><i className="bi bi-envelope" aria-hidden="true"></i> info@tyr-trading.co.za</a></li>
          <li><a href="https://www.tyr-trading.co.za" className="contact__link"><i className="bi bi-globe" aria-hidden="true"></i> www.tyr-trading.co.za</a></li>
        </ul>
      </section>
    </main>
  )
}

export default Homepage