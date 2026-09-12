import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { messages } from '../../i18n/local';

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // autoplay peut être bloqué
      });
    }
  }, []);

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleLogout = async () => {
    signOut();
    setIsProfileDropdownOpen(false);
  };

  const handleViewProfile = () => {
    navigate('/profile');
    setIsProfileDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const currentLang = 'en';
  const t = messages[currentLang]?.translation || messages['en']?.translation;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="https://static.readdy.ai/image/849a2f489cee8d6814d30c5afad3a84a/b4bfbdc8f08b91298cef1ff69a069583.png" 
                  alt="Africa Economic Forum" 
                  className="w-10 h-10 object-contain" 
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/initiatives" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Initiative
              </Link>
              <Link to="/stakeholders" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Stakeholders
              </Link>
              <Link to="/agenda" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Agenda
              </Link>
              <Link to="/publications" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Publications
              </Link>
              <Link to="/meetings" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Meetings
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && user ? (
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
                        onClick={handleLogout}
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
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <i className={`ri-${showMobileMenu ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Annonce Modal */}
      {showAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-blue-800 text-white relative">
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition z-10"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="p-6 pb-4 border-b border-blue-800/60 relative">
              <span className="text-xs uppercase tracking-widest text-blue-300 font-semibold bg-blue-900/80 px-3 py-1 rounded-full border border-blue-700/50">
                {t?.home?.forumBadge || "Africa Economic Forum 2026"}
              </span>
              <h3 className="text-3xl font-extrabold mt-3 tracking-tight">
                {t?.home?.forumTitle || "Africa & Global Realignments:"}
              </h3>
              <p className="text-blue-200 text-sm mt-1 font-medium">
                {t?.home?.forumSubtitle || "Investments, Alliances & Strategic Opportunities"}
              </p>
            </div>

            <div className="p-6 space-y-5 bg-blue-900/40">
              <div className="grid grid-cols-2 gap-4 bg-blue-950/60 p-4 rounded-xl border border-blue-800/40">
                <div>
                  <span className="block text-xs uppercase text-blue-400 font-semibold">Dates</span>
                  <span className="text-lg font-bold text-white">10-11 Nov 2026</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-blue-400 font-semibold">Location</span>
                  <span className="text-lg font-bold text-white">Kinshasa, DRC</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl transition text-sm">
                  Rejoindre
                </button>
                <button 
                  onClick={() => setShowAnnouncement(false)}
                  className="px-5 py-3 bg-blue-800/60 hover:bg-blue-800 text-white font-medium rounded-xl transition border border-blue-700/50 text-sm"
                >
                  {t?.common?.close || "Fermer"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-blue-200 text-lg font-medium">Our mission</p>
                  <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                    Strengthening Africa's Economic Future
                  </h1>
                  <p className="text-xl text-blue-100">
                    Bringing together visionary leaders, investors, and entrepreneurs to drive sovereign economic transformation across the continent.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/about" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition">
                      Learn More
                    </Link>
                    <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://example.com/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
              <p className="text-xl text-gray-600">Stay informed with our latest news and insights</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <img src="/images/news.jpg" alt="Featured" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="text-blue-600 font-medium text-sm">Featured</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">Economic Resilience in Africa</h3>
                    <p className="text-gray-600 text-sm mt-3">Building sustainable economic structures for long-term growth.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <article className="border-b border-gray-200 pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="mb-1">
                        <span className="text-blue-600 font-medium text-sm">Reports</span>
                      </div>
                      <h5 className="font-medium text-gray-900 leading-tight hover:text-blue-600">Building Economic Resilience to Health Impacts</h5>
                    </div>
                  </div>
                </article>
                <article className="border-b border-gray-200 pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="mb-1">
                        <span className="text-blue-600 font-medium text-sm">Articles</span>
                      </div>
                      <h5 className="font-medium text-gray-900 leading-tight hover:text-blue-600">Why we must rethink economic strategies</h5>
                    </div>
                  </div>
                </article>
                <article className="border-b border-gray-200 pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="mb-1">
                        <span className="text-blue-600 font-medium text-sm">Articles</span>
                      </div>
                      <h5 className="font-medium text-gray-900 leading-tight hover:text-blue-600">Africa's role in global economic transformation</h5>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
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
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">ES</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">中文</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">日本語</Link>
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
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
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
