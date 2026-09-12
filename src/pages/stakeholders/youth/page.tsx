
import React, { useState } from 'react';

const YouthPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    education: '',
    institution: '',
    fieldOfStudy: '',
    interests: [] as string[],
    experience: '',
    goals: '',
    skills: [] as string[],
    availability: '',
    termsAccepted: false,
  });

  const interestOptions = [
    'Sustainable Development',
    'Climate Action',
    'Social Entrepreneurship',
    'Technology & Innovation',
    'Education & Skills',
    'Health & Wellness',
    'Gender Equality',
    'Economic Development',
    'Arts & Culture',
    'Sports & Recreation',
    'Leadership Development',
    'Community Service',
  ];

  const skillOptions = [
    'Leadership',
    'Public Speaking',
    'Project Management',
    'Digital Marketing',
    'Research & Analysis',
    'Event Planning',
    'Content Creation',
    'Programming/Tech',
    'Design & Creative',
    'Languages',
    'Fundraising',
    'Mentoring',
  ];

  const educationLevels = [
    'High School Student',
    'University Undergraduate',
    'University Graduate',
    'Master\'s Student',
    'PhD Student',
    'Recent Graduate',
    'Young Professional',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'termsAccepted') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        const arrayField = name as 'interests' | 'skills';
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
    console.log('Youth Network application submitted:', formData);
    alert('Application submitted successfully! Welcome to the AEF Youth Network!');
    setIsFormOpen(false);
    setFormData({
      fullName: '',
      age: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      education: '',
      institution: '',
      fieldOfStudy: '',
      interests: [],
      experience: '',
      goals: '',
      skills: [],
      availability: '',
      termsAccepted: false,
    });
  };

  const youthLeaders = [
    {
      name: 'Maya Johnson',
      age: 24,
      role: 'Climate Activist & Entrepreneur',
      achievement: 'Founded EcoYouth Initiative',
      image: 'https://readdy.ai/api/search-image?query=Young%20professional%20woman%2C%20confident%20smile%2C%20environmental%20activism%20background%2C%20casual%20business%20attire%2C%20bright%20natural%20lighting%2C%20youth%20leadership%20portrait&width=300&height=300&seq=11&orientation=squarish',
    },
    {
      name: 'Alex Chen',
      age: 22,
      role: 'Tech Innovation Leader',
      achievement: 'Developed EdTech Platform',
      image: 'https://readdy.ai/api/search-image?query=Young%20Asian%20male%20professional%2C%20technology%20startup%20background%2C%20confident%20expression%2C%20modern%20casual%20attire%2C%20innovation%20environment%2C%20youth%20portrait&width=300&height=300&seq=12&orientation=squarish',
    },
    {
      name: 'Sofia Rodriguez',
      age: 23,
      role: 'Social Impact Coordinator',
      achievement: 'Led Community Development Project',
      image: 'https://readdy.ai/api/search-image?query=Young%20Latina%20woman%2C%20community%20development%20background%2C%20warm%20smile%2C%20professional%20casual%20attire%2C%20social%20impact%20setting%2C%20youth%20leadership%20portrait&width=300&height=300&seq=13&orientation=squarish',
    },
    {
      name: 'David Okafor',
      age: 25,
      role: 'Youth Policy Advocate',
      achievement: 'UN Youth Representative',
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20male%20professional%2C%20policy%20advocacy%20background%2C%20confident%20expression%2C%20business%20attire%2C%20international%20setting%2C%20youth%20leadership%20portrait&width=300&height=300&seq=14&orientation=squarish',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Diverse%20group%20of%20young%20people%20collaborating%2C%20modern%20workspace%2C%20innovation%20and%20creativity%2C%20bright%20energetic%20atmosphere%2C%20youth%20empowerment%2C%20teamwork%20and%20leadership&width=1200&height=400&seq=15&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">AEF Youth Network</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Empowering the next generation of leaders to drive positive change and create innovative solutions for global challenges.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Join Youth Network
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Empowering Young Leaders</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The AEF Youth Network connects passionate young people aged 16-30 from around the world who are 
              committed to making a positive impact in their communities and beyond. We provide platforms for 
              leadership development, skill building, and collaborative action on global challenges.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
                <p className="text-gray-600">
                  Build essential leadership skills through mentorship, training, and real-world experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded young leaders from diverse backgrounds and cultures worldwide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Action & Impact</h3>
                <p className="text-gray-600">
                  Turn ideas into action through collaborative projects and community initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Programs & Opportunities</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-graduation-cap-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Youth Leadership Academy</h3>
                <p className="text-gray-600 mb-4">Comprehensive leadership training program with mentorship and certification.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 6-month intensive program</li>
                  <li>• Expert mentorship</li>
                  <li>• Leadership certification</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-global-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Global Exchange Program</h3>
                <p className="text-gray-600 mb-4">Cultural exchange and collaboration opportunities with international partners.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• International partnerships</li>
                  <li>• Cultural immersion</li>
                  <li>• Global project collaboration</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-lightbulb-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Innovation Challenges</h3>
                <p className="text-gray-600 mb-4">Compete in global challenges to solve real-world problems with innovative solutions.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monthly challenges</li>
                  <li>• Prize competitions</li>
                  <li>• Implementation support</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-hand-heart-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Community Action Projects</h3>
                <p className="text-gray-600 mb-4">Lead local initiatives that address community needs and create lasting impact.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Local impact focus</li>
                  <li>• Resource support</li>
                  <li>• Community partnerships</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-mic-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Youth Voice Platform</h3>
                <p className="text-gray-600 mb-4">Amplify youth perspectives in policy discussions and decision-making processes.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Policy advocacy</li>
                  <li>• Speaking opportunities</li>
                  <li>• Media engagement</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-funds-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Micro-Grants Program</h3>
                <p className="text-gray-600 mb-4">Access funding for youth-led projects and social impact initiatives.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Up to $5,000 grants</li>
                  <li>• Project mentorship</li>
                  <li>• Impact measurement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Youth Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Youth Leaders</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {youthLeaders.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">Age: {leader.age}</p>
                    <p className="text-sm text-blue-600 mb-3">{leader.role}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <i className="ri-star-line mr-2"></i>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Join Our Network?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-heart-line text-xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mentorship Access</h3>
                  <p className="text-gray-600">Connect with experienced leaders and industry experts for guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-book-open-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Skill Development</h3>
                  <p className="text-gray-600">Access workshops, training programs, and educational resources.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-trophy-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recognition Platform</h3>
                  <p className="text-gray-600">Showcase achievements and gain recognition for your contributions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-calendar-event-line text-xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Exclusive Events</h3>
                  <p className="text-gray-600">Attend youth summits, conferences, and networking events.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-briefcase-line text-xl text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Opportunities</h3>
                  <p className="text-gray-600">Access internships, job opportunities, and career guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-earth-line text-xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Impact</h3>
                  <p className="text-gray-600">Contribute to international initiatives and global change movements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Youth Network Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-orange-100 mb-2">2,500+</div>
                <p className="text-orange-100">Active Youth Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-100 mb-2">85+</div>
                <p className="text-orange-100">Countries Represented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-100 mb-2">150+</div>
                <p className="text-orange-100">Community Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-100 mb-2">500K+</div>
                <p className="text-orange-100">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of young leaders who are shaping the future and creating positive change in their communities.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Join the Movement
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
                <h3 className="text-2xl font-bold text-gray-900">Youth Network Application</h3>
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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="16"
                      max="30"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level *
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Education Level</option>
                      {educationLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution/Organization
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study/Work
                  </label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                          className="mr-3 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Experience/Achievements
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Describe any leadership experience, volunteer work, projects, or achievements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Goals & Aspirations *
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="What do you hope to achieve through the AEF Youth Network?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Skills & Talents
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {skillOptions.map((skill) => (
                      <label key={skill} className="flex items-center">
                        <input
                          type="checkbox"
                          name="skills"
                          value={skill}
                          checked={formData.skills.includes(skill)}
                          onChange={handleInputChange}
                          className="mr-3 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability for Activities *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Availability</option>
                    <option value="Very Active (10+ hours/week)">Very Active (10+ hours/week)</option>
                    <option value="Active (5-10 hours/week)">Active (5-10 hours/week)</option>
                    <option value="Moderate (2-5 hours/week)">Moderate (2-5 hours/week)</option>
                    <option value="Light (1-2 hours/week)">Light (1-2 hours/week)</option>
                    <option value="Event-based participation">Event-based participation</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mr-3 text-orange-600 focus:ring-orange-500"
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
                    className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
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

export default YouthPage;
