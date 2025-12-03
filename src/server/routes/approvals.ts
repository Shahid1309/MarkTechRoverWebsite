import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect } from '../middleware/auth';
import {
  getAllApprovals,
  createApproval,
  getApprovalById,
  updateApproval,
  deleteApproval,
  getApprovalsByStatus,
  getPendingApprovalsStats
} from '../controllers/approvals';

const router = express.Router();

// Get all approval items (admin only)
router.get('/', protect, asyncHandler(getAllApprovals));

// Create new approval item (admin only)
router.post('/', protect, asyncHandler(createApproval));

// Get approval item by ID (admin or the client it belongs to)
router.get('/:id', protect, asyncHandler(getApprovalById));

// Update approval item (admin only for most fields, client for status/comments)
router.put('/:id', protect, asyncHandler(updateApproval));

// Delete approval item (admin only)
router.delete('/:id', protect, asyncHandler(deleteApproval));

// Get approval items by status (admin only)
router.get('/status/:status', protect, asyncHandler(getApprovalsByStatus));

// Get pending approvals count (admin only)
router.get('/stats/pending', protect, asyncHandler(getPendingApprovalsStats));

export default router; 