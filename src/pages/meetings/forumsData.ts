export interface Forum {
  id: number;
  title: string;
  description: string;
  image: string;
  overview: string;
  keyAreas: string[];
  objectives?: string[];
  pillars?: { title: string; items: string[] }[];
}
export const forumsData: Forum[] = [
    {
        id: 6,
            title: "Africa Peace Forum",
                description: "Façonner la paix, la sécurité et la coopération stratégique en Afrique pour une transformation économique durable.",
                    image:"/images/Africa_forum_nov2026.jpg",
                        overview: "Le Forum sur la paix en Afrique réunit dirigeants, gouvernements, diplomates, experts en sécurité, investisseurs et penseurs pour relever les défis de la paix et de la sécurité.",
                            keyAreas: [
                                  "Paix & Dialogue sur l'Investissement",
                                        "Dialogues Régionaux sur la Paix (Grands Lacs, Sahel, Corne de l'Afrique)",
                                              "Tables rondes diplomatiques",
                                                    "Renseignements sur la paix et le développement",
                                                          "Bourse de paix pour la jeunesse",
                                                                "Forum annuel sur la paix en Afrique"
                                                                    ],
                                                                        objectives: [
                                                                              "Prévention des conflits",
                                                                                    "Sécurité et coopération régionale",
                                                                                          "Diplomatie et géopolitique",
                                                                                                "Jeunesse et femmes dans la consolidation de la paix",
                                                                                                      "Gouvernance et sécurité humaine"
                                                                                                          ]
                                                                                                            }
                                                                                                            ];

]