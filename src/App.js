import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/logo192.png" alt="Logo AEF" className="logo" />
        <h1>Africa Economic Forum</h1>
        <p>Empowering Africa's Economic Future</p>
      </header>

      {/* Menu de navigation */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#initiative">Initiative</a>
        <a href="#stakeholders">Stakeholders</a>
        <a href="#agenda">Agenda</a>
        <a href="#publications">Publications</a>
        <a href="#meetings">Meetings</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Sélecteur de Langues */}
      <div style={{ margin: '20px auto', textAlign: 'center' }}>
        <label htmlFor="lang-select" style={{ fontWeight: '600', marginRight: '10px', color: '#1e293b' }}>
          🌍 Langue :
        </label>
        <select 
          id="lang-select"
          className="language-selector"
          onChange={(e) => alert("Langue changée vers : " + e.target.value)}
          defaultValue="fr"
        >
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
          <option value="pt">Português</option>
        </select>
      </div>

      {/* Contenu principal */}
      <main style={{ padding: '20px' }}>
        <h2>Africa & Global Realignments</h2>
        <p>Investments, Alliances & Strategic Opportunities</p>
        <p><strong>Dates :</strong> 10-11 Nov 2026</p>
        <p><strong>Lieu :</strong> Kinshasa, Fleuve Congo Hotel</p>
      </main>

      {/* Section Newsletter */}
      <div className="newsletter-section">
        <h3 style={{ color: '#0f172a', marginBottom: '10px' }}>Restez informé des actualités de l'AEF</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
          Recevez nos derniers rapports et annonces de sommets directement par email.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Merci pour votre inscription !"); }}>
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            required 
          />
          <button type="submit">S'inscrire</button>
        </form>
      </div>

      <footer>
        <p>&copy; 2026 Africa Economic Forum. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
