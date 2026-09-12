import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import messages from '../../../i18n/local';
​// Initialisation du client Supabase avec les variables d'environnement Vite
const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
​export default function AgendaPage() {
const { user, signOut } = useAuth();
const navigate = useNavigate();
const currentLang = 'en'; // ou ta logique de langue actuelle
const t = messages[currentLang]?.translation || messages['en'].translation;
​const [registeringEventId, setRegisteringEventId] = useState<number | null>(null);
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [organization, setOrganization] = useState('');
const [loading, setLoading] = useState(false);
                                                                                                                                                                                                                                                                                                      
                                                                                                          
  const events = [
 {
    id: 1,
    title: "INDIA-AFRICA INVESTMENT & BUSINESS CORRIDOR ROUNDTABLE",
    subtitle: "Africa Economic Forum - Session Annonce",
    date: "10-11 Novembre 2026",
    location: "Fleuve Congo Hotel, Kinshasa, DRC",
    objective: "Finaliser l'ordre du jour et recruter les sponsors",
    theme: "Africa and Global Realignment : Investment, Alliances & Strategic Opportunities ",
    image: "/images/Africa_forum_nov2026.jpg",
    description: "Africa and Global Realigment: Investment, Alliances & Strategic Opportunities"

  AFRICA ECONOMIC FORUM 2026

MASTER WEBSITE / LANDING PAGE COPY

Developer-Ready Version

Event: Africa Economic Forum 2026
Dates: 10–11 November 2026
Venue: Fleuve Congo Hotel, Kinshasa, Democratic Republic of Congo
Theme: Africa and Global Realignment: Investments, Alliances & Strategic Opportunities

---

WEBSITE OBJECTIVE

The website must NOT look like a conventional conference website.

AEF must be presented as a global economic and investment platform connecting:

Governments + Capital + Projects + Strategic Partners

The website should sell access to an economic ecosystem, not simply tickets to a conference.

The central proposition:

«AEF is where governments bring opportunities, investors bring capital, international partners bring markets and expertise, and projects meet the people who can finance and execute them.»

Core principle:

«AEF is built around deal engagement, not speaking engagement.»

Visual and editorial tone:

Institutional | Premium | Geopolitical | Investment-focused | Minimalist | Editorial | Transactional

Avoid:

- Generic conference language
- “500+ attendees” or unsupported statistics
- “Networking event” positioning
- Excessive focus on panels
- Generic stock photography
- Crowds and microphone imagery
- “Africa is rising”
- “Next frontier”
- “Unlock Africa’s potential”
- Festival/startup-conference aesthetics

The page should communicate:

POWER + CAPITAL + ACCESS + OPPORTUNITY + EXECUTION

---

GLOBAL NAVIGATION

ABOUT AEF
WHY KINSHASA
PROGRAMME
SPEAKERS
DEAL ECOSYSTEM
PARTNERS

Header CTAs:

[ GET YOUR DELEGATE PASS ]

[ BECOME AN AEF PARTNER ]

---

01 — HERO

AFRICA’S NEXT INVESTMENT CORRIDORS ARE BEING BUILT IN KINSHASA.

AFRICA AND GLOBAL REALIGNMENT:

INVESTMENTS, ALLIANCES & STRATEGIC OPPORTUNITIES

10–11 November 2026 | Fleuve Congo Hotel | Kinshasa, Democratic Republic of Congo

«Two days where governments, global capital, strategic industries and project owners come together to build the next generation of investment corridors into and across Africa.»

Primary CTA:

[ GET YOUR DELEGATE PASS ]

Secondary CTA:

[ BECOME AN AEF PARTNER ]

Small supporting line:

For Governments | Investors | Project Owners | Strategic Partners

---

02 — THE PREMISE

THE WORLD IS REALIGNING. AFRICA IS NEGOTIATING ITS PLACE.

«The architecture of global economic cooperation is changing.

Capital is becoming geopolitical. Energy is becoming strategic. Critical minerals are becoming instruments of industrial policy. Trade corridors are being redesigned. Technology is becoming infrastructure.

Governments are competing not simply for trade, but for investment, productive capacity, industrial partnerships and strategic alliances.

AEF exists to help African countries engage this new environment from a position of greater strategic agency.»

Visual keywords:

CAPITAL
ENERGY
CRITICAL MINERALS
TECHNOLOGY
TRADE
INDUSTRIAL CAPACITY

↓

INVESTMENT
PARTNERSHIPS
MARKET ACCESS
VALUE CREATION
INDUSTRIALISATION

---

03 — WHAT IS AEF?

A PLATFORM FOR CAPITAL, PARTNERSHIPS AND STRATEGIC DEAL-MAKING.

«AEF brings together governments with mandates, investors with capital, project owners with opportunities and strategic partners with technology, expertise and market access.

The objective is not simply to discuss what Africa could become.

It is to identify what can be built, financed, partnered and executed.»

Four ecosystem pillars:

GOVERNMENTS

Bring priorities and mandates.

INVESTORS

Bring capital and investment mandates.

PROJECT OWNERS

Bring bankable opportunities.

STRATEGIC PARTNERS

Bring technology, expertise and market access.

---

04 — THE AEF DEAL ARCHITECTURE

THIS IS NOT A CONFERENCE.

IT IS A DEAL-MAKING ARCHITECTURE.

01 — DISCOVER

Diplomatic Breakfast

Identify the relationships and investment priorities that need to happen during the Forum.

↓

02 — CONNECT

Coffee with Presidents

Bring selected investors and strategic leaders into direct dialogue with Heads of State.

↓

03 — CONVENE

Strategic Sessions

Define the geopolitical, financial and sector context.

↓

04 — MATCH

VIP Luncheon

Move from strategic conversation to specific opportunities.

↓

05 — NEGOTIATE

Leaders Lounge / Deal Room

Put decision-makers, capital and projects into structured conversations.

↓

06 — COMMIT

MoUs / Investment Commitments / Strategic Partnerships

Create the conditions for concrete economic commitments.

↓

07 — EXECUTE

Post-Forum Deal Follow-Up

Move opportunities through:

Opportunity → Match → Negotiation → Due Diligence → Agreement → Financial Close → Implementation

Closing line:

«From access to alignment. From alignment to transactions.»

---

05 — FOUR WAYS TO ENTER AEF

DON’T JUST ATTEND AEF.

COME WITH A MANDATE.

Create four premium conversion cards.

---

01 — AFRICAN GOVERNMENTS

BRING YOUR COUNTRY’S PRIORITIES TO THE TABLE.

«Present your country’s strategic investment priorities directly to global investors, development institutions, sovereign funds and strategic companies.»

Participation opportunities:

Country-Specific Investment Roundtables
Leaders Lounge
VIP Luncheon
Deal Rooms
Strategic Sessions
Project Showcase

CTA:

[ SUBMIT YOUR COUNTRY FOR A ROUNDTABLE ]

Secondary:

Request Country Participation

---

02 — FOREIGN COUNTRIES & REGIONAL BLOCS

BRING YOUR MARKET. BUILD YOUR AFRICA STRATEGY.

«Governments, regional blocs and international economic partners are invited to use AEF to build new economic relationships with African decision-makers.»

Engagement opportunities:

VIP Luncheon
Leaders Lounge
Diplomatic Breakfast
Country / Bloc Delegation
Strategic Sessions
Investment & Trade Discussions
Deal Rooms

Positioning:

«A platform for countries and blocs seeking a deeper economic relationship with Africa.»

CTA:

[ EXPLORE COUNTRY & BLOC PARTICIPATION ]

---

03 — INVESTORS

BRING CAPITAL. FIND THE RIGHT PROJECTS.

«Access African governments, project sponsors, CEOs and institutional partners through curated investment conversations designed around actual capital requirements.»

Target participants:

Sovereign Wealth Funds
Pension Funds
Private Equity
Venture Capital
Family Offices
DFIs
Commercial Banks
Infrastructure Funds
Energy Investors
Strategic Corporate Investors
Impact Investors

Investor journey:

Pre-Matched Opportunities → Private Meetings → Due Diligence Conversations → Deal Room → Follow-Up

CTA:

[ JOIN THE AEF INVESTOR NETWORK ]

---

04 — PROJECT OWNERS

BRING THE PROJECT. MEET THE CAPITAL.

«AEF provides selected African projects with direct access to investors, governments, DFIs, strategic companies and technology partners.»

Priority sectors:

Infrastructure
Energy
Critical Minerals
Agriculture & Agri-Tech
Health
Technology & Digital
Manufacturing
Logistics
Tourism
Water
Industrialisation

Visual mechanism:

PROJECT → CAPITAL REQUIREMENT → STRUCTURE → INVESTOR MATCH → DEAL ROOM

CTA:

[ SUBMIT A PROJECT ]

Qualification statement:

«Project submissions are subject to AEF review and selection.»

---

06 — SPEAKERS

THE PEOPLE SHAPING THE CONVERSATION.

«AEF convenes decision-makers and leading voices shaping Africa’s relationship with global capital, technology, energy, trade and strategic investment.»

Speaker categories:

HEADS OF STATE
GOVERNMENT LEADERS
INVESTORS
CEOs
ECONOMIC STRATEGISTS
FINANCIAL LEADERS
INDUSTRY EXPERTS

Speaker cards must display:

PHOTO

NAME

TITLE

INSTITUTION

STRATEGIC AREA

Example format:

[NAME]
[Title]
[Institution]

ENERGY | CAPITAL | INDUSTRIALISATION

CTA:

[ VIEW ALL SPEAKERS ]

Important developer rule:

Only officially confirmed participants should be displayed as Confirmed Speakers.

Invited but unconfirmed individuals should be placed separately under:

INVITED LEADERS

Do not represent unconfirmed individuals as confirmed speakers.

---

07 — PROGRAMME INTRODUCTION

TWO DAYS. ONE ECONOMIC MISSION.

DAY ONE

THE GEOPOLITICS OF CAPITAL

DAY TWO

SECTOR DEEP DIVES & TRADE

«Every session at AEF is designed around a strategic question, a decision-maker conversation or a transaction pathway.»

---

08 — DAY ONE

THE GEOPOLITICS OF CAPITAL

---

08:00 – 09:00

DIPLOMATIC BREAKFAST

MINISTERS × GULF INVESTORS × CEOs

Format: Curated 1:1 conversations

Purpose: Identify the relationships and investment priorities that need to happen during the Forum.

DEAL MATCHMAKING

AI-powered matchmaking connecting participants according to:

Sector × Geography × Capital × Project × Partnership

CTA:

[ BUILD YOUR AEF MATCH PROFILE ]

---

09:00 – 10:30

AFRICA IN THE GEOPOLITICS OF INVESTMENT

HOW AFRICA CAN LEVERAGE US–CHINA–GULF RIVALRIES FOR CAPITAL FLOWS

Strategic questions:

- Global investor sentiment
- Gulf capital
- Equity versus debt
- Technology investment
- Africa’s strategic positioning

DEAL TRACK

AFRICA–GULF INVESTMENT PIPELINE

---

10:30 – 12:00

CURRENCY WARS & FINANCIAL SOVEREIGNTY

DOLLAR. YUAN. GOLD. DIGITAL ASSETS.

Questions on the table:

Currency risk
Financial sovereignty
Gold and tangible assets
Blockchain
Development finance

DEAL TRACK

STRATEGIC FINANCIAL PARTNERSHIPS

---

12:00 – 14:00

THE VIP LUNCHEON

WHERE COUNTRIES, CAPITAL AND STRATEGIC PARTNERS SIT AT THE SAME TABLE.

10 curated investment tables

Potential themes:

Tech Exit Strategies
Infrastructure PPPs
Energy Finance
Critical Minerals
Gulf–Africa Investment
Industrial Partnerships

INVESTMENT SHOWCASE

Selected projects presented to qualified investors.

---

14:00 – 15:30

TECHNOLOGY & DIGITAL SOVEREIGNTY

CAN AFRICA BUILD DIGITAL INFRASTRUCTURE ON ITS OWN TERMS?

Focus:

AI
Fintech
Digital Infrastructure
Patient Capital
Technology Partnerships

DEAL TRACK

TECHNOLOGY PARTNERSHIPS & INVESTMENT

---

15:30 – 17:00

ENERGY & NEW ALLIANCES

OIL. GAS. GREEN. NUCLEAR.

WHO WILL FINANCE AFRICA’S TRANSITION?

Investment questions:

«Who will finance the energy infrastructure required for Africa’s next economic cycle?»

«How should Africa balance energy security, industrialisation and transition?»

«Where is long-term capital required?»

DEAL TRACK

SELECTED AFRICAN ENERGY PROJECTS

---

17:00 – 18:30

THE GRAND AFRICAN DEAL

WHERE STRATEGIC INTENT BECOMES VISIBLE.

Potential announcement categories:

Investment Commitments
MoUs
Joint Ventures
Infrastructure Partnerships
Financing Agreements
Strategic Alliances

AEF DEAL DASHBOARD

Deals Announced
Capital Mobilised
Projects Advanced
Partnerships Formed

Important:

Only verified commitments and official announcements should be displayed as confirmed figures.

---

18:30+

CLOSED-DOOR SIGNINGS

THE DEAL ROOM REMAINS OPEN.

«Selected negotiations continue beyond the public programme, with dedicated spaces for final discussions, documentation and signing processes.»

---

09 — DAY TWO

FROM STRATEGIC CAPITAL TO SECTOR OPPORTUNITIES

«Day Two moves from the global architecture of investment to the sectors where capital, technology, governments and project developers can build executable opportunities.»

---

08:00 – 09:00

SECTOR INVESTMENT BREAKFASTS

AGRICULTURE
CRITICAL MINERALS
HEALTH
INFRASTRUCTURE
TOURISM

Framework:

Sector → Priority → Projects → Capital → Partners

---

09:00 – 10:30

THE INTRA-AFRICAN TRADE REVOLUTION

FROM BORDERS TO DIGITAL CORRIDORS.

Focus:

Pan-African Payments
Border Modernisation
Digital Trade
AfCFTA
Market Access

ACTION TRACK

AFRICA TRADE GATEWAY

---

10 — SECTOR DEAL TRACKS

AGRICULTURE & AGRI-TECH

FEEDING THE NEXT GENERATION OF AFRICAN CONSUMERS

Focus:

Food Security
Agri-Processing
Value Chains
Gulf–Africa Investment

DEAL TRACK

AGRICULTURAL INVESTMENT

---

CRITICAL MINERALS

FROM EXTRACTION TO INDUSTRIAL VALUE

Focus:

Lithium
Rare Earths
Processing
Batteries
Local Value Addition
Joint Ventures

DEAL TRACK

MINERAL PROCESSING & INDUSTRIAL PARTNERSHIPS

---

HEALTH SOVEREIGNTY

FROM VACCINES TO PHARMA 4.0

Focus:

Manufacturing
mRNA Technology
Medical Logistics
Pharmaceutical Capacity

DEAL TRACK

HEALTH MANUFACTURING

---

INFRASTRUCTURE

BUILDING THE CORRIDORS OF THE NEXT ECONOMIC CYCLE

Focus:

Ports
Rail
Power
Logistics
Digital Infrastructure

DEAL TRACK

PPP & PROJECT FINANCE

---

TOURISM

BUILDING AFRICA’S NEXT DESTINATION ECONOMIES

Focus:

Hospitality
Destination Infrastructure
Investment
Market Access

DEAL TRACK

TOURISM INVESTMENT

---

11 — DEAL-MAKING LUNCHES

12:00 – 14:00

COUNTRY. CAPITAL. PROJECT. TABLE.

COUNTRY-SPECIFIC INVESTMENT ROUNDTABLES

Government Priority → Project → Capital Requirement → Investor → Next Step

STARTUP INVESTMENT SHOWCASE

Selected companies presented to qualified investors.

Avoid the wording “Pitch Battle” or “Pitch Competition”.

---

12 — COMMERCE WARS

14:00 – 15:30

COMMERCE WARS

AFRICA BETWEEN COMPETING TRADE BLOCS.

Focus:

US Trade Policy
China
BRI
AfCFTA
Market Access
Trade Diversification
Strategic Autonomy

---

13 — THE FUTURE ECONOMY

15:30 – 17:00

FIVE INVESTMENT FRONTIERS

FUTURE FOOD

SPACE & STRATEGIC RESOURCES

AI & HEALTH

NEXT-GENERATION INFRASTRUCTURE

FUTURE TOURISM

Each innovation or demonstration must answer:

«What does this mean for African capital, industry and investment?»

The content should remain investment-focused, not entertainment-focused.

---

14 — CLOSING DEAL RALLY

17:00 – 18:30

WHAT MOVED FROM CONVERSATION TO COMMITMENT?

INVESTMENTS

MoUs

JOINT VENTURES

FINANCING

TRADE PARTNERSHIPS

STRATEGIC ALLIANCES

AFRICA INVESTMENT SCOREBOARD

Display only verified AEF outcomes.

AEF SCALE-UP / UNICORN AWARD

Position as an investment and growth recognition, not a conventional awards ceremony.

---

15 — THE DEAL ROOM

WHERE CAPITAL MEETS THE PROJECT.

«The Deal Room is the operational core of AEF — where qualified projects meet investors and strategic partners through structured conversations designed to advance opportunities toward investment decisions.»

Visual process:

PROJECT OWNER

↓

AEF SCREENING

↓

INVESTOR MATCHING

↓

CURATED MEETING

↓

TERM / PARTNERSHIP DISCUSSION

↓

DUE DILIGENCE

↓

AGREEMENT

↓

FOLLOW-UP

Three pathways:

INVESTORS

FIND PROJECTS

PROJECTS

FIND CAPITAL

GOVERNMENTS

FIND STRATEGIC PARTNERS

CTA:

[ ENTER THE DEAL ROOM ]

---

16 — COUNTRY-SPECIFIC INVESTMENT ROUNDTABLES

YOUR COUNTRY. YOUR PRIORITIES. YOUR INVESTOR TABLE.

«AEF gives African governments a dedicated environment to put their strategic priorities directly in front of the institutions and investors capable of advancing them.»

Visual framework:

COUNTRY → PRIORITY SECTOR → PROJECTS → CAPITAL REQUIREMENT → INVESTORS → NEXT STEP

CTA:

[ REQUEST A COUNTRY ROUNDTABLE ]

Small qualification text:

By invitation / application / subject to AEF selection.

---

17 — VIP LUNCHEON

WHERE COUNTRIES, BLOCS, INVESTORS AND STRATEGIC PARTNERS SIT AT THE SAME TABLE.

«Selected foreign countries, regional blocs, governments, investors and corporate leaders participate in curated closed-door tables around strategic investment themes.»

Focus:

Economic Diplomacy + Capital + Market Access + Strategic Partnerships

CTA:

[ REQUEST VIP PARTICIPATION ]

---

18 — COFFEE WITH PRESIDENTS

ACCESS. DIALOGUE. DECISION-MAKING.

«A limited-format environment designed for direct conversations between Heads of State and a carefully selected group of investors and strategic leaders.»

CTA:

[ REQUEST CONSIDERATION ]

Important:

Participation is curated and subject to protocol, availability and AEF selection.

---

19 — WHY KINSHASA

WHY KINSHASA. WHY NOW.

Kinshasa should be presented as a strategic economic location, not a tourism destination.

Key strategic dimensions:

Central African Markets

Critical Minerals

Energy

Agriculture

Infrastructure

Consumer Markets

Regional Connectivity

Industrialisation

African Economic Diplomacy

Closing statement:

«The world’s capital is looking for Africa’s next opportunities. Kinshasa is bringing the decision-makers to the table.»

---

20 — WHO WILL BE AT THE TABLE?

Create a premium ecosystem visual.

HEADS OF STATE

PRIME MINISTERS

MINISTERS

SOVEREIGN WEALTH FUNDS

DFIs

INSTITUTIONAL INVESTORS

FAMILY OFFICES

GLOBAL CEOs

BANKS

PROJECT DEVELOPERS

TECHNOLOGY COMPANIES

STRATEGIC PARTNERS

DIPLOMATIC MISSIONS

Do not display unsupported participant numbers.

---

21 — ACCESS VS POSITION

A PASS GIVES YOU ACCESS.

A PARTNERSHIP GIVES YOUR INSTITUTION A POSITION.

DELEGATE / INVESTOR PASS

PARTICIPATE IN THE ECOSYSTEM.

Designed for executives, investors, government representatives and professionals who want to participate in AEF.

Access may include:

Strategic Sessions
Investment Discussions
Deal-Making Environments
Matchmaking
Selected Hospitality according to Pass Category

«Be in the room. Access the conversations. Build relationships.»

CTA:

[ GET YOUR DELEGATE PASS ]

---

AEF PARTNERSHIP

POSITION YOUR INSTITUTION WITHIN THE ECOSYSTEM.

Designed for companies, financial institutions, governments, investment platforms and strategic organisations seeking an institutional role within AEF.

Potential partnership benefits include:

Strategic Institutional Positioning
Sector / Platform Partnership
Curated Executive Access
Strategic Roundtables
Deal Room Engagement
Project / Investment Opportunities
Thought Leadership
Institutional Visibility
Content & Communications Integration
VIP Hospitality
Curated Introductions
Pre- & Post-Forum Engagement

«Don’t just be in the room. Help shape what happens in it.»

CTA:

[ BECOME AN AEF PARTNER ]

THE PRINCIPLE

PASS → ACCESS

PARTNERSHIP → POSITION

STRATEGIC PARTNERSHIP → POSITION + ACTIVATION + DEAL ENGAGEMENT

---

22 — AEF PARTNERSHIPS

BUILD YOUR POSITION INSIDE AEF.

Partnership levels:

STRATEGIC PARTNER

€150,000

Major institutional positioning and ecosystem activation.

PLATFORM PARTNER

€80,000

Strategic sector or platform activation.

INVESTMENT PARTNER

€40,000

Targeted investor, project and capital engagement.

SUPPORTING PARTNER

€20,000

Institutional visibility and participation.

CONTRIBUTING PARTNER

€10,000

Entry-level institutional partnership.

Important:

Do not present sponsorship as simply “buying logos”.

Partnerships can also be structured around strategic mandates.

Potential partnership themes:

ENERGY

CRITICAL MINERALS

INFRASTRUCTURE

DIGITAL ECONOMY

HEALTH

TRADE & LOGISTICS

INVESTMENT

AFRICA–GULF

CTA:

[ DISCUSS A STRATEGIC PARTNERSHIP ]

---

23 — THE OUTCOME

THE MEASURE OF AEF IS WHAT HAPPENS AFTER THE HANDSHAKE.

Display:

INVESTMENTS

MoUs

JOINT VENTURES

FINANCING

TRADE PARTNERSHIPS

STRATEGIC ALLIANCES

PROJECT PIPELINES

MARKET ENTRY

INDUSTRIAL PARTNERSHIPS

CAPITAL COMMITMENTS

«AEF is designed to create a visible pipeline from conversation to commitment — and from commitment to execution.»

Process:

OPPORTUNITY

↓

MATCH

↓

NEGOTIATION

↓

DUE DILIGENCE

↓

AGREEMENT

↓

FINANCIAL CLOSE

↓

IMPLEMENTATION

Do not promise that every conversation will produce a transaction.

Use language such as:

Designed to facilitate

Structured to advance

Create the conditions for

Support the pathway toward

---

24 — FINAL CTA

THE NEXT DEAL WILL NOT WAIT FOR THE OLD WORLD TO RETURN.

«The world is reorganising its capital, supply chains, partnerships and strategic priorities.

Africa has an opportunity to shape what comes next.»

CHOOSE YOUR MANDATE

[ I REPRESENT AN AFRICAN COUNTRY ]

Apply for a Country-Specific Investment Roundtable

[ I REPRESENT A FOREIGN COUNTRY / BLOC ]

Request VIP / Institutional Participation

[ I AM AN INVESTOR ]

Join the AEF Investor Network

[ I HAVE A PROJECT ]

Submit an Investment Opportunity

Secondary institutional CTA:

[ BECOME AN AEF PARTNER ]

---

25 — CONVERSION ARCHITECTURE

There must NOT be one generic registration form.

Create four separate conversion journeys.

---

COUNTRY APPLICATION

CTA:

Apply for a Country-Specific Investment Roundtable

Fields:

- Country
- Institution
- Senior Representative
- Priority Sectors
- Investment Priorities
- Projects Requiring Capital
- Type of Partners Sought
- Estimated Capital Requirements
- Preferred Format of Participation
- Contact Details

---

FOREIGN COUNTRY / REGIONAL BLOC

CTA:

Request VIP / Institutional Participation

Fields:

- Country / Bloc
- Institution
- Senior Representative
- Strategic Objectives
- Priority Sectors
- Investment / Trade Interests
- African Markets of Interest
- Preferred Engagement Format
- Delegation Size
- Contact Details

---

INVESTOR

CTA:

Join the AEF Investor Network

Fields:

- Institution
- Investment Mandate
- Geography
- Sector
- Ticket Size
- Investment Structure
- Capital Available
- Preferred Stage
- Partnership Interests
- Representative
- Contact Details

---

PROJECT

CTA:

Submit an Investment Opportunity

Fields:

- Project Name
- Country
- Sector
- Project Sponsor
- Stage of Development
- Capital Required
- Debt / Equity / PPP / JV Requirement
- Existing Partners
- Investment Documents Available
- Expected Timeline
- Contact Person
- Contact Details

Qualification statement:

«Project submissions are subject to AEF review and selection.»

---

26 — POST-SUBMISSION MESSAGE

Use this confirmation message across the relevant forms:

«Thank you for your interest in Africa Economic Forum 2026.

AEF participation is curated. Our team will review your mandate, priorities and requirements and contact you regarding the appropriate engagement format.»

---

27 — DESIGN DIRECTION

The website must visually communicate:

POWER + CAPITAL + ACCESS + OPPORTUNITY + EXECUTION

Design language:

Institutional
Premium
Minimalist
Geopolitical
Editorial
Investment-focused

Preferred imagery:

- Kinshasa
- Congo River
- African cityscapes
- Infrastructure
- Energy
- Ports and logistics
- Industrial projects
- Critical minerals
- Agriculture
- Financial markets
- Investment environments
- Maps and economic corridors
- Institutional photography
- High-level decision-makers

Avoid:

- Generic African stock photography
- Excessive crowds
- Microphones
- Handshake stock photos
- Excessive icons
- Overly colourful graphics
- Festival aesthetics
- Startup-conference aesthetics
- Generic “networking” visuals

Use sophisticated:

Maps | Corridors | Data Visualisation | Capital Flows | Investment Architecture | Geographic Connections

---

28 — FINAL BRAND MESSAGE

The website should leave the visitor with one clear thought:

«AEF is not somewhere I go to listen to Africa talk about opportunity.

It is where I go because the governments, capital, projects and strategic partners I need are going to be at the same table.»

The website therefore sells:

ACCESS TO THE ECOSYSTEM

not:

A TICKET TO A CONFERENCE.

Final positioning statement:

AFRICA ECONOMIC FORUM

THE GLOBAL PLATFORM FOR AFRICA’S CAPITAL, PARTNERSHIPS AND ECONOMIC TRANSFORMATION.

Kinshasa | 10–11 November 2026
                                                                                                                                                        
​const handleRegistration = async (eventId: number, fullName: string, email: string, organization: string) => {
  try {
  const { data, error } = await supabase
  .from('event_registrations')
  .insert([
  {
  event_id: eventId,
  full_name: fullName,
  email: email,
  organization: organization
  }
  ]);
  ​if (error) throw error;
  ​alert('Inscription réussie ! Vos données ont été enregistrées.');
  } catch (error: any) {
  console.error('Erreur lors de l’inscription :', error.message);
  alert('Une erreur est survenue lors de votre inscription.');
  }
  };
}
  

    
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    title: '',
    date: '',
    submitUrl: '',
  });

  // Modal state (added for completeness)
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showChairmanModal, setShowChairmanModal] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setIsProfileDropdownOpen(false);
  };

  const handleViewProfile = () => {
    navigate("/profile");
    setIsProfileDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Dummy handlers (replace with real implementations)
  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement sign‑in logic here
    setShowSignInModal(false);
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement create‑account logic here
    setShowSignInModal(false);
  };

  const switchToCreateAccount = () => setShowCreateAccount(true);
  const switchToSignIn = () => setShowCreateAccount(false);

  // Filter events based on selected category
  // NOTE: The current data set does not contain a `category` field.
  // This guard ensures the code does not break if `category` is undefined.
  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter((event) => (event as any).category === selectedCategory);

  const openEventDetails = (event: any) => setSelectedEventId(event.id);
  const closeEventDetails = () => setSelectedEventId(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRegister = (event: any, submitUrl: string) => {
    setRegistrationData({
      title: event.title,
      date: event.date,
      submitUrl: submitUrl,
    });
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
    setRegistrationData({
      title: "",
      date: "",
      submitUrl: "",
    });
  };

  const downloadAgenda = () => {
    const doc = new jsPDF();
    
    // Adicione a logo da AEF
    // replace path with real logo path in public folder, e.g. /logo.png
    // doc.addImage requires base64 or Image element for remote images in some setups
    // keeping a simple header for now
    doc.text("THE AFRICA ECONOMIC FORUM 2026", 10, 20);
    doc.text("ANNUAL THEME: Africa and Global Realignments: Investments, Alliances, and Strategic Opportunities", 10, 30);
    
    // Add simple footer
    const pageHeight = doc.internal.pageSize.height;
    doc.text("www.africaef.com | info@africaef.com", 10, pageHeight - 10);

    doc.save("agenda_aef_2026.pdf");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://static.readdy.ai/image/849a2f489cee8d6814d30c5afad3a84a/55c329d4d58fb687f70c222c549f7ec1.png"
                  alt="AEF Logo"
                  className="w-10 h-10 object-contain"
                />
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/initiatives"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Initiatives
              </Link>
              <Link
                to="/stakeholders"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Stakeholders
              </Link>
              <Link
                to="/agenda"
                className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600"
              >
                Agenda
              </Link>
              <Link
                to="/publications"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Publications
              </Link>
              <Link
                to="/meetings"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Meetings
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title={user.user_metadata?.full_name || user.email}
                  >
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {getInitials(
                          user.user_metadata?.full_name ||
                            user.email?.charAt(0) ||
                            "U"
                        )}
                      </div>
                    )}
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        <div className="font-medium">
                          {user.user_metadata?.full_name || "User"}
                        </div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                      <button
                        onClick={handleViewProfile}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </Link>
              )}
            </div>

            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i
                className={`ri-${isMobileMenuOpen ? "close" : "menu"}-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/initiatives"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Initiatives
              </Link>
              <Link
                to="/stakeholders"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stakeholders
              </Link>
              <Link
                to="/agenda"
                className="block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link
                to="/publications"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                to="/meetings"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 pb-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 px-3 py-2">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {getInitials(
                            user.user_metadata?.full_name ||
                              user.email?.charAt(0) ||
                              "U"
                          )}
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">
                        {user.user_metadata?.full_name || "User"}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleViewProfile();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium mb-2"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/signin"
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20conference%20agenda%20with%20African%20leaders%20and%20international%20delegates%20presenting%20on%20stage%2C%20large%20audience%20in%20modern%20conference%20hall%20with%20presentation%20screens%20and%20formal%20diplomatic%20setting&width=1920&height=800&seq=agenda-hero-2026&orientation=landscape')`,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">THE AFRICA ECONOMIC FORUM 2026</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ANNUAL THEME: Africa and Global Realignments: Investments, Alliances, and Strategic Opportunities <br/>
            Our Mantra: We Don't Just Talk. We Deal.
          </p>
          <a 
            href="/AEF_2026_Kinshasa_Brochure_FINAL-1.pdf"
            download="AEF-2026-Full-Agenda.pdf"
            className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
          >
            Download Full Agenda
          </a>
        </div>
      </section>

      {/* Chairman Message Button & Modal */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">A Message from the Chairman</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the vision and strategic direction shaping The Africa Economic Forum 2026
          </p>
          <button
            onClick={() => setShowChairmanModal(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer transition-colors"
          >
            Read the Full Message
          </button>
        </div>
      </section>

      {/* Chairman Modal */}
      {showChairmanModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowChairmanModal(false)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-teal-700 text-white p-8 flex justify-between items-start border-b-4 border-blue-800">
              <div>
                <h3 className="text-3xl font-bold mb-2">A Message from the Chairman</h3>
                <p className="text-blue-100 text-lg">The Vision Behind The Africa Economic Forum 2026</p>
              </div>
              <button
                onClick={() => setShowChairmanModal(false)}
                className="text-white hover:text-gray-200 ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8 text-gray-700 leading-relaxed">
              <div className="text-lg space-y-6">
                <p className="text-gray-800 font-medium text-justify">
                  The world is recalibrating. The old paradigms are shifting, and in this new geopolitical and economic landscape, Africa emerges not as a spectator but as the definitive arena of opportunity. The Africa Economic Forum is the platform where this new reality is forged.
                </p>

                <p className="text-justify">
                  We are <strong>The African Table</strong>. It is Africa that extends the invitation, sets the agenda, and defines the terms of a truly strategic, win-win cooperation. Our model is deliberate: a perpetual, year-long journey across the continent, diving deep into each critical sector. We move from high-level consensus to granular deal-making, ensuring that every conversation is purpose-driven and outcome-oriented.
                </p>

                <p className="text-justify">
                  A cornerstone of our model is <strong>strategic co-creation</strong>. Each forum is hosted by a sovereign nation that is a leading partner and sponsor, demonstrating its commitment to leading the continental agenda in that specific sector. This ensures the highest level of government engagement and deal-making potential.
                </p>

                <p className="text-justify">
                  In 2026, we confront the theme of <strong>'Global Realignments'</strong> head-on. This is more than a topic; it is our operational reality. We will connect global capital with Africa's immense opportunities, build the alliances that matter, and unlock strategic value that has been waiting for the right moment—and the right platform.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
                  <p className="text-justify text-gray-800">
                    <strong className="text-blue-900">This is not just another forum. This is where the future of Africa is designed, deal by deal.</strong> I invite you to join us at The Table.
                  </p>
                </div>

                <div className="pt-6 border-t-2 border-gray-200">
                  <p className="font-bold text-lg text-blue-900">— Chairman</p>
                  <p className="text-gray-600">Africa Economic Forum</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowChairmanModal(false)}
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 font-medium cursor-pointer transition-colors"
              >
                Close
              </button>
              <a
                href="/AEF_2026_SPONSORSHIP_DOSSIER_FINAL.pdf"
                download="AEF-2026-Full-Agenda.pdf"
                className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 font-medium cursor-pointer transition-colors"
              >
                Download Full Agenda
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2026 Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              THE 2026 JOURNEY: A YEAR OF STRATEGIC ACTION
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the strategic journey through Africa's economic transformation in 2026. Join us as we navigate critical sectors, forge transformational partnerships, and unlock unprecedented opportunities across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date.split(",")[0]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed max-h-16 overflow-hidden">
                    {event.description}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openEventDetails(event)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      {t.about || "Learn More"}

                    </button>
                    <button
                      onClick={() =>
                        handleRegister(event, event.submitUrl)
                      }
                      className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      {t.register || "Register"}

                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg my-12 text-center">
  <h3 className="text-2xl font-bold mb-4">{t.newsletterTitle || "Subscribe to our Newsletter"}</h3>
    <p className="text-blue-100 mb-6">{t.newsletterDesc || "Stay updated with our latest news and events."}</p>
      
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input 
                  type="email" 
                        value={emailNewsletter} 
                              onChange={(e) => setEmailNewsletter(e.target.value)}
                                    placeholder={t.newsletterPlaceholder || "Enter your email"} 
                                          required
                                                className="px-4 py-3 rounded-md text-gray-900 w-full focus:outline-none"
                                                    />
                                                        <button 
                                                              type="submit" 
                                                                    className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition"
                                                                        >
                                                                              {t.newsletterBtn || "Subscribe"}
                                                                                  </button>
                                                                                    </form>

                                                                                      {newsletterStatus === 'success' && (
                                                                                          <p className="text-green-300 mt-4">✓ {t.newsletterSuccess || "Thank you for subscribing!"}</p>
                                                                                            )}
                                                                                              {newsletterStatus === 'error' && (
                                                                                                  <p className="text-red-300 mt-4">✕ {t.newsletterError || "An error occurred. Please try again."}</p>
                                                                                                    )}
                                                                                                    </div>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join The African Table</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of the conversations that are shaping Africa's economic
            future. Join us for a year of strategic action, deal‑making, and
            transformational partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
            >
              {t.becomePartner || "Become a Strategic Partner"}

            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 font-medium whitespace-nowrap cursor-pointer">
              {t.downloadProgram || "Download 2026 Program"}

            </button>
          </div>
        </div>
      </section>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {showCreateAccount ? "Create Account" : "Sign In"}
                </h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {!showCreateAccount ? (
                <>
                  <form onSubmit={handleSignInSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="remember_me"
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">
                          Remember me
                        </span>
                      </label>
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Sign In
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?
                      <button
                        onClick={switchToCreateAccount}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Create Account
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <form
                    onSubmit={handleCreateAccountSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Create Account
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?
                      <button
                        onClick={switchToSignIn}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </>
              )}

              {!showCreateAccount && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-google-fill text-red-500 text-lg"></i>
                      <span className="ml-2">Google</span>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-linkedin-fill text-blue-600 text-lg"></i>
                      <span className="ml-2">LinkedIn</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">About us</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</Link></li>
                <li><Link to="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-white cursor-pointer">History</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Leadership and governance</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li><Link to="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Centres</Link></li>
                <li><Link to="/meetings" className="text-gray-300 hover:text-white cursor-pointer">Meetings</Link></li>
                <li><Link to="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">Stakeholders</Link></li>
                <li><Link to="/agenda" className="text-gray-300 hover:text-white cursor-pointer">Forum Stories</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Press releases</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Photo gallery</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Podcasts</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Videos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                {user ? (
                  <>
                    <li>
                      <button onClick={handleViewProfile} className="text-gray-300 hover:text-white cursor-pointer">
                        View Profile
                      </button>
                    </li>
                    <li>
                      <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/signin" className="text-gray-300 hover:text-white cursor-pointer">Sign In</Link>
                  </li>
                )}
                <li><a href="mailto:info@africaef.com" className="text-gray-300 hover:text-white">info@africaef.com</a></li>
                <li><a href="https://www.africaef.com" className="text-gray-300 hover:text-white">www.africaef.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/17Jr8NpqZJ/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/the-africa-economic-forum/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/theafricaeconomicforum?igsh=MWowNmw1NjdueXNkbQ==" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</Link>
                <p>© 2026 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Meeting Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeEventDetails}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedEvent.title}
          >
            <div className="flex justify-between items-start p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h3>
                {selectedEvent.subtitle && (
                  <p className="text-sm text-gray-700 mt-1 font-medium">{selectedEvent.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 mt-1">
                  {selectedEvent.date} • {selectedEvent.location}
                </p>
              </div>
              <button
                onClick={closeEventDetails}
                className="text-gray-400 hover:text-gray-600 ml-4"
                aria-label="Close"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedEvent.image && (
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-56 object-cover rounded-md"
                />
              )}

              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {/* theme */}
                {selectedEvent.theme && (
                  <>
                    <h4 className="font-semibold text-gray-900">Theme</h4>
                    <p className="text-gray-600 mb-4">{selectedEvent.theme}</p>
                  </>
                )}

                {/* objective (compatível com 'objective' ou 'objestive' typo) */}
                {((selectedEvent as any).objective || (selectedEvent as any).objestive) && (
                  <>
                    <h4 className="font-semibold text-gray-900">Objective</h4>
                    <p className="text-gray-600 mb-4">{(selectedEvent as any).objective ?? (selectedEvent as any).objestive}</p>
                  </>
                )}

                {/* full description */}
                <h4 className="font-semibold text-gray-900 mt-2">Description</h4>
                <p className="mb-4">{selectedEvent.description}</p>

                <h4 className="font-semibold text-gray-900 mt-4">Target Participants</h4>
                <p className="text-gray-600 mb-4">{selectedEvent.participants}</p>

                <h4 className="font-semibold text-gray-900 mt-4">Expected Outcomes</h4>
                <p className="text-gray-600 mb-4">{selectedEvent.outcomes}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handleRegister(selectedEvent, selectedEvent.submitUrl);
                    closeEventDetails();
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-sm"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
<div className="my-4 p-4 bg-gray-50 rounded-lg border text-center">
  <button 
      onClick={handleSendTestEmail}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
                Envoyer un e-mail de test
                  </button>
                  </div>
                  
      {/* Meeting Registration Form */}
       <MeetingRegistrationForm
         isOpen={isRegistrationOpen}
         onClose={closeRegistration}
         meetingTitle={registrationData.title}
         meetingDate={registrationData.date}
         submitUrl={registrationData.submitUrl}
       />
     </div>
   );
 }
 // ...existing code...