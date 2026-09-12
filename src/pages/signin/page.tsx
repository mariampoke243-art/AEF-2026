import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../auth/localAuth';

const SignInPage: React.FC = () => {
  const { signIn, signUp, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    organization: '',
    accountType: 'personal' as 'personal' | 'organization',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/profile');
    }
  }, [isAuthenticated, user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      if (mode === 'signup') {
        // Validate required fields
        if (formData.accountType === 'organization' && !formData.organization.trim()) {
          setError('Organization name is required for organization accounts');
          setIsLoading(false);
          return;
        }

        const result = await signUp({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          organization: formData.organization,
          accountType: formData.accountType,
        });

        if (result.error) {
          setError(result.error);
        } else {
          setSuccess('Account created successfully! You can now sign in with your credentials.');
          setMode('signin');
          setFormData({
            email: formData.email,
            password: '',
            firstName: '',
            lastName: '',
            organization: '',
            accountType: 'personal',
          });
        }
      } else if (mode === 'signin') {
        const result = await signIn(formData.email, formData.password);
        
        if (result.error) {
          setError(result.error);
        } else if (result.user) {
          navigate('/profile');
        }
      } else if (mode === 'forgot') {
        const result = await resetPassword(formData.email);
        
        if (result.error) {
          setError(result.error);
        } else {
          setSuccess('Password reset instructions would be sent to your email (demo mode).');
          setMode('signin');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
            <i className="ri-user-line text-2xl text-green-600"></i>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {mode === 'signup' ? 'Create your account' : 
             mode === 'forgot' ? 'Reset your password' : 
             'Sign in to your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {mode === 'signup' ? 'Join the Africa Economic Forum community' :
             mode === 'forgot' ? 'Enter your email to receive reset instructions' :
             'Welcome back to Africa Economic Forum'}
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <div className="flex items-center">
                <i className="ri-error-warning-line mr-2"></i>
                {error}
              </div>
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div className="flex items-center">
                <i className="ri-check-line mr-2"></i>
                {success}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Account Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="accountType"
                        value="personal"
                        checked={formData.accountType === 'personal'}
                        onChange={handleInputChange}
                        className="mr-3 text-green-600 focus:ring-green-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900">Personal</div>
                        <div className="text-sm text-gray-500">Individual account</div>
                      </div>
                    </label>
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="accountType"
                        value="organization"
                        checked={formData.accountType === 'organization'}
                        onChange={handleInputChange}
                        className="mr-3 text-green-600 focus:ring-green-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900">Organization</div>
                        <div className="text-sm text-gray-500">Company/Institution</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    {formData.accountType === 'organization'
                      ? 'Organization/Company *'
                      : 'Organization/Company (Optional)'}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required={formData.accountType === 'organization'}
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {mode !== 'forgot' && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  minLength={6}
                />
                {mode === 'signup' && (
                  <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters long</p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium whitespace-nowrap"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Processing...
                </div>
              ) : (
                mode === 'signup' ? 'Create Account' :
                mode === 'forgot' ? 'Send Reset Instructions' :
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 space-y-4">
            {mode === 'signin' && (
              <div className="text-center">
                <button
                  onClick={() => setMode('forgot')}
                  className="text-sm text-green-600 hover:text-green-800 font-medium"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={() => {
                  setMode(mode === 'signin' ? 'signup' : 'signin');
                  setError('');
                  setSuccess('');
                }}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                {mode === 'signup'
                  ? 'Already have an account? Sign In'
                  : mode === 'forgot'
                  ? 'Back to Sign In'
                  : 'Need an account? Sign Up'}
              </button>
            </div>
          </div>

          {mode === 'signin' && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Demo Features</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  This is a local authentication demo. All data is stored in your browser's localStorage.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            By signing up, you agree to our{' '}
            <a href="/privacy" className="text-green-600 hover:text-green-800">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;