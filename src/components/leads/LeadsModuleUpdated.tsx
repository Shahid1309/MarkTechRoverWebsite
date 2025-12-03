import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, CheckCircle, TrendingUp, DollarSign, ArrowRight,
  Search, Filter, Plus, Eye, Edit, Trash2, MessageSquare, Phone, Mail,
  Calendar, Building, Globe, Code, Megaphone, Palette, Zap, PenTool,
  Monitor, Clock, XCircle, MoreHorizontal, Activity, Star, AlertTriangle,
  UserPlus, FileText, BarChart3, Clock as ClockIcon, User, MapPin,
  Phone as PhoneIcon, Mail as MailIcon, Globe as GlobeIcon, CreditCard,
  Calendar as CalendarIcon, Tag, Hash, TrendingDown, Zap as ZapIcon,
  Award, Home, FolderOpen, Rocket, Receipt, Shield, MessageCircle,
  BarChart, MoreVertical, RefreshCw, ExternalLink, Copy, PhoneCall,
  Video, Mail as MailIcon2, Send as SendIcon, Info, ChevronRight,
  ChevronLeft, Maximize2, Minimize2, List, Upload, Paperclip,
  Image as ImageIcon
} from 'lucide-react';
import Button from '@/components/ui/Button';

// Mock data for demonstration
const mockLeads = [
  {
    id: '1',
    name: 'Amit Kumar',
    email: 'amit@techcorp.com',
    phone: '+91-9876543210',
    company: 'TechCorp Inc.',
    position: 'CEO',
    website: 'www.techcorp.com',
    source: 'Website',
    niche: 'Technology',
    potentialValue: 850000,
    currency: 'INR',
    score: 95,
    status: 'In Negotiation',
    priority: 'High',
    assignedTo: 'Rahul Sharma',
    services: ['web-development', 'digital-marketing', 'seo'],
    tags: ['enterprise', 'tech', 'high-value', 'hot-lead'],
    lastContact: '2024-01-15T10:00:00Z',
    nextFollowUp: '2024-01-18T10:00:00Z',
    notes: 'Interested in full-stack development and digital marketing services. Budget confirmed at ₹8.5L. Proposal sent, waiting for feedback.',
    timeline: [
      { id: 1, type: 'call', date: '2024-01-15T10:00:00Z', description: 'Initial discovery call - discussed requirements', user: 'Rahul Sharma' },
      { id: 2, type: 'email', date: '2024-01-14T15:30:00Z', description: 'Proposal sent with detailed scope', user: 'Rahul Sharma' }
    ],
    budget: '₹8.5L - ₹12L',
    projectTimeline: '3-6 months',
    industry: 'Technology',
    projectType: 'Website Development + Digital Marketing',
    conversionProbability: 85,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    isHot: true,
    isOverdue: false
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya@digitalsolutions.com',
    phone: '+91-9876543211',
    company: 'Digital Solutions Ltd.',
    position: 'Marketing Director',
    website: 'www.digitalsolutions.com',
    source: 'LinkedIn',
    niche: 'E-commerce',
    potentialValue: 650000,
    currency: 'INR',
    score: 88,
    status: 'Proposal Sent',
    priority: 'High',
    assignedTo: 'Priya Patel',
    services: ['seo', 'ppc', 'social-media'],
    tags: ['ecommerce', 'marketing', 'medium-value'],
    lastContact: '2024-01-14T16:00:00Z',
    nextFollowUp: '2024-01-17T16:00:00Z',
    notes: 'E-commerce client looking for comprehensive digital marketing. Proposal sent, follow-up scheduled.',
    timeline: [
      { id: 1, type: 'call', date: '2024-01-14T16:00:00Z', description: 'Follow-up call - proposal discussion', user: 'Priya Patel' },
      { id: 2, type: 'email', date: '2024-01-13T11:00:00Z', description: 'Proposal sent via email', user: 'Priya Patel' }
    ],
    budget: '₹6L - ₹8L',
    projectTimeline: '2-4 months',
    industry: 'E-commerce',
    projectType: 'Digital Marketing Campaign',
    conversionProbability: 75,
    createdAt: '2024-01-08T00:00:00Z',
    updatedAt: '2024-01-14T16:00:00Z',
    isHot: true,
    isOverdue: false
  },
  {
    id: '3',
    name: 'Vikram Singh',
    email: 'vikram@startupxyz.com',
    phone: '+91-9876543212',
    company: 'StartupXYZ',
    position: 'Founder',
    website: 'www.startupxyz.com',
    source: 'Referral',
    niche: 'SaaS',
    potentialValue: 450000,
    currency: 'INR',
    score: 72,
    status: 'Contacted',
    priority: 'Medium',
    assignedTo: 'Amit Kumar',
    services: ['web-development', 'branding'],
    tags: ['saas', 'startup', 'medium-value'],
    lastContact: '2024-01-13T14:00:00Z',
    nextFollowUp: '2024-01-20T14:00:00Z',
    notes: 'SaaS startup needs website redesign and branding. Initial contact made, waiting for detailed requirements.',
    timeline: [
      { id: 1, type: 'call', date: '2024-01-13T14:00:00Z', description: 'Initial contact call', user: 'Amit Kumar' },
      { id: 2, type: 'email', date: '2024-01-12T09:00:00Z', description: 'Lead created from referral', user: 'System' }
    ],
    budget: '₹4L - ₹6L',
    projectTimeline: '2-3 months',
    industry: 'SaaS',
    projectType: 'Website Redesign + Branding',
    conversionProbability: 60,
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-13T14:00:00Z',
    isHot: false,
    isOverdue: false
  }
];

const LeadsModuleUpdated: React.FC = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');

  const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800 border-blue-200',
      'Contacted': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Qualified': 'bg-green-100 text-green-800 border-green-200',
      'Proposal Sent': 'bg-purple-100 text-purple-800 border-purple-200',
      'In Negotiation': 'bg-orange-100 text-orange-800 border-orange-200',
      'Won': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Lost': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      'High': 'text-red-600',
      'Medium': 'text-yellow-600',
      'Low': 'text-green-600'
    };
    return colors[priority as keyof typeof colors] || 'text-gray-300';
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'web-development': return <Code className="h-4 w-4" />;
      case 'digital-marketing': return <Megaphone className="h-4 w-4" />;
      case 'seo': return <Target className="h-4 w-4" />;
      case 'ppc': return <Zap className="h-4 w-4" />;
      case 'social-media': return <Globe className="h-4 w-4" />;
      case 'branding': return <Palette className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesSource = sourceFilter === 'all' || lead.source === sourceFilter;
    
    return matchesSearch && matchesStatus && matchesSource;
  });

  const stats = {
    total: mockLeads.length,
    new: mockLeads.filter(l => l.status === 'New').length,
    qualified: mockLeads.filter(l => l.status === 'Qualified').length,
    won: mockLeads.filter(l => l.status === 'Won').length,
    totalValue: mockLeads.reduce((sum, l) => sum + l.potentialValue, 0),
    conversionRate: mockLeads.length > 0 ? Math.round((mockLeads.filter(l => l.status === 'Won').length / mockLeads.length) * 100) : 0
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Stats Grid - Matching OverviewModule Theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Leads</p>
              <p className="text-3xl font-bold">{stats.total}</p>
            </div>
            <div className="bg-blue-400/20 p-3 rounded-lg">
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-blue-100">
            <Target className="h-4 w-4 mr-1" />
            {stats.new} new this month
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Hot Leads</p>
              <p className="text-3xl font-bold">{mockLeads.filter(l => l.isHot).length}</p>
            </div>
            <div className="bg-green-400/20 p-3 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-green-100">
            <CheckCircle className="h-4 w-4 mr-1" />
            {Math.round((mockLeads.filter(l => l.isHot).length / mockLeads.length) * 100)}% hot lead rate
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Value</p>
              <p className="text-3xl font-bold">₹{stats.totalValue.toLocaleString()}</p>
            </div>
            <div className="bg-purple-400/20 p-3 rounded-lg">
              <DollarSign className="h-8 w-8 text-purple-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-purple-100">
            <BarChart3 className="h-4 w-4 mr-1" />
            Average ₹{Math.round(stats.totalValue / stats.total).toLocaleString()}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Conversion Rate</p>
              <p className="text-3xl font-bold">{stats.conversionRate}%</p>
            </div>
            <div className="bg-orange-400/20 p-3 rounded-lg">
              <Award className="h-8 w-8 text-orange-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-orange-100">
            <Star className="h-4 w-4 mr-1" />
            {stats.won} won deals
          </div>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Lead Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.conversionRate}%</div>
            <div className="text-sm text-gray-300">Lead Conversion Rate</div>
            <div className="flex items-center justify-center mt-1">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+5% vs last month</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹{stats.totalValue.toLocaleString()}</div>
            <div className="text-sm text-gray-300">Total Pipeline Value</div>
            <div className="flex items-center justify-center mt-1">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
              <span className="text-xs text-blue-500">+12.5% vs last month</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{Math.round(stats.totalValue / stats.total).toLocaleString()}</div>
            <div className="text-sm text-gray-300">Average Deal Size</div>
            <div className="flex items-center justify-center mt-1">
              <DollarSign className="h-4 w-4 text-purple-500 mr-1" />
              <span className="text-xs text-purple-500">₹{Math.round(stats.totalValue / stats.total).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search leads by name, company, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="In Negotiation">In Negotiation</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
          <select 
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Sources</option>
            <option value="Website">Website</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="Social Media">Social Media</option>
            <option value="PPC">PPC</option>
            <option value="Cold Outreach">Cold Outreach</option>
          </select>
          <Button variant="accent" className="flex items-center">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Lead Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLeads.map((lead, index) => (
          <motion.div
            key={lead.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="p-6">
              {/* Lead Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{lead.name}</h4>
                    <p className="text-sm text-gray-300">{lead.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">₹{lead.potentialValue.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Score: {lead.score}</div>
                </div>
              </div>

              {/* Status and Priority */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                  {lead.status}
                </span>
                <span className={`text-xs ${getPriorityColor(lead.priority)}`}>
                  {lead.priority} Priority
                </span>
              </div>

              {/* Lead Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="h-4 w-4" />
                  {lead.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4" />
                  {lead.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Globe className="h-4 w-4" />
                  {lead.source}
                </div>
              </div>

              {/* Services */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-300">Services:</span>
                {lead.services.slice(0, 2).map(service => (
                  <span key={service} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-400 rounded-md text-xs">
                    {getServiceIcon(service)}
                    {service.replace('-', ' ')}
                  </span>
                ))}
                {lead.services.length > 2 && (
                  <span className="text-xs text-gray-500">+{lead.services.length - 2} more</span>
                )}
              </div>

              {/* Notes Preview */}
              <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                {lead.notes}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <Button variant="secondary" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="secondary" size="sm" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Chat
                </Button>
                <Button variant="secondary" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Button className="w-full justify-start" variant="ghost">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New Lead
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Follow-up
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Bulk Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadsModuleUpdated; 