import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserPlus, Search, Filter, Plus, Eye, Edit, Trash2,
  MessageSquare, Phone, Mail, Calendar, DollarSign,
  Building, Globe, Target, Zap, Palette, Code,
  Megaphone, PenTool, Monitor, ArrowRight, Clock,
  CheckCircle, XCircle, TrendingUp, Users,
  MoreHorizontal
} from 'lucide-react';
import Button from '../ui/Button';
import LeadTimeline from './LeadTimeline';
import { Lead, Service, LeadTimelineItem } from '../../types';

interface LeadManagementProps {
  leads: Lead[];
  services: Service[];
  onAddLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onUpdateLead: (leadId: string, updates: Partial<Lead>) => void;
  onDeleteLead: (leadId: string) => void;
  onAddTimelineItem: (leadId: string, item: Omit<LeadTimelineItem, 'id'>) => void;
}

const LeadManagement: React.FC<LeadManagementProps> = ({
  leads,
  services,
  onAddLead,
  onUpdateLead,
  onDeleteLead,
  onAddTimelineItem
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [showAddLead, setShowAddLead] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list');

  const [newLead, setNewLead] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    source: 'Website' as const,
    status: 'New' as const,
    priority: 'Medium' as const,
    value: 0,
    currency: 'INR' as const,
    services: [] as string[],
    lastContact: new Date().toISOString().split('T')[0],
    nextFollowUp: '',
    notes: '',
    timeline: [] as LeadTimelineItem[]
  });

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'New', label: 'New' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Qualified', label: 'Qualified' },
    { value: 'Proposal Sent', label: 'Proposal Sent' },
    { value: 'Negotiation', label: 'Negotiation' },
    { value: 'Won', label: 'Won' },
    { value: 'Lost', label: 'Lost' }
  ];

  const sourceOptions = [
    { value: '', label: 'All Sources' },
    { value: 'Website', label: 'Website' },
    { value: 'Referral', label: 'Referral' },
    { value: 'Social Media', label: 'Social Media' },
    { value: 'PPC', label: 'PPC' },
    { value: 'Cold Outreach', label: 'Cold Outreach' },
    { value: 'LinkedIn', label: 'LinkedIn' },
    { value: 'Google Ads', label: 'Google Ads' }
  ];

  const priorityOptions = [
    { value: '', label: 'All Priorities' },
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
  ];

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

  const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || lead.status === statusFilter;
    const matchesSource = !sourceFilter || lead.source === sourceFilter;
    const matchesPriority = !priorityFilter || lead.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesSource && matchesPriority;
  });

  const handleAddLead = () => {
    if (!newLead.name || !newLead.email || !newLead.company) {
      alert('Please fill in all required fields');
      return;
    }
    
    onAddLead(newLead);
    setNewLead({
      name: '',
      email: '',
      phone: '',
      company: '',
      source: 'Website',
      status: 'New',
      priority: 'Medium',
      value: 0,
      currency: 'INR',
      services: [],
      lastContact: new Date().toISOString().split('T')[0],
      nextFollowUp: '',
      notes: '',
      timeline: []
    });
    setShowAddLead(false);
  };

  const handleServiceToggle = (serviceId: string) => {
    setNewLead(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'New').length,
    qualified: leads.filter(l => l.status === 'Qualified').length,
    won: leads.filter(l => l.status === 'Won').length,
    totalValue: leads.reduce((sum, l) => sum + l.value, 0),
    conversionRate: leads.length > 0 ? Math.round((leads.filter(l => l.status === 'Won').length / leads.length) * 100) : 0
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Lead Management</h2>
          <p className="text-gray-300">Track and manage your sales pipeline with timeline view</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setViewMode(viewMode === 'list' ? 'timeline' : 'list')}
          >
            {viewMode === 'list' ? <Clock className="h-4 w-4 mr-1" /> : <Users className="h-4 w-4 mr-1" />}
            {viewMode === 'list' ? 'Timeline View' : 'List View'}
          </Button>
          <Button
            variant="accent"
            className="flex items-center"
            onClick={() => setShowAddLead(true)}
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">Total Leads</p>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">New</p>
              <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
            </div>
            <Target className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">Qualified</p>
              <p className="text-2xl font-bold text-green-600">{stats.qualified}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">Won</p>
              <p className="text-2xl font-bold text-emerald-600">{stats.won}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">Total Value</p>
              <p className="text-2xl font-bold text-purple-600">{formatCurrency(stats.totalValue)}</p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">Conversion</p>
              <p className="text-2xl font-bold text-orange-600">{stats.conversionRate}%</p>
            </div>
            <ArrowRight className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search leads..."
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
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select 
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sourceOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select 
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {priorityOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <Button variant="secondary" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Lead Timeline View */}
      {selectedLead && viewMode === 'timeline' && (
        <LeadTimeline
          lead={selectedLead}
          services={services}
          onUpdateLead={onUpdateLead}
          onAddTimelineItem={onAddTimelineItem}
        />
      )}

      {/* Lead List View */}
      {viewMode === 'list' && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-white">Lead List</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="p-6 hover:bg-gray-50 transition-colors">
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
                        {formatCurrency(lead.value, lead.currency)}
                      </span>
                    </div>

                    {/* Services */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-300">Services:</span>
                      {lead.services.map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return service ? (
                          <span key={serviceId} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-400 rounded-md text-xs">
                            {getServiceIcon(service.category)}
                            {service.name}
                          </span>
                        ) : null;
                      })}
                    </div>

                    {/* Timeline Preview */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-white">Recent Activity</h5>
                      {lead.timeline.slice(0, 2).map((item) => (
                        <div key={item.id} className="flex items-start gap-3 text-sm">
                          <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <ArrowRight className="h-3 w-3" />
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
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => setSelectedLead(lead)}
                    >
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
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      <AnimatePresence>
        {showAddLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowAddLead(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Add New Lead</h3>
                <button
                  onClick={() => setShowAddLead(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name *</label>
                    <input
                      type="text"
                      value={newLead.name}
                      onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email *</label>
                    <input
                      type="email"
                      value={newLead.email}
                      onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={newLead.phone}
                      onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Company *</label>
                    <input
                      type="text"
                      value={newLead.company}
                      onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                {/* Lead Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Source</label>
                    <select
                      value={newLead.source}
                      onChange={(e) => setNewLead({ ...newLead, source: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {sourceOptions.slice(1).map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Priority</label>
                    <select
                      value={newLead.priority}
                      onChange={(e) => setNewLead({ ...newLead, priority: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {priorityOptions.slice(1).map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Value (INR)</label>
                    <input
                      type="number"
                      value={newLead.value}
                      onChange={(e) => setNewLead({ ...newLead, value: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter potential value"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Services Interested In</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map(service => (
                      <label key={service.id} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={newLead.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{service.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Notes</label>
                  <textarea
                    value={newLead.notes}
                    onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Add any additional notes..."
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    onClick={() => setShowAddLead(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleAddLead}
                  >
                    Add Lead
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadManagement; 