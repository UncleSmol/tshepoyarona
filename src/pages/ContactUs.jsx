import React from 'react'

const contactInfo = [
  {
    icon: 'bi-telephone',
    label: 'Phone',
    value: '+27 73 143 4440',
    link: 'tel:+27731434440'
  },
  {
    icon: 'bi-envelope',
    label: 'Email',
    value: 'info@tyr-trading.co.za',
    link: 'mailto:info@tyr-trading.co.za'
  },
  {
    icon: 'bi-globe',
    label: 'Website',
    value: 'www.tshepoyarona.co.za',
    link: 'https://www.tshepoyarona.co.za'
  },
  {
    icon: 'bi-geo-alt',
    label: 'Address',
    value: '1122 Burnett Street, Hatfield Plaza, Hatfield, Pretoria, 0083',
    link: 'https://maps.google.com/?q=1122+Burnett+Street+Hatfield+Plaza+Pretoria'
  }
]

const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' }
]

const services = [
  'Architecture',
  'Project Management',
  'Structural & Civil Engineering',
  'Electrical & Mechanical Engineering',
  'Infrastructure & Transport'
]

const ContactUs = () => {
  return (
    <main id="contact" className="contact-page">
      <header className="contact-hero" aria-label="Contact Us">
        <h1 className="contact-hero__title">Get In Touch</h1>
        <p className="contact-hero__subtitle">
          Ready to start your next project? Our team is here to support you with professional 
          engineering and construction services.
        </p>
      </header>

      <section className="contact-intro" aria-labelledby="intro-title">
        <h2 id="intro-title">Contact Tshepo Ya Rona</h2>
        <p>
          Whether you need architectural design, project management, or engineering services, 
          we're ready to discuss your requirements. Reach out to us through any of the channels below, 
          and our team will respond promptly to your inquiry.
        </p>
      </section>

      <section className="contact-info-section" aria-labelledby="info-title">
        <h2 id="info-title">Contact Information</h2>
        <div className="contact-cards">
          {contactInfo.map(contact => (
            <a 
              key={contact.label} 
              href={contact.link}
              className="contact-card"
              target={contact.label === 'Website' || contact.label === 'Address' ? '_blank' : undefined}
              rel={contact.label === 'Website' || contact.label === 'Address' ? 'noopener noreferrer' : undefined}
            >
              <i className={`bi ${contact.icon}`} aria-hidden="true"></i>
              <div className="contact-card__content">
                <h3 className="contact-card__label">{contact.label}</h3>
                <p className="contact-card__value">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="business-hours-section" aria-labelledby="hours-title">
        <h2 id="hours-title">Business Hours</h2>
        <div className="business-hours-card">
          <i className="bi bi-clock" aria-hidden="true"></i>
          <dl className="business-hours-list">
            {businessHours.map(schedule => (
              <div key={schedule.day} className="business-hours-item">
                <dt className="business-hours-item__day">{schedule.day}</dt>
                <dd className="business-hours-item__hours">{schedule.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="services-overview-section" aria-labelledby="services-overview-title">
        <h2 id="services-overview-title">Our Services</h2>
        <p>We provide comprehensive services across the following disciplines:</p>
        <ul className="services-list" role="list">
          {services.map(service => (
            <li key={service} className="service-item">
              <i className="bi bi-check-circle" aria-hidden="true"></i>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="company-details-section" aria-labelledby="details-title">
        <h2 id="details-title">Company Details</h2>
        <div className="company-details-grid">
          <div className="detail-item">
            <h3>Registration Number</h3>
            <p>2011/226719/07</p>
          </div>
          <div className="detail-item">
            <h3>VAT Number</h3>
            <p>4000250412</p>
          </div>
          <div className="detail-item">
            <h3>Year Founded</h3>
            <p>2005</p>
          </div>
          <div className="detail-item">
            <h3>NHBRC Status</h3>
            <p>Registered</p>
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="cta-title">
        <div className="contact-cta__content">
          <i className="bi bi-chat-dots" aria-hidden="true"></i>
          <h2 id="cta-title">Let's Build Something Great Together</h2>
          <p>
            With over 17 years of experience delivering quality projects across South Africa, 
            Tshepo Ya Rona is your trusted partner for construction and engineering excellence.
          </p>
          <div className="contact-cta__actions">
            <a href="tel:+27731434440" className="btn btn--primary">
              <i className="bi bi-telephone" aria-hidden="true"></i> Call Now
            </a>
            <a href="mailto:info@tyr-trading.co.za" className="btn btn--secondary">
              <i className="bi bi-envelope" aria-hidden="true"></i> Send Email
            </a>
          </div>
        </div>
      </section>

      <section className="map-section" aria-labelledby="map-title">
        <h2 id="map-title">Find Us</h2>
        <div className="map-container">
          <p className="map-placeholder">
            <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
            <strong>Location:</strong> Hatfield Plaza, 1122 Burnett Street, Hatfield, Pretoria, 0083
          </p>
          <a 
            href="https://maps.google.com/?q=1122+Burnett+Street+Hatfield+Plaza+Pretoria" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn--link"
          >
            <i className="bi bi-map" aria-hidden="true"></i> Open in Google Maps
          </a>
        </div>
      </section>
    </main>
  )
}

export default ContactUs