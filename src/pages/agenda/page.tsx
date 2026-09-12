import React, { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

export default function AgendaPage() {
  const [registeredEvent, setRegisteredEvent] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '' });

  const events = [
    {
      id: 1,
      title: "INDIA-AFRICA INVESTMENT & BUSINESS CORRIDOR ROUNDTABLE",
      subtitle: "Africa Economic Forum - Session Annonce",
      date: "10-11 Novembre 2026",
      location: "Fleuve Congo Hotel, Kinshasa, DRC",
      objective: "Finaliser l'ordre du jour et recruter les sponsors",
      theme: "Africa and Global Realignment : Investment, Alliances & Strategic Opportunities",
      image: "/images/Africa_forum_nov2026.jpg",
      description: "Africa and Global Realignment: Investment, Alliances & Strategic Opportunities"
    }
  ];

  const handleRegister = (e: React.FormEvent, eventId: number) => {
    e.preventDefault();
    setRegisteredEvent(eventId);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Agenda Officiel - Africa Economic Forum
          </h1>
          <p className="text-slate-600">
            Consultez les sessions à venir et confirmez votre participation.
          </p>
        </header>

        <div className="space-y-6">
          {events.map((event) => (
            <article 
              key={event.id} 
              className="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden transition-all"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-full">
                    {event.subtitle}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {event.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 space-y-2 border border-slate-100">
                  <p className="text-sm font-medium text-slate-900">Objectif :</p>
                  <p className="text-sm text-slate-600">{event.objective}</p>
                </div>

                {registeredEvent === event.id ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center space-x-3 text-emerald-800">
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span className="text-sm font-medium">
                      Votre inscription à cet événement a été enregistrée avec succès.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleRegister(e, event.id)} className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      S'inscrire à cette session
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Nom complet"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Adresse email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Organisation"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Confirmer l'inscription
                    </button>
                  </form>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
