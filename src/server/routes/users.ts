import express from 'express';
import { getClients, createClient, updateClient, deleteClient } from '../controllers/users';
import { protect, authorize } from '../middleware/auth';
import asyncHandler from '../utils/asyncHandler';

const router = express.Router();

// Admin-only client management routes
router.route('/clients')
  .get(protect, authorize('admin'), asyncHandler(getClients))
  .post(protect, authorize('admin'), asyncHandler(createClient));

// Update and delete client user by id (admin only)
router.route('/clients/:id')
  .put(protect, authorize('admin'), asyncHandler(updateClient))
  .delete(protect, authorize('admin'), asyncHandler(deleteClient));

export default router; 