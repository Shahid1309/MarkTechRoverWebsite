import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  CheckCircle, XCircle, Eye, Download, MessageSquare,
  Calendar, DollarSign, FileText, Image, Video,
  Clock, AlertCircle, CheckSquare, Star, Settings,
  Bell, Search, Filter, RefreshCw, BarChart3,
  TrendingUp, Users, Target, Mail, Phone, X, LogOut
} from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';

interface ApprovalItem {
  id: string;
  type: 'design' | 'article' | 'social-media' | 'website' | 'other';
  title: string;
  description: string;
  fileUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  uploadedAt: string;
  dueDate: string;
  comments?: string;
  agencyComments?: string;
}

interface Project {
  id: string;
  name: string;
  status: 'Planning' | 'In Progress' | 'Review' | 'Completed';
  progress: number;
  dueDate: string;
  budget: number;
  description: string;
}

interface Invoice {
  id: string;
  amount: number;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue';
  dueDate: string;
  issueDate: string;
  description: string;
}

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'approvals' | 'projects' | 'invoices' | 'messages'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<ApprovalItem | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [clientComment, setClientComment] = useState('');
  const navigate = useNavigate();
  const { authState, logout } = useAuth();

  // Mock data - in real app, this would come from API
  const [approvalItems, setApprovalItems] = useState<ApprovalItem[]>([
    {
      id: '1',
      type: 'design',
      title: 'Website Homepage Design',
      description: 'Modern homepage design with hero section and call-to-action buttons',
      fileUrl: '/uploads/design1.jpg',
      status: 'pending',
      uploadedAt: '2024-03-20',
      dueDate: '2024-03-25',
      agencyComments: 'Please review the new homepage design. We\'ve incorporated your feedback about the color scheme.'
    },
    {
      id: '2',
      type: 'article',
      title: 'Blog Post: Digital Marketing Trends 2024',
      description: 'Comprehensive article about the latest digital marketing trends',
      fileUrl: '/uploads/article1.pdf',
      status: 'approved',
      uploadedAt: '2024-03-18',
      dueDate: '2024-03-20',
      comments: 'Great article! Approved for publication.'
    },
    {
      id: '3',
      type: 'social-media',
      title: 'Instagram Campaign Graphics',
      description: 'Set of 10 Instagram posts for Q2 campaign',
      fileUrl: '/uploads/social1.zip',
      status: 'pending',
      uploadedAt: '2024-03-22',
      dueDate: '2024-03-28',
      agencyComments: 'Social media graphics ready for your review. Please check the brand consistency.'
    }
  ]);

  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'Website Redesign',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-04-15',
      budget: 15000,
      description: 'Complete website redesign with modern UI/UX'
    },
    {
      id: '2',
      name: 'Marketing Campaign',
      status: 'Review',
      progress: 90,
      dueDate: '2024-03-30',
      budget: 8000,
      description: 'Q2 digital marketing campaign'
    }
  ]);

  const [invoices] = useState<Invoice[]>([
    {
      id: 'INV-001',
      amount: 15000,
      status: 'Sent',
      dueDate: '2024-04-01',
      issueDate: '2024-03-15',
      description: 'Website Development - Phase 1'
    },
    {
      id: 'INV-002',
      amount: 8500,
      status: 'Paid',
      dueDate: '2024-03-30',
      issueDate: '2024-03-10',
      description: 'UI/UX Design Services'
    }
  ]);

  // Dashboard Stats
  const stats = {
    pendingApprovals: approvalItems.filter(item => item.status === 'pending').length,
    totalProjects: projects.length,
    activeProjects: projects.filter(p => p.status === 'In Progress').length,
    outstandingInvoices: invoices.filter(i => i.status === 'Sent').length,
    totalSpent: invoices.filter(i => i.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0)
  };

  // Utility Functions
  const handleLogout = () => {
    logout();
    navigate('/client-login');
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'approved': 'bg-green-100 text-green-800',
      'rejected': 'bg-red-100 text-red-800',
      'Planning': 'bg-purple-100 text-purple-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Review': 'bg-orange-100 text-orange-800',
      'Completed': 'bg-green-100 text-green-800',
      'Draft': 'bg-gray-100 text-gray-400',
      'Sent': 'bg-blue-100 text-blue-800',
      'Paid': 'bg-green-100 text-green-800',
      'Overdue': 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-400';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'design': return <Image className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'social-media': return <TrendingUp className="h-4 w-4" />;
      case 'website': return <BarChart3 className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const handleApprove = (itemId: string) => {
    setApprovalItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, status: 'approved' as const, comments: clientComment }
          : item
      )
    );
    setClientComment('');
    alert('Item approved successfully!');
  };

  const handleReject = (itemId: string) => {
    if (!clientComment.trim()) {
      alert('Please provide feedback when rejecting an item.');
      return;
    }
    setApprovalItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, status: 'rejected' as const, comments: clientComment }
          : item
      )
    );
    setClientComment('');
    alert('Item rejected. Feedback sent to agency.');
  };

  const handlePreview = (item: ApprovalItem) => {
    setSelectedItem(item);
    setShowPreview(true);
  };

  // Overview Tab
  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Pending Approvals</p>
              <p className="text-3xl font-bold">{stats.pendingApprovals}</p>
            </div>
            <CheckSquare className="h-8 w-8 text-yellow-200" />
          </div>
          <div className="flex items-center mt-2 text-sm text-yellow-100">
            <Clock className="h-4 w-4 mr-1" />
            {stats.pendingApprovals > 0 ? `${stats.pendingApprovals} items need review` : 'All caught up!'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Active Projects</p>
              <p className="text-3xl font-bold">{stats.activeProjects}</p>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-200" />
          </div>
          <div className="flex items-center mt-2 text-sm text-blue-200">
            <TrendingUp className="h-4 w-4 mr-1" />
            {stats.totalProjects} total projects
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Spent</p>
              <p className="text-3xl font-bold">${(stats.totalSpent / 1000).toFixed(0)}k</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-200" />
          </div>
          <div className="flex items-center mt-2 text-sm text-green-100">
            <CheckCircle className="h-4 w-4 mr-1" />
            All invoices paid
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Outstanding</p>
              <p className="text-3xl font-bold">{stats.outstandingInvoices}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-200" />
          </div>
          <div className="flex items-center mt-2 text-sm text-orange-100">
            <FileText className="h-4 w-4 mr-1" />
            Invoices pending
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Approvals</h3>
          <div className="space-y-4">
            {approvalItems.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(item.type)}
                    <p className="font-medium">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ml-4 ${getStatusColor(item.status)}`}>
                  {item.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Project Status</h3>
          <div className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{project.name}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-accent h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ml-4 ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Approvals Tab
  const ApprovalsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Approvals</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search approvals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <Button variant="secondary" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {approvalItems
          .filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <div key={item.id} className="bg-background border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getTypeIcon(item.type)}
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status.toUpperCase()}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span className="font-medium">{new Date(item.uploadedAt).toLocaleDateString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="font-medium">{new Date(item.dueDate).toLocaleDateString()}</span>
                </div>

                {item.agencyComments && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-1">Agency Comments:</p>
                    <p className="text-sm text-blue-700">{item.agencyComments}</p>
                  </div>
                )}

                {item.comments && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800 mb-1">Your Feedback:</p>
                    <p className="text-sm text-green-700">{item.comments}</p>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => handlePreview(item)}
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="flex-1"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>

              {item.status === 'pending' && (
                <div className="mt-4 pt-4 border-t border-border">
                  <textarea
                    value={clientComment}
                    onChange={(e) => setClientComment(e.target.value)}
                    placeholder="Add your feedback (optional for approval, required for rejection)..."
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                    rows={2}
                  />
                  <div className="flex space-x-2 mt-3">
                    <Button 
                      onClick={() => handleApprove(item.id)}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button 
                      onClick={() => handleReject(item.id)}
                      variant="destructive"
                      className="flex-1"
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );

  // Projects Tab
  const ProjectsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-background border border-border rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Budget:</span>
                <span className="font-medium">${project.budget.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Due Date:</span>
                <span className="font-medium">{project.dueDate}</span>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4 pt-4 border-t border-border">
              <Button variant="secondary" size="sm" className="flex-1">
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </Button>
              <Button variant="accent" size="sm" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-1" />
                Contact Agency
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Invoices Tab
  const InvoicesTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Invoices</h2>
      
      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary/30">
                <th className="px-6 py-4 text-left text-sm font-medium">Invoice ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Description</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Issue Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Due Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-secondary/20">
                  <td className="px-6 py-4 font-mono text-sm">{invoice.id}</td>
                  <td className="px-6 py-4 font-medium">{invoice.description}</td>
                  <td className="px-6 py-4 font-bold">${invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{invoice.issueDate}</td>
                  <td className="px-6 py-4 text-sm">{invoice.dueDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-secondary rounded-lg" title="Download PDF">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded-lg" title="View invoice">
                        <Eye className="h-4 w-4" />
                      </button>
                      {invoice.status === 'Sent' && (
                        <button className="p-2 hover:bg-secondary rounded-lg text-green-600" title="Pay now">
                          <DollarSign className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Messages Tab
  const MessagesTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>
      
      <div className="bg-background border border-border rounded-xl p-6">
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No messages yet</h3>
          <p className="text-muted-foreground mb-4">
            When your agency sends you messages, they'll appear here.
          </p>
          <Button variant="accent">
            <Mail className="h-4 w-4 mr-2" />
            Contact Agency
          </Button>
        </div>
      </div>
    </div>
  );

  // Tab Navigation
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'approvals', label: 'Approvals', icon: CheckSquare },
    { id: 'projects', label: 'Projects', icon: Target },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section className="pt-32 min-h-screen">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Client Dashboard</h1>
              <p className="text-muted-foreground">Review and approve your marketing materials</p>
            </div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <div className="text-right mr-4">
                <p className="text-foreground font-medium">{authState.user?.name || 'Client'}</p>
                <p className="text-muted-foreground text-sm">{authState.user?.email}</p>
              </div>
              <Button variant="secondary" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="secondary" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-1 mb-8 p-1 bg-secondary/30 rounded-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'approvals' && <ApprovalsTab />}
            {activeTab === 'projects' && <ProjectsTab />}
            {activeTab === 'invoices' && <InvoicesTab />}
            {activeTab === 'messages' && <MessagesTab />}
          </div>
        </div>
      </Section>

      {/* File Preview Modal */}
      {showPreview && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">{selectedItem.title}</h3>
              <button onClick={() => setShowPreview(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-secondary/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Description:</p>
                <p>{selectedItem.description}</p>
              </div>
              
              <div className="bg-secondary/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">File Preview:</p>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    File preview would be displayed here
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedItem.fileUrl}
                  </p>
                </div>
              </div>

              {selectedItem.agencyComments && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 mb-2">Agency Comments:</p>
                  <p className="text-blue-700">{selectedItem.agencyComments}</p>
                </div>
              )}
            </div>
            
            <div className="flex space-x-3 mt-6">
              <Button variant="secondary" onClick={() => setShowPreview(false)} className="flex-1">
                Close
              </Button>
              <Button className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download File
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ClientDashboard; 