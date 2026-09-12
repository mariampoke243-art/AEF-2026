import React from 'react';

export default function LanguageAndNewsletter() {
  return (
    <div style={{ margin: '30px auto', padding: '0 20px', textAlign: 'center' }}>
      {/* Sélecteur de langues */}
      <div style={{ marginBottom: '25px' }}>
        <label htmlFor="lang-select" style={{ fontWeight: '600', marginRight: '10px', color: '#1e293b' }}>
          🌍 Langue / Language :
        </label>
        <select 
          id="lang-select"
          className="language-selector"
          onChange={(e) => alert("Langue changée vers : " + e.target.value)}
          defaultValue="fr"
        >
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="zh">中文 (Chinois)</option>
          <option value="pt">Português</option>
        </select>
      </div>

      {/* Section Newsletter */}
      <div className="newsletter-section">
        <h3 style={{ color: '#0f172a', marginBottom: '10px' }}>Restez informé des actualités de l'AEF</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
          Recevez nos derniers rapports, annonces de sommets et opportunités d'investissement directement par email.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Merci pour votre inscription à la newsletter !"); }}>
          <input 
            type="email" 
            placeholder="Votre adresse email professionnelle" 
            required 
          />
          <button type="submit">S'inscrire à la Newsletter</button>
        </form>
      </div>
    </div>
  );
}
