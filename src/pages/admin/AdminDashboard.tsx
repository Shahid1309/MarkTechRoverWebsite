import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  BarChart3, Target, Users, Calendar, TrendingUp, FileText, 
  CheckSquare, MessageSquare, PieChart, DollarSign, Clock, 
  Bell, Settings, ArrowRight, FileText as FileTextIcon, 
  Phone, Mail, Send, Circle, Code, Megaphone, Palette, 
  Target as TargetIcon, Zap, Globe, PenTool, Briefcase,
  Plus, Search, Filter, Download, Eye, Edit, Trash2,
  ChevronDown, ChevronUp, Star, AlertTriangle, CheckCircle,
  XCircle, Clock as ClockIcon, User, Building, MapPin,
  Phone as PhoneIcon, Mail as MailIcon, Globe as GlobeIcon,
  CreditCard, Calendar as CalendarIcon, Tag, Hash,
  TrendingDown, Activity, Zap as ZapIcon, Award, Target as TargetIcon2,
  Home, UserPlus, FolderOpen, Rocket, Receipt, Shield, MessageCircle,
  BarChart, MoreHorizontal, RefreshCw, ExternalLink, Copy,
  PhoneCall, Video, Mail as MailIcon2, Send as SendIcon,
  Info, AlertCircle,
  ChevronRight, ChevronLeft, Maximize2, Minimize2, List, Upload,
  MoreVertical, Paperclip, Image as ImageIcon, X, Trophy, Save, LogOut
} from 'lucide-react';

// Dashboard Stats Component
const DashboardStatsCards = ({ stats }: { stats: any }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {stats.map((stat: any, index: number) => (
      <motion.div
        key={stat.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-300">{stat.title}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            <div className="flex items-center mt-2">
              <span className={`text-sm font-medium ${stat.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend > 0 ? '+' : ''}{stat.trend}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${stat.iconBg}`}>
            <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// Navigation Tabs Component
const NavigationTabs = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'leads', label: 'Leads', icon: UserPlus },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'campaigns', label: 'Campaigns', icon: Rocket },
    { id: 'invoices', label: 'Invoices', icon: Receipt },
    { id: 'approvals', label: 'Approvals', icon: Shield },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'analytics', label: 'Analytics', icon: BarChart }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
      <div className="flex flex-wrap gap-1 p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-300 hover:text-white hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Overview Module
const OverviewModule = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review new leads', completed: false },
    { id: 2, text: 'Follow up with clients', completed: true },
    { id: 3, text: 'Update project status', completed: false }
  ]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: 'New task',
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTodo = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Total Leads</p>
              <p className="text-2xl font-bold text-white">1,234</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Active Projects</p>
              <p className="text-2xl font-bold text-white">45</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <FolderOpen className="w-6 h-6 text-green-600" />
            </div>
          </div>
          </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Revenue</p>
              <p className="text-2xl font-bold text-white">₹2.5M</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-300">Pending Tasks</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <CheckSquare className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-gray-300">New lead added: Amit Kumar from TechCorp</p>
            <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-gray-300">Project completed: Website Redesign for ABC Corp</p>
            <span className="text-xs text-gray-400">1 day ago</span>
          </div>
                <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <p className="text-sm text-gray-300">Invoice sent: ₹50,000 for SEO Services</p>
            <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
              </div>

      {/* Quick Tasks */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Quick Tasks</h3>
                    <button
            onClick={handleAddTask}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
                    </button>
                  </div>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3">
                        <button
                onClick={() => toggleTodo(task.id)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                  task.completed 
                    ? 'bg-blue-500 border-blue-500 text-white' 
                    : 'border-gray-300 hover:border-blue-500'
                }`}
              >
                {task.completed && <CheckSquare className="w-3 h-3" />}
                        </button>
              <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-400'}`}>
                {task.text}
              </span>
                      </div>
                ))}
          </div>
        </div>
    </div>
  );
};

// Simplified Module Components
const LeadsModule = () => (
    <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Leads Management</h3>
      <p className="text-gray-300">Leads management functionality will be implemented here.</p>
      </div>
    </div>
  );

const ClientsModule = () => (
    <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Clients Management</h3>
      <p className="text-gray-300">Clients management functionality will be implemented here.</p>
                </div>
    </div>
  );

const ProjectsModule = () => (
    <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Projects Management</h3>
      <p className="text-gray-300">Projects management functionality will be implemented here.</p>
      </div>
    </div>
  );

const CampaignsModule = () => (
    <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Campaigns Management</h3>
      <p className="text-gray-300">Campaigns management functionality will be implemented here.</p>
      </div>
    </div>
  );

const InvoicesModule = () => (
    <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Invoices Management</h3>
      <p className="text-gray-300">Invoices management functionality will be implemented here.</p>
        </div>
    </div>
  );

const ApprovalsModule = () => (
          <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Approvals Management</h3>
      <p className="text-gray-300">Approvals management functionality will be implemented here.</p>
                </div>
                        </div>
                      );

const ChatModule = () => (
        <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Chat System</h3>
      <p className="text-gray-300">Chat functionality will be implemented here.</p>
            </div>
    </div>
  );

const AnalyticsModule = () => (
    <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Analytics Dashboard</h3>
      <p className="text-gray-300">Analytics functionality will be implemented here.</p>
                  </div>
    </div>
  );

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const { tab } = useParams();
  const location = useLocation();

  // Handle URL parameter for tab
  useEffect(() => {
    if (tab && ['overview', 'leads', 'clients', 'projects', 'campaigns', 'invoices', 'approvals', 'chat', 'analytics'].includes(tab)) {
      setActiveTab(tab);
    }
    setIsLoading(false);
  }, [tab]);

  // Update URL when tab changes
  useEffect(() => {
    if (activeTab !== 'overview') {
      navigate(`/admin-dashboard/${activeTab}`, { replace: true });
    } else {
      navigate('/admin-dashboard', { replace: true });
    }
  }, [activeTab, navigate]);

  const renderActiveModule = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewModule />;
      case 'leads':
        return <LeadsModule />;
      case 'clients':
        return <ClientsModule />;
      case 'projects':
        return <ProjectsModule />;
      case 'campaigns':
        return <CampaignsModule />;
      case 'invoices':
        return <InvoicesModule />;
      case 'approvals':
        return <ApprovalsModule />;
      case 'chat':
        return <ChatModule />;
      case 'analytics':
        return <AnalyticsModule />;
      default:
        return <OverviewModule />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/client-login');
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-300 mt-2">Welcome back, {authState.user?.name || 'Admin'}! Manage your business operations and track performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-white font-medium">{authState.user?.name || 'Admin'}</p>
              <p className="text-gray-400 text-sm">{authState.user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            {renderActiveModule()}
            </motion.div>
          </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard; 