import React from 'react'
import { Link } from 'react-router-dom'

const company = {
  name: 'Tshepo Ya Rona',
  tagline: 'Delivering Quality On Time',
}

const contacts = [
  { icon: 'bi-telephone', label: '+27 73 143 4440', href: 'tel:+27731434440' },
  { icon: 'bi-envelope', label: 'info@tyr-trading.co.za', href: 'mailto:info@tyr-trading.co.za' },
  { icon: 'bi-geo-alt', label: '1122 Burnett Street, Hatfield Plaza, Hatfield, Pretoria, 0083', href: 'https://maps.google.com/?q=1122+Burnett+Street,+Hatfield+Plaza,+Hatfield,+Pretoria,+0083' },
  { icon: 'bi-globe', label: 'www.tshepoyarona.co.za', href: 'https://www.tshepoyarona.co.za' },
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Contact', to: '/contact-us' },
]

const social = [
  { icon: 'bi-linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'bi-facebook', label: 'Facebook', href: '#' },
  { icon: 'bi-twitter-x', label: 'X', href: '#' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <section className="footer__brand">
          <div className="footer__logo" aria-hidden="true">
            <span className="bi bi-hexagon-fill" />
          </div>
          <h2 className="footer__title">{company.name}</h2>
          <p className="footer__tagline">{company.tagline}</p>
        </section>

        <nav className="footer__nav" aria-label="Footer">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link className="footer__link" to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer__contact" aria-label="Contact">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contacts">
            {contacts.map(item => (
              <li key={item.href} className="footer__contact-item">
                <a className="footer__contact-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer__social" aria-label="Social media">
            {social.map(s => (
              <li key={s.label}>
                <a className="footer__social-link" href={s.href} aria-label={s.label}>
                  <i className={`bi ${s.icon}`} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </address>
      </div>

      <div className="footer__bottom">
        <small>© {year} {company.name}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer