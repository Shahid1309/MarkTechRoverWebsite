import React from 'react';
import { motion } from 'framer-motion';
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
  Info,
  ChevronRight, ChevronLeft, Maximize2, Minimize2, List, Upload,
  MoreVertical, Paperclip, Image as ImageIcon
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { DashboardStats, RecentActivity, UpcomingDeadline, PerformanceAlert } from '@/types/crm';

interface OverviewModuleProps {
  stats: DashboardStats;
  onNavigate: (module: string) => void;
}

const OverviewModule: React.FC<OverviewModuleProps> = ({ stats, onNavigate }) => {
  const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getAlertIcon = (severity: string) => {
    switch (severity) {
      case 'Critical': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'High': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'Medium': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'Low': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Bell className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
          onClick={() => onNavigate('analytics')}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold">{formatCurrency(stats.totalRevenue)}</p>
            </div>
            <div className="bg-blue-400/20 p-3 rounded-lg">
              <DollarSign className="h-8 w-8 text-blue-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-blue-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            +{stats.monthlyGrowth}% this month
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
          onClick={() => onNavigate('leads')}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Active Leads</p>
              <p className="text-3xl font-bold">{stats.totalLeads}</p>
            </div>
            <div className="bg-green-400/20 p-3 rounded-lg">
              <Target className="h-8 w-8 text-green-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-green-100">
            <Users className="h-4 w-4 mr-1" />
            {stats.conversionRate}% conversion rate
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
          onClick={() => onNavigate('projects')}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Active Projects</p>
              <p className="text-3xl font-bold">{stats.activeProjects}</p>
            </div>
            <div className="bg-purple-400/20 p-3 rounded-lg">
              <BarChart3 className="h-8 w-8 text-purple-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-purple-100">
            <Clock className="h-4 w-4 mr-1" />
            2 due this week
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
          onClick={() => onNavigate('approvals')}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Pending Approvals</p>
              <p className="text-3xl font-bold">{stats.pendingApprovals}</p>
            </div>
            <div className="bg-orange-400/20 p-3 rounded-lg">
              <CheckSquare className="h-8 w-8 text-orange-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-orange-100">
            <AlertTriangle className="h-4 w-4 mr-1" />
            {stats.overdueInvoices} overdue invoices
          </div>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">65%</div>
            <div className="text-sm text-gray-300">Lead Conversion Rate</div>
            <div className="flex items-center justify-center mt-1">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+5% vs last month</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹45L</div>
            <div className="text-sm text-gray-300">Total Revenue</div>
            <div className="flex items-center justify-center mt-1">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
              <span className="text-xs text-blue-500">+12.5% vs last month</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">85%</div>
            <div className="text-sm text-gray-300">Client Satisfaction</div>
            <div className="flex items-center justify-center mt-1">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-xs text-yellow-500">4.2/5 average rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {stats.recentActivity.map((activity) => (
              <motion.div 
                key={activity.id} 
                className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => onNavigate(activity.type)}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Activity className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{activity.title}</p>
                  <p className="text-sm text-gray-300">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(activity.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button 
              className="w-full justify-start" 
              variant="ghost"
              onClick={() => onNavigate('leads')}
            >
              <Target className="h-4 w-4 mr-2" />
              Add New Lead
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="ghost"
              onClick={() => onNavigate('projects')}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="ghost"
              onClick={() => onNavigate('invoices')}
            >
              <FileText className="h-4 w-4 mr-2" />
              Create Invoice
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="ghost"
              onClick={() => onNavigate('chat')}
            >
              <CheckSquare className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            {stats.upcomingDeadlines.map((deadline) => (
              <div key={deadline.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    deadline.priority === 'High' ? 'bg-red-500' : 
                    deadline.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-white">{deadline.title}</p>
                    <p className="text-xs text-gray-500">
                      Due: {new Date(deadline.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">View</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Alerts</h3>
          <div className="space-y-3">
            {stats.performanceAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                {getAlertIcon(alert.severity)}
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{alert.title}</p>
                  <p className="text-xs text-gray-300">{alert.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(alert.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewModule; 