import React from 'react'
import "../styling/Projects.css"
import ProjectsHeroImg from '../assets/projects-hero-image.jpg'

const projectCategories = [
  {
    category: 'Infrastructure & Transport',
    icon: 'bi-signpost-split',
    description: 'Large-scale infrastructure projects including roads, bridges, and transportation systems',
    projects: [
      {
        name: 'Supply and Installation of Bridge Rails - Gauteng Province',
        client: 'Gauteng Department of Roads and Transport',
        description: 'Three-year contract for supply and installation of bridge rails across all five regions of Gauteng Province.',
        scope: 'Civil works, structural engineering, project management',
        value: 'R37,136,835.00',
        period: 'Sep 2021 - Aug 2024',
        status: 'In Progress'
      },
      {
        name: 'Road Rehabilitation and Maintenance',
        client: 'Various Municipalities',
        description: 'Ongoing road maintenance and rehabilitation projects across multiple municipalities.',
        scope: 'Pavement design, stormwater management, geometric surveys',
        value: 'Multiple Projects',
        period: '2009 - Present',
        status: 'Ongoing'
      }
    ]
  },
  {
    category: 'Commercial & Offices',
    icon: 'bi-building',
    description: 'Commercial office buildings, corporate headquarters, and business facilities',
    projects: [
      {
        name: 'Construction and Renovation of Divfoods Offices',
        client: 'Divfoods (Pty) Ltd',
        description: 'Complete construction and renovation of corporate office facilities including interior fit-out.',
        scope: 'Architecture, structural engineering, MEP services, project management',
        value: 'R69,306,097.00',
        period: 'Dec 2017 - Nov 2019',
        status: 'Completed'
      },
      {
        name: 'Reinstallation, Renewal and Renovation of Offices',
        client: 'Private Sector Client',
        description: 'Comprehensive office renovation including structural upgrades and modern interior design.',
        scope: 'Full architectural and engineering services',
        value: 'R109,288,279.65',
        period: 'Jan 2016 - Aug 2018',
        status: 'Completed'
      }
    ]
  },
  {
    category: 'Education',
    icon: 'bi-mortarboard',
    description: 'Schools, educational facilities, and learning institutions',
    projects: [
      {
        name: 'Kopanelong Primary School Construction',
        client: 'Department of Basic Education',
        description: 'New construction of primary school including classrooms, administration block, and facilities.',
        scope: 'Civil, structural, architectural, and project management',
        value: 'R28,135,635.00',
        period: 'Aug 2011 - Mar 2016',
        status: 'Completed'
      },
      {
        name: 'Burgersfort Technical School',
        client: 'Department of Education (Sub-contractor)',
        description: 'Technical school construction with specialized workshops and laboratories.',
        scope: 'Structural and civil works',
        value: 'R12,000,000.00',
        period: '2012 - 2013',
        status: 'Completed'
      }
    ]
  },
  {
    category: 'Healthcare',
    icon: 'bi-hospital',
    description: 'Hospitals, clinics, medical facilities, and healthcare centers',
    projects: [
      {
        name: 'Mantsopa Hospital (Ladybrand) - JV Project',
        client: 'Department of Health (Joint Venture with Group 5)',
        description: 'Major hospital construction project including wards, surgical units, and medical facilities.',
        scope: 'Civil, structural, MEP, and project coordination',
        value: 'R264,662,777.26',
        period: 'Sep 2010 - Apr 2014',
        status: 'Completed'
      },
      {
        name: 'Dilokong Hospital Staff Base',
        client: 'Department of Health (Sub-contractor)',
        description: 'Construction of staff accommodation and support facilities for hospital complex.',
        scope: 'Structural and building works',
        value: 'R12,000,000.00',
        period: '2011 - 2012',
        status: 'Completed'
      }
    ]
  },
  {
    category: 'Residential & Social Housing',
    icon: 'bi-house',
    description: 'Residential developments, social housing, and community projects',
    projects: [
      {
        name: 'Construction of 197 Units RDP Houses',
        client: 'Department of Human Settlements',
        description: 'Delivery of 197 RDP housing units with complete infrastructure and services.',
        scope: 'Civil engineering, structural works, project management',
        value: 'R46,090,843.00',
        period: 'Jun 2012 - Mar 2016',
        status: 'Completed'
      },
      {
        name: 'Alteration & Refurbishment to Existing Housing Units',
        client: 'Local Municipality',
        description: 'Renovation and upgrading of existing housing units and toilet facilities in Phiri Township.',
        scope: 'Building renovations and upgrades',
        value: 'R1,057,263.78',
        period: 'Sep 2010 - Nov 2011',
        status: 'Completed'
      }
    ]
  },
  {
    category: 'Government & Public Facilities',
    icon: 'bi-building-gear',
    description: 'Government buildings, public facilities, and community centers',
    projects: [
      {
        name: 'Construction of Kagiso Police Station',
        client: 'South African Police Service',
        description: 'New construction of police station including offices, cells, and support facilities.',
        scope: 'Civil, structural, architectural services',
        value: 'R30,000,000.00',
        period: 'Oct 2016 - Oct 2019',
        status: 'Completed'
      },
      {
        name: 'Construction of New District Offices in Sebokeng',
        client: 'District Municipality',
        description: 'New district municipal offices with council chambers and administrative spaces.',
        scope: 'Full architectural and engineering services',
        value: 'R50,000,000.00',
        period: 'Aug 2014 - Jul 2017',
        status: 'Completed'
      }
    ]
  }
]

const projectStats = [
  { number: '17+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: 'R720M', label: 'Largest Project' },
  { number: '100%', label: 'Client Satisfaction' },
]

const capabilities = [
  {
    icon: 'bi-rulers',
    title: 'Design & Architecture',
    description: 'Concept design through to detailed working drawings and specifications. Creating innovative designs that address modern conditions.',
    features: ['Conceptual design', 'Working drawings', 'Interdisciplinary collaboration', 'Sustainable design']
  },
  {
    icon: 'bi-diagram-3',
    title: 'Project Management',
    description: 'End-to-end project planning, coordination, and delivery management. Systematic approach from initiation to closure.',
    features: ['Project planning', 'Stakeholder management', 'Cost control', 'Quality assurance']
  },
  {
    icon: 'bi-tools',
    title: 'Engineering Services',
    description: 'Structural, civil, electrical, and mechanical engineering expertise. Comprehensive technical solutions.',
    features: ['Structural engineering', 'Civil engineering', 'MEP services', 'Infrastructure design']
  },
  {
    icon: 'bi-clipboard-check',
    title: 'Quality Assurance',
    description: 'Rigorous quality control and compliance with industry standards. Delivering excellence in every project.',
    features: ['Quality control', 'Compliance monitoring', 'Safety standards', 'Documentation']
  }
]

const projectHighlights = [
  {
    value: 'R264M',
    name: 'Mantsopa Hospital',
    type: 'Healthcare',
    status: 'Completed'
  },
  {
    value: 'R109M',
    name: 'Office Renovation',
    type: 'Commercial',
    status: 'Completed'
  },
  {
    value: 'R69M',
    name: 'Divfoods Offices',
    type: 'Commercial',
    status: 'Completed'
  },
  {
    value: 'R37M',
    name: 'Bridge Rails Installation',
    type: 'Infrastructure',
    status: 'In Progress'
  }
]

const Projects = () => {
  return (
    <main id="projects" className="projects-page">
      {/* Hero Section - Updated with background image */}
      <header 
        className="projects-hero" 
        aria-label="Our Projects"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${ProjectsHeroImg})` }}
      >
        <div className="projects-hero__overlay">
          <div className="projects-hero__content">
            <div className="projects-hero__badge">
              <span>Proven Track Record</span>
            </div>
            <h1 className="projects-hero__title">Our Project Portfolio</h1>
            <p className="projects-hero__subtitle">
              With over 17 years of excellence, we have successfully delivered quality projects 
              across public and private sectors throughout South Africa, from R1 million to R720 million in value.
            </p>
            <div className="projects-hero__actions">
              <a href="#project-categories" className="btn btn--primary">Explore Projects</a>
              <a href="#contact" className="btn btn--secondary">Request Full Portfolio</a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="projects-stats" aria-label="Project Statistics">
        <div className="projects-stats__container">
          {projectStats.map((stat, index) => (
            <div key={stat.label} className="projects-stats__item">
              <span className="projects-stats__number">{stat.number}</span>
              <span className="projects-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Project Highlights */}
      <section className="projects-highlights" aria-label="Project Highlights">
        <div className="projects-highlights__container">
          <h2 className="projects-section__title">Project Highlights</h2>
          <p className="projects-highlights__intro">
            Showcasing some of our most significant projects across various sectors and value ranges.
          </p>
          <div className="projects-highlights__grid">
            {projectHighlights.map((highlight, index) => (
              <div key={highlight.name} className="project-highlight">
                <div className="project-highlight__value">{highlight.value}</div>
                <div className="project-highlight__content">
                  <h3 className="project-highlight__name">{highlight.name}</h3>
                  <div className="project-highlight__meta">
                    <span className="project-highlight__type">{highlight.type}</span>
                    <span className={`project-highlight__status project-highlight__status--${highlight.status.toLowerCase().replace(' ', '-')}`}>
                      {highlight.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="projects-intro" aria-labelledby="intro-title">
        <div className="projects-intro__container">
          <h2 id="intro-title" className="projects-section__title">Portfolio Overview</h2>
          <div className="projects-intro__content">
            <p>
              Tshepo Ya Rona has established a strong track record of delivering successful projects 
              across multiple sectors including infrastructure, commercial buildings, educational facilities, 
              healthcare centers, and residential developments.
            </p>
            <p>
              Our multidisciplinary approach ensures seamless project delivery from concept to completion, 
              with a focus on quality, safety, and client satisfaction. We have worked as both main contractor 
              and sub-contractor on projects ranging from R1 million to R720 million in value.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section id="project-categories" className="projects-gallery" aria-labelledby="gallery-title">
        <div className="projects-gallery__container">
          <h2 id="gallery-title" className="projects-section__title">Project Categories</h2>
          <p className="projects-gallery__intro">
            Explore our diverse portfolio across different sectors and project types.
          </p>
          
          <div className="projects-categories">
            {projectCategories.map((category, index) => (
              <article key={category.category} className="project-category">
                <div className="project-category__header">
                  <div className="project-category__icon">
                    <i className={`bi ${category.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="project-category__info">
                    <h3 className="project-category__title">{category.category}</h3>
                    <p className="project-category__description">{category.description}</p>
                  </div>
                </div>
                
                <div className="project-category__projects">
                  {category.projects.map((project, projectIndex) => (
                    <div key={project.name} className="project-card">
                      <div className="project-card__header">
                        <h4 className="project-card__name">{project.name}</h4>
                        <div className="project-card__meta">
                          <span className="project-card__value">{project.value}</span>
                          <span className={`project-card__status project-card__status--${project.status.toLowerCase().replace(' ', '-')}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="project-card__body">
                        <div className="project-card__client">
                          <strong>Client:</strong> {project.client}
                        </div>
                        <p className="project-card__description">{project.description}</p>
                        <div className="project-card__details">
                          <div className="project-card__detail">
                            <i className="bi bi-scope" aria-hidden="true"></i>
                            <span><strong>Scope:</strong> {project.scope}</span>
                          </div>
                          <div className="project-card__detail">
                            <i className="bi bi-calendar" aria-hidden="true"></i>
                            <span><strong>Period:</strong> {project.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="project-card__footer">
                        <div className="project-card__badges">
                          {project.value !== 'Multiple Projects' && (
                            <span className="project-card__badge project-card__badge--value">
                              <i className="bi bi-currency-dollar" aria-hidden="true"></i>
                              {project.value}
                            </span>
                          )}
                          <span className="project-card__badge project-card__badge--duration">
                            <i className="bi bi-clock" aria-hidden="true"></i>
                            {project.period.split(' - ')[1] === 'Present' ? 'Ongoing' : 'Completed'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="projects-capabilities" aria-labelledby="capabilities-title">
        <div className="projects-capabilities__container">
          <h2 id="capabilities-title" className="projects-section__title">Our Project Capabilities</h2>
          <p className="projects-capabilities__intro">
            Comprehensive services that ensure successful project delivery from inception to completion.
          </p>
          
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="capability-card">
                <div className="capability-card__icon">
                  <i className={`bi ${capability.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="capability-card__title">{capability.title}</h3>
                <p className="capability-card__description">{capability.description}</p>
                <ul className="capability-card__features" role="list">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="capability-card__feature">
                      <i className="bi bi-check-circle" aria-hidden="true"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta" aria-labelledby="cta-title">
        <div className="projects-cta__container">
          <div className="projects-cta__content">
            <h2 id="cta-title" className="projects-cta__title">Ready to Start Your Next Project?</h2>
            <p className="projects-cta__text">
              Interested in learning more about our completed projects or discussing your next construction venture? 
              Contact us to receive our comprehensive portfolio with detailed case studies, project photos, and client testimonials.
            </p>
            <div className="projects-cta__actions">
              <a href="#contact" className="btn btn--primary btn--large">
                <i className="bi bi-folder" aria-hidden="true"></i>
                Request Full Portfolio
              </a>
              <a href="tel:+27731434440" className="btn btn--secondary btn--large">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                Call: +27 73 143 4440
              </a>
            </div>
            <div className="projects-cta__info">
              <div className="projects-cta__info-item">
                <i className="bi bi-award" aria-hidden="true"></i>
                <span>CIDB 8GB PE, 6CE PE, 55Q PE, 1S0 PE</span>
              </div>
              <div className="projects-cta__info-item">
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

export default Projects