import mongoose from 'mongoose';

export interface IApprovalItem extends mongoose.Document {
  clientId: mongoose.Types.ObjectId;
  type: 'design' | 'article' | 'social-media' | 'website' | 'other';
  title: string;
  description: string;
  fileUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  uploadedAt: Date;
  dueDate: Date;
  agencyComments?: string;
  clientComments?: string;
  createdAt: Date;
  updatedAt: Date;
}

const approvalItemSchema = new mongoose.Schema<IApprovalItem>({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['design', 'article', 'social-media', 'website', 'other'],
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true
  },
  agencyComments: {
    type: String,
    trim: true
  },
  clientComments: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
approvalItemSchema.index({ clientId: 1, status: 1 });
approvalItemSchema.index({ status: 1, dueDate: 1 });

export default mongoose.model<IApprovalItem>('ApprovalItem', approvalItemSchema); 