
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function PublicationsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    setIsProfileDropdownOpen(false);
  };

  const handleViewProfile = () => {
    navigate('/profile');
    setIsProfileDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const switchToCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const switchToSignIn = () => {
    setShowCreateAccount(false);
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    setShowSignInModal(false);
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle create account logic here
    setShowSignInModal(false);
  };

  // Publications data
  const publications = [
    {
      id: 1,
      title: "Africa's Digital Economy: Opportunities and Challenges",
      description: "Comprehensive analysis of digital transformation across African markets, examining infrastructure development, fintech innovation, and regulatory frameworks.",
      type: "Report",
      category: "report",
      date: "March 2024",
      authors: ["Dr. Amina Hassan", "Prof. Kwame Asante", "Dr. Sarah Okonkwo"],
      tags: ["Digital Economy", "Fintech", "Infrastructure"],
      pages: 85,
      downloadCount: "2.3K",
      image: "https://readdy.ai/api/search-image?query=Digital%20economy%20in%20Africa%20with%20modern%20technology%2C%20smartphones%20and%20computers%2C%20African%20business%20people%20using%20digital%20devices%2C%20fintech%20and%20innovation%20themes%2C%20professional%20business%20setting&width=400&height=300&seq=pub-digital-economy&orientation=landscape"
    },
    {
      id: 2,
      title: "Sustainable Agriculture Investment Framework",
      description: "Strategic framework for sustainable agricultural investments across sub-Saharan Africa, focusing on climate resilience and food security.",
      type: "Policy Brief",
      category: "policy",
      date: "February 2024",
      authors: ["Dr. John Mwangi", "Prof. Fatima Al-Rashid"],
      tags: ["Agriculture", "Sustainability", "Investment"],
      pages: 42,
      downloadCount: "1.8K",
      image: "https://readdy.ai/api/search-image?query=Sustainable%20agriculture%20in%20Africa%20with%20modern%20farming%20techniques%2C%20green%20fields%20and%20crops%2C%20African%20farmers%20using%20technology%2C%20environmental%20sustainability%20themes&width=400&height=300&seq=pub-agriculture&orientation=landscape"
    },
    {
      id: 3,
      title: "Youth Entrepreneurship in Post-Pandemic Africa",
      description: "Research paper examining the rise of youth-led businesses and startups across Africa following the COVID-19 pandemic.",
      type: "Research Paper",
      category: "research",
      date: "January 2024",
      authors: ["Dr. Grace Mbeki", "Prof. Ahmed El-Sayed", "Dr. Michael Osei"],
      tags: ["Youth", "Entrepreneurship", "Startups"],
      pages: 67,
      downloadCount: "3.1K",
      image: "https://readdy.ai/api/search-image?query=Young%20African%20entrepreneurs%20working%20in%20modern%20office%20space%2C%20startup%20environment%20with%20laptops%20and%20collaboration%2C%20innovation%20and%20business%20development%20themes&width=400&height=300&seq=pub-youth-entrepreneurship&orientation=landscape"
    },
    {
      id: 4,
      title: "Green Energy Transition: A Continental Perspective",
      description: "White paper outlining strategies for renewable energy adoption and the transition away from fossil fuels across African nations.",
      type: "White Paper",
      category: "whitepaper",
      date: "December 2023",
      authors: ["Dr. Kofi Annan Jr.", "Prof. Zara Ibrahim"],
      tags: ["Green Energy", "Renewable", "Climate"],
      pages: 93,
      downloadCount: "2.7K",
      image: "https://readdy.ai/api/search-image?query=Renewable%20energy%20in%20Africa%20with%20solar%20panels%20and%20wind%20turbines%2C%20green%20technology%20and%20sustainable%20power%20generation%2C%20African%20landscape%20with%20clean%20energy%20infrastructure&width=400&height=300&seq=pub-green-energy&orientation=landscape"
    },
    {
      id: 5,
      title: "Financial Inclusion Success Stories",
      description: "Case study compilation showcasing successful financial inclusion initiatives across Kenya, Nigeria, and Ghana.",
      type: "Case Study",
      category: "case_study",
      date: "November 2023",
      authors: ["Dr. Aisha Patel", "Prof. Benjamin Okafor"],
      tags: ["Financial Inclusion", "Banking", "Mobile Money"],
      pages: 58,
      downloadCount: "1.9K",
      image: "https://readdy.ai/api/search-image?query=Financial%20inclusion%20in%20Africa%20with%20mobile%20banking%20and%20digital%20payments%2C%20African%20people%20using%20mobile%20money%20services%2C%20financial%20technology%20and%20banking%20themes&width=400&height=300&seq=pub-financial-inclusion&orientation=landscape"
    },
    {
      id: 6,
      title: "Infrastructure Development Roadmap 2024-2030",
      description: "Comprehensive roadmap for infrastructure development across transportation, telecommunications, and energy sectors.",
      type: "Report",
      category: "report",
      date: "October 2023",
      authors: ["Dr. Chinwe Okoro", "Prof. Hassan Mohammed", "Dr. Lisa Tembo"],
      tags: ["Infrastructure", "Transportation", "Development"],
      pages: 124,
      downloadCount: "4.2K",
      image: "https://readdy.ai/api/search-image?query=Infrastructure%20development%20in%20Africa%20with%20modern%20roads%2C%20bridges%20and%20buildings%20under%20construction%2C%20engineering%20and%20development%20projects%2C%20African%20urban%20development&width=400&height=300&seq=pub-infrastructure&orientation=landscape"
    }
  ];

  // Filter publications based on selected category
  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="https://static.readdy.ai/image/849a2f489cee8d6814d30c5afad3a84a/b4bfbdc8f08b91298cef1ff69a069583.png" 
                  alt="AEF Logo" 
                  className="h-10 w-10 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link to="/initiatives" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Initiative
              </Link>
              <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Stakeholders
              </Link>
              <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Agenda
              </Link>
              <Link to="/publications" className="text-blue-600 font-medium">
                Publications
              </Link>
              <Link to="/meetings" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Meetings
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
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
                        {getInitials(user.user_metadata?.full_name || user.email?.charAt(0) || 'U')}
                      </div>
                    )}
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        <div className="font-medium">{user.user_metadata?.full_name || 'User'}</div>
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
                <div className="flex items-center space-x-4">
                  <Link
                    to="/signin"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link to="/initiatives" className="text-gray-700 hover:text-blue-600 font-medium">
                  Initiative
                </Link>
                <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium">
                  Stakeholders
                </Link>
                <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium">
                  Agenda
                </Link>
                <Link to="/publications" className="text-blue-600 font-medium">
                  Publications
                </Link>
                <Link to="/meetings" className="text-gray-700 hover:text-blue-600 font-medium">
                  Meetings
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>

                {user ? (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {getInitials(user.user_metadata?.full_name || user.email?.charAt(0) || 'U')}
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">{user.user_metadata?.full_name || 'User'}</span>
                    </div>
                    <button
                      onClick={() => {
                        handleViewProfile();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-2"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <Link to="/signin" className="block text-gray-700 hover:text-blue-600 font-medium">
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Academic%20library%20with%20economic%20research%20publications%2C%20professional%20researchers%20reading%20reports%20and%20studies%2C%20modern%20library%20setting%20with%20books%20and%20digital%20resources%2C%20knowledge%20and%20research%20themes&width=1920&height=800&seq=publications-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Publications & Research</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Access cutting-edge research, comprehensive reports, and strategic insights that inform policy decisions and drive economic transformation across Africa.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Knowledge for Impact</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our publications represent the collective wisdom of Africa's leading economists, 
                policymakers, and business leaders. Each report provides actionable insights 
                backed by rigorous research and real-world experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">150+</div>
                  <div className="text-gray-600">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500K+</div>
                  <div className="text-gray-600">Downloads</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Economic%20research%20team%20analyzing%20data%20and%20writing%20reports%2C%20professional%20researchers%20with%20charts%20and%20statistics%2C%20modern%20office%20environment%20with%20books%20and%20computers%2C%20academic%20research%20setting&width=600&height=500&seq=publications-overview&orientation=portrait" 
                alt="Publications Overview" 
                className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-600 hover:text-blue-900 bg-white'
              }`}
            >
              All Publications
            </button>
            <button 
              onClick={() => setSelectedCategory('report')}
              className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'report' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-600 hover:text-blue-900 bg-white'
              }`}
            >
              Reports
            </button>
            <button 
              onClick={() => setSelectedCategory('research')}
              className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'research' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-600 hover:text-blue-900 bg-white'
              }`}
            >
              Research Papers
            </button>
            <button 
              onClick={() => setSelectedCategory('policy')}
              className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'policy' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-600 hover:text-blue-900 bg-white'
              }`}
            >
              Policy Briefs
            </button>
            <button 
              onClick={() => setSelectedCategory('whitepaper')}
              className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'whitepaper' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-600 hover:text-blue-900 bg-white'
              }`}
            >
              White Papers
            </button>
            <button 
              onClick={() => setSelectedCategory('case_study')}
              className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'case_study' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-600 hover:text-blue-900 bg-white'
              }`}
            >
              Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication) => (
              <div key={publication.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src={publication.image} 
                  alt={publication.title} 
                  className="w-full h-64 object-cover object-top" 
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {publication.type}
                    </span>
                    <span className="text-gray-500 text-sm">{publication.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{publication.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{publication.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Authors:</h4>
                      <p className="text-gray-600 text-xs">{publication.authors.join(', ')}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
                      <span>{publication.pages} pages</span>
                      <span className="flex items-center">
                        <i className="ri-download-line mr-1"></i>
                        {publication.downloadCount}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium text-sm whitespace-nowrap cursor-pointer">
                      Download PDF
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium text-sm whitespace-nowrap cursor-pointer">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our publications influence policy decisions and drive economic transformation across the continent.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-government-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">45</div>
              <div className="text-gray-600">Policy Recommendations Adopted</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">35</div>
              <div className="text-gray-600">Countries Influenced</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl text-purple-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
              <div className="text-gray-600">International Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-quote-text text-2xl text-orange-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,800+</div>
              <div className="text-gray-600">Academic Citations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our research newsletter and be the first to access our latest publications and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer">
              Subscribe
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
                  {showCreateAccount ? 'Create Account' : 'Sign In'}
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
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
                        <span className="text-sm text-gray-600">Remember me</span>
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
                  <form onSubmit={handleCreateAccountSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          name="first_name" 
                          required 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                      <input 
                        type="text" 
                        name="organization"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                      <input 
                        type="password" 
                        name="password" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
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

              {/* Social Auth */}
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
                <li>
                  {user ? (
                    <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                      Logout
                    </button>
                  ) : (
                    <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Sign in
                    </Link>
                  )}
                </li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white cursor-pointer">Partner with us</Link></li>
                <li><Link to="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Sign up for our press releases</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</Link></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">EN</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/es" className="text-gray-300 hover:text-white cursor-pointer">ES</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/cn" className="text-gray-300 hover:text-white cursor-pointer">中文</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/jp" className="text-gray-300 hover:text-white cursor-pointer">日本語</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-400">
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
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</Link>
                
                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
