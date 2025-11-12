import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/', icon: 'bi-house-door' },
  { label: 'About', href: '/about-us', icon: 'bi-info-circle' },
  { label: 'Services', href: '/services', icon: 'bi-tools' },
  { label: 'Projects', href: '/projects', icon: 'bi-building' },
  { label: 'Sustainability', href: '/sustainability', icon: 'bi-leaf' },
  { label: 'Contact', href: '/contact-us', icon: 'bi-envelope' },
]

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  return (
    <header role="banner">
      <nav aria-label="Primary" className="nav">
        <Link to="/" className="brand" onClick={close}>
          <span className="bi bi-hexagon-fill" aria-hidden="true"></span>
          <span className="brand-title">Tshepo Ya Rona</span>
        </Link>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label="Toggle navigation menu"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="sr-only">Menu</span>
        </button>

        <ul
          id="primary-menu"
          role="menubar"
          className={`menu ${open ? 'is-open' : ''}`}
        >
          {navItems.map(item => (
            <li key={item.href} role="none">
              <Link
                role="menuitem"
                to={item.href}
                onClick={close}
                className="nav-link"
              >
                <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation