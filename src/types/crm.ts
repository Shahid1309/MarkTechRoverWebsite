// Agency CRM Types - Comprehensive System

// ===== CORE ENTITIES =====

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'admin' | 'manager' | 'executive' | 'client';
  permissions: string[];
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Agency {
  id: string;
  name: string;
  logo?: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  gstNumber?: string;
  bankDetails?: BankDetails;
  settings: AgencySettings;
}

export interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  accountHolderName: string;
}

export interface AgencySettings {
  currency: 'INR' | 'USD';
  timezone: string;
  workingHours: {
    start: string;
    end: string;
  };
  autoReminders: boolean;
  emailNotifications: boolean;
  whatsappNotifications: boolean;
}

// ===== LEADS MODULE =====

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  position?: string;
  website?: string;
  source: LeadSource;
  niche: string;
  potentialValue: number;
  currency: 'INR' | 'USD';
  score: number; // AI-calculated lead score
  status: LeadStatus;
  priority: 'High' | 'Medium' | 'Low';
  assignedTo?: string;
  services: string[]; // Service IDs
  tags: string[];
  lastContact: string;
  nextFollowUp?: string;
  notes: string;
  timeline: LeadTimelineItem[];
  nurturingSuggestions: NurturingSuggestion[];
  conversionProbability: number; // 0-100
  createdAt: string;
  updatedAt: string;
}

export type LeadSource = 
  | 'Website' | 'Referral' | 'Social Media' | 'PPC' | 'Cold Outreach' 
  | 'LinkedIn' | 'Google Ads' | 'Facebook Ads' | 'Instagram' | 'Email Campaign'
  | 'Trade Show' | 'Direct Call' | 'Other';

export type LeadStatus = 
  | 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Negotiation' 
  | 'Won' | 'Lost' | 'On Hold' | 'Rejected';

export interface LeadTimelineItem {
  id: string;
  type: 'status_change' | 'note' | 'call' | 'email' | 'meeting' | 'proposal_sent' | 'follow_up' | 'conversion';
  title: string;
  description: string;
  timestamp: string;
  userId: string;
  userName: string;
  metadata?: {
    duration?: number; // for calls
    emailSubject?: string; // for emails
    meetingType?: string; // for meetings
    proposalValue?: number; // for proposals
  };
}

export interface NurturingSuggestion {
  id: string;
  type: 'contact_time' | 'urgency_score' | 'content_suggestion' | 'follow_up_reminder';
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  suggestedAction: string;
  aiConfidence: number; // 0-100
}

// ===== CLIENTS MODULE =====

export interface Client {
  id: string;
  leadId?: string; // If converted from lead
  name: string;
  email: string;
  phone: string;
  company: string;
  position?: string;
  website?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  gstNumber?: string;
  avatar?: string;
  status: 'Active' | 'Inactive' | 'Prospect';
  source: LeadSource;
  assignedTo?: string;
  totalRevenue: number;
  currency: 'INR' | 'USD';
  lastContact: string;
  notes: string;
  tags: string[];
  kycStatus: 'Pending' | 'Completed' | 'Verified';
  kycData?: KYCData;
  communicationPreferences: {
    email: boolean;
    whatsapp: boolean;
    sms: boolean;
    calls: boolean;
  };
  onboardingCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface KYCData {
  businessType: string;
  industry: string;
  employeeCount: number;
  annualRevenue: number;
  businessRegistration: string;
  taxId: string;
  documents: KYCDocument[];
}

export interface KYCDocument {
  id: string;
  type: 'pan_card' | 'aadhar' | 'gst_certificate' | 'business_license' | 'bank_statement';
  name: string;
  fileUrl: string;
  uploadedAt: string;
  verified: boolean;
}

// ===== PROJECTS MODULE =====

export interface Project {
  id: string;
  name: string;
  clientId: string;
  clientName: string;
  description: string;
  status: ProjectStatus;
  progress: number; // 0-100
  startDate: string;
  dueDate: string;
  actualEndDate?: string;
  budget: number;
  currency: 'INR' | 'USD';
  spent: number;
  team: string[]; // User IDs
  services: string[]; // Service IDs
  milestones: ProjectMilestone[];
  tasks: ProjectTask[];
  files: ProjectFile[];
  timeEstimates: TimeEstimate[];
  clientFeedback: ClientFeedback[];
  internalNotes: string;
  createdAt: string;
  updatedAt: string;
}

export type ProjectStatus = 
  | 'Planning' | 'In Progress' | 'Client Review' | 'Team Update Needed' 
  | 'Completed' | 'On Hold' | 'Cancelled' | 'Delayed';

export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Delayed';
  completedDate?: string;
  assignedTo?: string;
  dependencies?: string[]; // Other milestone IDs
}

export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  status: 'Todo' | 'In Progress' | 'Review' | 'Completed';
  priority: 'High' | 'Medium' | 'Low';
  assignedTo?: string;
  dueDate?: string;
  completedDate?: string;
  timeSpent: number; // in minutes
  estimatedTime: number; // in minutes
  tags: string[];
  checklist: TaskChecklist[];
}

export interface TaskChecklist {
  id: string;
  title: string;
  completed: boolean;
  completedBy?: string;
  completedAt?: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  type: 'document' | 'image' | 'video' | 'design' | 'other';
  fileUrl: string;
  uploadedBy: string;
  uploadedAt: string;
  size: number;
  approvalStatus: 'Pending' | 'Approved' | 'Rejected' | 'Revision Requested';
  clientComments?: string;
  internalComments?: string;
}

export interface TimeEstimate {
  id: string;
  serviceId: string;
  serviceName: string;
  estimatedHours: number;
  actualHours: number;
  teamMemberId: string;
  teamMemberName: string;
  date: string;
}

export interface ClientFeedback {
  id: string;
  type: 'general' | 'design' | 'content' | 'technical';
  feedback: string;
  rating: number; // 1-5
  submittedAt: string;
  respondedTo: boolean;
  response?: string;
  responseAt?: string;
}

// ===== CAMPAIGNS MODULE =====

export interface Campaign {
  id: string;
  name: string;
  clientId: string;
  clientName: string;
  type: CampaignType;
  status: 'Planning' | 'Active' | 'Paused' | 'Completed' | 'Cancelled';
  platforms: CampaignPlatform[];
  goals: CampaignGoal[];
  budget: number;
  currency: 'INR' | 'USD';
  spent: number;
  startDate: string;
  endDate?: string;
  description: string;
  targetAudience: TargetAudience;
  team: string[]; // User IDs
  creatives: CampaignCreative[];
  performance: CampaignPerformance;
  abTests: ABTest[];
  scripts: CampaignScript[];
  createdAt: string;
  updatedAt: string;
}

export type CampaignType = 
  | 'Google Ads' | 'Facebook Ads' | 'Instagram Ads' | 'LinkedIn Ads' 
  | 'Email Marketing' | 'Content Marketing' | 'SEO' | 'Social Media' 
  | 'Influencer Marketing' | 'Video Marketing' | 'Display Advertising';

export interface CampaignPlatform {
  id: string;
  name: string;
  status: 'Active' | 'Paused' | 'Completed';
  budget: number;
  spent: number;
  performance: PlatformPerformance;
}

export interface PlatformPerformance {
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  cpl: number;
  roas: number;
  revenue: number;
}

export interface CampaignGoal {
  id: string;
  type: 'awareness' | 'traffic' | 'leads' | 'sales' | 'engagement';
  target: number;
  current: number;
  unit: string;
}

export interface TargetAudience {
  ageRange: string;
  gender: string;
  location: string[];
  interests: string[];
  behaviors: string[];
  customAudience?: string;
}

export interface CampaignCreative {
  id: string;
  name: string;
  type: 'image' | 'video' | 'carousel' | 'story' | 'text';
  fileUrl: string;
  platform: string;
  status: 'Draft' | 'Approved' | 'Live' | 'Paused';
  performance: CreativePerformance;
  createdAt: string;
}

export interface CreativePerformance {
  impressions: number;
  clicks: number;
  ctr: number;
  engagement: number;
  conversions: number;
}

export interface CampaignPerformance {
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  cpl: number;
  roas: number;
  revenue: number;
  costPerResult: number;
  reach: number;
  frequency: number;
}

export interface ABTest {
  id: string;
  name: string;
  type: 'creative' | 'audience' | 'placement' | 'ad_copy';
  variants: ABTestVariant[];
  status: 'Running' | 'Completed' | 'Paused';
  winner?: string;
  confidence: number;
  startDate: string;
  endDate?: string;
}

export interface ABTestVariant {
  id: string;
  name: string;
  performance: ABTestPerformance;
  isControl: boolean;
}

export interface ABTestPerformance {
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  cpl: number;
  roas: number;
}

export interface CampaignScript {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Delayed';
  fileUrl?: string;
  feedback?: string;
}

// ===== INVOICE MODULE =====

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  projectId?: string;
  projectName?: string;
  type: 'invoice' | 'quote' | 'proposal';
  status: InvoiceStatus;
  amount: number;
  currency: 'INR' | 'USD';
  tax: number;
  total: number;
  dueDate: string;
  issueDate: string;
  paidDate?: string;
  items: InvoiceItem[];
  notes: string;
  terms: string;
  paymentMethod?: PaymentMethod;
  paymentGateway?: string;
  transactionId?: string;
  reminders: InvoiceReminder[];
  pdfUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export type InvoiceStatus = 'Draft' | 'Sent' | 'Paid' | 'Overdue' | 'Disputed' | 'Cancelled';

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  serviceId?: string;
  projectMilestoneId?: string;
}

export interface PaymentMethod {
  type: 'razorpay' | 'stripe' | 'bank_transfer' | 'cash' | 'cheque';
  details: any;
  transactionId?: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface InvoiceReminder {
  id: string;
  type: 'email' | 'whatsapp' | 'sms';
  sentAt: string;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  response?: string;
}

// ===== APPROVALS MODULE =====

export interface ApprovalItem {
  id: string;
  clientId: string;
  clientName: string;
  projectId?: string;
  projectName?: string;
  type: ApprovalType;
  title: string;
  description: string;
  fileUrl?: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Revision Requested';
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  submittedAt: string;
  approvedAt?: string;
  approvedBy?: string;
  clientComments?: string;
  agencyComments?: string;
  revisionCount: number;
  previousVersions: ApprovalVersion[];
  notifications: ApprovalNotification[];
  createdAt: string;
  updatedAt: string;
}

export type ApprovalType = 
  | 'creative' | 'copy' | 'timeline' | 'payment' | 'design' | 'content' 
  | 'website' | 'logo' | 'branding' | 'social_media' | 'video' | 'other';

export interface ApprovalVersion {
  id: string;
  version: number;
  fileUrl: string;
  submittedAt: string;
  comments?: string;
}

export interface ApprovalNotification {
  id: string;
  type: 'email' | 'whatsapp' | 'sms' | 'in_app';
  sentAt: string;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  recipient: string;
}

// ===== CHAT MODULE =====

export interface ChatRoom {
  id: string;
  name: string;
  type: 'internal' | 'client' | 'project';
  participants: string[]; // User IDs
  projectId?: string;
  clientId?: string;
  lastMessage?: ChatMessage;
  unreadCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  senderRole: 'admin' | 'manager' | 'executive' | 'client';
  message: string;
  type: 'text' | 'file' | 'voice' | 'image' | 'task';
  attachments?: ChatAttachment[];
  mentions?: string[]; // User IDs
  taskCreated?: string; // Task ID if auto-created
  isRead: boolean;
  timestamp: string;
}

export interface ChatAttachment {
  id: string;
  name: string;
  type: 'file' | 'image' | 'voice' | 'document';
  fileUrl: string;
  size: number;
  mimeType: string;
}

// ===== ANALYTICS MODULE =====

export interface Analytics {
  overview: AnalyticsOverview;
  performance: PerformanceMetrics;
  team: TeamAnalytics;
  projects: ProjectAnalytics;
  campaigns: CampaignAnalytics;
  financial: FinancialAnalytics;
  customReports: CustomReport[];
}

export interface AnalyticsOverview {
  totalRevenue: number;
  totalLeads: number;
  totalClients: number;
  activeProjects: number;
  conversionRate: number;
  averageProjectValue: number;
  monthlyGrowth: number;
  topPerformingServices: TopPerformingService[];
}

export interface TopPerformingService {
  serviceId: string;
  serviceName: string;
  revenue: number;
  projects: number;
  conversionRate: number;
}

export interface PerformanceMetrics {
  leadSources: LeadSourcePerformance[];
  conversionFunnel: ConversionFunnel;
  teamProductivity: TeamProductivity[];
  projectTimeline: ProjectTimelineMetrics;
}

export interface LeadSourcePerformance {
  source: LeadSource;
  leads: number;
  conversions: number;
  conversionRate: number;
  revenue: number;
  cost: number;
  roi: number;
}

export interface ConversionFunnel {
  stages: ConversionStage[];
  dropOffRates: DropOffRate[];
}

export interface ConversionStage {
  stage: string;
  count: number;
  conversionRate: number;
}

export interface DropOffRate {
  fromStage: string;
  toStage: string;
  rate: number;
}

export interface TeamProductivity {
  userId: string;
  userName: string;
  role: string;
  tasksCompleted: number;
  averageTaskTime: number;
  projectsCompleted: number;
  revenueGenerated: number;
  clientSatisfaction: number;
}

export interface ProjectTimelineMetrics {
  averageProjectDuration: number;
  onTimeDelivery: number;
  delayedProjects: number;
  averageDelay: number;
}

export interface TeamAnalytics {
  productivity: TeamProductivity[];
  workload: WorkloadDistribution[];
  performance: PerformanceComparison[];
}

export interface WorkloadDistribution {
  userId: string;
  userName: string;
  activeProjects: number;
  pendingTasks: number;
  completedTasks: number;
  utilization: number; // 0-100
}

export interface PerformanceComparison {
  metric: string;
  current: number;
  previous: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export interface ProjectAnalytics {
  costVsRevenue: CostRevenueAnalysis[];
  profitability: ProfitabilityAnalysis[];
  timeline: TimelineAnalysis[];
}

export interface CostRevenueAnalysis {
  projectId: string;
  projectName: string;
  cost: number;
  revenue: number;
  profit: number;
  margin: number;
}

export interface ProfitabilityAnalysis {
  serviceId: string;
  serviceName: string;
  averageProfit: number;
  profitMargin: number;
  projectCount: number;
}

export interface TimelineAnalysis {
  month: string;
  projectsStarted: number;
  projectsCompleted: number;
  averageDuration: number;
}

export interface CampaignAnalytics {
  performance: CampaignPerformanceMetrics[];
  roi: ROIAnalysis[];
  platformComparison: PlatformComparison[];
}

export interface CampaignPerformanceMetrics {
  campaignId: string;
  campaignName: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  cpl: number;
  roas: number;
  revenue: number;
}

export interface ROIAnalysis {
  campaignId: string;
  campaignName: string;
  spend: number;
  revenue: number;
  roi: number;
  cpl: number;
  roas: number;
}

export interface PlatformComparison {
  platform: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  cpl: number;
  roas: number;
}

export interface FinancialAnalytics {
  revenue: RevenueAnalysis;
  expenses: ExpenseAnalysis;
  profitability: ProfitabilityMetrics;
  cashFlow: CashFlowAnalysis;
}

export interface RevenueAnalysis {
  monthly: MonthlyRevenue[];
  byService: ServiceRevenue[];
  byClient: ClientRevenue[];
  growth: RevenueGrowth;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  growth: number;
}

export interface ServiceRevenue {
  serviceId: string;
  serviceName: string;
  revenue: number;
  percentage: number;
}

export interface ClientRevenue {
  clientId: string;
  clientName: string;
  revenue: number;
  projects: number;
}

export interface RevenueGrowth {
  currentMonth: number;
  previousMonth: number;
  growth: number;
  trend: 'up' | 'down' | 'stable';
}

export interface ExpenseAnalysis {
  categories: ExpenseCategory[];
  monthly: MonthlyExpense[];
  trends: ExpenseTrends;
}

export interface ExpenseCategory {
  category: string;
  amount: number;
  percentage: number;
}

export interface MonthlyExpense {
  month: string;
  amount: number;
  growth: number;
}

export interface ExpenseTrends {
  totalExpenses: number;
  averageMonthly: number;
  trend: 'up' | 'down' | 'stable';
}

export interface ProfitabilityMetrics {
  grossProfit: number;
  netProfit: number;
  profitMargin: number;
  ebitda: number;
}

export interface CashFlowAnalysis {
  inflows: number;
  outflows: number;
  netCashFlow: number;
  cashPosition: number;
}

export interface CustomReport {
  id: string;
  name: string;
  description: string;
  type: 'revenue' | 'leads' | 'projects' | 'campaigns' | 'team' | 'custom';
  filters: ReportFilter[];
  metrics: string[];
  schedule?: ReportSchedule;
  recipients: string[];
  lastGenerated?: string;
  createdAt: string;
}

export interface ReportFilter {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'between';
  value: any;
  value2?: any;
}

export interface ReportSchedule {
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  dayOfWeek?: number; // 0-6 for weekly
  dayOfMonth?: number; // 1-31 for monthly
  time: string; // HH:MM
  timezone: string;
}

// ===== SERVICES & WORKFLOWS =====

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  basePrice: number;
  currency: 'INR' | 'USD';
  isActive: boolean;
  estimatedDuration: number; // in days
  requirements: ServiceRequirement[];
  deliverables: ServiceDeliverable[];
  workflow: WorkflowStep[];
}

export type ServiceCategory = 
  | 'Web Development' | 'Digital Marketing' | 'Design' | 'SEO' | 'PPC' 
  | 'Social Media' | 'Content Creation' | 'Video Production' | 'Branding' 
  | 'Consulting' | 'Analytics' | 'Automation';

export interface ServiceRequirement {
  id: string;
  title: string;
  description: string;
  isRequired: boolean;
  type: 'text' | 'file' | 'url' | 'choice';
  options?: string[];
}

export interface ServiceDeliverable {
  id: string;
  title: string;
  description: string;
  type: 'file' | 'url' | 'access' | 'report';
  format?: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedDuration: number; // in days
  assignedRole: string;
  dependencies?: string[]; // Other step IDs
  deliverables: string[]; // Deliverable IDs
  checklist: WorkflowChecklist[];
}

export interface WorkflowChecklist {
  id: string;
  title: string;
  description: string;
  isRequired: boolean;
  order: number;
}

// ===== NOTIFICATIONS & ALERTS =====

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  category: 'lead' | 'project' | 'campaign' | 'invoice' | 'approval' | 'chat' | 'system';
  isRead: boolean;
  actionUrl?: string;
  metadata?: any;
  timestamp: string;
}

export type NotificationType = 
  | 'lead_assigned' | 'lead_converted' | 'project_update' | 'milestone_completed'
  | 'approval_required' | 'invoice_overdue' | 'campaign_performance' | 'task_assigned'
  | 'message_received' | 'system_alert' | 'reminder' | 'achievement';

export interface Alert {
  id: string;
  name: string;
  description: string;
  type: 'threshold' | 'trend' | 'anomaly' | 'deadline';
  condition: AlertCondition;
  actions: AlertAction[];
  isActive: boolean;
  lastTriggered?: string;
  createdAt: string;
}

export interface AlertCondition {
  metric: string;
  operator: 'greater_than' | 'less_than' | 'equals' | 'not_equals' | 'contains';
  value: any;
  timeframe?: string; // e.g., '24h', '7d', '30d'
}

export interface AlertAction {
  type: 'email' | 'notification' | 'webhook' | 'sms' | 'whatsapp';
  target: string;
  message: string;
}

// ===== AUDIT & LOGS =====

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  entityType: string;
  entityId: string;
  oldValues?: any;
  newValues?: any;
  ipAddress?: string;
  userAgent?: string;
  timestamp: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  activity: string;
  details: string;
  category: 'create' | 'update' | 'delete' | 'view' | 'export' | 'login' | 'logout';
  entityType?: string;
  entityId?: string;
  timestamp: string;
}

// ===== API RESPONSES =====

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

// ===== DASHBOARD TYPES =====

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
  recentActivity: RecentActivity[];
  upcomingDeadlines: UpcomingDeadline[];
  performanceAlerts: PerformanceAlert[];
}

export interface RecentActivity {
  id: string;
  type: 'lead' | 'project' | 'campaign' | 'invoice' | 'approval';
  title: string;
  description: string;
  timestamp: string;
  userId: string;
  userName: string;
  entityId: string;
}

export interface UpcomingDeadline {
  id: string;
  type: 'project' | 'milestone' | 'task' | 'invoice' | 'approval';
  title: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  entityId: string;
  assignedTo?: string;
}

export interface PerformanceAlert {
  id: string;
  type: 'threshold' | 'trend' | 'anomaly';
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  metric: string;
  currentValue: number;
  threshold: number;
  timestamp: string;
} 