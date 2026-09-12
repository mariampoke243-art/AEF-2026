
import React, { useState } from 'react';

const WomenPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    profession: '',
    organization: '',
    experience: '',
    leadershipRoles: '',
    focusAreas: [] as string[],
    mentorshipInterests: [] as string[],
    goals: '',
    challenges: '',
    networkingPreferences: [] as string[],
    availability: '',
    termsAccepted: false,
  });

  const focusAreaOptions = [
    'Economic Empowerment',
    'Leadership Development',
    'Entrepreneurship',
    'Education & Skills',
    'Health & Wellness',
    'Technology & Innovation',
    'Political Participation',
    'Gender Equality Advocacy',
    'Work-Life Balance',
    'Financial Inclusion',
    'Social Impact',
    'Climate Action',
  ];

  const mentorshipOptions = [
    'Career Advancement',
    'Business Development',
    'Leadership Skills',
    'Public Speaking',
    'Networking Strategies',
    'Work-Life Integration',
    'Financial Planning',
    'Personal Branding',
    'Negotiation Skills',
    'Board Readiness',
    'Entrepreneurship',
    'Digital Skills',
  ];

  const networkingOptions = [
    'Professional Meetups',
    'Industry Conferences',
    'Mentorship Circles',
    'Online Communities',
    'Skill-sharing Workshops',
    'Leadership Retreats',
    'Panel Discussions',
    'Networking Events',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'termsAccepted') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        const arrayField = name as 'focusAreas' | 'mentorshipInterests' | 'networkingPreferences';
        setFormData(prev => ({
          ...prev,
          [arrayField]: checked
            ? [...prev[arrayField], value]
            : prev[arrayField].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Women Empowerment Network application submitted:', formData);
    alert('Application submitted successfully! Welcome to the AEF Women Empowerment Network!');
    setIsFormOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      profession: '',
      organization: '',
      experience: '',
      leadershipRoles: '',
      focusAreas: [],
      mentorshipInterests: [],
      goals: '',
      challenges: '',
      networkingPreferences: [],
      availability: '',
      termsAccepted: false,
    });
  };

  const womenLeaders = [
    {
      name: 'Dr. Amara Okafor',
      role: 'CEO & Founder, TechWomen Africa',
      expertise: 'Technology & Innovation',
      achievement: 'Empowered 10,000+ women in tech',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20woman%20CEO%2C%20confident%20expression%2C%20modern%20office%20background%2C%20business%20attire%2C%20technology%20setting%2C%20executive%20leadership%20portrait&width=300&height=300&seq=16&orientation=squarish',
    },
    {
      name: 'Maria Santos',
      role: 'Social Impact Entrepreneur',
      expertise: 'Economic Empowerment',
      achievement: 'Founded microfinance network',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Latina%20woman%20entrepreneur%2C%20warm%20smile%2C%20social%20impact%20background%2C%20business%20attire%2C%20community%20development%20setting%2C%20leadership%20portrait&width=300&height=300&seq=17&orientation=squarish',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Healthcare Innovation Leader',
      expertise: 'Health & Wellness',
      achievement: 'Revolutionized maternal healthcare',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20woman%20doctor%2C%20confident%20smile%2C%20healthcare%20innovation%20background%2C%20medical%20professional%20attire%2C%20modern%20hospital%20setting%2C%20leadership%20portrait&width=300&height=300&seq=18&orientation=squarish',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Climate Action Advocate',
      expertise: 'Environmental Leadership',
      achievement: 'Led global climate initiatives',
      image: 'https://readdy.ai/api/search-image?query=Professional%20woman%20environmental%20leader%2C%20confident%20expression%2C%20sustainability%20background%2C%20business%20attire%2C%20green%20technology%20setting%2C%20climate%20action%20portrait&width=300&height=300&seq=19&orientation=squarish',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Diverse%20group%20of%20professional%20women%20collaborating%2C%20modern%20boardroom%20setting%2C%20leadership%20and%20empowerment%2C%20confident%20expressions%2C%20business%20environment%2C%20women%20in%20leadership&width=1200&height=400&seq=20&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Women Empowerment Network</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Advancing women's leadership, economic empowerment, and gender equality through collaboration, mentorship, and advocacy.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Empowering Women Leaders</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The AEF Women Empowerment Network is dedicated to advancing women's leadership across all sectors. 
              We create opportunities for professional growth, provide mentorship and support, and advocate for 
              policies that promote gender equality and women's economic empowerment globally.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-2xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
                <p className="text-gray-600">
                  Comprehensive programs to develop and enhance women's leadership capabilities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mentorship & Support</h3>
                <p className="text-gray-600">
                  Connect with experienced mentors and build supportive professional relationships.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-megaphone-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Advocacy & Policy</h3>
                <p className="text-gray-600">
                  Advocate for policies and practices that advance gender equality and women's rights.
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
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-crown-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Women in Leadership Program</h3>
                <p className="text-gray-600 mb-4">Executive leadership development for senior women professionals.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive coaching</li>
                  <li>• Board readiness training</li>
                  <li>• Strategic leadership skills</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Women Entrepreneurs Hub</h3>
                <p className="text-gray-600 mb-4">Support for women starting and scaling their businesses.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Business incubation</li>
                  <li>• Access to funding</li>
                  <li>• Market expansion support</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-graduation-cap-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Skills & Education Initiative</h3>
                <p className="text-gray-600 mb-4">Professional development and skill-building programs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Digital literacy training</li>
                  <li>• Professional certifications</li>
                  <li>• Career transition support</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-hand-heart-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Mentorship Circles</h3>
                <p className="text-gray-600 mb-4">Structured mentorship programs connecting women across industries.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• One-on-one mentoring</li>
                  <li>• Group mentorship circles</li>
                  <li>• Reverse mentoring programs</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-scales-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Policy Advocacy</h3>
                <p className="text-gray-600 mb-4">Advancing gender equality through policy research and advocacy.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Policy research</li>
                  <li>• Legislative advocacy</li>
                  <li>• Public awareness campaigns</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-global-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Global Women's Summit</h3>
                <p className="text-gray-600 mb-4">Annual international conference for women leaders and changemakers.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keynote speakers</li>
                  <li>• Networking opportunities</li>
                  <li>• Workshop sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Women Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Women Leaders</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {womenLeaders.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{leader.role}</p>
                    <p className="text-sm text-pink-600 mb-3">{leader.expertise}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <i className="ri-award-line mr-2"></i>
                      {leader.achievement}
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
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-heart-line text-xl text-pink-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Mentorship</h3>
                  <p className="text-gray-600">Access to experienced mentors and career guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-briefcase-line text-xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Advancement</h3>
                  <p className="text-gray-600">Opportunities for professional growth and leadership roles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-group-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Networking Opportunities</h3>
                  <p className="text-gray-600">Connect with women leaders across industries and sectors.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-book-open-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Skill Development</h3>
                  <p className="text-gray-600">Access to training programs and professional development resources.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-funds-line text-xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Funding Access</h3>
                  <p className="text-gray-600">Connect with investors and funding opportunities for women-led ventures.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-voice-recognition-line text-xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advocacy Platform</h3>
                  <p className="text-gray-600">Amplify your voice in gender equality and policy discussions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-pink-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Network Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-pink-100 mb-2">5,000+</div>
                <p className="text-pink-100">Women Leaders</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-100 mb-2">120+</div>
                <p className="text-pink-100">Countries Represented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-100 mb-2">1,200+</div>
                <p className="text-pink-100">Mentorship Connections</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-100 mb-2">$25M+</div>
                <p className="text-pink-100">Funding Facilitated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Movement</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a global network of women leaders driving change and creating opportunities for the next generation.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Become a Member
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
                <h3 className="text-2xl font-bold text-gray-900">Women Empowerment Network Application</h3>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profession/Title *
                    </label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization/Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Experience *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Describe your professional background and key achievements..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leadership Roles &amp; Responsibilities
                  </label>
                  <textarea
                    name="leadershipRoles"
                    value={formData.leadershipRoles}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Describe any leadership positions or responsibilities you've held..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Focus Areas (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3 max-h-40 overflow-y-auto">
                    {focusAreaOptions.map((area) => (
                      <label key={area} className="flex items-center">
                        <input
                          type="checkbox"
                          name="focusAreas"
                          value={area}
                          checked={formData.focusAreas.includes(area)}
                          onChange={handleInputChange}
                          className="mr-3 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="text-sm text-gray-700">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Mentorship Interests
                  </label>
                  <div className="grid md:grid-cols-2 gap-3 max-h-32 overflow-y-auto">
                    {mentorshipOptions.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          name="mentorshipInterests"
                          value={option}
                          checked={formData.mentorshipInterests.includes(option)}
                          onChange={handleInputChange}
                          className="mr-3 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Goals &amp; Aspirations *
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="What do you hope to achieve through the Women Empowerment Network?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Challenges
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="What challenges are you currently facing in your career or business?"
                  />
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
                          className="mr-3 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    className="mr-3 text-pink-600 focus:ring-pink-500"
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
                    className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
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
                  Privacy Policy &amp; Terms of Service
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

export default WomenPage;
