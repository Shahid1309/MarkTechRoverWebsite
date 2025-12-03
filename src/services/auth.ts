import { User } from '../types';
import { jwtDecode } from 'jwt-decode';

export interface LoginResponse {
  token: string;
  user?: User;
}

export interface RegisterResponse {
  token: string;
  user: User;
}

export const login = async (email: string, password: string, role: 'admin' | 'client'): Promise<LoginResponse> => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    // Validate role type
    if (data.user.role !== 'admin' && data.user.role !== 'client') {
      throw new Error('Invalid user role');
    }

    const userWithoutPassword: User = {
      id: data.user.id || data.user._id,
      name: data.user.name,
      email: data.user.email,
      role: data.user.role as 'admin' | 'client',
      company: data.user.company,
      isActive: true,
      permissions: [],
      createdAt: data.user.createdAt || new Date().toISOString(),
      updatedAt: data.user.updatedAt || new Date().toISOString()
    };

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    return {
      token: data.token,
      user: userWithoutPassword,
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string,
  company: string
): Promise<RegisterResponse> => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, company }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();

    // Validate role type
    if (data.user.role !== 'admin' && data.user.role !== 'client') {
      throw new Error('Invalid user role');
    }

    const userWithoutPassword: User = {
      id: data.user.id || data.user._id,
      name: data.user.name,
      email: data.user.email,
      role: data.user.role as 'admin' | 'client',
      company: data.user.company,
      isActive: true,
      permissions: [],
      createdAt: data.user.createdAt || new Date().toISOString(),
      updatedAt: data.user.updatedAt || new Date().toISOString()
    };

    return {
      token: data.token,
      user: userWithoutPassword,
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  }
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const decoded: any = jwtDecode(token);
    return {
      id: decoded.id,
      name: decoded.name || '',
      email: decoded.email || '',
      role: decoded.role || 'client',
      company: decoded.company || '',
      isActive: true,
      permissions: [],
      createdAt: decoded.createdAt || new Date().toISOString(),
      updatedAt: decoded.updatedAt || new Date().toISOString()
    };
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}; 