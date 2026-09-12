import React from 'react';
import LanguageAndNewsletter from './components/LanguageAndNewsletter';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/logo192.png" alt="Logo AEF" className="logo" />
        <h1>Africa Economic Forum</h1>
        <p>Empowering Africa's Economic Future</p>
      </header>

      {/* Ajout du sélecteur de langues et de la newsletter */}
      <LanguageAndNewsletter />

      <footer>
        <p>&copy; 2026 Africa Economic Forum. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
