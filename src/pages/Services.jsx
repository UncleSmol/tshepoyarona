import React from 'react'

const categories = [
  {
    icon: 'bi-rulers',
    title: 'Architecture',
    points: [
      'Conceptual design and ideation',
      'Design development and working drawings',
      'Interdisciplinary collaboration and coordination',
    ],
  },
  {
    icon: 'bi-diagram-3',
    title: 'Project Management',
    points: [
      'Planning, governance, and risk management',
      'Stakeholder management and communication',
      'Cost, schedule, and resource control',
    ],
  },
]

const engineering = [
  {
    icon: 'bi-building',
    title: 'Structural Engineering',
    points: [
      'Commercial, residential, mining, and transport structures',
      'Reinforced, prestressed, and post-tensioned structures',
    ],
  },
  {
    icon: 'bi-traffic-cone',
    title: 'Civil Engineering',
    points: [
      'Roads and stormwater management',
      'Geotechnical investigations and pavement design',
      'Water and wastewater reticulation',
    ],
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Electrical & Mechanical',
    points: [
      'Power distribution and lighting',
      'HVAC design and building services',
      'Instrumentation and controls',
    ],
  },
  {
    icon: 'bi-sign-turn-right',
    title: 'Infrastructure & Transport',
    points: [
      'Feasibility studies and transport planning',
      'Traffic engineering and sustainable solutions',
    ],
  },
]

const Services = () => {
  return (
    <main id="services" className="services-page">
      <header className="services-hero" aria-label="Our Services">
        <h1 className="services-hero__title">Our Services</h1>
        <p className="services-hero__subtitle">Integrated architecture, engineering, and project management for end-to-end delivery.</p>
      </header>

      <section className="services-section" aria-labelledby="services-core-title">
        <h2 id="services-core-title">Core Services</h2>
        <ul className="cards" role="list">
          {categories.map(cat => (
            <li className="card" key={cat.title}>
              <i className={`bi ${cat.icon}`} aria-hidden="true"></i>
              <h3 className="card__title">{cat.title}</h3>
              <ul className="card__list" role="list">
                {cat.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="services-section" aria-labelledby="services-engineering-title">
        <h2 id="services-engineering-title">Engineering Disciplines</h2>
        <ul className="cards" role="list">
          {engineering.map(cat => (
            <li className="card" key={cat.title}>
              <i className={`bi ${cat.icon}`} aria-hidden="true"></i>
              <h3 className="card__title">{cat.title}</h3>
              <ul className="card__list" role="list">
                {cat.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta" aria-label="Get in touch">
        <h2 className="cta__title">Let’s build together</h2>
        <p>Discuss your project requirements and timelines with our team.</p>
        <a className="btn btn--primary" href="/contact">Contact us</a>
      </section>
    </main>
  )
}

export default Services