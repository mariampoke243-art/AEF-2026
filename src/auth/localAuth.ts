
// Local Authentication System
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  organization?: string;
  accountType: 'personal' | 'organization';
  role: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Local storage keys
const USERS_KEY = 'aef_users';
const CURRENT_USER_KEY = 'aef_current_user';

// Get all users from localStorage
export const getStoredUsers = (): User[] => {
  try {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch {
    return [];
  }
};

// Save users to localStorage
export const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

// Save current user to localStorage
export const setCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Hash password (simple implementation for demo)
const hashPassword = (password: string): string => {
  // In production, use proper password hashing like bcrypt
  return btoa(password + 'salt_key_aef_2024');
};

// Verify password
const verifyPassword = (password: string, hashedPassword: string): boolean => {
  return hashPassword(password) === hashedPassword;
};

// Send login notification to backend
const sendLoginNotification = async (user: User): Promise<void> => {
  try {
    const loginData = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      organization: user.organization,
      accountType: user.accountType,
      loginTime: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ipAddress: 'Client IP' // In production, get real IP from server
    };

    const response = await fetch(`${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/functions/v1/user-login-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify(loginData)
    });

    if (!response.ok) {
      console.error('Failed to send login notification');
    }
  } catch (error) {
    console.error('Error sending login notification:', error);
  }
};

// Save user to Supabase database
const saveUserToDatabase = async (user: User): Promise<void> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/rest/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`,
        'apikey': import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        id: user.id,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        organization: user.organization,
        account_type: user.accountType,
        role: user.role,
        status: 'active',
        created_at: user.createdAt
      })
    });

    if (!response.ok) {
      console.error('Failed to save user to database');
    }
  } catch (error) {
    console.error('Error saving user to database:', error);
  }
};

// Sign up new user
export const signUp = async (userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organization?: string;
  accountType: 'personal' | 'organization';
}): Promise<{ user: User | null; error: string | null }> => {
  try {
    const users = getStoredUsers();
    
    // Check if user already exists
    const existingUser = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (existingUser) {
      return { user: null, error: 'User with this email already exists' };
    }

    // Validate required fields
    if (userData.accountType === 'organization' && !userData.organization?.trim()) {
      return { user: null, error: 'Organization name is required for organization accounts' };
    }

    // Create new user
    const newUser: User = {
      id: generateId(),
      email: userData.email.toLowerCase(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      organization: userData.organization || '',
      accountType: userData.accountType,
      role: 'member',
      createdAt: new Date().toISOString(),
    };

    // Store password separately (in production, use proper encryption)
    const userWithPassword = {
      ...newUser,
      password: hashPassword(userData.password),
    };

    users.push(userWithPassword);
    saveUsers(users);

    // Save to Supabase database
    await saveUserToDatabase(newUser);

    return { user: newUser, error: null };
  } catch (error) {
    return { user: null, error: 'Failed to create account' };
  }
};

// Sign in user
export const signIn = async (email: string, password: string): Promise<{ user: User | null; error: string | null }> => {
  try {
    const users = getStoredUsers();
    const userWithPassword = users.find(u => u.email.toLowerCase() === email.toLowerCase()) as any;

    if (!userWithPassword) {
      return { user: null, error: 'Invalid email or password' };
    }

    if (!verifyPassword(password, userWithPassword.password)) {
      return { user: null, error: 'Invalid email or password' };
    }

    // Return user without password
    const { password: _, ...user } = userWithPassword;
    setCurrentUser(user);

    // Send login notification to backend
    await sendLoginNotification(user);

    return { user, error: null };
  } catch (error) {
    return { user: null, error: 'Sign in failed' };
  }
};

// Sign out user
export const signOut = (): void => {
  setCurrentUser(null);
};

// Reset password (simulate email sending)
export const resetPassword = async (email: string): Promise<{ success: boolean; error: string | null }> => {
  try {
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, error: 'No account found with this email address' };
    }

    // In a real app, you would send an email here
    console.log(`Password reset email would be sent to: ${email}`);
    
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: 'Failed to send reset email' };
  }
};

// Update user profile
export const updateProfile = async (userId: string, updates: Partial<User>): Promise<{ user: User | null; error: string | null }> => {
  try {
    const users = getStoredUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return { user: null, error: 'User not found' };
    }

    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;
    saveUsers(users);

    // Update current user if it's the same user
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
      setCurrentUser(updatedUser);
    }

    return { user: updatedUser, error: null };
  } catch (error) {
    return { user: null, error: 'Failed to update profile' };
  }
};

// Initialize auth state
export const initializeAuth = (): AuthState => {
  const user = getCurrentUser();
  return {
    user,
    isAuthenticated: !!user,
  };
};
