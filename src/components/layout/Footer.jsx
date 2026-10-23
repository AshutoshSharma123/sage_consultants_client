import { navigation, services } from '../../data/siteContent.js';
import { siteInfo } from '../../data/siteInfo.js';

export default function Footer() {
  return (
    <footer className="site-footer glass-panel" aria-label="Site footer">
      <div className="footer-main">
        <section className="footer-about" aria-labelledby="footer-brand-title">
          <a className="footer-brand" href="#top" id="footer-brand-title">SAGE<span>.</span></a>
          <p>Practical solutions for inclusive and sustainable development. Grounded in field understanding, community perspectives and evidence.</p>
          <a className="footer-cta" href={`mailto:${siteInfo.email}`}>Start a conversation</a>
        </section>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2>Explore</h2>
          <a href="#top">Home</a>
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <a href="#contact">Contact</a>
        </nav>

        <nav className="footer-column" aria-label="Services">
          <h2>Our focus</h2>
          {services.slice(0, 5).map((service) => <a href="#services" key={service.number}>{service.title}</a>)}
          <a className="footer-more-link" href="#services">View all focus areas</a>
        </nav>

        <section className="footer-column footer-contact" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">Contact details</h2>
          <div className="footer-contact-item"><span>Email</span><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div>
          <div className="footer-contact-item"><span>Phone</span><a href={`tel:${siteInfo.phoneLink}`}>{siteInfo.phoneDisplay}</a></div>
          <div className="footer-contact-item"><span>Office</span><address>{siteInfo.officeAddress.map((line) => <span key={line}>{line}</span>)}</address></div>
          {siteInfo.contactDetailsAreSample && <p className="sample-contact-note">Sample details for layout only. Replace with client-approved contact information before launch.</p>}
        </section>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SAGE Development Consultants</span>
        <span>People · Environment · Evidence</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
