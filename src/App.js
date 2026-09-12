import React, { useState } from 'react';

function App() {
  const [lang, setLang] = useState('English');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0b0f19', color: '#ffffff', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* HEADER SUPRÊME ET VISIBLE */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', backgroundColor: '#111827', borderBottom: '2px solid #1f2937' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#38bdf8' }}>
          AEF 2026
        </div>
        
        <nav style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#home" style={{ color: '#e5e7eb', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
          <a href="#about" style={{ color: '#e5e7eb', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
          <a href="#initiatives" style={{ color: '#e5e7eb', textDecoration: 'none', fontSize: '0.9rem' }}>Initiatives</a>
          <a href="#agenda" style={{ color: '#e5e7eb', textDecoration: 'none', fontSize: '0.9rem' }}>Agenda</a>
        </nav>

        {/* SÉLECTEUR DE LANGUE ULTRA-VISIBLE (FOND ROUGE/ORANGE) */}
        <div style={{ backgroundColor: '#dc2626', padding: '8px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          <span style={{ marginRight: '5px', fontSize: '1rem' }}>🌐</span>
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
            style={{ background: 'transparent', color: '#ffffff', border: 'none', fontWeight: 'bold', fontSize: '0.95rem', outline: 'none', cursor: 'pointer' }}
          >
            <option value="English" style={{ color: '#000' }}>English</option>
            <option value="Français" style={{ color: '#000' }}>Français</option>
            <option value="Español" style={{ color: '#000' }}>Español</option>
            <option value="Português" style={{ color: '#000' }}>Português</option>
            <option value="中文" style={{ color: '#000' }}>中文</option>
          </select>
        </div>
      </header>

      {/* CONTENU */}
      <main style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <section id="home" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#f9fafb' }}>Africa Economic Forum 2026</h1>
          <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '10px' }}>Africa & Global Realignments: Investments, Alliances & Strategic Opportunities</p>
          <p style={{ color: '#d1d5db' }}><strong>Dates:</strong> 10-11 Nov 2026 | <strong>Lieu:</strong> Kinshasa, Fleuve Congo Hotel</p>
          
          <div style={{ marginTop: '20px' }}>
            <a href="#agenda" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>Voir l'Agenda</a>
          </div>
        </section>

        <section id="about" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#f9fafb' }}>Our Mission</h2>
          <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>A premier platform convening leaders, governments, investors, and thinkers to shape Africa's role in the new global order.</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#111827', padding: '30px 20px', borderTop: '1px solid #1f2937', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
        <p>© 2026 Africa Economic Forum. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
