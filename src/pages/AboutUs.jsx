import React from 'react'

const values = [
  { icon: 'bi-people', title: 'Gender sensitivity' },
  { icon: 'bi-lightning', title: 'Responsiveness' },
  { icon: 'bi-shield-lock', title: 'Integrity' },
  { icon: 'bi-mortarboard', title: 'Professionalism' },
]

const leaders = [
  {
    name: 'Mpho Emily Modise',
    role: 'Managing Director',
    highlights: [
      'Best Professional Woman Contractor 2008 (Public Works – Gauteng)',
      'Best Woman Contractor Grade 4–6, 2009 (CIDB Free State)',
      'Woman in Construction Excellence Award Grade 5–6, 2010 (Tseibin Free State)'
    ],
  },
  { name: 'Francis Hale', role: 'Chairperson' },
  { name: 'Ursula Ntsubane', role: 'Non-Executive Director' },
  { name: 'Katlego Mmutle Phogonnye', role: 'Non-Executive Director' },
]

const companyDetails = [
  { label: 'Company Name', value: 'TSHEPO YA RONA' },
  { label: 'Registration No', value: '2011/226719/07' },
  { label: 'Year Founded', value: '2005' },
  { label: 'VAT No', value: '4000250412' },
  { label: 'NHBRC', value: 'Registered' },
  { label: 'Address', value: '1122 Burnett Street, Hatfield Plaza, Hatfield, Pretoria, 0083' },
  { label: 'Email', value: 'info@tyr-trading.co.za' },
  { label: 'Phone', value: '+27 73 143 4440' },
]

const AboutUs = () => {
  return (
    <main id="about" className="about-page">
      <header className="about-hero" aria-label="About Tshepo Ya Rona">
        <h1 className="about-hero__title">About Tshepo Ya Rona</h1>
        <p className="about-hero__subtitle">A 100% black woman-owned multidisciplinary construction and engineering company.</p>
      </header>

      <section className="overview" aria-labelledby="overview-title">
        <h2 id="overview-title">Overview</h2>
        <p>
          Tshepo Ya Rona means “Our Hope”. Our vision is to maintain professional excellence while delivering
          quality projects that support growth within the South African economy. We provide services spanning
          architecture, engineering, and project management, delivering turnkey solutions for clients in both
          public and private sectors.
        </p>
      </section>

      <section className="mvv" aria-labelledby="mvv-title">
        <h2 id="mvv-title">Mission, Vision and Values</h2>
        <div className="mvv__grid">
          <article className="vision">
            <h3>Vision</h3>
            <p>To be a leading and preferred provider of high-quality construction and related services across the region.</p>
          </article>
          <article className="mission">
            <h3>Mission</h3>
            <ul>
              <li>Provide quality, loyalty, and professionalism in everything we do.</li>
              <li>Strengthen client relationships through consistent delivery.</li>
              <li>Champion safety, creativity, innovation, and continuous improvement.</li>
              <li>Operate with integrity and sustainability.</li>
            </ul>
          </article>
          <article className="values">
            <h3>Values</h3>
            <ul className="values__list" role="list">
              {values.map(v => (
                <li key={v.title} className="value-item">
                  <i className={`bi ${v.icon}`} aria-hidden="true"></i>
                  <span>{v.title}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="leadership" aria-labelledby="leadership-title">
        <h2 id="leadership-title">Leadership</h2>
        <ul className="leaders" role="list">
          {leaders.map(l => (
            <li key={l.name} className="leader">
              <h3 className="leader__name">{l.name}</h3>
              <p className="leader__role">{l.role}</p>
              {l.highlights && (
                <ul className="leader__highlights" role="list">
                  {l.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="details" aria-labelledby="details-title">
        <h2 id="details-title">Company Details</h2>
        <dl className="details__list">
          {companyDetails.map(d => (
            <div key={d.label} className="details__row">
              <dt className="details__term">{d.label}</dt>
              <dd className="details__desc">{d.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default AboutUs