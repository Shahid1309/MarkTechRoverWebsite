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
  MoreVertical, Paperclip, Image as ImageIcon, X, Trophy, Save, LogOut,
  Menu, ChevronDown as ChevronDownIcon
} from 'lucide-react';
import Logo from '../../assets/Main.png';

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
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
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

// Sidebar Navigation Component
const Sidebar = ({ isCollapsed, setIsCollapsed, activeTab, setActiveTab }: {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const navigationItems = [
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
    <div className={`bg-white shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo and Brand */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="MarkTechRover" className="h-8 w-auto" />
                <span className="text-lg font-bold text-gray-900">Admin</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

// Top Navbar Component
const TopNavbar = ({ activeTab, user, onLogout }: {
  activeTab: string;
  user: any;
  onLogout: () => void;
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const getTabTitle = (tab: string) => {
    const titles: { [key: string]: string } = {
      overview: 'Overview',
      leads: 'Leads Management',
      clients: 'Clients Management',
      projects: 'Projects Management',
      campaigns: 'Campaigns',
      invoices: 'Invoices',
      approvals: 'Approvals',
      chat: 'Chat System',
      analytics: 'Analytics'
    };
    return titles[tab] || 'Dashboard';
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">{getTabTitle(activeTab)}</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads, tasks, clients..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.charAt(0) || 'A'}
                </span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin'}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button
                  onClick={onLogout}
                  className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
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

  const stats = [
    {
      title: 'Total Leads',
      value: '1,234',
      trend: 12.5,
      icon: Users,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Projects',
      value: '45',
      trend: 8.2,
      icon: FolderOpen,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Revenue',
      value: '₹2.5M',
      trend: 15.3,
      icon: DollarSign,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Pending Tasks',
      value: '12',
      trend: -5.1,
      icon: CheckSquare,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <DashboardStatsCards stats={stats} />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Create New Lead</h3>
              <p className="text-purple-100">Add a new lead to your pipeline</p>
            </div>
            <UserPlus className="w-8 h-8" />
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Create Client Account</h3>
              <p className="text-green-100">Set up a new client account</p>
            </div>
            <Users className="w-8 h-8" />
          </div>
        </motion.button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-gray-600">New lead added: Amit Kumar from TechCorp</p>
            <span className="text-xs text-gray-400">2 hours ago</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-gray-600">Project completed: Website Redesign for ABC Corp</p>
            <span className="text-xs text-gray-400">1 day ago</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <p className="text-sm text-gray-600">Invoice sent: ₹50,000 for SEO Services</p>
            <span className="text-xs text-gray-400">2 days ago</span>
          </div>
        </div>
      </div>

      {/* Quick Tasks */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Quick Tasks</h3>
          <button
            onClick={handleAddTask}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all duration-300"
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
              <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads Management</h3>
      <p className="text-gray-600">Leads management functionality will be implemented here.</p>
    </div>
  </div>
);

const ClientsModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Clients Management</h3>
      <p className="text-gray-600">Clients management functionality will be implemented here.</p>
    </div>
  </div>
);

const ProjectsModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Projects Management</h3>
      <p className="text-gray-600">Projects management functionality will be implemented here.</p>
    </div>
  </div>
);

const CampaignsModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaigns Management</h3>
      <p className="text-gray-600">Campaigns management functionality will be implemented here.</p>
    </div>
  </div>
);

const InvoicesModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoices Management</h3>
      <p className="text-gray-600">Invoices management functionality will be implemented here.</p>
    </div>
  </div>
);

const ApprovalsModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Approvals Management</h3>
      <p className="text-gray-600">Approvals management functionality will be implemented here.</p>
    </div>
  </div>
);

const ChatModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Chat System</h3>
      <p className="text-gray-600">Chat functionality will be implemented here.</p>
    </div>
  </div>
);

const AnalyticsModule = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
      <p className="text-gray-600">Analytics functionality will be implemented here.</p>
    </div>
  </div>
);

// Main Admin Dashboard Component
const AdminDashboardWithSidebar = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar
          activeTab={activeTab}
          user={authState.user}
          onLogout={handleLogout}
        />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
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
      </div>
    </div>
  );
};

export default AdminDashboardWithSidebar;

