import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Ajout automatique du script Google Translate si non présent
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(addScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,fr,es,pt,zh-CN',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        }, 'google_translate_element');
      };
    }
  }, []);

  return (
    <div className="site-container">
      {/* --- HEADER --- */}
      <header className="navbar">
        <div className="logo-container">
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>AEF 2026</span>
        </div>
        
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#initiatives">Initiative</a>
          <a href="#stakeholders">Stakeholders</a>
          <a href="#agenda">Agenda</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Sélecteur de langue intégré */}
        <div className="language-selector" id="google_translate_element"></div>
      </header>

      {/* --- CONTENU PRINCIPAL --- */}
      <main style={{ padding: '20px 5%' }}>
        <section id="home">
          <h1>Africa Economic Forum 2026</h1>
          <p>Africa & Global Realignments: Investments, Alliances & Strategic Opportunities</p>
          <p><strong>Dates:</strong> 10-11 Nov 2026 | <strong>Lieu:</strong> Kinshasa, Fleuve Congo Hotel</p>
          
          <div style={{ margin: '20px 0' }}>
            <a href="#agenda" className="btn">Voir l'Agenda</a>
          </div>
        </section>

        <section id="about">
          <h2>Our Mission</h2>
          <p>A premier platform convening leaders, governments, investors, and thinkers to shape Africa's role in the new global order.</p>
        </section>

        <section id="initiatives">
          <h2>How We Drive Impact</h2>
          <p>Through strategic initiatives, partnerships, and platforms, we create tangible pathways for Africa's economic transformation and global leadership.</p>
          
          <div className="cards-grid">
            <div className="card">
              <div style={{ padding: '20px' }}>
                <h3>Strategic Dialogue Platforms</h3>
                <p>Creating spaces for meaningful conversations between African leaders and global partners.</p>
              </div>
            </div>
            <div className="card">
              <div style={{ padding: '20px' }}>
                <h3>Partnership Facilitation</h3>
                <p>Connecting African opportunities with global capital, technology, and expertise.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer>
        <div>
          <h3>About us</h3>
          <a href="#mission">Our mission</a>
          <a href="#framework">Our Institutional Framework</a>
          <a href="#history">History</a>
          <a href="#leadership">Leadership and governance</a>
          <a href="#impact">Our Impact</a>
        </div>
        <div>
          <h3>More from the Forum</h3>
          <a href="#centres">Centres</a>
          <a href="#meetings">Meetings</a>
          <a href="#stakeholders">Stakeholders</a>
          <a href="#stories">Forum Stories</a>
          <a href="#press">Press releases</a>
        </div>
        <div>
          <h3>Engage with us</h3>
          <a href="#signin">Sign in</a>
          <a href="#partner">Partner with us</a>
          <a href="#member">Become a member</a>
          <a href="#contact">Contact us</a>
        </div>
        <div>
          <h3>Quick links</h3>
          <a href="#sustainability">Sustainability at the Forum</a>
          <a href="#careers">Careers</a>
          <p style={{ marginTop: '15px', fontSize: '0.85rem' }}>© 2026 Africa Economic Forum</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
