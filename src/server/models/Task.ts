import { Schema, Document, Types } from 'mongoose';

export interface ITask extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: Date;
  assignedTo: string;
}

export const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  dueDate: {
    type: Date,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
}); 