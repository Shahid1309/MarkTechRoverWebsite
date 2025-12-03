import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus, Phone, Mail, Calendar, FileText, Send,
  CheckCircle, XCircle, Clock, ArrowRight, Plus,
  Edit, Trash2, MessageSquare, DollarSign, Tag,
  Building, MapPin, Globe, Target, Zap, Palette,
  Code, Megaphone, PenTool, Monitor
} from 'lucide-react';
import Button from '../ui/Button';
import { Lead, LeadTimelineItem, Service } from '../../types';

interface LeadTimelineProps {
  lead: Lead;
  services: Service[];
  onUpdateLead: (leadId: string, updates: Partial<Lead>) => void;
  onAddTimelineItem: (leadId: string, item: Omit<LeadTimelineItem, 'id'>) => void;
}

const LeadTimeline: React.FC<LeadTimelineProps> = ({
  lead,
  services,
  onUpdateLead,
  onAddTimelineItem
}) => {
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState({
    type: 'note' as const,
    title: '',
    description: '',
    metadata: {}
  });

  const statusOptions = [
    { value: 'New', label: 'New', color: 'bg-blue-100 text-blue-800' },
    { value: 'Contacted', label: 'Contacted', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'Qualified', label: 'Qualified', color: 'bg-green-100 text-green-800' },
    { value: 'Proposal Sent', label: 'Proposal Sent', color: 'bg-purple-100 text-purple-800' },
    { value: 'Negotiation', label: 'Negotiation', color: 'bg-orange-100 text-orange-800' },
    { value: 'Won', label: 'Won', color: 'bg-emerald-100 text-emerald-800' },
    { value: 'Lost', label: 'Lost', color: 'bg-red-100 text-red-800' }
  ];

  const priorityOptions = [
    { value: 'High', label: 'High', color: 'text-red-600' },
    { value: 'Medium', label: 'Medium', color: 'text-yellow-600' },
    { value: 'Low', label: 'Low', color: 'text-green-600' }
  ];

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'status_change': return <ArrowRight className="h-4 w-4" />;
      case 'note': return <FileText className="h-4 w-4" />;
      case 'call': return <Phone className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'meeting': return <Calendar className="h-4 w-4" />;
      case 'proposal_sent': return <Send className="h-4 w-4" />;
      case 'follow_up': return <Clock className="h-4 w-4" />;
      default: return <ArrowRight className="h-4 w-4" />;
    }
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

  const handleStatusChange = (newStatus: string) => {
    onUpdateLead(lead.id, { status: newStatus as any });
    
    // Add timeline item for status change
    onAddTimelineItem(lead.id, {
      type: 'status_change',
      title: `Status Changed to ${newStatus}`,
      description: `Lead status updated from ${lead.status} to ${newStatus}`,
      timestamp: new Date().toISOString(),
      userId: 'admin1',
      userName: 'Admin User'
    });
  };

  const handleAddTimelineItem = () => {
    if (!newItem.title || !newItem.description) return;
    
    onAddTimelineItem(lead.id, {
      ...newItem,
      timestamp: new Date().toISOString(),
      userId: 'admin1',
      userName: 'Admin User'
    });
    
    setNewItem({ type: 'note', title: '', description: '', metadata: {} });
    setShowAddItem(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Lead Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">
                {lead.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{lead.name}</h2>
              <p className="text-gray-300 flex items-center gap-2">
                <Building className="h-4 w-4" />
                {lead.company}
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
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
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              <MessageSquare className="h-4 w-4 mr-1" />
              Chat
            </Button>
            <Button variant="secondary" size="sm">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      {/* Lead Details */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status & Priority */}
          <div>
            <h3 className="text-sm font-medium text-white mb-2">Status</h3>
            <select
              value={lead.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-2">Priority</h3>
            <select
              value={lead.priority}
              onChange={(e) => onUpdateLead(lead.id, { priority: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {priorityOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-2">Source</h3>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <Globe className="h-4 w-4 text-gray-300" />
              <span className="text-white">{lead.source}</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-white mb-2">Services</h3>
          <div className="flex flex-wrap gap-2">
            {lead.services.map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              return service ? (
                <span key={serviceId} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {getServiceIcon(service.category)}
                  {service.name}
                </span>
              ) : null;
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-white mb-2">Notes</h3>
          <textarea
            value={lead.notes}
            onChange={(e) => onUpdateLead(lead.id, { notes: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Add notes about this lead..."
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Timeline</h3>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowAddItem(true)}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Item
          </Button>
        </div>

        {/* Add Timeline Item Form */}
        {showAddItem && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-gray-50 rounded-lg"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Type
                </label>
                <select
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="note">Note</option>
                  <option value="call">Call</option>
                  <option value="email">Email</option>
                  <option value="meeting">Meeting</option>
                  <option value="proposal_sent">Proposal Sent</option>
                  <option value="follow_up">Follow Up</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter title..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Description
                </label>
                <textarea
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter description..."
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="accent"
                  size="sm"
                  onClick={handleAddTimelineItem}
                >
                  Add Item
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowAddItem(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline Items */}
        <div className="space-y-4">
          {lead.timeline.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                {getTimelineIcon(item.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <span className="text-xs text-gray-500">
                    {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-gray-300 mt-1">{item.description}</p>
                <p className="text-xs text-gray-500 mt-2">Added by {item.userName}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadTimeline; 