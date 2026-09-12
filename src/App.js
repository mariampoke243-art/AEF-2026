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
    <div className="site-wrapper">
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
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-dropdown">
            <a href="#mission" onClick={() => setMenuOpen(false)}>Notre Mission</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
            <a href="#initiatives" onClick={() => setMenuOpen(false)}>Initiatives</a>
            <a href="#meetings" onClick={() => setMenuOpen(false)}>Sommets</a>
            <a href="#spotlight" onClick={() => setMenuOpen(false)}>Spotlight</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="mission">
        <div className="hero-badge">⚡ Sommet Officiel Kinshasa 2026</div>
        <h1 className="hero-title">
          Façonner le nouvel ordre économique mondial de l'Afrique
        </h1>
        <p className="hero-subtitle-top">
          Convier les plus grands leaders, gouvernements, investisseurs et visionnaires pour transformer l'avenir du continent.
        </p>
        <a href="#impact" className="hero-btn">Découvrir le Forum 🚀</a>
      </section>

      {/* Hero Preview Card */}
      <div className="hero-image-container">
        <div className="hero-img-placeholder">
          <div className="img-overlay-badge">Exclusif • Édition 2026</div>
          <div className="img-overlay-text">Souveraineté & Innovation Économique</div>
        </div>
      </div>

      {/* How We Drive Impact Section */}
      <section className="impact-section" id="impact">
        <div className="section-header-box">
          <h2 className="section-title">Notre Impact en Action</h2>
          <p className="section-desc">Annonces stratégiques & jalons institutionnels majeurs</p>
        </div>
        
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'initiatives' ? 'active' : ''}`}
            onClick={() => setActiveTab('initiatives')}
          >
            🎯 Initiatives
          </button>
          <button 
            className={`tab-btn ${activeTab === 'meetings' ? 'active' : ''}`}
            onClick={() => setActiveTab('meetings')}
          >
            🤝 Sommets
          </button>
          <button 
            className={`tab-btn ${activeTab === 'stakeholders' ? 'active' : ''}`}
            onClick={() => setActiveTab('stakeholders')}
          >
            🌍 Partenaires
          </button>
        </div>

        <div className="impact-card">
          <h3>Propulser la croissance africaine</h3>
          <p className="impact-desc">
            À travers des plateformes de dialogue de haut niveau et des partenariats audacieux, nous créons des passerelles directes entre les opportunités africaines et les investisseurs mondiaux.
          </p>

          <div className="impact-list">
            <div className="impact-item">
              <span className="impact-icon blue">💡</span>
              <div>
                <h4>Dialogues Stratégiques</h4>
                <p>Des espaces de décisions de premier plan pour les leaders du secteur public et privé.</p>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon green">🚀</span>
              <div>
                <h4>Accélération d'Innovations</h4>
                <p>Soutien actif aux solutions technologiques et industrielles à fort impact continental.</p>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon purple">💎</span>
              <div>
                <h4>Fonds & Capital d'Avenir</h4>
                <p>Mobilisation de capitaux massifs pour structurer les infrastructures de demain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Cards Grid */}
      <section className="cards-section" id="initiatives">
        <h2 className="section-title">Plateformes Clés</h2>
        <p className="section-subtitle">Nos programmes phares pour catalyser l'économie</p>
        
        <div className="cards-grid">
          <div className="card">
            <div className="card-img-placeholder bg-1">
              <span className="card-tag">Fonds</span>
            </div>
            <div className="card-content">
              <h3>Africa Investment & Innovation Fund</h3>
              <p>Mobilisation de capitaux et partenariats audacieux pour propulser les entreprises à fort rendement.</p>
              <a href="#read" className="card-link">Explorer →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-2">
              <span className="card-tag">Talents</span>
            </div>
            <div className="card-content">
              <h3>Next Africa Accelerator</h3>
              <p>Offrir aux entrepreneurs d'élite mentorat, ressources stratégiques et accès aux marchés globaux.</p>
              <a href="#read" className="card-link">Explorer →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-3">
              <span className="card-tag">Intelligence</span>
            </div>
            <div className="card-content">
              <h3>African Economic Intelligence Hub</h3>
              <p>Recherche macroéconomique de haute précision, analyses commerciales et aide à la décision politique.</p>
              <a href="#read" className="card-link">Explorer →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-4">
              <span className="card-tag">Green Tech</span>
            </div>
            <div className="card-content">
              <h3>AEF Labs & Transition Énergétique</h3>
              <p>Pionnier des technologies vertes durables, des infrastructures numériques et des énergies renouvelables.</p>
              <a href="#read" className="card-link">Explorer →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="meetings-section" id="meetings">
        <h2 className="section-title">Nos Sommets Majeurs</h2>
        <p className="section-subtitle">Des rendez-vous incontournables face aux défis continentaux</p>

        <div className="cards-grid">
          <div className="card">
            <div className="card-img-placeholder bg-agri">
              <span className="card-tag">Agro</span>
            </div>
            <div className="card-content">
              <h3>Africa Agriculture & Food Forum</h3>
              <p>Transformer l'agriculture vivrière en un système ultra-productif, moderne et durable.</p>
              <a href="#read" className="card-link">Participer →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-energy">
              <span className="card-tag">Infrastructure</span>
            </div>
            <div className="card-content">
              <h3>Africa Energy & Infrastructure Forum</h3>
              <p>Connecter les régions du continent grâce à des infrastructures de classe mondiale.</p>
              <a href="#read" className="card-link">Participer →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-tech">
              <span className="card-tag">Digital</span>
            </div>
            <div className="card-content">
              <h3>Africa Digital Economy Forum</h3>
              <p>Propulser l'économie numérique africaine par le capital-risque et l'innovation technologique.</p>
              <a href="#read" className="card-link">Participer →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-placeholder bg-women">
              <span className="card-tag">Leadership</span>
            </div>
            <div className="card-content">
              <h3>Africa Women Forum (AWF)</h3>
              <p>Ériger le leadership économique des femmes comme pierre angulaire de la souveraineté.</p>
              <a href="#read" className="card-link">Participer →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="spotlight-section" id="spotlight">
        <div className="spotlight-header">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '4px' }}>À la Une / Spotlight</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>Actualité brûlante et communiqués officiels</p>
          </div>
          <button className="view-all-btn">Tous les articles ➔</button>
        </div>

        <div className="spotlight-card">
          <div className="spotlight-img bg-spotlight"></div>
          <div className="spotlight-body">
            <div className="spotlight-tags">
              <span className="tag-blue">Partenariat Majeur</span>
              <span className="tag-date">12 Septembre 2026</span>
            </div>
            <h3>La Banque Africaine de Développement devient le partenaire technique officiel de l'Africa Women Forum</h3>
            <p>
              Un accord historique conclu à Kinshasa pour renforcer massivement l'inclusion financière et le leadership des femmes entrepreneures à travers tout le continent...
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-box">
          <h3>⚡ Ne manquez aucune alerte AEF</h3>
          <p>Recevez en avant-première nos rapports exclusifs et invitations aux sommets.</p>
          {subscribed ? (
            <div className="success-msg">🎉 Merci ! Votre inscription est confirmée.</div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Entrez votre email professionnel" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit">S'inscrire</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>À propos</h4>
            <ul>
              <li><a href="#mission">Notre mission</a></li>
              <li><a href="#framework">Cadre Institutionnel</a></li>
              <li><a href="#history">Histoire & Vision</a></li>
              <li><a href="#gov">Gouvernance</a></li>
              <li><a href="#impact">Notre Impact</a></li>
            </ul>
          </div>
          <div>
            <h4>Explorer</h4>
            <ul>
              <li><a href="#centres">Centres d'excellence</a></li>
              <li><a href="#meetings">Sommets & Forums</a></li>
              <li><a href="#stakeholders">Partenaires</a></li>
              <li><a href="#stories">Histoires du Forum</a></li>
              <li><a href="#press">Espace Presse</a></li>
            </ul>
          </div>
          <div>
            <h4>Rejoindre</h4>
            <ul>
              <li><a href="#signin">Connexion Membres</a></li>
              <li><a href="#partner">Devenir Partenaire</a></li>
              <li><a href="#member">Obtenir le Pass VIP</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Africa Economic Forum (AEF). Tous droits réservés. Kinshasa / RDC.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
