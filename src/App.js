import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('EN');

  // Fonction pour simuler ou déclencher le changement de langue
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    
    // Déclencheur optionnel via Google Translate s'il est présent, ou alerte visuelle
    const translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo) {
      translateCombo.value = selectedLang;
      translateCombo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="site-container">
      {/* --- HEADER --- */}
      <header className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', background: '#0f172a', borderBottom: '1px solid #1e293b' }}>
        <div className="logo-container">
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>AEF 2026</span>
        </div>
        
        <nav className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About</a>
          <a href="#initiatives" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Initiative</a>
          <a href="#agenda" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Agenda</a>
          <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact</a>
        </nav>

        {/* Sélecteur de langue natif et stylé */}
        <div className="language-selector" style={{ display: 'flex', alignItems: 'center', background: '#1e293b', padding: '6px 12px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ marginRight: '8px', fontSize: '0.9rem' }}>🌐</span>
          <select 
            value={language} 
            onChange={handleLanguageChange}
            style={{ background: 'transparent', color: '#fff', border: 'none', outline: 'none', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
          >
            <option value="en" style={{ background: '#1e293b', color: '#fff' }}>English</option>
            <option value="fr" style={{ background: '#1e293b', color: '#fff' }}>Français</option>
            <option value="es" style={{ background: '#1e293b', color: '#fff' }}>Español</option>
            <option value="pt" style={{ background: '#1e293b', color: '#fff' }}>Português</option>
            <option value="zh-CN" style={{ background: '#1e293b', color: '#fff' }}>中文</option>
          </select>
        </div>
      </header>

      {/* --- CONTENU PRINCIPAL --- */}
      <main style={{ padding: '30px 5%' }}>
        <section id="home" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#f8fafc' }}>Africa Economic Forum 2026</h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '10px' }}>Africa & Global Realignments: Investments, Alliances & Strategic Opportunities</p>
          <p style={{ color: '#cbd5e1' }}><strong>Dates:</strong> 10-11 Nov 2026 | <strong>Lieu:</strong> Kinshasa, Fleuve Congo Hotel</p>
          
          <div style={{ margin: '20px 0' }}>
            <a href="#agenda" className="btn" style={{ background: '#2563eb', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>Voir l'Agenda</a>
          </div>
        </section>

        <section id="about" style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#f8fafc', marginBottom: '15px' }}>Our Mission</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A premier platform convening leaders, governments, investors, and thinkers to shape Africa's role in the new global order.</p>
        </section>

        <section id="initiatives" style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#f8fafc', marginBottom: '15px' }}>How We Drive Impact</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Through strategic initiatives, partnerships, and platforms, we create tangible pathways for Africa's economic transformation and global leadership.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
              <h3 style={{ color: '#f8fafc', marginBottom: '10px' }}>Strategic Dialogue Platforms</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Creating spaces for meaningful conversations between African leaders and global partners.</p>
            </div>
            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
              <h3 style={{ color: '#f8fafc', marginBottom: '10px' }}>Partnership Facilitation</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Connecting African opportunities with global capital, technology, and expertise.</p>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer style={{ background: '#0f172a', padding: '40px 5%', borderTop: '1px solid #1e293b', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
        <div>
          <h3 style={{ color: '#f8fafc', marginBottom: '15px', fontSize: '1rem' }}>About us</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#mission" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Our mission</a>
            <a href="#framework" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Our Institutional Framework</a>
            <a href="#history" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>History</a>
            <a href="#leadership" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Leadership and governance</a>
          </div>
        </div>
        <div>
          <h3 style={{ color: '#f8fafc', marginBottom: '15px', fontSize: '1rem' }}>More from the Forum</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#centres" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Centres</a>
            <a href="#meetings" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Meetings</a>
            <a href="#stakeholders" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Stakeholders</a>
            <a href="#stories" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Forum Stories</a>
          </div>
        </div>
        <div>
          <h3 style={{ color: '#f8fafc', marginBottom: '15px', fontSize: '1rem' }}>Engage with us</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#signin" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Sign in</a>
            <a href="#partner" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Partner with us</a>
            <a href="#member" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Become a member</a>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Contact us</a>
          </div>
        </div>
        <div>
          <h3 style={{ color: '#f8fafc', marginBottom: '15px', fontSize: '1rem' }}>Quick links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#sustainability" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Sustainability at the Forum</a>
            <a href="#careers" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Careers</a>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#64748b' }}>© 2026 Africa Economic Forum</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
