// Enhanced CRM Types

export interface Service {
  id: string;
  name: string;
  category: 'Web Development' | 'Digital Marketing' | 'Design' | 'SEO' | 'PPC' | 'Social Media' | 'Content Creation';
  description: string;
  basePrice: number;
  currency: 'INR' | 'USD';
  isActive: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: 'Website' | 'Referral' | 'Social Media' | 'PPC' | 'Cold Outreach' | 'LinkedIn' | 'Google Ads';
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Negotiation' | 'Won' | 'Lost';
  priority: 'High' | 'Medium' | 'Low';
  value: number;
  currency: 'INR' | 'USD';
  services: string[]; // Service IDs
  assignedTo?: string;
  lastContact: string;
  nextFollowUp?: string;
  notes: string;
  timeline: LeadTimelineItem[];
  createdAt: string;
  updatedAt: string;
}

export interface LeadTimelineItem {
  id: string;
  type: 'status_change' | 'note' | 'call' | 'email' | 'meeting' | 'proposal_sent' | 'follow_up';
  title: string;
  description: string;
  timestamp: string;
  userId: string;
  userName: string;
  metadata?: any;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'admin' | 'client';
  receiverId: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  attachments?: string[];
}

export interface ChatRoom {
  id: string;
  participants: string[];
  lastMessage?: ChatMessage;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  amount: number;
  currency: 'INR' | 'USD';
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue' | 'Cancelled';
  dueDate: string;
  issueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  notes: string;
  terms: string;
  pdfUrl?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Proposal {
  id: string;
  proposalNumber: string;
  clientId: string;
  clientName: string;
  title: string;
  description: string;
  services: ProposalService[];
  totalAmount: number;
  currency: 'INR' | 'USD';
  status: 'Draft' | 'Sent' | 'Accepted' | 'Rejected' | 'Expired';
  validUntil: string;
  issueDate: string;
  terms: string;
  pdfUrl?: string;
}

export interface ProposalService {
  serviceId: string;
  serviceName: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Quotation {
  id: string;
  quotationNumber: string;
  clientId: string;
  clientName: string;
  title: string;
  description: string;
  services: QuotationService[];
  totalAmount: number;
  currency: 'INR' | 'USD';
  status: 'Draft' | 'Sent' | 'Accepted' | 'Rejected' | 'Expired';
  validUntil: string;
  issueDate: string;
  terms: string;
  pdfUrl?: string;
}

export interface QuotationService {
  serviceId: string;
  serviceName: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  gstNumber?: string;
  avatar?: string;
  status: 'Active' | 'Inactive' | 'Prospect';
  source: 'Website' | 'Referral' | 'Social Media' | 'PPC' | 'Cold Outreach';
  assignedTo?: string;
  totalRevenue: number;
  currency: 'INR' | 'USD';
  lastContact: string;
  notes: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  clientId: string;
  clientName: string;
  description: string;
  status: 'Planning' | 'In Progress' | 'Review' | 'Completed' | 'On Hold' | 'Cancelled';
  progress: number;
  startDate: string;
  dueDate: string;
  budget: number;
  currency: 'INR' | 'USD';
  spent: number;
  team: string[];
  services: string[];
  milestones: ProjectMilestone[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Delayed';
  completedDate?: string;
}

export interface ApprovalItem {
  id: string;
  clientId: string;
  clientName: string;
  projectId?: string;
  type: 'design' | 'article' | 'social-media' | 'website' | 'logo' | 'branding' | 'other';
  title: string;
  description: string;
  fileUrl: string;
  status: 'pending' | 'approved' | 'rejected' | 'revision_requested';
  uploadedAt: string;
  dueDate: string;
  agencyComments?: string;
  clientComments?: string;
  revisionCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'Email' | 'PPC' | 'Social' | 'Content' | 'SEO' | 'Display';
  status: 'Draft' | 'Running' | 'Paused' | 'Completed' | 'Cancelled';
  budget: number;
  currency: 'INR' | 'USD';
  spent: number;
  leads: number;
  conversions: number;
  startDate: string;
  endDate: string;
  description: string;
  targetAudience: string;
  channels: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'sales' | 'designer' | 'developer' | 'client';
  avatar?: string;
  phone?: string;
  company?: string;
  isActive: boolean;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalRevenue: number;
  totalLeads: number;
  totalClients: number;
  activeProjects: number;
  pendingApprovals: number;
  overdueInvoices: number;
  conversionRate: number;
  monthlyGrowth: number;
  currency: 'INR' | 'USD';
}

export interface Notification {
  id: string;
  userId: string;
  type: 'lead' | 'approval' | 'invoice' | 'project' | 'chat';
  title: string;
  message: string;
  isRead: boolean;
  timestamp: string;
  metadata?: any;
}

// PDF Template Types
export interface PDFTemplate {
  id: string;
  name: string;
  type: 'invoice' | 'proposal' | 'quotation';
  html: string;
  css: string;
  variables: string[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
} 