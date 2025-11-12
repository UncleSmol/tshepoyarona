import React from 'react'
import "../styling/ContactUs.css"

const contactInfo = [
  {
    icon: 'bi-telephone',
    label: 'Phone',
    value: '+27 73 143 4440',
    link: 'tel:+27731434440',
    description: 'Call us directly to discuss your project requirements',
    urgency: 'Available for immediate consultation'
  },
  {
    icon: 'bi-envelope',
    label: 'Email',
    value: 'info@tyr-trading.co.za',
    link: 'mailto:info@tyr-trading.co.za',
    description: 'Send us your project details and we\'ll respond promptly',
    urgency: 'Response within 24 hours'
  },
  {
    icon: 'bi-globe',
    label: 'Website',
    value: 'www.tshepoyarona.co.za',
    link: 'https://www.tshepoyarona.co.za',
    description: 'Visit our website for more information and portfolio',
    urgency: 'Full project portfolio available'
  },
  {
    icon: 'bi-geo-alt',
    label: 'Address',
    value: 'Hatfield Plaza, 1122 Burnett Street, Hatfield, Pretoria, 0083',
    link: 'https://maps.google.com/?q=1122+Burnett+Street+Hatfield+Plaza+Pretoria',
    description: 'Visit our offices for face-to-face consultations',
    urgency: 'By appointment only'
  }
]

const businessHours = [
  { day: 'Monday - Thursday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 4:00 PM' },
  { day: 'Saturday', hours: 'By Appointment' },
  { day: 'Sunday', hours: 'Closed' }
]

const services = [
  'Architecture & Interior Design',
  'Project Management',
  'Structural Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Infrastructure & Transport',
  'Turnkey Development'
]

const companyDetails = [
  { label: 'Company Name', value: 'Tshepo Ya Rona Trading Enterprise' },
  { label: 'Registration Number', value: '2017/226719/07' },
  { label: 'Year Founded', value: '2005' },
  { label: 'Tax Number', value: '9033029175' },
  { label: 'VAT Number', value: '4190229692' },
  { label: 'CIDB Grading', value: '8GB PE, 6CE PE, 55Q PE, 1S0 PE' },
  { label: 'NHBRC Status', value: 'Registered' },
  { label: 'B-BBEE Status', value: '100% Black Woman Owned' }
]

const quickActions = [
  {
    icon: 'bi-telephone',
    title: 'Call Now',
    description: 'Speak directly with our team for immediate assistance',
    action: '+27 73 143 4440',
    link: 'tel:+27731434440',
    type: 'primary'
  },
  {
    icon: 'bi-envelope',
    title: 'Send Email',
    description: 'Email your project requirements for a detailed response',
    action: 'info@tyr-trading.co.za',
    link: 'mailto:info@tyr-trading.co.za',
    type: 'secondary'
  },
  {
    icon: 'bi-calendar',
    title: 'Schedule Meeting',
    description: 'Book a consultation at our offices or virtually',
    action: 'Book Consultation',
    link: 'mailto:info@tyr-trading.co.za?subject=Consultation%20Request&body=Please%20specify%20your%20preferred%20date%20and%20time',
    type: 'accent'
  }
]

const projectTypes = [
  {
    category: 'Commercial & Offices',
    examples: ['Office Buildings', 'Corporate Headquarters', 'Retail Spaces'],
    icon: 'bi-building'
  },
  {
    category: 'Infrastructure',
    examples: ['Roads & Bridges', 'Transport Systems', 'Public Works'],
    icon: 'bi-signpost-split'
  },
  {
    category: 'Residential',
    examples: ['Housing Developments', 'Social Housing', 'Complexes'],
    icon: 'bi-house'
  },
  {
    category: 'Institutional',
    examples: ['Schools', 'Healthcare Facilities', 'Government Buildings'],
    icon: 'bi-hospital'
  }
]

const responseTimes = [
  { type: 'Phone Calls', time: 'Immediate', icon: 'bi-telephone' },
  { type: 'Email Inquiries', time: 'Within 24 hours', icon: 'bi-envelope' },
  { type: 'Project Quotes', time: '2-3 business days', icon: 'bi-file-text' },
  { type: 'Consultations', time: 'Within 48 hours', icon: 'bi-calendar-check' }
]

const ContactUs = () => {
  return (
    <main id="contact" className="contact-page">
      {/* Hero Section */}
      <header className="contact-hero" aria-label="Contact Us">
        <div className="contact-hero__overlay">
          <div className="contact-hero__content">
            <div className="contact-hero__badge">
              <span>Ready to Build With You</span>
            </div>
            <h1 className="contact-hero__title">Let's Start Your Project</h1>
            <p className="contact-hero__subtitle">
              With over 17 years of excellence in construction and engineering, 
              we're ready to bring your vision to life. Get in touch for quality, 
              professional service delivered on time.
            </p>
            <div className="contact-hero__actions">
              <a href="tel:+27731434440" className="btn btn--primary">
                <i className="bi bi-telephone" aria-hidden="true"></i> Call Now
              </a>
              <a href="#contact-methods" className="btn btn--secondary">
                View Contact Options
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <section className="quick-actions" aria-label="Quick Actions">
        <div className="quick-actions__container">
          <h2 className="contact-section__title">Get Started Immediately</h2>
          <p className="quick-actions__intro">
            Choose the contact method that works best for you. Our team is ready to assist with your project requirements.
          </p>
          
          <div className="quick-actions__grid">
            {quickActions.map((action, index) => (
              <a 
                key={action.title} 
                href={action.link}
                className={`quick-action-card quick-action-card--${action.type}`}
              >
                <div className="quick-action-card__icon">
                  <i className={`bi ${action.icon}`} aria-hidden="true"></i>
                </div>
                <div className="quick-action-card__content">
                  <h3 className="quick-action-card__title">{action.title}</h3>
                  <p className="quick-action-card__description">{action.description}</p>
                  <div className="quick-action-card__action">{action.action}</div>
                </div>
                <div className="quick-action-card__arrow">
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-methods" className="contact-info-section" aria-labelledby="info-title">
        <div className="contact-info-section__container">
          <h2 id="info-title" className="contact-section__title">Contact Information</h2>
          <p className="contact-info-section__intro">
            Multiple ways to reach us. We're committed to providing prompt and professional responses to all inquiries.
          </p>
          
          <div className="contact-cards">
            {contactInfo.map(contact => (
              <a 
                key={contact.label} 
                href={contact.link}
                className="contact-card"
                target={contact.label === 'Website' || contact.label === 'Address' ? '_blank' : undefined}
                rel={contact.label === 'Website' || contact.label === 'Address' ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-card__icon">
                  <i className={`bi ${contact.icon}`} aria-hidden="true"></i>
                </div>
                <div className="contact-card__content">
                  <h3 className="contact-card__label">{contact.label}</h3>
                  <p className="contact-card__value">{contact.value}</p>
                  <p className="contact-card__description">{contact.description}</p>
                  <div className="contact-card__urgency">
                    <i className="bi bi-clock" aria-hidden="true"></i>
                    <span>{contact.urgency}</span>
                  </div>
                </div>
                <div className="contact-card__action">
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="response-times-section" aria-labelledby="response-title">
        <div className="response-times-section__container">
          <h2 id="response-title" className="contact-section__title">Our Response Commitment</h2>
          <p className="response-times-section__intro">
            We value your time and ensure timely responses to all inquiries and project requests.
          </p>
          
          <div className="response-times-grid">
            {responseTimes.map((item, index) => (
              <div key={item.type} className="response-time-card">
                <div className="response-time-card__icon">
                  <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div className="response-time-card__content">
                  <h3 className="response-time-card__type">{item.type}</h3>
                  <p className="response-time-card__time">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="project-types-section" aria-labelledby="projects-title">
        <div className="project-types-section__container">
          <h2 id="projects-title" className="contact-section__title">Project Types We Handle</h2>
          <p className="project-types-section__intro">
            We have extensive experience across various construction and engineering project types.
          </p>
          
          <div className="project-types-grid">
            {projectTypes.map((projectType, index) => (
              <div key={projectType.category} className="project-type-card">
                <div className="project-type-card__header">
                  <i className={`bi ${projectType.icon}`} aria-hidden="true"></i>
                  <h3 className="project-type-card__category">{projectType.category}</h3>
                </div>
                <ul className="project-type-card__examples" role="list">
                  {projectType.examples.map((example, idx) => (
                    <li key={idx} className="project-type-card__example">
                      <i className="bi bi-check" aria-hidden="true"></i>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <div className="project-type-card__footer">
                  <a 
                    href={`mailto:info@tyr-trading.co.za?subject=Inquiry%20for%20${encodeURIComponent(projectType.category)}%20Projects`}
                    className="project-type-card__cta"
                  >
                    Inquire About {projectType.category}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Services */}
      <section className="info-grid-section" aria-label="Additional Information">
        <div className="info-grid-section__container">
          {/* Business Hours */}
          <div className="business-hours-card">
            <div className="business-hours-card__header">
              <i className="bi bi-clock" aria-hidden="true"></i>
              <h3>Business Hours</h3>
            </div>
            <dl className="business-hours-list">
              {businessHours.map(schedule => (
                <div key={schedule.day} className="business-hours-item">
                  <dt className="business-hours-item__day">{schedule.day}</dt>
                  <dd className="business-hours-item__hours">{schedule.hours}</dd>
                </div>
              ))}
            </dl>
            <div className="business-hours-card__note">
              <i className="bi bi-info-circle" aria-hidden="true"></i>
              <span>Emergency projects can be accommodated outside business hours</span>
            </div>
          </div>

          {/* Services Overview */}
          <div className="services-card">
            <div className="services-card__header">
              <i className="bi bi-tools" aria-hidden="true"></i>
              <h3>Our Services</h3>
            </div>
            <ul className="services-list" role="list">
              {services.map(service => (
                <li key={service} className="service-item">
                  <i className="bi bi-check-circle" aria-hidden="true"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="services-card__footer">
              <a href="/services" className="services-card__link">
                View All Services <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="emergency-contact-card">
            <div className="emergency-contact-card__header">
              <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
              <h3>Urgent Projects</h3>
            </div>
            <div className="emergency-contact-card__content">
              <p>For urgent construction or engineering requirements:</p>
              <a href="tel:+27731434440" className="emergency-contact-card__phone">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                +27 73 143 4440
              </a>
              <div className="emergency-contact-card__details">
                <p><strong>Available for:</strong></p>
                <ul>
                  <li>Emergency structural assessments</li>
                  <li>Urgent project consultations</li>
                  <li>Immediate site visits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="company-details-section" aria-labelledby="details-title">
        <div className="company-details-section__container">
          <h2 id="details-title" className="contact-section__title">Company Credentials</h2>
          <p className="company-details-section__intro">
            Tshepo Ya Rona is a fully registered and accredited construction company with 
            the necessary certifications and credentials to deliver professional services.
          </p>
          
          <div className="company-details-grid">
            {companyDetails.map(detail => (
              <div key={detail.label} className="detail-card">
                <h3 className="detail-card__label">{detail.label}</h3>
                <p className="detail-card__value">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" aria-labelledby="map-title">
        <div className="map-section__container">
          <h2 id="map-title" className="contact-section__title">Visit Our Offices</h2>
          <p className="map-section__intro">
            Located in the heart of Hatfield, Pretoria, our offices are easily accessible 
            for meetings and consultations.
          </p>
          
          <div className="map-card">
            <div className="map-card__info">
              <div className="map-card__address">
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <div>
                  <h3>Head Office</h3>
                  <p>Hatfield Plaza, 1122 Burnett Street<br />Hatfield, Pretoria, 0083</p>
                </div>
              </div>
              
              <div className="map-card__directions">
                <h4>Getting Here</h4>
                <ul>
                  <li>• Near University of Pretoria</li>
                  <li>• Accessible via Hatfield Gautrain station</li>
                  <li>• Ample parking available</li>
                  <li>• Wheelchair accessible</li>
                </ul>
              </div>
              
              <div className="map-card__actions">
                <a 
                  href="https://maps.google.com/?q=1122+Burnett+Street+Hatfield+Plaza+Pretoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <i className="bi bi-map" aria-hidden="true"></i> 
                  Open in Google Maps
                </a>
                <a 
                  href="mailto:info@tyr-trading.co.za?subject=Office%20Visit%20Appointment" 
                  className="btn btn--secondary"
                >
                  <i className="bi bi-calendar" aria-hidden="true"></i>
                  Schedule Visit
                </a>
              </div>
            </div>
            
            <div className="map-card__placeholder">
              <div className="map-placeholder">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <p>Interactive Map</p>
                <span>View our location on Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta" aria-labelledby="cta-title">
        <div className="contact-cta__container">
          <div className="contact-cta__content">
            <i className="bi bi-chat-dots" aria-hidden="true"></i>
            <h2 id="cta-title">Ready to Start Your Project?</h2>
            <p className="contact-cta__text">
              With over 17 years of experience and a track record of successful projects, 
              Tshepo Ya Rona is your trusted partner for construction and engineering excellence. 
              Contact us today to discuss your vision.
            </p>
            <div className="contact-cta__actions">
              <a href="tel:+27731434440" className="btn btn--primary btn--large">
                <i className="bi bi-telephone" aria-hidden="true"></i> 
                Call: +27 73 143 4440
              </a>
              <a href="mailto:info@tyr-trading.co.za" className="btn btn--secondary btn--large">
                <i className="bi bi-envelope" aria-hidden="true"></i> 
                Email Us
              </a>
            </div>
            <div className="contact-cta__info">
              <div className="contact-cta__info-item">
                <i className="bi bi-award" aria-hidden="true"></i>
                <span>CIDB 8GB PE, 6CE PE, 55Q PE, 1S0 PE</span>
              </div>
              <div className="contact-cta__info-item">
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

export default ContactUs