import mongoose from 'mongoose';
import { IUser } from './User';

interface ITask {
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: Date;
}

interface IDesign {
  title: string;
  fileUrl: string;
  uploadedAt: Date;
}

interface IInvoice {
  amount: number;
  status: 'pending' | 'paid';
  dueDate: Date;
  description: string;
}

export interface IProject extends mongoose.Document {
  title: string;
  description: string;
  client: IUser['_id'];
  status: 'active' | 'completed' | 'on-hold';
  tasks: ITask[];
  designs: IDesign[];
  invoices: IInvoice[];
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a task title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a task description'],
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  dueDate: {
    type: Date,
  },
});

const DesignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a design title'],
  },
  fileUrl: {
    type: String,
    required: [true, 'Please add a file URL'],
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const InvoiceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, 'Please add an invoice amount'],
  },
  status: {
    type: String,
    enum: ['pending', 'paid'],
    default: 'pending',
  },
  dueDate: {
    type: Date,
    required: [true, 'Please add a due date'],
  },
  description: {
    type: String,
    required: [true, 'Please add an invoice description'],
  },
});

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a project description'],
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'on-hold'],
    default: 'active',
  },
  tasks: [TaskSchema],
  designs: [DesignSchema],
  invoices: [InvoiceSchema],
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
}, {
  timestamps: true,
});

export default mongoose.model<IProject>('Project', ProjectSchema); 