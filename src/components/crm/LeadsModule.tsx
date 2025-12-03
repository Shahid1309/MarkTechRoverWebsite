import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, Search, Filter, Download, Eye, Edit, Trash2,
  ChevronDown, ChevronUp, Star, AlertTriangle, CheckCircle,
  XCircle, Clock, User, Building, MapPin,
  Phone, Mail, Globe, CreditCard, Calendar, Tag, Hash,
  TrendingDown, Activity, Zap, Award, Target,
  Home, FolderOpen, Rocket, Receipt, Shield, MessageCircle,
  BarChart, MoreHorizontal, RefreshCw, ExternalLink, Copy,
  PhoneCall, Video, Send, Info,
  ChevronRight, ChevronLeft, Maximize2, Minimize2, List, Upload,
  MoreVertical, Paperclip, Image, Plus, Users
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Lead, LeadStatus, LeadSource, Service } from '@/types/crm';

interface LeadsModuleProps {
  leads: Lead[];
  services: Service[];
  onAddLead: () => void;
  onEditLead: (lead: Lead) => void;
  onConvertLead: (lead: Lead) => void;
}

const LeadsModule: React.FC<LeadsModuleProps> = ({ 
  leads, 
  services, 
  onAddLead, 
  onEditLead, 
  onConvertLead 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'All'>('All');
  const [priorityFilter, setPriorityFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [sourceFilter, setSourceFilter] = useState<LeadSource | 'All'>('All');
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');

  const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: LeadStatus) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800 border-blue-200',
      'Contacted': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Qualified': 'bg-green-100 text-green-800 border-green-200',
      'Proposal Sent': 'bg-purple-100 text-purple-800 border-purple-200',
      'Negotiation': 'bg-orange-100 text-orange-800 border-orange-200',
      'Won': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Lost': 'bg-red-100 text-red-800 border-red-200',
      'On Hold': 'bg-gray-100 text-gray-800 border-gray-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      'High': 'text-red-600 bg-red-50',
      'Medium': 'text-yellow-600 bg-yellow-50',
      'Low': 'text-green-600 bg-green-50'
    };
    return colors[priority as keyof typeof colors] || 'text-gray-300 bg-gray-50';
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || lead.priority === priorityFilter;
    const matchesSource = sourceFilter === 'All' || lead.source === sourceFilter;

    return matchesSearch && matchesStatus && matchesPriority && matchesSource;
  });

  const TimelineView = () => (
    <div className="space-y-4">
      {filteredLeads.map((lead) => (
        <motion.div
          key={lead.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                  <p className="text-sm text-gray-300">{lead.position} at {lead.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{lead.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{lead.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{lead.source}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                  {lead.status}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(lead.priority)}`}>
                  {lead.priority} Priority
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(lead.score)} bg-gray-50`}>
                  Score: {lead.score}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-600">
                  {formatCurrency(lead.potentialValue, lead.currency)}
                </span>
              </div>

              {/* Services */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-400 mb-2">Interested Services:</p>
                <div className="flex flex-wrap gap-1">
                  {lead.services.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    return (
                      <span key={serviceId} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                        {service?.name || serviceId}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-400 mb-2">Recent Activity:</p>
                <div className="space-y-2">
                  {lead.timeline.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>{item.title}</span>
                      <span className="text-gray-400">•</span>
                      <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nurturing Suggestions */}
              {lead.nurturingSuggestions.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-400 mb-2">AI Suggestions:</p>
                  <div className="space-y-2">
                    {lead.nurturingSuggestions.slice(0, 2).map((suggestion) => (
                      <div key={suggestion.id} className="flex items-center space-x-2 p-2 bg-yellow-50 rounded-lg">
                        <Zap className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm text-gray-400">{suggestion.suggestedAction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-2 ml-4">
              <Button size="sm" variant="ghost" onClick={() => onEditLead(lead)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => onConvertLead(lead)}>
                <Users className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Phone className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredLeads.map((lead) => (
        <motion.div
          key={lead.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          whileHover={{ y: -2 }}
          onClick={() => onEditLead(lead)}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {lead.name.charAt(0)}
            </div>
            <div className="flex items-center space-x-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(lead.score)} bg-gray-50`}>
                {lead.score}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-1">{lead.name}</h3>
          <p className="text-sm text-gray-300 mb-3">{lead.company}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <span>{lead.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4" />
              <span>{lead.phone}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
              {lead.status}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(lead.priority)}`}>
              {lead.priority}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white">
              {formatCurrency(lead.potentialValue, lead.currency)}
            </span>
            <div className="flex space-x-1">
              <Button size="sm" variant="ghost">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Users className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Leads Management</h2>
          <p className="text-gray-300">Manage and nurture your leads effectively</p>
        </div>
        <Button onClick={onAddLead} className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add New Lead
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as LeadStatus | 'All')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
              <option value="On Hold">On Hold</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as 'All' | 'High' | 'Medium' | 'Low')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Source</label>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value as LeadSource | 'All')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Sources</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="PPC">PPC</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Facebook Ads">Facebook Ads</option>
              <option value="Email Campaign">Email Campaign</option>
              <option value="Cold Outreach">Cold Outreach</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">View</label>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('timeline')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-l-lg transition-colors ${
                  viewMode === 'timeline' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-400 hover:bg-gray-50'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-r-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-400 hover:bg-gray-50'
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            {filteredLeads.length} Lead{filteredLeads.length !== 1 ? 's' : ''} Found
          </h3>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {filteredLeads.length === 0 ? (
          <div className="text-center py-12">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No leads found</h3>
            <p className="text-gray-300 mb-4">Try adjusting your filters or add a new lead.</p>
            <Button onClick={onAddLead}>
              <Plus className="h-4 w-4 mr-2" />
              Add New Lead
            </Button>
          </div>
        ) : (
          viewMode === 'timeline' ? <TimelineView /> : <GridView />
        )}
      </div>
    </div>
  );
};

export default LeadsModule; 