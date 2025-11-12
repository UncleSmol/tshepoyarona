import React from 'react'

const pillars = [
  {
    icon: 'bi-shield-check',
    title: 'Safety',
    description: 'We prioritize the safety of our workers, clients, and communities. Our comprehensive safety protocols ensure zero-harm environments on all project sites.',
    initiatives: [
      'Regular safety training and awareness programs',
      'Strict adherence to OHSA regulations',
      'Daily safety briefings and site inspections',
      'Emergency response procedures'
    ]
  },
  {
    icon: 'bi-heart-pulse',
    title: 'Health',
    description: 'Employee wellbeing is fundamental to our operations. We promote healthy work environments and provide support for physical and mental health.',
    initiatives: [
      'Occupational health assessments',
      'Wellness programs for employees',
      'COVID-19 protocols and screening',
      'Access to healthcare services'
    ]
  },
  {
    icon: 'bi-recycle',
    title: 'Environment',
    description: 'We are committed to minimizing our environmental impact through sustainable practices and responsible resource management.',
    initiatives: [
      'Waste reduction and recycling programs',
      'Energy-efficient building practices',
      'Water conservation measures',
      'Environmental impact assessments'
    ]
  },
  {
    icon: 'bi-award',
    title: 'Quality',
    description: 'Excellence in delivery is our standard. We maintain rigorous quality control systems to ensure every project meets the highest standards.',
    initiatives: [
      'ISO quality management systems',
      'Regular quality audits and inspections',
      'Continuous improvement processes',
      'Client satisfaction monitoring'
    ]
  }
]

const commitments = [
  {
    icon: 'bi-cone-striped',
    title: 'Worker Safety',
    description: 'Zero tolerance for workplace accidents with comprehensive training programs.'
  },
  {
    icon: 'bi-tree',
    title: 'Green Building',
    description: 'Incorporating sustainable materials and energy-efficient designs in our projects.'
  },
  {
    icon: 'bi-people',
    title: 'Community Impact',
    description: 'Creating employment opportunities and supporting local communities.'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Economic Growth',
    description: 'Contributing to South African economic development through quality delivery.'
  },
  {
    icon: 'bi-handshake',
    title: 'Stakeholder Engagement',
    description: 'Building strong relationships with clients, partners, and communities.'
  },
  {
    icon: 'bi-lightbulb',
    title: 'Innovation',
    description: 'Embracing new technologies and methodologies for improved outcomes.'
  }
]

const achievements = [
  {
    year: '2008',
    award: 'Best Professional Woman Contractor',
    organization: 'Public Works – Gauteng'
  },
  {
    year: '2009',
    award: 'Best Woman Contractor Grade 4–6',
    organization: 'CIDB Free State'
  },
  {
    year: '2010',
    award: 'Woman in Construction Excellence Award Grade 5–6',
    organization: 'Tseibin Free State'
  }
]

const Sustainability = () => {
  return (
    <main id="sustainability" className="sustainability-page">
      <header className="sustainability-hero" aria-label="Sustainability Strategy">
        <h1 className="sustainability-hero__title">Sustainability Strategy</h1>
        <p className="sustainability-hero__subtitle">
          Building a better future through safety, health, environmental stewardship, and quality excellence.
        </p>
      </header>

      <section className="sustainability-intro" aria-labelledby="intro-title">
        <h2 id="intro-title">Our Commitment</h2>
        <p>
          At Tshepo Ya Rona, sustainability is at the core of everything we do. We are committed to delivering 
          projects that not only meet our clients' needs but also contribute positively to society and the environment. 
          Our sustainability strategy is built on four fundamental pillars that guide our operations and decision-making.
        </p>
      </section>

      <section className="pillars-section" aria-labelledby="pillars-title">
        <h2 id="pillars-title">Four Pillars of Sustainability</h2>
        <div className="pillars-grid">
          {pillars.map(pillar => (
            <article key={pillar.title} className="pillar-card">
              <div className="pillar-card__header">
                <i className={`bi ${pillar.icon}`} aria-hidden="true"></i>
                <h3 className="pillar-card__title">{pillar.title}</h3>
              </div>
              <p className="pillar-card__desc">{pillar.description}</p>
              <h4 className="pillar-card__subtitle">Key Initiatives:</h4>
              <ul className="pillar-card__list" role="list">
                {pillar.initiatives.map((initiative, idx) => (
                  <li key={idx}>{initiative}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="commitments-section" aria-labelledby="commitments-title">
        <h2 id="commitments-title">Our Commitments</h2>
        <div className="commitments-grid">
          {commitments.map(commitment => (
            <div key={commitment.title} className="commitment-card">
              <i className={`bi ${commitment.icon}`} aria-hidden="true"></i>
              <h3 className="commitment-card__title">{commitment.title}</h3>
              <p className="commitment-card__desc">{commitment.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recognition-section" aria-labelledby="recognition-title">
        <h2 id="recognition-title">Recognition & Awards</h2>
        <p>
          Our commitment to excellence and sustainability has been recognized through various industry awards, 
          particularly celebrating our Managing Director Mpho Emily Modise's leadership in the construction sector.
        </p>
        <ul className="achievements-list" role="list">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="achievement-item">
              <span className="achievement-item__year">{achievement.year}</span>
              <div className="achievement-item__content">
                <h3 className="achievement-item__award">{achievement.award}</h3>
                <p className="achievement-item__org">{achievement.organization}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="sustainability-cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Partner With Us</h2>
        <p>
          Join us in building sustainable, safe, and quality projects that make a positive impact. 
          Let's create something exceptional together.
        </p>
        <div className="sustainability-cta__actions">
          <a href="#contact" className="btn btn--primary">Get in touch</a>
          <a href="#about" className="btn btn--secondary">Learn more about us</a>
        </div>
      </section>
    </main>
  )
}

export default Sustainability