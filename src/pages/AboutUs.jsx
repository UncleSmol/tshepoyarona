import React from "react";
import "../styling/AboutUs.css";
import AboutHeroImg from "../assets/about-us-hero-img.jpg";

const MphoModiseProfileImage = "https://placehold.co/300x300?text=Mpho+Emily+Modise";

const values = [
  { 
    icon: "bi-gender-female", 
    title: "Gender Sensitivity",
    description: "Promoting diversity and inclusion in the construction industry"
  },
  { 
    icon: "bi-lightning-charge", 
    title: "Responsiveness",
    description: "Timely and efficient service delivery to meet client needs"
  },
  { 
    icon: "bi-shield-check", 
    title: "Integrity",
    description: "Honest and ethical business practices in all operations"
  },
  { 
    icon: "bi-award", 
    title: "Professionalism",
    description: "Maintaining highest standards of quality and expertise"
  },
];

const leaders = [
  {
    name: "Mpho Emily Modise",
    role: "Founder & Managing Director",
    photo: MphoModiseProfileImage,
    education: [
      "Diploma - Primary Teachers (1986)",
      "Bachelor of Technology in Education (1992)",
      "Masters Degree in Education (1998)"
    ],
    qualifications: [
      "Construction Management",
      "Project Management",
      "Resources Management",
      "Contracts Management"
    ],
    summary: `An educationist by training, Mpho left a successful career in education to start Tshepo Ya Rona in 2005. 
    With over 17 years in construction, she has built the company into a respected multidisciplinary firm.`,
    awards: [
      "Best Professional Woman Contractor — 2008 1st Prize (Public Works, Gauteng)",
      "Best Woman Contractor Grade 4–6 — 2009 1st Prize (CIDB Free State)",
      "Woman in Construction Excellence Award — 2010 2nd Place (TEBFIN Free State)",
    ],
    community: [
      "Educational bursary programme supporting four tertiary students",
      "Community support groups in Olievenhout and Alexandra",
      "Focus on uplifting the underprivileged girl-child"
    ]
  },
  {
    name: "Francis Hale",
    role: "Chairperson",
    photo: "https://placehold.co/300x300.png?text=Francis+Hale",
    education: [
      "Graduate and Post Graduate degrees in Business",
      "Information and Knowledge Management"
    ],
    summary: `Seasoned executive with extensive experience in general management, strategy formulation, 
    strategic communications, and project management. Handles advisory assignments for governments, 
    regional economic communities, and private sector entities.`,
    expertise: [
      "Strategy formulation and implementation",
      "Strategic communications and social marketing",
      "Project management and advisory services"
    ]
  },
  {
    name: "Ursula Ntsubane",
    role: "Non-Executive Director",
    photo: "https://placehold.co/300x300.png?text=Ursula+Ntsubane",
    education: [
      "Masters Degree in Development Planning"
    ],
    experience: [
      "Executive positions at City of Ekurhuleni",
      "Construction Industry Development Board (CIDB)",
      "South African Council for Project and Construction Management Professionals",
      "National Metrology Institute of South Africa (NMISA)",
      "Chris Hani Development Agency (CHDA)"
    ],
    summary: `Brings extensive experience from highest levels of administration and governance 
    within the South African construction industry.`
  },
  {
    name: "Katlego Muriel Hlongwane",
    role: "Non-Executive Director",
    photo: "https://placehold.co/300x300.png?text=Katlego+Hlongwane",
    education: [
      "Bachelor of Technology in Construction",
      "National Diploma in Building"
    ],
    qualifications: [
      "Registered with Royal Institute of Chartered Surveyors (RICS)"
    ],
    expertise: [
      "Project coordination and estimation",
      "On and off site measurements",
      "Adjudication of tender documents",
      "Subcontractor management",
      "Professional project reporting"
    ],
    summary: `Extensive experience as consulting Quantity Surveyor and Project Manager 
    for various construction companies in South Africa.`
  },
];

const companyDetails = [
  { label: "Company Name", value: "TSHEPO YA RONA TRADING ENTERPRISE" },
  { label: "Registration Number", value: "2017/226719/07" },
  { label: "Year Founded", value: "2005" },
  { label: "Enterprise Type", value: "Construction" },
  { label: "Tax Number", value: "9033029175" },
  { label: "VAT Number", value: "4190229692" },
  { label: "CIDB Grading", value: "8GB PE, 6CE PE, 55Q PE, 1S0 PE" },
  { label: "NHBRC Registered", value: "Yes" },
  { 
    label: "Physical Address", 
    value: "Hatfield Plaza, 1122 Burnett Street, Hatfield, Pretoria, 0083" 
  },
  { label: "Founding Member", value: "Mpho Emily Modise" },
  { label: "Key Clients", value: "Government & Private Sector" },
];

const stats = [
  { number: "17+", label: "Years in Operation" },
  { number: "100%", label: "Black Woman Owned" },
  { number: "R720M", label: "Largest Project" },
  { number: "50+", label: "Projects Completed" },
];

const AboutUs = () => {
  return (
    <main id="about" className="about-page">
      {/* Hero Section */}
      <header 
        className="about-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${AboutHeroImg})` }}
      >
        <div className="about-hero__overlay">
          <div className="about-hero__badge">
            <span>100% Black Woman Owned</span>
          </div>
          <h1 className="about-hero__title">
            <span className="about-hero__title-main">Building Our Hope</span>
            <span className="about-hero__title-accent">Delivering Your Vision</span>
          </h1>
          <p className="about-hero__subtitle">
            Tshepo Ya Rona - A pioneering multidisciplinary construction and engineering company 
            with over 17 years of excellence in South Africa.
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="about-stats" aria-label="Company Statistics">
        <div className="about-stats__container">
          {stats.map((stat, index) => (
            <div key={stat.label} className="about-stats__item">
              <span className="about-stats__number">{stat.number}</span>
              <span className="about-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="about-overview" aria-labelledby="overview-title">
        <div className="about-overview__container">
          <div className="about-overview__content">
            <h2 id="overview-title" className="about-section__title">Our Story</h2>
            <div className="about-overview__text">
              <p>
                <strong>Tshepo Ya Rona</strong>, meaning "Our Hope", was founded in 2005 by Mpho Emily Modise, 
                one of the early pioneering South African women who ventured into the construction industry 
                in response to post-Apartheid affirmative action laws.
              </p>
              <p>
                What began as a vision to create opportunities has grown into a respected multidisciplinary 
                firm delivering architecture, engineering, and project management services across both public 
                and private sectors.
              </p>
              <p>
                Our success is driven by a dynamic team of innovative professionals who share our commitment 
                to quality, safety, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="about-mvv" aria-labelledby="mvv-title">
        <div className="about-mvv__container">
          <h2 id="mvv-title" className="about-section__title">Our Foundation</h2>
          
          <div className="about-mvv__grid">
            <article className="about-vision about-mvv__card">
              <div className="about-mvv__icon">
                <i className="bi bi-eye" aria-hidden="true"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To maintain profitable growth on the back of satisfied clients, employees, partners, 
                and the environment. We aspire to be a leading and preferred provider of the highest-quality 
                construction and related advisory services to all sectors of the South African economy.
              </p>
            </article>

            <article className="about-mission about-mvv__card">
              <div className="about-mvv__icon">
                <i className="bi bi-bullseye" aria-hidden="true"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To provide quality, loyalty, professionalism and to acknowledge the environment evolution and the project vision.</p>
              <ul className="about-mission__list">
                <li>
                  <i className="bi bi-people" aria-hidden="true"></i>
                  <span>Constructive Relationships – Building continuous relationships</span>
                </li>
                <li>
                  <i className="bi bi-lightbulb" aria-hidden="true"></i>
                  <span>Creativity and Innovation – Unique and innovative designs</span>
                </li>
                <li>
                  <i className="bi bi-tree" aria-hidden="true"></i>
                  <span>Sustainability – Operating systems and continuous improvement</span>
                </li>
              </ul>
            </article>

            <article className="about-values about-mvv__card">
              <div className="about-mvv__icon">
                <i className="bi bi-heart" aria-hidden="true"></i>
              </div>
              <h3>Our Values</h3>
              <p className="about-values__intro">All members of our team have a firm GRIP of our core values:</p>
              <ul className="about-values__list" role="list">
                {values.map((v) => (
                  <li key={v.title} className="about-values__item">
                    <div className="about-values__icon">
                      <i className={`bi ${v.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="about-values__content">
                      <h4>{v.title}</h4>
                      <p>{v.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership" aria-labelledby="leadership-title">
        <div className="about-leadership__container">
          <h2 id="leadership-title" className="about-section__title">Leadership Team</h2>
          <p className="about-leadership__intro">
            Guided by experienced professionals committed to excellence and innovation in construction.
          </p>
          
          <div className="about-leaders__grid">
            {leaders.map((leader, index) => (
              <article key={leader.name} className="about-leader__card">
                <div className="about-leader__media">
                  <img
                    className="about-leader__photo"
                    src={leader.photo}
                    alt={`Portrait of ${leader.name}`}
                    loading="lazy"
                  />
                  <div className="about-leader__overlay">
                    <span className="about-leader__role">{leader.role}</span>
                  </div>
                </div>
                
                <div className="about-leader__body">
                  <h3 className="about-leader__name">{leader.name}</h3>
                  
                  {leader.summary && (
                    <p className="about-leader__summary">{leader.summary}</p>
                  )}

                  {leader.education && (
                    <div className="about-leader__section">
                      <h4>Education</h4>
                      <ul className="about-leader__list">
                        {leader.education.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {leader.qualifications && (
                    <div className="about-leader__section">
                      <h4>Qualifications</h4>
                      <ul className="about-leader__list">
                        {leader.qualifications.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {leader.expertise && (
                    <div className="about-leader__section">
                      <h4>Expertise</h4>
                      <ul className="about-leader__list">
                        {leader.expertise.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {leader.experience && (
                    <div className="about-leader__section">
                      <h4>Experience</h4>
                      <ul className="about-leader__list">
                        {leader.experience.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {leader.awards && (
                    <div className="about-leader__section">
                      <h4>Awards & Recognition</h4>
                      <ul className="about-leader__awards">
                        {leader.awards.map((award, i) => (
                          <li key={i} className="about-leader__award">
                            <i className="bi bi-trophy" aria-hidden="true"></i>
                            <span>{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {leader.community && (
                    <div className="about-leader__section">
                      <h4>Community Involvement</h4>
                      <ul className="about-leader__list">
                        {leader.community.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="about-details" aria-labelledby="details-title">
        <div className="about-details__container">
          <h2 id="details-title" className="about-section__title">Company Details</h2>
          <div className="about-details__content">
            <div className="about-details__grid">
              {companyDetails.map((detail) => (
                <div key={detail.label} className="about-details__item">
                  <dt className="about-details__term">{detail.label}</dt>
                  <dd className="about-details__value">{detail.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__container">
          <h2 className="about-cta__title">Ready to Work With Us?</h2>
          <p className="about-cta__text">
            Partner with Tshepo Ya Rona for your next construction, engineering, or project management needs.
          </p>
          <div className="about-cta__actions">
            <a href="#contact" className="btn btn--primary">Get in Touch</a>
            <a href="#projects" className="btn btn--secondary">View Our Projects</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;