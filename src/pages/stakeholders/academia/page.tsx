
import React, { useState, useEffect } from 'react';

export default function Academia() {
  // Modified component state
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Original component state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    institutionType: '',
    researchAreas: [] as string[],
    currentProjects: '',
    collaborationGoals: '',
    publicationInterests: [] as string[],
    networkingPreferences: [] as string[],
    termsAccepted: false,
  });

  const institutionTypes = [
    'University',
    'Research Institute',
    'Think Tank',
    'Policy Institute',
    'Academic Foundation',
    'International Research Center',
    'Government Research Agency',
    'Private Research Organization',
  ];

  const researchAreaOptions = [
    'Economic Policy & Development',
    'International Relations',
    'Sustainable Development',
    'Climate Change & Environment',
    'Technology & Innovation',
    'Social Policy & Governance',
    'Education & Human Capital',
    'Health & Public Policy',
    'Energy & Resources',
    'Trade & Investment',
    'Security & Conflict Resolution',
    'Urban Development',
  ];

  const publicationOptions = [
    'Policy Briefs & Reports',
    'Academic Journal Articles',
    'White Papers',
    'Research Collaborations',
    'Conference Presentations',
    'Book Publications',
    'Media Commentary',
    'Expert Testimonies',
  ];

  const networkingOptions = [
    'Research Collaboration',
    'Policy Advisory Roles',
    'Expert Panels & Committees',
    'Academic Conferences',
    'Peer Review Activities',
    'Mentorship Programs',
    'International Exchanges',
    'Public Speaking Opportunities',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'termsAccepted') {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      } else {
        const arrayField = name as
          | 'researchAreas'
          | 'publicationInterests'
          | 'networkingPreferences';
        setFormData((prev) => ({
          ...prev,
          [arrayField]: checked
            ? [...prev[arrayField], value]
            : prev[arrayField].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Academia Think Tank application submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    setIsFormOpen(false);
    setFormData({
      institutionName: '',
      contactName: '',
      title: '',
      email: '',
      phone: '',
      website: '',
      institutionType: '',
      researchAreas: [],
      currentProjects: '',
      collaborationGoals: '',
      publicationInterests: [],
      networkingPreferences: [],
      termsAccepted: false,
    });
  };

  // Modified component handlers
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('aef_user');
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (
          parsed &&
          typeof parsed.name === 'string' &&
          typeof parsed.email === 'string'
        ) {
          setUser(parsed);
        }
      }
    } catch (err) {
      console.error('Failed to read user from localStorage:', err);
    }
  }, []);

  const handleSignIn = () => {
    setShowSignInModal(true);
    setShowCreateAccount(false);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('aef_user');
    } catch (err) {
      console.error('Failed to remove user from localStorage:', err);
    }
    setUser(null);
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email && password) {
      const userName = email.split('@')[0];
      const userData = {
        name: userName.charAt(0).toUpperCase() + userName.slice(1),
        email: email,
      };

      try {
        localStorage.setItem('aef_user', JSON.stringify(userData));
        setUser(userData);
        alert('Sign in successful! Welcome back.');
        setShowSignInModal(false);
      } catch (err) {
        console.error('Failed to store user data:', err);
        alert('An error occurred while signing in. Please try again.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleCreateAccountSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirm_password') as string;
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    if (email && password && firstName && lastName) {
      const userData = {
        name: `${firstName} ${lastName}`,
        email: email,
      };

      try {
        localStorage.setItem('aEF_user', JSON.stringify(userData));
        setUser(userData);
        alert('Account created successfully! Welcome to Africa Economic Forum.');
        setShowSignInModal(false);
        setShowCreateAccount(false);
      } catch (err) {
        console.error('Failed to store new account data:', err);
        alert('An error occurred while creating the account. Please try again.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const switchToCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const switchToSignIn = () => {
    setShowCreateAccount(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="https://static.readdy.ai/image/433d1257c1dbc1f8bb2f3f1c418f6689/0727857f21d196505f8ef18cfc1cd897.png"
                  alt="Africa Economic Forum"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="/initiatives"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Initiatives
              </a>
              <a
                href="/stakeholders"
                className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600"
              >
                Stakeholders
              </a>
              <a
                href="/agenda"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Agenda
              </a>
              <a
                href="/publications"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Publications
              </a>
              <a
                href="/meetings"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Meetings
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">Welcome, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i
                className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/initiatives"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Initiatives
              </a>
              <a
                href="/stakeholders"
                className="block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stakeholders
              </a>
              <a
                href="/agenda"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </a>
              <a
                href="/publications"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </a>
              <a
                href="/meetings"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="text-gray-700">Welcome, {user.name}</div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleSignIn();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20university%20research%20facility%2C%20academics%20collaborating%2C%20books%20and%20research%20materials%2C%20intellectual%20environment%2C%20bright%20natural%20lighting%2C%20scholarly%20atmosphere&width=1200&height=400&seq=10&orientation=landscape')`,
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-6">Academia Think Tank</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Connecting leading researchers, academics, and policy experts to
                advance knowledge and inform evidence-based decision making on
                global challenges.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Join Think Tank
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Academic Mission
              </h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                The AEF Academia Think Tank brings together distinguished scholars,
                researchers, and policy experts from leading institutions
                worldwide. We foster interdisciplinary collaboration to generate
                innovative research, inform policy debates, and contribute to
                evidence-based solutions for global challenges.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-book-open-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Research Excellence
                  </h3>
                  <p className="text-gray-600">
                    Conduct cutting-edge research on economic, social, and
                    environmental challenges.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-government-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Policy Impact</h3>
                  <p className="text-gray-600">
                    Bridge the gap between academic research and practical policy
                    implementation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-global-line text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Global Collaboration
                  </h3>
                  <p className="text-gray-600">
                    Foster international academic partnerships and knowledge
                    exchange.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Key Research Areas
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-line-chart-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Economic Policy
                    </h3>
                    <p className="text-gray-600">
                      Macroeconomic analysis, development economics, and policy
                      evaluation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-earth-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Sustainability
                    </h3>
                    <p className="text-gray-600">
                      Climate change, environmental policy, and sustainable
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-rocket-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Innovation Policy
                    </h3>
                    <p className="text-gray-600">
                      Technology transfer, R&amp;D policy, and innovation
                      ecosystems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-group-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Social Policy
                    </h3>
                    <p className="text-gray-600">
                      Education, healthcare, inequality, and social welfare
                      systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-exchange-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      International Trade
                    </h3>
                    <p className="text-gray-600">
                      Global trade patterns, investment flows, and economic
                      integration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Governance
                    </h3>
                    <p className="text-gray-600">
                      Public administration, institutional quality, and policy
                      effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Academics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Distinguished Fellows
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: 'Dr. Elena Rodriguez',
                    institution: 'Global Policy Institute',
                    expertise: 'International Economic Policy',
                    publications: '150+ peer-reviewed articles',
                    image:
                      'https://readdy.ai/api/search-image?query=Professional%20female%20academic%20researcher%2C%20confident%20expression%2C%20university%20library%20background%2C%20business%20attire%2C%20intellectual%20atmosphere%2C%20professional%20headshot&width=300&height=300&seq=6&orientation=squarish',
                  },
                  {
                    name: 'Prof. James Mitchell',
                    institution: 'Center for Sustainable Development',
                    expertise: 'Climate Policy & Economics',
                    publications: '12 books, 200+ articles',
                    image:
                      'https://readdy.ai/api/search-image?query=Distinguished%20male%20professor%2C%20academic%20setting%2C%20books%20and%20research%20materials%20background%2C%20professional%20attire%2C%20scholarly%20atmosphere%2C%20corporate%20headshot&width=300&height=300&seq=7&orientation=squarish',
                  },
                  {
                    name: 'Dr. Aisha Patel',
                    institution: 'Technology Innovation Lab',
                    expertise: 'Digital Transformation Policy',
                    publications: '80+ research papers',
                    image:
                      'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20researcher%2C%20modern%20technology%20lab%20background%2C%20confident%20smile%2C%20business%20attire%2C%20innovation%20environment%2C%20professional%20headshot&width=300&height=300&seq=8&orientation=squarish',
                  },
                  {
                    name: 'Prof. Michael Zhang',
                    institution: 'International Trade Institute',
                    expertise: 'Global Trade & Investment',
                    publications: '5 books, 120+ articles',
                    image:
                      'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20academic%2C%20international%20business%20background%2C%20confident%20expression%2C%20formal%20attire%2C%20global%20economic%20setting%2C%20professional%20headshot&width=300&height=300&seq=9&orientation=squarish',
                  },
                ].map((academic, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={academic.image}
                      alt={academic.name}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-1">{academic.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{academic.institution}</p>
                      <p className="text-sm text-blue-600 mb-3">{academic.expertise}</p>
                      <div className="flex items-center text-sm text-green-600">
                        <i className="ri-file-text-line mr-2"></i>
                        {academic.publications}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Think Tank Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Think Tank Benefits
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Research Collaboration
                  </h3>
                  <p className="text-gray-600">
                    Access to interdisciplinary research networks and joint
                    project opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Publication Platform
                  </h3>
                  <p className="text-gray-600">
                    Opportunities to publish research findings and policy
                    recommendations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Policy Engagement
                  </h3>
                  <p className="text-gray-600">
                    Direct engagement with policymakers and government officials.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Conference Access
                  </h3>
                  <p className="text-gray-600">
                    Exclusive access to academic conferences and expert
                    symposiums.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Funding Opportunities
                  </h3>
                  <p className="text-gray-600">
                    Access to research grants and funding for collaborative
                    projects.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Global Network
                  </h3>
                  <p className="text-gray-600">
                    Connect with leading academics and researchers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-12">
                Academic Impact
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-100 mb-2">
                    200+
                  </div>
                  <p className="text-blue-100">Distinguished Fellows</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-100 mb-2">
                    50+
                  </div>
                  <p className="text-blue-100">Partner Institutions</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-100 mb-2">
                    500+
                  </div>
                  <p className="text-blue-100">Research Publications</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-100 mb-2">
                    25+
                  </div>
                  <p className="text-blue-100">Policy Recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Academic Community
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contribute to cutting-edge research and help shape
                evidence-based policies for a better future.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Apply for Fellowship
              </button>
            </div>
          </div>
        </section>

        {/* Application Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Academia Think Tank Application
                  </h3>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution Name *
                      </label>
                      <input
                        type="text"
                        name="institutionName"
                        value={formData.institutionName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution Type *
                      </label>
                      <select
                        name="institutionType"
                        value={formData.institutionType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Type</option>
                        {institutionTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title/Position *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Research Areas (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3 max-h-40 overflow-y-auto">
                      {researchAreaOptions.map((area) => (
                        <label key={area} className="flex items-center">
                          <input
                            type="checkbox"
                            name="researchAreas"
                            value={area}
                            checked={formData.researchAreas.includes(area)}
                            onChange={handleInputChange}
                            className="mr-3 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Research Projects *
                    </label>
                    <textarea
                      name="currentProjects"
                      value={formData.currentProjects}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your current research projects and areas of expertise..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Collaboration Goals *
                    </label>
                    <textarea
                      name="collaborationGoals"
                      value={formData.collaborationGoals}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What do you hope to achieve through collaboration with the AEF Think Tank?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Publication Interests
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {publicationOptions.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            name="publicationInterests"
                            value={option}
                            checked={formData.publicationInterests.includes(option)}
                            onChange={handleInputChange}
                            className="mr-3 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Networking Preferences
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {networkingOptions.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            name="networkingPreferences"
                            value={option}
                            checked={formData.networkingPreferences.includes(option)}
                            onChange={handleInputChange}
                            className="mr-3 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="mr-3 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <label className="text-sm text-gray-700">
                      I agree to the terms and conditions and privacy policy *
                    </label>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {showCreateAccount ? 'Create Account' : 'Sign In'}
                </h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {/* Sign‑In Form */}
              {!showCreateAccount && (
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
                        <input type="checkbox" name="remember_me" className="cursor-pointer" />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <button type="button" className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
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
              )}

              {/* Create Account Form */}
              {showCreateAccount && (
                <>
                  <form onSubmit={handleCreateAccountSubmit} className="space-y-4">
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
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Your organization"
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        name="confirm_password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="terms_agreement"
                        required
                        className="mt-1 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the Terms of Service and Privacy Policy
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter_consent"
                        className="mt-1 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I would like to receive updates about Forum activities and events
                      </span>
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

              {/* Social Auth Buttons – shown only for sign‑in */}
              {!showCreateAccount && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Our mission
                  </a>
                </li>
                <li>
                  <a href="/framework" className="text-gray-300 hover:text-white cursor-pointer">
                    Our Institutional Framework
                  </a>
                </li>
                <li>
                  <a href="/history" className="text-gray-300 hover:text-white cursor-pointer">
                    History
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Leadership and governance
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Our Impact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">
                    Centres
                  </a>
                </li>
                <li>
                  <a href="/meetings" className="text-gray-300 hover:text-white cursor-pointer">
                    Meetings
                  </a>
                </li>
                <li>
                  <a href="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">
                    Stakeholders
                  </a>
                </li>
                <li>
                  <a href="/agenda" className="text-gray-300 hover:text-white cursor-pointer">
                    Forum Stories
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Press releases
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-300 hover:text-white cursor-pointer">
                    Photo gallery
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Videos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                <li>
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleSignIn}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer"
                    >
                      Sign in
                    </button>
                  )}
                </li>
                <li>
                  <a href="/partners" className="text-gray-300 hover:text-white cursor-pointer">
                    Become our partner
                  </a>
                </li>
                <li>
                  <a href="/join" className="text-gray-300 hover:text-white cursor-pointer">
                    Become a member
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Subscribe to our press releases
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Subscribe to our newsletters
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">
                    Sustainability at the Forum
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-300 hover:text-white cursor-pointer">
                    Careers
                  </a>
                </li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">
                    PT
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="/en" className="text-gray-300 hover:text-white cursor-pointer">
                    EN
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="/es" className="text-gray-300 hover:text-white cursor-pointer">
                    ES
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="/fr" className="text-gray-300 hover:text-white cursor-pointer">
                    FR
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/17Jr8NpqZJ/"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-africa-economic-forum/"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/theafricaeconomicforum?igsh=MWowNmw1NjdueXNkbQ=="
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <a href="/privacy" className="hover:text-white cursor-pointer">
                  Privacy Policy &amp; Terms of Service
                </a>
                
                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">
                  Code Design Global
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
