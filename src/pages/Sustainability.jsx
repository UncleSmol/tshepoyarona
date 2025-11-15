import React from 'react'
import "../styling/Sustainability.css"
import SustainabilityHeroImg from '../assets/sustainability-hero-image.jpg'

const pillars = [
  {
    icon: 'bi-shield-check',
    title: 'Safety',
    description: 'We prioritize the safety of our workers, clients, and communities. Our comprehensive safety protocols ensure zero-harm environments on all project sites.',
    initiatives: [
      'Regular safety training and awareness programs',
      'Strict adherence to OHSA regulations',
      'Daily safety briefings and site inspections',
      'Emergency response procedures',
      'Personal protective equipment provision',
      'Working at height and electrical safety protocols'
    ],
    metrics: ['0', 'Major Incidents in 2023'],
    color: 'var(--color-primary)'
  },
  {
    icon: 'bi-heart-pulse',
    title: 'Health',
    description: 'Employee wellbeing is fundamental to our operations. We promote healthy work environments and provide support for physical and mental health.',
    initiatives: [
      'Occupational health assessments',
      'Wellness programs for employees',
      'COVID-19 protocols and screening',
      'Access to healthcare services',
      'Remote site medical arrangements',
      'Health and safety induction for all staff'
    ],
    metrics: ['100%', 'Staff Health Inductions'],
    color: 'var(--color-secondary)'
  },
  {
    icon: 'bi-recycle',
    title: 'Environment',
    description: 'We are committed to minimizing our environmental impact through sustainable practices and responsible resource management.',
    initiatives: [
      'Waste reduction and recycling programs',
      'Energy-efficient building practices',
      'Water conservation measures',
      'Environmental impact assessments',
      'Pollution prevention protocols',
      'Sustainable material sourcing'
    ],
    metrics: ['30%', 'Waste Reduction Target'],
    color: 'var(--color-tertiary)'
  },
  {
    icon: 'bi-award',
    title: 'Quality',
    description: 'Excellence in delivery is our standard. We maintain rigorous quality control systems to ensure every project meets the highest standards.',
    initiatives: [
      'ISO quality management systems',
      'Regular quality audits and inspections',
      'Continuous improvement processes',
      'Client satisfaction monitoring',
      'Documented construction procedures',
      'Supplier quality assurance'
    ],
    metrics: ['98%', 'Client Satisfaction Rate'],
    color: 'var(--color-primary)'
  }
]

const commitments = [
  {
    icon: 'bi-cone-striped',
    title: 'Worker Safety',
    description: 'Zero tolerance for workplace accidents with comprehensive training programs and strict site regulations.',
    features: ['Safety inductions', 'PPE provision', 'Risk assessments']
  },
  {
    icon: 'bi-tree',
    title: 'Green Building',
    description: 'Incorporating sustainable materials and energy-efficient designs in all our construction projects.',
    features: ['Eco-friendly materials', 'Energy efficiency', 'Water conservation']
  },
  {
    icon: 'bi-people',
    title: 'Community Impact',
    description: 'Creating employment opportunities and supporting local communities through skills development.',
    features: ['Local employment', 'Skills training', 'Community support']
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Economic Growth',
    description: 'Contributing to South African economic development through quality project delivery and local procurement.',
    features: ['Local suppliers', 'Economic empowerment', 'SMME development']
  },
  {
    icon: 'bi-handshake',
    title: 'Stakeholder Engagement',
    description: 'Building strong relationships with clients, partners, and communities through transparent communication.',
    features: ['Regular reporting', 'Community meetings', 'Stakeholder feedback']
  },
  {
    icon: 'bi-lightbulb',
    title: 'Innovation',
    description: 'Embracing new technologies and methodologies for improved project outcomes and efficiency.',
    features: ['Technology adoption', 'Process improvement', 'Research & development']
  }
]

const achievements = [
  {
    year: '2008',
    award: 'Best Professional Woman Contractor',
    organization: 'Department of Public Works – Gauteng Province',
    prize: 'First Prize',
    description: 'Recognizing excellence in professional contracting and project delivery'
  },
  {
    year: '2009',
    award: 'Best Woman Contractor Grade 4–6',
    organization: 'Construction Industry Development Board – Free State',
    prize: 'First Prize',
    description: 'Awarded for outstanding performance in construction management'
  },
  {
    year: '2010',
    award: 'Woman in Construction Excellence Award',
    organization: 'TEBFIN – Free State',
    prize: 'Second Place',
    description: 'Recognizing leadership and excellence in the construction industry'
  }
]

const communityInitiatives = [
  {
    icon: 'bi-book',
    title: 'Educational Bursaries',
    description: 'Supporting four tertiary students (three in university and one in TVET) with educational bursaries, focusing on uplifting the underprivileged girl-child.',
    impact: '4 students supported'
  },
  {
    icon: 'bi-heart',
    title: 'Community Support',
    description: 'Running community support groups in Olievenhout and Alexandra, providing food, clothing, and medical assistance to underprivileged communities.',
    impact: '2 communities supported'
  },
  {
    icon: 'bi-briefcase',
    title: 'Skills Development',
    description: 'Providing on-the-job training and skills development opportunities for local community members in construction trades.',
    impact: '50+ individuals trained'
  },
  {
    icon: 'bi-house',
    title: 'Social Housing',
    description: 'Delivering RDP housing projects and community facilities to improve living conditions in underserved areas.',
    impact: '197 RDP houses delivered'
  }
]

const Sustainability = () => {
  return (
    <main id="sustainability" className="sustainability-page">
      {/* Hero Section */}
<header 
  className="sustainability-hero" 
  aria-label="Sustainability Strategy"
  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${SustainabilityHeroImg})` }}
>
  <div className="sustainability-hero__overlay">
    <div className="sustainability-hero__content">
      <div className="sustainability-hero__badge">
        <span className="sustainability-hero__badge-text">Building Responsibly</span>
      </div>
      <h1 className="sustainability-hero__title">
        <span className="sustainability-hero__title-main">Sustainability &</span>
        <span className="sustainability-hero__title-accent">Social Responsibility</span>
      </h1>
      <p className="sustainability-hero__subtitle">
        Building a better future through safety, health, environmental stewardship, and quality excellence. 
        Our commitment extends beyond construction to creating lasting positive impacts in our communities.
      </p>
      <div className="sustainability-hero__actions">
        <a href="#pillars" className="btn btn--primary">Our Sustainability Pillars</a>
        <a href="#community" className="btn btn--secondary">Community Impact</a>
      </div>
    </div>
  </div>
</header>

      {/* Stats Section with Gradient */}
      <section className="sustainability-stats" aria-label="Sustainability Statistics">
        <div className="sustainability-stats__container">
          <div className="sustainability-stats__item">
            <span className="sustainability-stats__number">17+</span>
            <span className="sustainability-stats__label">Years of Responsible Operations</span>
          </div>
          <div className="sustainability-stats__item">
            <span className="sustainability-stats__number">100%</span>
            <span className="sustainability-stats__label">Safety Compliance</span>
          </div>
          <div className="sustainability-stats__item">
            <span className="sustainability-stats__number">4</span>
            <span className="sustainability-stats__label">Students Supported</span>
          </div>
          <div className="sustainability-stats__item">
            <span className="sustainability-stats__number">2</span>
            <span className="sustainability-stats__label">Communities Empowered</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="sustainability-intro" aria-labelledby="intro-title">
        <div className="sustainability-intro__container">
          <h2 id="intro-title" className="sustainability-section__title">Our Commitment to Sustainability</h2>
          <div className="sustainability-intro__content">
            <p>
              At Tshepo Ya Rona, sustainability is at the core of everything we do. We are committed to delivering 
              projects that not only meet our clients' needs but also contribute positively to society and the environment.
            </p>
            <p>
              Our sustainability strategy is built on four fundamental pillars that guide our operations and decision-making, 
              ensuring we create lasting value for all our stakeholders while minimizing our environmental footprint.
            </p>
            <div className="sustainability-intro__highlight">
              <i className="bi bi-quote" aria-hidden="true"></i>
              <p>
                "We believe that responsible construction is about more than just building structures - 
                it's about building communities, opportunities, and a sustainable future for generations to come."
              </p>
              <span className="sustainability-intro__author">- Mpho Emily Modise, Founder & Managing Director</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="pillars-section" aria-labelledby="pillars-title">
        <div className="pillars-section__container">
          <h2 id="pillars-title" className="sustainability-section__title">Four Pillars of Sustainability</h2>
          <p className="pillars-section__intro">
            Our comprehensive approach to sustainability is built on four interconnected pillars that guide 
            every aspect of our operations and project delivery.
          </p>
          
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="pillar-card">
                <div className="pillar-card__header">
                  <div className="pillar-card__icon">
                    <i className={`bi ${pillar.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="pillar-card__metrics">
                    <span className="pillar-card__metric-value">{pillar.metrics[0]}</span>
                    <span className="pillar-card__metric-label">{pillar.metrics[1]}</span>
                  </div>
                </div>
                
                <div className="pillar-card__body">
                  <h3 className="pillar-card__title">{pillar.title}</h3>
                  <p className="pillar-card__description">{pillar.description}</p>
                  
                  <div className="pillar-card__initiatives">
                    <h4 className="pillar-card__subtitle">Key Initiatives:</h4>
                    <ul className="pillar-card__list" role="list">
                      {pillar.initiatives.map((initiative, idx) => (
                        <li key={idx} className="pillar-card__list-item">
                          <i className="bi bi-check-circle" aria-hidden="true"></i>
                          <span>{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pillar-card__footer">
                  <div className="pillar-card__progress">
                    <div className="pillar-card__progress-bar">
                      <div 
                        className="pillar-card__progress-fill" 
                        style={{ backgroundColor: pillar.color }}
                      ></div>
                    </div>
                    <span className="pillar-card__progress-text">Continuous Improvement</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="commitments-section" aria-labelledby="commitments-title">
        <div className="commitments-section__container">
          <h2 id="commitments-title" className="sustainability-section__title">Our Sustainability Commitments</h2>
          <p className="commitments-section__intro">
            We are dedicated to making a positive impact through our operations, partnerships, and community engagements.
          </p>
          
          <div className="commitments-grid">
            {commitments.map((commitment, index) => (
              <div key={commitment.title} className="commitment-card">
                <div className="commitment-card__icon">
                  <i className={`bi ${commitment.icon}`} aria-hidden="true"></i>
                </div>
                <div className="commitment-card__content">
                  <h3 className="commitment-card__title">{commitment.title}</h3>
                  <p className="commitment-card__description">{commitment.description}</p>
                  <ul className="commitment-card__features" role="list">
                    {commitment.features.map((feature, idx) => (
                      <li key={idx} className="commitment-card__feature">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section id="community" className="community-section" aria-labelledby="community-title">
        <div className="community-section__container">
          <h2 id="community-title" className="sustainability-section__title">Community Impact & Social Responsibility</h2>
          <p className="community-section__intro">
            Our commitment to positive corporate citizenship extends beyond our construction projects to 
            meaningful community development and social upliftment.
          </p>
          
          <div className="community-grid">
            {communityInitiatives.map((initiative, index) => (
              <div key={initiative.title} className="community-card">
                <div className="community-card__header">
                  <div className="community-card__icon">
                    <i className={`bi ${initiative.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="community-card__impact">
                    <span>{initiative.impact}</span>
                  </div>
                </div>
                
                <div className="community-card__body">
                  <h3 className="community-card__title">{initiative.title}</h3>
                  <p className="community-card__description">{initiative.description}</p>
                </div>
                
                <div className="community-card__footer">
                  <span className="community-card__badge">Active Program</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognition-section" aria-labelledby="recognition-title">
        <div className="recognition-section__container">
          <h2 id="recognition-title" className="sustainability-section__title">Recognition & Awards</h2>
          <p className="recognition-section__intro">
            Our commitment to excellence, empowerment, and sustainable practices has been recognized 
            through various industry awards and accolades.
          </p>
          
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-card__year">{achievement.year}</div>
                <div className="achievement-card__content">
                  <div className="achievement-card__prize">{achievement.prize}</div>
                  <h3 className="achievement-card__award">{achievement.award}</h3>
                  <p className="achievement-card__org">{achievement.organization}</p>
                  <p className="achievement-card__description">{achievement.description}</p>
                </div>
                <div className="achievement-card__badge">
                  <i className="bi bi-trophy" aria-hidden="true"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sustainability-cta" aria-labelledby="cta-title">
        <div className="sustainability-cta__container">
          <div className="sustainability-cta__content">
            <h2 id="cta-title" className="sustainability-cta__title">Build With Purpose, Build With Us</h2>
            <p className="sustainability-cta__text">
              Partner with Tshepo Ya Rona for construction projects that prioritize safety, quality, 
              environmental responsibility, and positive community impact.
            </p>
            <div className="sustainability-cta__actions">
              <a href="#contact" className="btn btn--primary btn--large">
                <i className="bi bi-handshake" aria-hidden="true"></i>
                Start a Sustainable Project
              </a>
              <a href="#about" className="btn btn--secondary btn--large">
                <i className="bi bi-download" aria-hidden="true"></i>
                Download Our Sustainability Report
              </a>
            </div>
            <div className="sustainability-cta__info">
              <div className="sustainability-cta__info-item">
                <i className="bi bi-shield-check" aria-hidden="true"></i>
                <span>100% Safety Compliance on All Projects</span>
              </div>
              <div className="sustainability-cta__info-item">
                <i className="bi bi-recycle" aria-hidden="true"></i>
                <span>Environmental Management System Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sustainability