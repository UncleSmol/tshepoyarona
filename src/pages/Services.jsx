import React from 'react'
import "../styling/Services.css"

const categories = [
  {
    icon: 'bi-rulers',
    title: 'Architecture',
    description: 'Creating innovative designs that address modern conditions like climate change, globalization, and urbanization through interdisciplinary collaboration.',
    points: [
      'Conceptual design and ideation for new projects',
      'Design development and detailed working drawings',
      'Interdisciplinary collaboration and coordination',
      'Contemporary designs addressing climate change and technology',
      'Unique and innovative signature designs'
    ],
  },
  {
    icon: 'bi-diagram-3',
    title: 'Project Management',
    description: 'Systematic application of planning, organizing, and managing resources to achieve specific construction project goals within constraints.',
    points: [
      'Project initiation, planning and design phases',
      'Execution, monitoring and evaluation',
      'Stakeholder management and communication',
      'Cost, schedule, and resource control',
      'Project closure and handover'
    ],
  },
  {
    icon: 'bi-palette',
    title: 'Interior Decor & Turnkey',
    description: 'Creating functional spaces and advising on furnishings to achieve desired aesthetics for both residential and commercial projects.',
    points: [
      'Space planning and functional design',
      'Furnishings and decorative elements selection',
      'Private residence interiors and office spaces',
      'Full turnkey development services',
      'Mood and iconic effects creation'
    ],
  },
]

const engineering = [
  {
    icon: 'bi-building',
    title: 'Structural Engineering',
    description: 'Specialized structural design for various project types including mining, commercial, residential, and transportation systems.',
    points: [
      'Commercial, residential, mining, and transport structures',
      'Reinforced, prestressed, and post-tensioned structures',
      'Structural integrity and safety compliance',
      'Innovative structural solutions'
    ],
  },
  {
    icon: 'bi-traffic-cone',
    title: 'Civil Engineering',
    description: 'Comprehensive civil engineering services from project initiation to operations and maintenance.',
    points: [
      'Roads and stormwater management systems',
      'Geotechnical investigations and geometric surveys',
      'Pavement design and alignment planning',
      'Water and wastewater treatment reticulation',
      'Operations, maintenance, and training'
    ],
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Electrical & Mechanical',
    description: 'Complete building services design including power, lighting, HVAC, and plumbing systems.',
    points: [
      'Power distribution and lighting systems',
      'HVAC design and building services coordination',
      'Electrical and mechanical draftsmen and artisans',
      'Instrumentation and controls integration',
      'Complete HVAC electrical and plumbing projects'
    ],
  },
  {
    icon: 'bi-sign-turn-right',
    title: 'Infrastructure & Transport',
    description: 'Feasibility studies, design, and construction support for transport and infrastructure projects.',
    points: [
      'Feasibility studies and transport planning',
      'Traffic engineering and sustainable solutions',
      'Infrastructure advisory services',
      'Construction support and supervision'
    ],
  },
]

const serviceStats = [
  { number: '17+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '360°', label: 'Service Approach' },
  { number: '100%', label: 'Client Focus' },
]

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Understanding your project requirements and objectives' },
  { step: '02', title: 'Planning', description: 'Developing comprehensive project plans and designs' },
  { step: '03', title: 'Execution', description: 'Implementing projects with quality and precision' },
  { step: '04', title: 'Delivery', description: 'Handing over completed projects on time and within budget' },
]

const Services = () => {
  return (
    <main id="services" className="services-page">
      {/* Hero Section */}
      <header className="services-hero" aria-label="Our Services">
        <div className="services-hero__overlay">
          <div className="services-hero__content">
            <div className="services-hero__badge">
              <span>One-Stop Service Provider</span>
            </div>
            <h1 className="services-hero__title">
              Comprehensive Construction & Engineering Solutions
            </h1>
            <p className="services-hero__subtitle">
              Integrated architecture, engineering, and project management services for end-to-end project delivery. 
              From concept to completion, we deliver quality on time.
            </p>
            <div className="services-hero__actions">
              <a href="#contact" className="btn btn--primary">Start Your Project</a>
              <a href="#core-services" className="btn btn--secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="services-stats" aria-label="Service Statistics">
        <div className="services-stats__container">
          {serviceStats.map((stat, index) => (
            <div key={stat.label} className="services-stats__item">
              <span className="services-stats__number">{stat.number}</span>
              <span className="services-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="services-core" aria-labelledby="services-core-title">
        <div className="services-core__container">
          <h2 id="services-core-title" className="services-section__title">Core Services</h2>
          <p className="services-core__intro">
            Our multidisciplinary approach ensures seamless integration across all project phases, 
            delivering comprehensive solutions that meet your unique requirements.
          </p>
          <div className="services-core__grid">
            {categories.map((service, index) => (
              <article key={service.title} className="service-card service-card--featured">
                <div className="service-card__header">
                  <div className="service-card__icon">
                    <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                </div>
                <div className="service-card__body">
                  <p className="service-card__description">{service.description}</p>
                  <ul className="service-card__list" role="list">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="service-card__list-item">
                        <i className="bi bi-check-circle" aria-hidden="true"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-card__footer">
                  <a href="#contact" className="service-card__cta">
                    <span>Discuss {service.title}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Services Section */}
      <section className="services-engineering" aria-labelledby="services-engineering-title">
        <div className="services-engineering__container">
          <h2 id="services-engineering-title" className="services-section__title">Engineering Disciplines</h2>
          <p className="services-engineering__intro">
            Specialized engineering expertise across multiple disciplines, ensuring technical excellence 
            and innovative solutions for every project.
          </p>
          <div className="services-engineering__grid">
            {engineering.map((service, index) => (
              <article key={service.title} className="service-card service-card--engineering">
                <div className="service-card__header">
                  <div className="service-card__icon">
                    <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                </div>
                <div className="service-card__body">
                  <p className="service-card__description">{service.description}</p>
                  <ul className="service-card__list" role="list">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="service-card__list-item">
                        <i className="bi bi-check" aria-hidden="true"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process" aria-labelledby="services-process-title">
        <div className="services-process__container">
          <h2 id="services-process-title" className="services-section__title">Our Process</h2>
          <p className="services-process__intro">
            We follow a structured approach to ensure project success from conception to completion.
          </p>
          <div className="services-process__steps">
            {processSteps.map((step, index) => (
              <div key={step.step} className="process-step">
                <div className="process-step__number">{step.step}</div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="process-step__connector" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta" aria-label="Get in touch">
        <div className="services-cta__container">
          <div className="services-cta__content">
            <h2 className="services-cta__title">Ready to Start Your Project?</h2>
            <p className="services-cta__text">
              Let's discuss your construction, engineering, or project management needs. 
              Our team is ready to deliver quality solutions on time and within budget.
            </p>
            <div className="services-cta__actions">
              <a href="/contact" className="btn btn--primary btn--large">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                Get Free Consultation
              </a>
              <a href="tel:+27731434440" className="btn btn--secondary btn--large">
                <i className="bi bi-chat" aria-hidden="true"></i>
                Call Now: +27 73 143 4440
              </a>
            </div>
            <div className="services-cta__info">
              <div className="services-cta__info-item">
                <i className="bi bi-award" aria-hidden="true"></i>
                <span>CIDB Grading: 8GB PE, 6CE PE, 55Q PE, 1S0 PE</span>
              </div>
              <div className="services-cta__info-item">
                <i className="bi bi-shield-check" aria-hidden="true"></i>
                <span>NHBRC Registered & Fully Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services