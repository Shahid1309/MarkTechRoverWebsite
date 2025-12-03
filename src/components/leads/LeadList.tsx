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
    name: 'John Smith',
    email: 'john@techcorp.com',
    phone: '+91 98765 43210',
    company: 'TechCorp Solutions',
    source: 'Website',
    status: 'New',
    priority: 'High',
    value: 500000,
    currency: 'INR',
    services: ['Web Development', 'SEO'],
    lastContact: '2024-01-15',
    nextFollowUp: '2024-01-20',
    notes: 'Interested in e-commerce platform development',
    timeline: [
      { id: '1', title: 'Initial Contact', description: 'Lead submitted through website form', timestamp: '2024-01-15T10:00:00Z' },
      { id: '2', title: 'Qualification Call', description: 'Discussed project requirements and budget', timestamp: '2024-01-16T14:30:00Z' }
    ]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@designstudio.com',
    phone: '+91 87654 32109',
    company: 'Design Studio Pro',
    source: 'Referral',
    status: 'Qualified',
    priority: 'Medium',
    value: 300000,
    currency: 'INR',
    services: ['Design', 'Social Media'],
    lastContact: '2024-01-14',
    nextFollowUp: '2024-01-18',
    notes: 'Looking for brand redesign and social media management',
    timeline: [
      { id: '1', title: 'Referral Received', description: 'Referred by existing client', timestamp: '2024-01-12T09:00:00Z' },
      { id: '2', title: 'Discovery Meeting', description: 'Understood brand requirements', timestamp: '2024-01-14T11:00:00Z' }
    ]
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@startupinc.com',
    phone: '+91 76543 21098',
    company: 'Startup Inc',
    source: 'LinkedIn',
    status: 'Proposal Sent',
    priority: 'High',
    value: 750000,
    currency: 'INR',
    services: ['Web Development', 'PPC', 'SEO'],
    lastContact: '2024-01-13',
    nextFollowUp: '2024-01-17',
    notes: 'Tech startup looking for full digital presence',
    timeline: [
      { id: '1', title: 'LinkedIn Connection', description: 'Connected through LinkedIn outreach', timestamp: '2024-01-10T16:00:00Z' },
      { id: '2', title: 'Proposal Delivered', description: 'Sent comprehensive proposal package', timestamp: '2024-01-13T15:30:00Z' }
    ]
  }
];

const LeadList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

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
      'Negotiation': 'bg-orange-100 text-orange-800 border-orange-200',
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
      case 'Web Development': return <Code className="h-4 w-4" />;
      case 'Digital Marketing': return <Megaphone className="h-4 w-4" />;
      case 'Design': return <Palette className="h-4 w-4" />;
      case 'SEO': return <Target className="h-4 w-4" />;
      case 'PPC': return <Zap className="h-4 w-4" />;
      case 'Social Media': return <Globe className="h-4 w-4" />;
      case 'Content Creation': return <PenTool className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || lead.status === statusFilter;
    const matchesPriority = !priorityFilter || lead.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const stats = {
    total: mockLeads.length,
    new: mockLeads.filter(l => l.status === 'New').length,
    qualified: mockLeads.filter(l => l.status === 'Qualified').length,
    won: mockLeads.filter(l => l.status === 'Won').length,
    totalValue: mockLeads.reduce((sum, l) => sum + l.value, 0),
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
              <p className="text-green-100 text-sm font-medium">Qualified Leads</p>
              <p className="text-3xl font-bold">{stats.qualified}</p>
            </div>
            <div className="bg-green-400/20 p-3 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-green-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            {stats.conversionRate}% conversion rate
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Value</p>
              <p className="text-3xl font-bold">{formatCurrency(stats.totalValue)}</p>
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
              <p className="text-orange-100 text-sm font-medium">Won Deals</p>
              <p className="text-3xl font-bold">{stats.won}</p>
            </div>
            <div className="bg-orange-400/20 p-3 rounded-lg">
              <Award className="h-8 w-8 text-orange-200" />
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-orange-100">
            <Star className="h-4 w-4 mr-1" />
            {stats.conversionRate}% success rate
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
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(stats.totalValue)}</div>
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

      {/* Filters and Search */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search leads by name, company, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
          <select 
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <Button variant="accent" className="flex items-center">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Lead List */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-white">Lead List</h3>
          <p className="text-sm text-gray-300 mt-1">Showing {filteredLeads.length} of {mockLeads.length} leads</p>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredLeads.map((lead) => (
            <motion.div 
              key={lead.id} 
              className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{lead.name}</h4>
                      <p className="text-sm text-gray-300">{lead.company}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                    <span className={`text-xs ${getPriorityColor(lead.priority)}`}>
                      {lead.priority} Priority
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {lead.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {lead.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {formatCurrency(lead.value, lead.currency as "INR" | "USD")}
                    </span>
                  </div>

                  {/* Services */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-300">Services:</span>
                    {lead.services.map(service => (
                      <span key={service} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-400 rounded-md text-xs">
                        {getServiceIcon(service)}
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Timeline Preview */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-white">Recent Activity</h5>
                    {lead.timeline.slice(0, 2).map((item) => (
                      <div key={item.id} className="flex items-start gap-3 text-sm">
                        <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Activity className="h-3 w-3" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-gray-300">{item.description}</p>
                          <p className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="secondary" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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

export default LeadList; 