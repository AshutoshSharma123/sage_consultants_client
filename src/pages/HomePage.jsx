import { useEffect } from 'react';
import { siteInfo } from '../data/siteInfo.js';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { approach, founder, partners, sectors, services } from '../data/siteContent.js';

const fieldSupport = [
  ['Social safeguards', 'Understand and manage impacts on people and communities.'],
  ['Community engagement', 'Bring local perspectives into project decisions.'],
  ['Field evidence', 'Ground plans and recommendations in observed conditions.'],
];

export default function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section:not(.hero)');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        } else if (!entry.target.classList.contains('is-visible')) {
          entry.target.classList.add('reveal-ready');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <Header />
      <main>
        <section className="hero page-gutter">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> SAGE DEVELOPMENT CONSULTANTS <span className="eyebrow-divider">·</span> INDIA</p>
            <h1>Practical solutions for <em>inclusive and sustainable</em> development.</h1>
            <p className="hero-lede">Field-oriented advisory and technical support for projects that need to understand people, place and environmental context.</p>
            <p className="hero-supporting">SAGE brings social and environmental perspectives, community engagement and evidence from the field into development planning and implementation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">Explore advisory services</a>
              <a className="text-link" href="#contact">Discuss a project</a>
            </div>
            <div className="hero-location"><span className="location-mark" aria-hidden="true">⌖</span> Jammu & Kashmir, India <i /> Assignment-based support across development sectors</div>
          </div>

          <aside className="hero-aside" aria-label="How SAGE supports development projects">
            <div className="field-panel">
              <div className="field-panel-heading"><span>HOW WE SUPPORT PROJECTS</span><span>01 — 03</span></div>
              <h2>From local context to <em>practical action.</em></h2>
              <div className="field-support-list">
                {fieldSupport.map(([title, description], index) => (
                  <article className="field-support-item" key={title}>
                    <span className="field-support-number">0{index + 1}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </article>
                ))}
              </div>
              <div className="field-panel-footer"><span>PEOPLE</span><i /> <span>ENVIRONMENT</span><i /> <span>EVIDENCE</span></div>
            </div>
            <div className="field-note"><span className="field-note-mark" aria-hidden="true">S</span><p><strong>Grounded in the field.</strong><br />Responsive to each assignment.</p></div>
            <a className="scroll-cue" href="#about" aria-label="Scroll to About SAGE">
              <span className="scroll-cue-line" aria-hidden="true" />
              <span className="scroll-cue-arrow" aria-hidden="true" />
            </a>
          </aside>
        </section>

        <div className="credibility-strip page-gutter" aria-label="SAGE areas of support">
          <span>Integrated social and environmental perspectives</span>
          <i />
          <span>Community participation</span>
          <i />
          <span>Evidence-informed planning</span>
          <i />
          <span>Implementation support</span>
        </div>

        <section id="about" className="about-section page-gutter section-space">
          <div className="section-label"><span>01</span><i /> ABOUT SAGE</div>
          <div className="about-layout">
            <h2>Development decisions should account for the <em>people they affect.</em></h2>
            <div className="about-copy">
              <p>SAGE Development Consultants provides practical, field-oriented advisory and technical support for development initiatives seeking socially inclusive, environmentally responsible and sustainable outcomes.</p>
              <p>Our work focuses on understanding the people, institutions and environments affected by development. We support clients and partners in identifying risks, engaging stakeholders, preparing plans and monitoring implementation.</p>
              <a className="inline-link" href="#approach">How we work</a>
            </div>
          </div>
        </section>

        <section id="services" className="services-section page-gutter section-space">
          <div className="section-heading">
            <div><div className="section-label"><span>02</span><i /> ADVISORY SERVICES</div><h2>Specialist support for <em>complex project needs.</em></h2></div>
            <p>Scope and team composition are tailored to each assignment. Specialist technical components are undertaken with appropriately qualified professionals.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span>{service.number}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="sectors" className="sectors-section page-gutter section-space">
          <div className="sectors-intro">
            <div className="section-label"><span>03</span><i /> SECTORS WE SUPPORT</div>
            <h2>Development is shaped by <em>local realities.</em></h2>
            <p>SAGE’s services can be applied across development sectors. The role and technical scope for each assignment depend on project requirements.</p>
          </div>
          <ul className="sector-list">{sectors.map((sector, index) => <li key={sector}><span>0{index + 1}</span>{sector}</li>)}</ul>
        </section>

        <section id="approach" className="approach-section page-gutter section-space">
          <div className="section-heading">
            <div><div className="section-label"><span>04</span><i /> OUR APPROACH</div><h2>Evidence to <em>implementation.</em></h2></div>
            <p>A project-cycle approach that connects assessment, engagement and practical delivery. The sequence adapts to each assignment.</p>
          </div>
          <div className="approach-list">
            {approach.map(([number, title, description]) => (
              <article className="approach-row" key={number}><span className="approach-number">{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section id="who-we-work-with" className="partners-section page-gutter section-space">
          <div className="section-heading">
            <div><div className="section-label"><span>05</span><i /> WHO WE WORK WITH</div><h2>Built around <em>collaboration.</em></h2></div>
            <p>Project-specific teams and partnerships help match the work to the required expertise, scope and context.</p>
          </div>
          <div className="partners-grid">{partners.map(([title, description]) => <article className="partner-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section id="founder" className="founder-section page-gutter section-space">
          <div className="founder-kicker"><div className="section-label"><span>06</span><i /> FOUNDER</div><div className="founder-monogram" aria-hidden="true">VS</div></div>
          <div className="founder-copy"><p className="founder-role">{founder.role}</p><h2>{founder.name}</h2><p>{founder.summary}</p><div className="founder-experience"><span>INDIVIDUAL EXPERIENCE</span><p>{founder.experience}</p></div></div>
        </section>

        <section id="insights" className="insights-section page-gutter section-space">
          <div className="insights-heading"><div><div className="section-label"><span>07</span><i /> INSIGHTS & SAGE SPEAKS</div><h2>Perspectives from <em>people, place and practice.</em></h2></div><p>Field-based learning and research will be shared here as material is ready and approved for publication.</p></div>
          <div className="insights-empty"><div className="insights-empty-icon" aria-hidden="true">S</div><div><span>KNOWLEDGE & REFLECTION</span><h3>The first SAGE Insights are in development.</h3><p>Articles, research summaries and SAGE Speaks features will appear here as they become available.</p></div><a href={`mailto:${siteInfo.email}`}>Get in touch</a></div>
        </section>

        <section id="contact" className="contact-section page-gutter">
          <div className="contact-panel"><div className="section-label"><span>08</span><i /> START A CONVERSATION</div><div className="contact-layout"><div><h2>Planning a project? Let’s <em>talk through the needs.</em></h2><p>For project enquiries, partnerships, research collaboration or further information, contact SAGE Development Consultants.</p></div><a className="button button-light" href={`mailto:${siteInfo.email}`}>Send an enquiry</a></div><div className="contact-meta"><span>JAMMU & KASHMIR, INDIA</span><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
