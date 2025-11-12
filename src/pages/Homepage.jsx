import React from 'react'
import "../styling/Homepage.css"
import HomepageHeroImage from "../assets/homepage-hero-image.jpg";

const services = [
  { 
    icon: 'bi-rulers', 
    title: 'Architecture', 
    desc: 'Concept design through detailed working drawings—practical, compliant and buildable solutions. Creating unique and innovative designs that address modern conditions like climate change and urbanization.' 
  },
  { 
    icon: 'bi-diagram-3', 
    title: 'Project Management', 
    desc: 'End-to-end project delivery: programme, cost control, procurement and on-site supervision. Systematic approach including project initiation, planning, execution, monitoring and closure.' 
  },
  { 
    icon: 'bi-building', 
    title: 'Structural & Civil', 
    desc: 'Structural design for mining, commercial, residential projects and transportation systems. Civil engineering specializing in roads, storm water, wastewater treatment and infrastructure advisory.' 
  },
  { 
    icon: 'bi-lightning-charge', 
    title: 'Electrical & Mechanical', 
    desc: 'Building services design including power, lighting, HVAC and systems coordination. Complete HVAC electrical and plumbing projects with our team of engineers and artisans.' 
  },
  { 
    icon: 'bi-palette', 
    title: 'Interior Decor & Turnkey', 
    desc: 'Creating functional spaces and advising on furnishings to achieve desired aesthetics. Full turnkey development services for residential and commercial buildings.' 
  },
]

const pillars = [
  { 
    icon: 'bi-shield-check', 
    title: 'Safety',
    desc: 'Worksite regulations with strict adherence to electrical safety, height work precautions, and personal protective equipment.'
  },
  { 
    icon: 'bi-heart-pulse', 
    title: 'Health',
    desc: 'Health and safety induction, training for working at height, asbestos awareness, and remote site arrangements.'
  },
  { 
    icon: 'bi-recycle', 
    title: 'Environment',
    desc: 'Managing environmental impact through energy efficiency, pollution prevention, waste management and chemical use policies.'
  },
  { 
    icon: 'bi-award', 
    title: 'Quality',
    desc: 'Continuous education and training with documented construction and quality assurance procedures for outstanding project delivery.'
  },
]

const achievements = [
  { year: '2008', title: 'Best Professional Woman Contractor', prize: 'First Prize', awarded: 'Public Works - Gauteng Province' },
  { year: '2009', title: 'Best Woman Contractor Grade 4-6', prize: 'First Prize', awarded: 'CIDB Free State' },
  { year: '2010', title: 'Woman in Construction Excellence Award', prize: 'Second Place', awarded: 'TEBFIN Free State' },
]

const stats = [
  { number: '17+', label: 'Years Experience' },
  { number: 'R720M', label: 'Largest Project' },
  { number: '100%', label: 'Black Woman Owned' },
  { number: '8GB PE', label: 'CIDB Grading' },
]

const Homepage = () => {
  return (
    <main id="home" className="homepage">
      {/* Hero Section */}
      <section
        className="homepage__hero"
        aria-label="Hero Section"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${HomepageHeroImage})` }}
      >
        <div className="homepage__hero-overlay">
          <div className="homepage__hero-content">
            <div className="homepage__hero-badge">
              <span className="homepage__hero-badge-text">100% Black Woman Owned</span>
            </div>
            <h1 className="homepage__hero-title">
              <span className="homepage__hero-title-main">Delivering Quality</span>
              <span className="homepage__hero-title-accent">On Time</span>
            </h1>
            <p className="homepage__hero-subtitle">
              Tshepo Ya Rona is a multidisciplinary construction, engineering, and project management company 
              with over 17 years of excellence in the South African construction industry.
            </p>
            <div className="homepage__hero-actions">
              <a href="#contact" className="btn btn--primary">Get in touch</a>
              <a href="#projects" className="btn btn--secondary">View our projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="homepage__stats" aria-label="Company Statistics">
        <div className="homepage__stats-container">
          {stats.map((stat, index) => (
            <div key={stat.label} className="homepage__stat-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <span className="homepage__stat-number">{stat.number}</span>
              <span className="homepage__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="homepage__about" aria-labelledby="about-title">
        <div className="homepage__about-container">
          <div className="homepage__about-content">
            <h2 id="about-title" className="homepage__section-title">Our Hope, Your Trust</h2>
            <p className="homepage__about-text">
              <strong>Tshepo Ya Rona</strong> means 'Our Hope'. Established in 2005 by Mpho Emily Modise, 
              we are a pioneering 100% black woman-owned company with over 17 years of experience 
              delivering exceptional construction and engineering services across South Africa.
            </p>
            <div className="homepage__about-features">
              <div className="homepage__about-feature">
                <h3>Vision</h3>
                <p>Maintain profitable growth through satisfied clients, employees, partners, and environmental stewardship.</p>
              </div>
              <div className="homepage__about-feature">
                <h3>Mission</h3>
                <p>Provide quality, loyalty, professionalism while acknowledging environment evolution and project vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="homepage__services" aria-labelledby="services-title">
        <div className="homepage__services-container">
          <h2 id="services-title" className="homepage__section-title">Our Services</h2>
          <p className="homepage__services-intro">
            A one-stop-service provider offering turnkey solutions from concept to completion.
          </p>
          <ul className="homepage__services-grid" role="list">
            {services.map(service => (
              <li className="homepage__service-card" key={service.title}>
                <div className="homepage__service-icon">
                  <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="homepage__service-title">{service.title}</h3>
                <p className="homepage__service-desc">{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="homepage__projects" aria-labelledby="projects-title">
        <div className="homepage__projects-container">
          <h2 id="projects-title" className="homepage__section-title">Selected Projects</h2>
          <p className="homepage__projects-intro">
            From R37 million bridge rail installations to R720 million residential estates, 
            we've successfully delivered projects across public and private sectors.
          </p>
          <div className="homepage__projects-highlights">
            <div className="homepage__project-highlight">
              <span className="homepage__project-value">R37M</span>
              <span className="homepage__project-name">Bridge Rails Installation</span>
            </div>
            <div className="homepage__project-highlight">
              <span className="homepage__project-value">R69M</span>
              <span className="homepage__project-name">Divfoods Offices</span>
            </div>
            <div className="homepage__project-highlight">
              <span className="homepage__project-value">R265M</span>
              <span className="homepage__project-name">Mantsopa Hospital</span>
            </div>
          </div>
          <a href="#contact" className="btn btn--primary">Request Full Portfolio</a>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="homepage__sustainability" aria-labelledby="sustainability-title">
        <div className="homepage__sustainability-container">
          <h2 id="sustainability-title" className="homepage__section-title">Our Commitment</h2>
          <p className="homepage__sustainability-intro">
            Building with responsibility towards safety, health, environment, and quality.
          </p>
          <ul className="homepage__pillars-grid" role="list">
            {pillars.map(pillar => (
              <li className="homepage__pillar" key={pillar.title}>
                <div className="homepage__pillar-icon">
                  <i className={`bi ${pillar.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="homepage__pillar-title">{pillar.title}</h3>
                <p className="homepage__pillar-desc">{pillar.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="homepage__achievements" aria-labelledby="achievements-title">
        <div className="homepage__achievements-container">
          <h2 id="achievements-title" className="homepage__section-title">Awards & Recognition</h2>
          <div className="homepage__achievements-grid">
            {achievements.map(achievement => (
              <div key={achievement.year} className="homepage__achievement">
                <span className="homepage__achievement-year">{achievement.year}</span>
                <h3 className="homepage__achievement-title">{achievement.title}</h3>
                <span className="homepage__achievement-prize">{achievement.prize}</span>
                <p className="homepage__achievement-awarded">Awarded by {achievement.awarded}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="homepage__contact" aria-labelledby="contact-title">
        <div className="homepage__contact-container">
          <h2 id="contact-title" className="homepage__section-title">Ready to Start Your Project?</h2>
          <p className="homepage__contact-intro">
            We're here to support your next construction, engineering, or project management needs.
          </p>
          <div className="homepage__contact-content">
            <div className="homepage__contact-info">
              <h3>Get in Touch</h3>
              <ul className="homepage__contact-list" role="list">
                <li>
                  <a href="tel:+27731434440" className="homepage__contact-link">
                    <i className="bi bi-telephone" aria-hidden="true"></i>
                    <span>+27 73 143 4440</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@tyr-trading.co.za" className="homepage__contact-link">
                    <i className="bi bi-envelope" aria-hidden="true"></i>
                    <span>info@tyr-trading.co.za</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tshepoyarona.co.za" className="homepage__contact-link">
                    <i className="bi bi-globe" aria-hidden="true"></i>
                    <span>www.tshepoyarona.co.za</span>
                  </a>
                </li>
                <li>
                  <div className="homepage__contact-link">
                    <i className="bi bi-geo-alt" aria-hidden="true"></i>
                    <span>Hatfield Plaza, 1122 Burnett Street<br />Hatfield, Pretoria, 0083</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="homepage__contact-cta">
              <p className="homepage__contact-urgency">
                <strong>CIDB Grading:</strong> 8GB PE, 6CE PE, 55Q PE, 1S0 PE
              </p>
              <a href="tel:+27731434440" className="btn btn--primary">Call Now</a>
              <a href="mailto:info@tyr-trading.co.za" className="btn btn--secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Homepage