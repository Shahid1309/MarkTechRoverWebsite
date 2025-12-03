import { Request, Response, NextFunction } from 'express';
import ApprovalItem from '../models/ApprovalItem';
import User from '../models/User';

export const getAllApprovals = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { role } = req.user;
  if (role !== 'admin') {
    res.status(403).json({ message: 'Access denied. Admin only.' });
    return;
  }
  const approvals = await ApprovalItem.find()
    .populate('clientId', 'name email company')
    .sort({ createdAt: -1 });
  res.json(approvals);
};

export const createApproval = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { role } = req.user;
  if (role !== 'admin') {
    res.status(403).json({ message: 'Access denied. Admin only.' });
    return;
  }
  const { clientId, type, title, description, fileUrl, dueDate, agencyComments } = req.body;
  const client = await User.findById(clientId);
  if (!client || client.role !== 'client') {
    res.status(400).json({ message: 'Invalid client ID' });
    return;
  }
  const approvalItem = new ApprovalItem({
    clientId,
    type,
    title,
    description,
    fileUrl,
    dueDate: new Date(dueDate),
    agencyComments
  });
  await approvalItem.save();
  const populatedItem = await approvalItem.populate('clientId', 'name email company');
  res.status(201).json({
    message: 'Approval item created successfully',
    approvalItem: populatedItem
  });
};

export const getApprovalById = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { id } = req.params;
  const { role, _id } = req.user;
  const approvalItem = await ApprovalItem.findById(id)
    .populate('clientId', 'name email company');
  if (!approvalItem) {
    res.status(404).json({ message: 'Approval item not found' });
    return;
  }
  if (role !== 'admin' && approvalItem.clientId._id.toString() !== _id.toString()) {
    res.status(403).json({ message: 'Access denied.' });
    return;
  }
  res.json(approvalItem);
};

export const updateApproval = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { id } = req.params;
  const { role, _id } = req.user;
  const { status, clientComments, title, description, dueDate, agencyComments } = req.body;
  const approvalItem = await ApprovalItem.findById(id);
  if (!approvalItem) {
    res.status(404).json({ message: 'Approval item not found' });
    return;
  }
  if (role === 'client') {
    if (approvalItem.clientId.toString() !== _id.toString()) {
      res.status(403).json({ message: 'Access denied.' });
      return;
    }
    if (status) approvalItem.status = status;
    if (clientComments !== undefined) approvalItem.clientComments = clientComments;
  } else if (role === 'admin') {
    if (title) approvalItem.title = title;
    if (description) approvalItem.description = description;
    if (dueDate) approvalItem.dueDate = new Date(dueDate);
    if (agencyComments !== undefined) approvalItem.agencyComments = agencyComments;
    if (status) approvalItem.status = status;
  }
  await approvalItem.save();
  const populatedItem = await approvalItem.populate('clientId', 'name email company');
  res.json({
    message: 'Approval item updated successfully',
    approvalItem: populatedItem
  });
};

export const deleteApproval = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { role } = req.user;
  if (role !== 'admin') {
    res.status(403).json({ message: 'Access denied. Admin only.' });
    return;
  }
  const { id } = req.params;
  const approvalItem = await ApprovalItem.findById(id);
  if (!approvalItem) {
    res.status(404).json({ message: 'Approval item not found' });
    return;
  }
  await ApprovalItem.findByIdAndDelete(id);
  res.json({ message: 'Approval item deleted successfully' });
};

export const getApprovalsByStatus = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { role } = req.user;
  const { status } = req.params;
  if (role !== 'admin') {
    res.status(403).json({ message: 'Access denied. Admin only.' });
    return;
  }
  const approvals = await ApprovalItem.find({ status })
    .populate('clientId', 'name email company')
    .sort({ createdAt: -1 });
  res.json(approvals);
};

export const getPendingApprovalsStats = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { role } = req.user;
  if (role !== 'admin') {
    res.status(403).json({ message: 'Access denied. Admin only.' });
    return;
  }
  const pendingCount = await ApprovalItem.countDocuments({ status: 'pending' });
  const overdueCount = await ApprovalItem.countDocuments({
    status: 'pending',
    dueDate: { $lt: new Date() }
  });
  res.json({
    pending: pendingCount,
    overdue: overdueCount
  });
}; 