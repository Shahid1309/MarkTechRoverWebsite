import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Logo from '../assets/Main.png';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'client'>('client');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      console.log('Attempting login with:', { email, password, role });
      const response = await auth.login(email, password, role);
      console.log('Login response:', response);
      if (response.token && response.user) {
        setAuthState({
          isAuthenticated: true,
          token: response.token,
          user: response.user,
        });
        if (response.user.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/client-dashboard');
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 gradient-bg transition-all duration-500 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-md w-full glass p-8 rounded-2xl shadow-2xl border border-border backdrop-blur-md">
        <div className="flex flex-col items-center mb-8">
          {/* @ts-expect-error: fetchpriority is a valid HTML attribute but not in React's types yet */}
          <img src={Logo} alt="Logo" className="h-16 w-auto mb-4 drop-shadow-lg" width={130} height={77} fetchpriority="high" />
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-2 tracking-tight">Sign in to your account</h2>
          <p className="text-muted-foreground text-center">Welcome back! Please enter your credentials.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Role Toggle */}
          <div className="flex justify-center mb-4 gap-4">
            <button type="button" onClick={() => setRole('client')} className={`px-4 py-2 rounded-lg border ${role === 'client' ? 'bg-accent text-white' : 'bg-background text-foreground border-border'}`}>Client</button>
            <button type="button" onClick={() => setRole('admin')} className={`px-4 py-2 rounded-lg border ${role === 'admin' ? 'bg-accent text-white' : 'bg-background text-foreground border-border'}`}>Admin</button>
          </div>
          {error && (
            <div className="rounded-md bg-error/10 p-4 border border-error text-error mb-2 animate-pulse">
              <div className="text-sm">{error}</div>
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-foreground mb-1">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 shadow-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 shadow-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-accent btn-lg w-full flex justify-center items-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform duration-150"
            >
              {isLoading ? (
                <span className="animate-spin h-5 w-5 border-2 border-accent border-t-transparent rounded-full inline-block mr-2"></span>
              ) : null}
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage; 