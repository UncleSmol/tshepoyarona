import React from 'react'

const projectCategories = [
  {
    category: 'Infrastructure & Transport',
    icon: 'bi-signpost-split',
    projects: [
      {
        name: 'N1 Bridge Rail Installation',
        client: 'SANRAL',
        description: 'Installation of safety barriers and bridge rails along the N1 highway.',
        scope: 'Civil works and safety systems'
      },
      {
        name: 'Provincial Road Maintenance',
        client: 'Provincial Government',
        description: 'Ongoing maintenance and rehabilitation of provincial road networks.',
        scope: 'Road repairs and upgrades'
      }
    ]
  },
  {
    category: 'Commercial & Offices',
    icon: 'bi-building',
    projects: [
      {
        name: 'Office Building Renovations',
        client: 'Private Sector',
        description: 'Interior and exterior renovation of multi-story office buildings.',
        scope: 'Architecture, structural, and MEP services'
      },
      {
        name: 'Corporate Headquarters Fit-Out',
        client: 'Private Sector',
        description: 'Complete interior fit-out and building services installation.',
        scope: 'Project management and engineering'
      }
    ]
  },
  {
    category: 'Education',
    icon: 'bi-mortarboard',
    projects: [
      {
        name: 'Primary School Construction',
        client: 'Department of Education',
        description: 'New build primary school facilities including classrooms and administration.',
        scope: 'Full architectural and engineering services'
      },
      {
        name: 'School Maintenance Programme',
        client: 'Provincial Education Department',
        description: 'Ongoing maintenance and repairs across multiple school facilities.',
        scope: 'Building maintenance and upgrades'
      }
    ]
  },
  {
    category: 'Healthcare',
    icon: 'bi-hospital',
    projects: [
      {
        name: 'Medical Facility Upgrades',
        client: 'Department of Health',
        description: 'Renovation and upgrade of medical clinic facilities.',
        scope: 'Structural, electrical, and mechanical works'
      },
      {
        name: 'Healthcare Centre Extension',
        client: 'Public Health Sector',
        description: 'Extension of existing healthcare facility with new wards and equipment.',
        scope: 'Design and construction management'
      }
    ]
  },
  {
    category: 'Residential',
    icon: 'bi-house',
    projects: [
      {
        name: 'Social Housing Development',
        client: 'Housing Department',
        description: 'Construction of affordable housing units for community development.',
        scope: 'Civil, structural, and project management'
      },
      {
        name: 'Residential Complex',
        client: 'Private Developer',
        description: 'Multi-unit residential development with full infrastructure.',
        scope: 'Architecture and engineering services'
      }
    ]
  }
]

const Projects = () => {
  return (
    <main id="projects" className="projects-page">
      <header className="projects-hero" aria-label="Our Projects">
        <h1 className="projects-hero__title">Our Projects</h1>
        <p className="projects-hero__subtitle">
          With over 17 years of experience, we have delivered quality projects across public and private sectors
          throughout South Africa.
        </p>
      </header>

      <section className="projects-intro" aria-labelledby="intro-title">
        <h2 id="intro-title">Portfolio Overview</h2>
        <p>
          Tshepo Ya Rona has successfully completed projects spanning infrastructure, commercial buildings, 
          educational facilities, healthcare centers, and residential developments. Our multidisciplinary approach 
          ensures seamless delivery from concept to completion.
        </p>
      </section>

      <section className="projects-gallery" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Project Categories</h2>
        {projectCategories.map(cat => (
          <article key={cat.category} className="project-category">
            <div className="project-category__header">
              <i className={`bi ${cat.icon}`} aria-hidden="true"></i>
              <h3 className="project-category__title">{cat.category}</h3>
            </div>
            <ul className="project-list" role="list">
              {cat.projects.map(proj => (
                <li key={proj.name} className="project-card">
                  <h4 className="project-card__name">{proj.name}</h4>
                  <p className="project-card__client">
                    <strong>Client:</strong> {proj.client}
                  </p>
                  <p className="project-card__desc">{proj.description}</p>
                  <p className="project-card__scope">
                    <strong>Scope:</strong> {proj.scope}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="projects-capabilities" aria-labelledby="capabilities-title">
        <h2 id="capabilities-title">Project Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability">
            <i className="bi bi-rulers" aria-hidden="true"></i>
            <h3>Design & Architecture</h3>
            <p>Concept design through to detailed working drawings and specifications.</p>
          </div>
          <div className="capability">
            <i className="bi bi-diagram-3" aria-hidden="true"></i>
            <h3>Project Management</h3>
            <p>End-to-end project planning, coordination, and delivery management.</p>
          </div>
          <div className="capability">
            <i className="bi bi-tools" aria-hidden="true"></i>
            <h3>Engineering Services</h3>
            <p>Structural, civil, electrical, and mechanical engineering expertise.</p>
          </div>
          <div className="capability">
            <i className="bi bi-clipboard-check" aria-hidden="true"></i>
            <h3>Quality Assurance</h3>
            <p>Rigorous quality control and compliance with industry standards.</p>
          </div>
        </div>
      </section>

      <section className="projects-cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Request Our Full Portfolio</h2>
        <p>
          Interested in learning more about our completed projects? Contact us to receive our comprehensive 
          portfolio with detailed case studies, project photos, and client testimonials.
        </p>
        <div className="projects-cta__actions">
          <a href="#contact" className="btn btn--primary">Get in touch</a>
          <a href="tel:+27731434440" className="btn btn--secondary">
            <i className="bi bi-telephone" aria-hidden="true"></i> Call us
          </a>
        </div>
      </section>
    </main>
  )
}

export default Projects