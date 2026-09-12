
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { resetPassword } from '../../auth/localAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
  initialMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  initialMode = 'signin',
}) => {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

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
          alert('Account created successfully! You can now sign in with your credentials.');
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
      } else {
        const result = await signIn(formData.email, formData.password);
        
        if (result.error) {
          setError(result.error);
        } else if (result.user) {
          const userData = {
            id: result.user.id,
            email: result.user.email,
            name: `${result.user.firstName} ${result.user.lastName}`,
            firstName: result.user.firstName,
            lastName: result.user.lastName,
            organization: result.user.organization,
            avatar_url: null,
          };

          onLogin(userData);
          onClose();
          window.location.href = '/profile';
        }
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === 'signup' ? 'Create Account' : 'Sign In'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading
              ? 'Processing...'
              : mode === 'signup'
              ? 'Create Account'
              : 'Sign In'}
          </button>
        </form>

        {mode === 'signin' && (
          <div className="mt-4 text-center">
            <button
              onClick={async () => {
                try {
                  const result = await resetPassword(formData.email);
                  if (result.error) {
                    setError(result.error);
                  } else {
                    alert('Password reset instructions would be sent to your email (demo mode).');
                  }
                } catch (err: any) {
                  setError(err.message || 'Failed to send reset email');
                }
              }}
              className="text-sm text-green-600 hover:text-green-800"
              disabled={!formData.email}
            >
              Forgot your password?
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            {mode === 'signup'
              ? 'Already have an account? Sign In'
              : 'Need an account? Sign Up'}
          </button>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Local Authentication</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Data stored locally in your browser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
