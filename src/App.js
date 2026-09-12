import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('initiatives');
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('fr');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="App">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo-area">
            <div className="logo-circle">AEF</div>
            <span className="brand-name">Africa Economic Forum</span>
          </div>
          <div className="nav-right">
            <select 
              className="language-selector" 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="zh">ZH</option>
              <option value="pt">PT</option>
            </select>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-dropdown">
            <a href="#mission" onClick={() => setMenuOpen(false)}>Our Mission</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>How We Drive Impact</a>
            <a href="#initiatives" onClick={() => setMenuOpen(false)}>Initiatives</a>
            <a href="#meetings" onClick={() => setMenuOpen(false)}>Meetings</a>
            <a href="#spotlight" onClick={() => setMenuOpen(false)}>Spotlight</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="mission">
        <div className="hero-badge">Our mission</div>
        <h1 className="hero-title">
          A premier platform convening leaders, governments, investors, and thinkers to shape Africa's role in the new global order
        </h1>
        <a href="#impact" className="hero-btn">More about the Forum →</a>
      </section>

      {/* Hero Preview Card */}
      <div className="hero-image-container">
        <div className="hero-img-placeholder">
          <div className="img-overlay-text">Empowering Africa's Economic Future • Kinshasa 2026</div>
        </div>
      </div>

      {/* How We Drive Impact Section */}
      <section className="impact-section" id="impact">
        <h2 className="section-title">How we drive impact</h2>
        <p className="section-subtitle">AEF Strategic Announcements & Institutional Milestones</p>
        
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'initiatives' ? 'active' : ''}`}
            onClick={() => setActiveTab('initiatives')}
          >
            Initiatives
          </button>
          <button 
            className={`tab-btn ${activeTab === 'meetings' ? 'active' : ''}`}
            onClick={() => setActiveTab('meetings')}
          >
            Meetings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'stakeholders' ? 'active' : ''}`}
            onClick={() => setActiveTab('stakeholders')}
          >
            Stakeholders
          </button>
        </div>

        <div className="impact-card">
          <h3>How We Drive Impact</h3>
          <p className="impact-desc">
            Through strategic initiatives, partnerships, and platforms, we create tangible pathways for Africa's economic transformation and global leadership.
          </p>

          <div className="impact-list">
            <div className="impact-item">
              <span className="impact-icon blue">💡</span>
              <div>
                <h4>Strategic Dialogue Platforms</h4>
                <p>Creating spaces for meaningful conversations between African leaders and global partners.</p>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon green">🤝</span>
              <div>
                <h4>Partnership Facilitation</h4>
                <p>Connecting African opportunities with global capital, technology, and expertise.</p>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon purple">🚀</span>
              <div>
                <h4>Innovation Acceleration</h4>
                <p>Supporting breakthrough solutions that address Africa's most pressing challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Cards Grid */}
      <section className="cards-section" id="initiatives">
        <h2 className="section-title">Key Platforms & Initiatives</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-img-placeholder bg-1"></div>
            <div className="card-content">
              <h3>Africa Investment & Innovation Fund (AIIF)</h3>
              <p>Mobilizing capital and venture partnership for scalable high-impact enterprises across the continent.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-2"></div>
            <div className="card-content">
              <h3>Next Africa Accelerator</h3>
              <p>Empowering next-generation entrepreneurs with resources, mentorship, and global market access.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-3"></div>
            <div className="card-content">
              <h3>African Economic Intelligence Hub</h3>
              <p>Delivering high-precision macroeconomic research, trade analytics, and policy advisory.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-4"></div>
            <div className="card-content">
              <h3>AEF Labs</h3>
              <p>Pioneering sustainable green tech, digital infrastructure, and renewable energy transitions.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="meetings-section" id="meetings">
        <h2 className="section-title">Explore our Different Meetings</h2>
        <p className="section-subtitle">Explore our key meetings addressing Africa's most pressing economic challenges</p>

        <div className="cards-grid">
          <div className="card">
            <div className="card-img-placeholder bg-agri"></div>
            <div className="card-content">
              <h3>Africa Agriculture & Food Forum (AAFF)</h3>
              <p>Transforming African agriculture from subsistence farming to a modern, productive, and sustainable system.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-energy"></div>
            <div className="card-content">
              <h3>Africa Energy & Infrastructure Forum</h3>
              <p>Mobilizing capital and expertise to build world-class infrastructure that connects Africa and drives economic growth.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-tech"></div>
            <div className="card-content">
              <h3>Africa Digital Economy & Tech Forum (ADETF)</h3>
              <p>Igniting Africa's digital economy through innovation, venture capital, and strategic technology partnerships.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-women"></div>
            <div className="card-content">
              <h3>Africa Women Forum (AWF)</h3>
              <p>Establish the women's economic leadership agenda as the cornerstone of continental sovereignty.</p>
              <a href="#read" className="card-link">Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="spotlight-section" id="spotlight">
        <div className="spotlight-header">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '5px' }}>Spotlight</h2>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>AEF Strategic Announcements & Institutional Milestones</p>
          </div>
          <button className="view-all-btn">View All Articles →</button>
        </div>

        <div className="spotlight-card">
          <div className="spotlight-img bg-spotlight"></div>
          <div className="spotlight-body">
            <div className="spotlight-tags">
              <span className="tag-blue">Institutional Partnership</span>
              <span className="tag-date">January 31, 2026</span>
            </div>
            <h3>African Development Bank Becomes Technical Partner of the Africa Women Forum</h3>
            <p>
              The Africa Economic Forum announces the African Development Bank (AfDB) as the official technical partner of the Africa Women Forum (AWF), marking a major institutional milestone to strengthen women's leadership...
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h3>Restez informé des actualités de l'AEF</h3>
        <p>Recevez nos derniers rapports et annonces de sommets directement par email.</p>
        {subscribed ? (
          <div className="success-msg">Merci pour votre inscription !</div>
        ) : (
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">S'inscrire</button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="#mission">Our mission</a></li>
              <li><a href="#framework">Our Institutional Framework</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#gov">Leadership and governance</a></li>
              <li><a href="#impact">Our Impact</a></li>
            </ul>
          </div>
          <div>
            <h4>More from the Forum</h4>
            <ul>
              <li><a href="#centres">Centres</a></li>
              <li><a href="#meetings">Meetings</a></li>
              <li><a href="#stakeholders">Stakeholders</a></li>
              <li><a href="#stories">Forum Stories</a></li>
              <li><a href="#press">Press releases</a></li>
            </ul>
          </div>
          <div>
            <h4>Engage with us</h4>
            <ul>
              <li><a href="#signin">Sign in</a></li>
              <li><a href="#partner">Partner with us</a></li>
              <li><a href="#member">Become a member</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Africa Economic Forum. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
