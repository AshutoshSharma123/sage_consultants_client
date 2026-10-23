import { useEffect, useRef, useState } from 'react';
import { navigation } from '../../data/siteContent.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const root = document.documentElement;
        const scrollableHeight = root.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        progressRef.current?.style.setProperty('--scroll-progress', String(Math.min(1, Math.max(0, progress))));
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  function closeMenu() {
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <a className="brand" href="#top" onClick={closeMenu} aria-label="SAGE Development Consultants, home">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span className="brand-name">SAGE <small>DEVELOPMENT CONSULTANTS</small></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        <span className="menu-icon" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
      </button>
      <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Discuss a project</a>
      </nav>
    </header>
  );
}
