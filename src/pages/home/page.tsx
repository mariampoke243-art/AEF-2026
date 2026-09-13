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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
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

const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="min-h-screen bg-white">
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
              className="md:hidden p-2 cursor-pointer"
            >
              <i className={`ri-${showMobileMenu ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>
              <Link 
                to="/initiatives" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Initiative
              </Link>
              <Link 
                to="/stakeholders" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Stakeholders
              </Link>
              <Link 
                to="/agenda" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Agenda
              </Link>
              <Link 
                to="/publications" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Publications
              </Link>
              <Link 
                to="/meetings" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Meetings
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>

              <div className="pt-4 pb-2">
                {isAuthenticated && user ? (
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
                          {getInitials(user.user_metadata?.full_name || user.email?.charAt(0) || 'U')}
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">{user.user_metadata?.full_name || 'User'}</span>
                    </div>
                    <button 
                      onClick={() => {
                        handleViewProfile();
                        setShowMobileMenu(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 font-medium"
                    >
                      View Profile
                    </button>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setShowMobileMenu(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/signin"
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer block text-center"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {showAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
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
                        <span className="block text-xs uppercase text-blue-400 font-semibold">{t?.home?.locationLabel || "Lieu"}</span>
                        <span className="text-sm font-semibold text-white">Kinshasa<br/><span className="text-xs text-blue-300 font-normal">Fleuve Congo Hotel</span></span>
                      </div>
                    </div>
                    <p className="text-xs text-blue-300/80 text-center italic">
                      Partner with Africa's Davos • www.africaef.com
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link
                        to="/agenda"
                        onClick={() => setShowAnnouncement(false)}
                        className="flex-1 bg-white hover:bg-blue-50 text-blue-950 font-bold py-3 px-4 rounded-xl text-center transition shadow-lg flex items-center justify-center space-x-2"
                      >
                        <span>📅 {t?.home?.viewAgenda || "Voir l'Agenda"}</span>
                      </Link>
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
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-blue-200 text-lg font-medium">Our mission</p>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    A premier platform convening leaders, governments, investors, and thinkers to shape Africa’s role in the new global order
                  </h1>
                  <Link
                    to="/about"
                    className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium flex items-center space-x-2 whitespace-nowrap cursor-pointer inline-flex"
                  >
                    <span>More about the Forum</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-96 rounded-lg shadow-lg object-cover"
                  src="/videos/aef-video.mp4"
                  title="Africa Economic Forum Video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How we drive impact</h2>
              <div className="flex justify-center space-x-8 mb-12">
                <a href="/initiatives" className="px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-blue-900 text-white hover:bg-blue-800">Initiatives</a>
                <a href="/meetings" className="px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer text-gray-600 hover:text-blue-900 hover:bg-gray-100">Meetings</a>
                <a href="/stakeholders" className="px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer text-gray-600 hover:text-blue-900 hover:bg-gray-100">Stakeholders</a>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900">How We Drive Impact</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through strategic initiatives, partnerships, and platforms, we create tangible pathways for Africa's economic transformation and global leadership.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-lightbulb-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Strategic Dialogue Platforms</h3>
                      <p className="text-gray-600">Creating spaces for meaningful conversations between African leaders and global partners.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-handshake-line text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Partnership Facilitation</h3>
                      <p className="text-gray-600">Connecting African opportunities with global capital, technology, and expertise.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-rocket-line text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Innovation Acceleration</h3>
                      <p className="text-gray-600">Supporting breakthrough solutions that address Africa's most pressing challenges.</p>
                    </div>
                  </div>
                </div>
                <a href="/initiatives" className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer inline-block">
                  <span>More about our Initiatives</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img src="https://readdy.ai/api/search-image?query=African%20economic%20leaders%20and%20business%20executives%20in%20modern%20conference%20setting&width=400&height=300" alt="Fund" className="w-full h-48 object-cover object-top" />
                    <div className="p-4"><h4 className="font-semibold text-gray-900">Africa Investment & Innovation Fund (AIIF)</h4></div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img src="https://readdy.ai/api/search-image?query=African%20technology%20innovation%20hub%20with%20young%20entrepreneurs&width=400&height=300" alt="Hub" className="w-full h-48 object-cover object-top" />
                    <div className="p-4"><h4 className="font-semibold text-gray-900">African Economic Intelligence Hub</h4></div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img src="https://readdy.ai/api/search-image?query=African%20cybersecurity%20operations%20center&width=400&height=300" alt="Accelerator" className="w-full h-48 object-cover object-top" />
                    <div className="p-4"><h4 className="font-semibold text-gray-900">Next Africa Accelerator</h4></div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img src="https://readdy.ai/api/search-image?query=African%20renewable%20energy%20infrastructure%20with%20solar%20panels&width=400&height=300" alt="Labs" className="w-full h-48 object-cover object-top" />
                    <div className="p-4"><h4 className="font-semibold text-gray-900">AEF Labs</h4></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">About us</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</Link></li>
                <li><Link to="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-white cursor-pointer">History</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Africa Economic Forum</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
