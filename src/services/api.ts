import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const auth = {
  login: async (email: string, password: string, role: 'admin' | 'client') => {
    try {
      const response = await api.post('/auth/login', { email, password, role });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

export const projects = {
  getAll: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  create: async (projectData: any) => {
    const response = await api.post('/projects', projectData);
    return response.data;
  },

  update: async (id: string, projectData: any) => {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data;
  },

  addTask: async (projectId: string, taskData: any) => {
    const response = await api.post(`/projects/${projectId}/tasks`, taskData);
    return response.data;
  },

  updateTaskStatus: async (projectId: string, taskId: string, status: string) => {
    const response = await api.put(`/projects/${projectId}/tasks/${taskId}`, { status });
    return response.data;
  },

  addDesign: async (projectId: string, designData: any) => {
    const response = await api.post(`/projects/${projectId}/designs`, designData);
    return response.data;
  },

  addInvoice: async (projectId: string, invoiceData: any) => {
    const response = await api.post(`/projects/${projectId}/invoices`, invoiceData);
    return response.data;
  },
}; 