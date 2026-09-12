
import React, { useState } from 'react';

const ArtistsAthletesPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    category: '',
    discipline: '',
    experience: '',
    achievements: '',
    socialImpact: '',
    interests: [] as string[],
    collaborationGoals: '',
    availability: '',
    portfolio: '',
    socialMedia: '',
    termsAccepted: false,
  });

  const categories = [
    'Visual Arts',
    'Performing Arts',
    'Music',
    'Literature',
    'Film & Media',
    'Digital Arts',
    'Professional Sports',
    'Olympic Sports',
    'Paralympic Sports',
    'Traditional Sports',
    'Emerging Sports',
    'Sports Management',
  ];

  const interestOptions = [
    'Youth Development Programs',
    'Community Engagement',
    'Cultural Exchange',
    'Social Justice Advocacy',
    'Environmental Awareness',
    'Education & Mentorship',
    'Health & Wellness Promotion',
    'Economic Development',
    'Peace & Reconciliation',
    'Gender Equality',
    'Disability Inclusion',
    'Cultural Preservation',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'termsAccepted') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: checked
            ? [...prev.interests, value]
            : prev.interests.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Artists & Athletes Network application submitted:', formData);
    alert('Application submitted successfully! Welcome to the AEF Artists & Athletes Network!');
    setIsFormOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      category: '',
      discipline: '',
      experience: '',
      achievements: '',
      socialImpact: '',
      interests: [],
      collaborationGoals: '',
      availability: '',
      portfolio: '',
      socialMedia: '',
      termsAccepted: false,
    });
  };

  const featuredMembers = [
    {
      name: 'Maya Rodriguez',
      category: 'Visual Artist',
      discipline: 'Sustainable Art & Sculpture',
      impact: 'Climate awareness through art',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20visual%20artist%2C%20creative%20studio%20background%2C%20confident%20expression%2C%20artistic%20environment%2C%20sustainable%20art%20materials%2C%20contemporary%20art%20setting&width=300&height=300&seq=26&orientation=squarish',
    },
    {
      name: 'James Thompson',
      category: 'Professional Athlete',
      discipline: 'Marathon Running',
      impact: 'Youth fitness programs',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20marathon%20runner%2C%20athletic%20training%20background%2C%20confident%20expression%2C%20sports%20facility%20setting%2C%20running%20track%20environment%2C%20athletic%20achievement&width=300&height=300&seq=27&orientation=squarish',
    },
    {
      name: 'Aisha Patel',
      category: 'Musician',
      discipline: 'World Music & Cultural Fusion',
      impact: 'Cultural bridge-building',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20musician%2C%20music%20studio%20background%2C%20confident%20smile%2C%20musical%20instruments%2C%20cultural%20fusion%20setting%2C%20world%20music%20environment&width=300&height=300&seq=28&orientation=squarish',
    },
    {
      name: 'Carlos Silva',
      category: 'Film Director',
      discipline: 'Documentary & Social Impact',
      impact: 'Social justice storytelling',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20film%20director%2C%20movie%20production%20background%2C%20confident%20expression%2C%20film%20equipment%2C%20documentary%20filmmaking%20setting%2C%20creative%20industry&width=300&height=300&seq=29&orientation=squarish',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Creative%20arts%20and%20sports%20collaboration%2C%20diverse%20artists%20and%20athletes%20working%20together%2C%20cultural%20and%20athletic%20expression%2C%20inspiring%20creative%20environment%2C%20unity%20through%20arts%20and%20sports&width=1200&height=400&seq=30&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Artists & Athletes Network</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Uniting creative artists and athletes to drive social change, inspire communities, and promote positive values through the power of arts and sports.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Join Our Network
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Arts & Sports for Social Impact</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The AEF Artists & Athletes Network harnesses the transformative power of creativity and athletic excellence 
              to address global challenges. We connect talented individuals who use their platforms to inspire positive 
              change, promote social values, and build bridges across communities and cultures.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-palette-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Creative Expression</h3>
                <p className="text-gray-600">
                  Amplify important messages through artistic creativity and cultural expression.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Athletic Excellence</h3>
                <p className="text-gray-600">
                  Inspire through sporting achievements and promote healthy, active lifestyles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Impact</h3>
                <p className="text-gray-600">
                  Create meaningful change in communities through collaborative initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Programs & Initiatives</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-brush-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Art for Change</h3>
                <p className="text-gray-600 mb-4">Collaborative art projects addressing social and environmental issues.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Community murals</li>
                  <li>• Awareness campaigns</li>
                  <li>• Cultural exhibitions</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-run-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Sports for Development</h3>
                <p className="text-gray-600 mb-4">Athletic programs promoting health, education, and social inclusion.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Youth sports programs</li>
                  <li>• Inclusive athletics</li>
                  <li>• Health promotion</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-global-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Cultural Exchange</h3>
                <p className="text-gray-600 mb-4">International programs fostering cross-cultural understanding.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Artist residencies</li>
                  <li>• Sports exchanges</li>
                  <li>• Cultural festivals</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-graduation-cap-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Mentorship Programs</h3>
                <p className="text-gray-600 mb-4">Guidance and support for emerging artists and athletes.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Career development</li>
                  <li>• Skill workshops</li>
                  <li>• Industry connections</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-mic-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Advocacy Platform</h3>
                <p className="text-gray-600 mb-4">Amplifying voices for social justice and positive change.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Awareness campaigns</li>
                  <li>• Public speaking</li>
                  <li>• Media engagement</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-award-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Recognition Awards</h3>
                <p className="text-gray-600 mb-4">Celebrating excellence in arts, sports, and social impact.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Annual awards ceremony</li>
                  <li>• Impact recognition</li>
                  <li>• Career advancement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Network Members</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{member.category}</p>
                    <p className="text-sm text-purple-600 mb-3">{member.discipline}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <i className="ri-heart-line mr-2"></i>
                      {member.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Network Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Creative Collaboration</h3>
                  <p className="text-gray-600">Partner with like-minded artists and athletes on impactful projects.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-megaphone-line text-xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Platform Amplification</h3>
                  <p className="text-gray-600">Expand your reach and amplify your message through our network.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-funds-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Funding Opportunities</h3>
                  <p className="text-gray-600">Access grants and sponsorships for social impact projects.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-calendar-event-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Exclusive Events</h3>
                  <p className="text-gray-600">Participate in showcases, competitions, and networking events.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-heart-line text-xl text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mentorship Access</h3>
                  <p className="text-gray-600">Connect with experienced mentors and industry leaders.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-global-line text-xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Exposure</h3>
                  <p className="text-gray-600">Showcase your work and achievements on international platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Impact Focus Areas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Youth Development</h3>
                <p className="text-sm text-gray-600">Inspiring and mentoring the next generation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-earth-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Environmental Action</h3>
                <p className="text-sm text-gray-600">Promoting sustainability and climate awareness</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-scales-line text-2xl text-green-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Justice</h3>
                <p className="text-sm text-gray-600">Advocating for equality and human rights</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-pulse-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Health & Wellness</h3>
                <p className="text-sm text-gray-600">Promoting physical and mental well-being</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Network Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-purple-100 mb-2">1,200+</div>
                <p className="text-purple-100">Artists & Athletes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-100 mb-2">95+</div>
                <p className="text-purple-100">Countries Represented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-100 mb-2">300+</div>
                <p className="text-purple-100">Impact Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-100 mb-2">2M+</div>
                <p className="text-purple-100">Lives Touched</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Impact Through Your Talent</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join a community of artists and athletes who are using their talents and platforms to make a positive difference in the world.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Join Our Network
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
                <h3 className="text-2xl font-bold text-gray-900">Artists & Athletes Network Application</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Discipline *
                    </label>
                    <input
                      type="text"
                      name="discipline"
                      value={formData.discipline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., Oil Painting, Marathon Running, Jazz Music"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience & Background *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your professional experience, training, and background..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Achievements *
                  </label>
                  <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="List your notable achievements, awards, exhibitions, competitions, etc..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Impact Work
                  </label>
                  <textarea
                    name="socialImpact"
                    value={formData.socialImpact}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe any social impact work, community involvement, or advocacy you've done..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3 max-h-40 overflow-y-auto">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInputChange}
                          className="mr-3 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="What do you hope to achieve through the Artists & Athletes Network?"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Link to your portfolio, website, or professional profile"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Social Media
                    </label>
                    <input
                      type="text"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your main social media handle or platform"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability for Network Activities *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Availability</option>
                    <option value="Very Active (10+ hours/month)">Very Active (10+ hours/month)</option>
                    <option value="Active (5-10 hours/month)">Active (5-10 hours/month)</option>
                    <option value="Moderate (2-5 hours/month)">Moderate (2-5 hours/month)</option>
                    <option value="Light (1-2 hours/month)">Light (1-2 hours/month)</option>
                    <option value="Event-based participation">Event-based participation</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mr-3 text-purple-600 focus:ring-purple-500"
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
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
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
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</a></li>
                <li><a href="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</a></li>
                <li><a href="/history" className="text-gray-300 hover:text-white cursor-pointer">History</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Leadership and governance</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Our Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li><a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Centres</a></li>
                <li><a href="/meetings" className="text-gray-300 hover:text-white cursor-pointer">Meetings</a></li>
                <li><a href="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">Stakeholders</a></li>
                <li><a href="/agenda" className="text-gray-300 hover:text-white cursor-pointer">Forum Stories</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Press releases</a></li>
                <li><a href="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Photo gallery</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Podcasts</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Videos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                <li>
                  {user ? (
                    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                      Logout
                    </button>
                  ) : (
                    <button onClick={handleSignIn} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Sign in
                    </button>
                  )}
                </li>
                <li><a href="/partners" className="text-gray-300 hover:text-white cursor-pointer">Become our partner</a></li>
                <li><a href="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our press releases</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</a></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">PT</a>
                  <span className="text-gray-500">•</span>
                  <a href="/en" className="text-gray-300 hover:text-white cursor-pointer">EN</a>
                  <span className="text-gray-500">•</span>
                  <a href="/es" className="text-gray-300 hover:text-white cursor-pointer">ES</a>
                  <span className="text-gray-500">•</span>
                  <a href="/fr" className="text-gray-300 hover:text-white cursor-pointer">FR</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
                <a href="/privacy" className="hover:text-white cursor-pointer">
                  Privacy Policy & Terms of Service
                </a>
                
                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtistsAthletesPage;
