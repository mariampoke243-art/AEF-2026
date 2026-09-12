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

      {/* Ajout des Langues et de la Newsletter */}
      <LanguageAndNewsletter />

      <footer>
        <p>&copy; 2026 Africa Economic Forum. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
