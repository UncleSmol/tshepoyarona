import React, { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home', icon: 'bi-house-door' },
  { label: 'About', href: '#about', icon: 'bi-info-circle' },
  { label: 'Services', href: '#services', icon: 'bi-tools' },
  { label: 'Projects', href: '#projects', icon: 'bi-building' },
  { label: 'Sustainability', href: '#sustainability', icon: 'bi-leaf' },
  { label: 'Contact', href: '#contact', icon: 'bi-envelope' },
]

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  return (
    <header role="banner">
      <nav aria-label="Primary" className="nav">
        <a href="#home" className="brand" onClick={close}>
          <span className="bi bi-hexagon-fill" aria-hidden="true"></span>
          <span className="brand-title">Tshepo Ya Rona</span>
        </a>

        <button
          onClick={toggle}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label="Toggle navigation menu"
          className="menu-toggle"
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true"></i>
          <span className="sr-only">Menu</span>
        </button>

        <ul
          id="primary-menu"
          role="menubar"
          className={`menu ${open ? 'is-open' : ''}`}
        >
          {navItems.map(item => (
            <li key={item.href} role="none">
              <a
                role="menuitem"
                href={item.href}
                onClick={close}
                className="nav-link"
              >
                <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <ul aria-label="Primary" className="menu-desktop">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation