import express from 'express';
import { protect, authorize } from '../middleware/auth';
import asyncHandler from 'express-async-handler';
import {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
  addTask,
  updateTask,
  deleteTask,
} from '../controllers/projects';

const router = express.Router();

// Project routes
router.route('/')
  .get(protect, asyncHandler(getProjects))
  .post(protect, authorize('admin'), asyncHandler(createProject));

router.route('/:id')
  .get(protect, asyncHandler(getProject))
  .put(protect, authorize('admin'), asyncHandler(updateProject))
  .delete(protect, authorize('admin'), asyncHandler(deleteProject));

// Task routes
router.route('/:id/tasks')
  .post(protect, authorize('admin'), asyncHandler(addTask));

router.route('/:id/tasks/:taskId')
  .put(protect, authorize('admin'), asyncHandler(updateTask))
  .delete(protect, authorize('admin'), asyncHandler(deleteTask));

export default router; 