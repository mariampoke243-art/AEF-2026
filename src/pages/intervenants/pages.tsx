import React from 'react';
// import { useTranslation } from '../../hooks/useTranslation'; 

interface Intervenant {
  id: string;
    nom: string;
      titre: string;
        institution: string;
          domaineStrategique: string;
            photoUrl: string;
              statut: 'Confirmé' | 'Invité' | 'À l’étude' | 'À confirmer';
              }

              const listeIntervenants: Intervenant[] = [
                {
                    id: '1',
                        nom: 'Hon. Abraham Dwuma Odoom',
                            titre: 'Agriculture Expert, Ghana Former Member of Parliament & Deputy Minister of Health',
                                institution: 'Parliament',
                                    domaineStrategique: 'Agriculture & policy',
                                        photoUrl: '/images/Hon. Abraham Dwuma Odoom.jpg',
                                            statut: 'Confirmé',
                                              },
                                                {
                                                       id: '2',
                                                          nom: 'H.E Hilda Suka Mafudze',
                                                              titre: 'Permanent Representative, AU-Southern African Regional ',
                                                                  institution: 'AU-Southern African Regional',
                                                                      domaineStrategique: '',
                                                                          photoUrl: '/images/H.E Hilda Suka Mafudze.jpg',
                                                                              statut: 'Confirmé',
                                                                                },
                            {
                                  id: '3',
                                      nom: 'H.E Dominique Migisha',
                                          titre: 'Coordinator of the Digital Development Agency, Former President of DRC Special Advisor',
                                              institution: 'Digital Development Agency',
                                                  domaineStrategique: 'Digital',
                                                      photoUrl: '/images/H.E Dominique Migisha.jpg',
                                                          statut: 'Confirmé',
                                                            },
  {
    id: '4',
    nom: 'Dr. Rashed Mohamed Karkain',
    titre: 'International Sustainable Development & Green Economy Leader, CEO Sustainable Development Research and Training Institute.',
    institution: 'Sustainable Development Research and Training Institute',
    domaineStrategique: 'Development & Economy',
    photoUrl: '/images/Dr.Rashed Mohamed Karkain.jpg',
    statut: 'Confirmé',
  },

  {
    id: '5',
    nom: 'H.E Abdullah Belhaif Al Nuaimi',
    titre: 'UAE Former Minister of Infrastructure & Climate Change',
    institution: 'Policy',
    domaineStrategique: 'Infrastructure & climate',
    photoUrl: '/images/H.E Abdullah Belhaif Al Nuaimi.jpg',
    statut: 'Confirmé',
  },

  {
    id: '6',
    nom: 'Engr Abdullahi KassimEngr',
    titre: 'Executive Director Generation  Niger Delta Power Holding Company Limited (NDPHC)',
    institution: 'Niger Delta Power Holding Company Limited (NDPHC)',
    domaineStrategique: '',
    photoUrl: '/images/Engr Abdullahi KassimEngr.jpg',
    statut: 'Confirmé',
  },

  {
    id: '7',
    nom: 'H.E Ana-Helena Chacón Echeverría',
    titre: 'Former Vice President, Costa-Rica',
    institution: 'Policy',
    domaineStrategique:'Policy',
    photoUrl: '/images/H.E Ana-Helena Chacón Echeverría.jpg',
    statut: 'Confirmé', 
  },
  {
    id: '8',
    nom: 'H.E Rosalia Arteaga',
    titre: 'Former President of Ecuador',
    institution: 'Policy',
    domaineStrategique: 'Policy',
    photoUrl: '/images/H.E Rosalia Arteaga.jpg',
    statut: 'Confirmé', 
  },

  {
    id: '9',
    nom: 'H.E John Agyekum Kufuor',
    titre: 'Former President of Ghana',
    institution: 'Policy',
    domaineStrategique: 'Policy',
    photoUrl: '/images/H.E John Agyekum Kufuor.jpg',
    statut: 'Confirmé', 
  }

    {
            id: '10',
                nom: 'Bako Ambianda',
                    titre: 'Chairman and Chief Executive Officer of Bako Group Holdings',
                        institution: 'Bako Group Holdings',
                            domaineStrategique: '',
                                photoUrl: '/image/Bako Ambianda.jpg',
                                    statut: 'Invité'
                                      },



                                    {
                                          id: '11',
                                              nom: 'Amal El Fallah Seghrouchni',
                                                  titre: 'Minister Delegate to the Head of Government in charge of Digital Transition and Administrative Reform.',
                                                      institution: 'Government',
                                                          domaineStrategique: 'Digital & Policy',
                                                              photoUrl: '/images/Amal El Fallah Seghrouchni.jpg',
                                                                  statut: 'Invité'
                                                                    },

                                      {
                                            id: '12',
                                                nom: 'Éléonore Caroit',
                                                    titre: 'France’s Minister Delegate for Francophonie and International Partnerships.',
                                                        institution: 'Government',
                                                            domaineStrategique: 'Francophonie and International Partnerships.',
                                                                photoUrl: '/images/Éléonore Caroit.jpg',
                                                                    statut: 'Invité'
                                                                      },

                                                                   
                                                                                                                                                

                                              ];

                                              export default function IntervenantsPage() {
                                                // const { t } = useTranslation(); // Activez selon votre logique de traduction existante

                                                  const intervenantsConfirmes = listeIntervenants.filter(i => i.statut === 'Confirmé');
                                                    const dirigeantsInvites = listeIntervenants.filter(i => i.statut !== 'Confirmé');

                                                      return (
                                                          <main className="container mx-auto px-4 py-8">
                                                                <header className="mb-12 text-center">
                                                                        <h1 className="text-3xl font-bold uppercase tracking-wide">Intervenants</h1>
                                                                                <p className="text-xl font-semibold mt-2">LES PERSONNES QUI FAÇONNENT LA CONVERSATION.</p>
                                                                                        <blockquote className="max-w-2xl mx-auto mt-4 italic text-gray-600">
                                                                                                  « L&apos;AEF réunit les décideurs et les voix qui façonnent la relation de l&apos;Afrique avec le capital mondial, la technologie, l&apos;énergie, le commerce et l&apos;investissement stratégique. »
                                                                                                          </blockquote>
                                                                                                                </header>

                                                                                                                      <section className="mb-8 text-sm text-gray-500 text-center">
                                                                                                                              <span>Catégories : chefs d&apos;État, dirigeants gouvernementaux, investisseurs, PDG, stratèges économiques, dirigeants financiers et experts sectoriels.</span>
                                                                                                                                    </section>

                                                                                                                                          {/* Section Confirmés */}
                                                                                                                                                <section className="mb-12">
                                                                                                                                                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Intervenants confirmés</h2>
                                                                                                                                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                                                                                                                          {intervenantsConfirmes.map((intervenant) => (
                                                                                                                                                                                      <div key={intervenant.id} className="border p-4 rounded-lg shadow-sm bg-white">
                                                                                                                                                                                                    <img src={intervenant.photoUrl} alt={intervenant.nom} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
                                                                                                                                                                                                                  <h3 className="text-lg font-bold text-center">{intervenant.nom}</h3>
                                                                                                                                                                                                                                <p className="text-sm text-center text-gray-700">{intervenant.titre}</p>
                                                                                                                                                                                                                                              <p className="text-sm text-center text-gray-500">{intervenant.institution}</p>
                                                                                                                                                                                                                                                            <div className="mt-4 flex justify-between items-center text-xs">
                                                                                                                                                                                                                                                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{intervenant.domaineStrategique}</span>
                                                                                                                                                                                                                                                                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">{intervenant.statut}</span>
                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                              </section>

                                                                                                                                                                                                                                                                                                                                                    {/* Section Dirigeants invités */}
                                                                                                                                                                                                                                                                                                                                                          {dirigeantsInvites.length > 0 && (
                                                                                                                                                                                                                                                                                                                                                                  <section>
                                                                                                                                                                                                                                                                                                                                                                            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Dirigeants invités</h2>
                                                                                                                                                                                                                                                                                                                                                                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                                                                                                                                                                                                                                                                                                                                                  {dirigeantsInvites.map((intervenant) => (
                                                                                                                                                                                                                                                                                                                                                                                                                <div key={intervenant.id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                                                                                                                                                                                                                                                                                                                                                                                                                                <img src={intervenant.photoUrl} alt={intervenant.nom} className="w-24 h-24 object-cover rounded-full mx-auto mb-4 grayscale" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3 className="text-lg font-bold text-center">{intervenant.nom}</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p className="text-sm text-center text-gray-700">{intervenant.titre}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p className="text-sm text-center text-gray-500">{intervenant.institution}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="mt-4 flex justify-between items-center text-xs">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{intervenant.domaineStrategique}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">{intervenant.statut}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
