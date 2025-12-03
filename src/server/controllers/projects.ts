import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project';
import { ITask } from '../models/Task';
import { Types } from 'mongoose';

// @desc    Get all projects for a client or admin
// @route   GET /api/projects
// @access  Private
export const getProjects = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const projects = await Project.find().populate('tasks');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

// @desc    Get a single project
// @route   GET /api/projects/:id
// @access  Private
export const getProject = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id).populate('tasks');
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project' });
  }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Private/Admin
export const createProject = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error creating project' });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin
export const updateProject = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error updating project' });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
export const deleteProject = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project' });
  }
};

// @desc    Add task to project
// @route   POST /api/projects/:id/tasks
// @access  Private/Admin
export const addTask = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    const taskData = {
      _id: new Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
      assignedTo: req.body.assignedTo,
    } as ITask;

    project.tasks.push(taskData);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error adding task' });
  }
};

// @desc    Update task in project
// @route   PUT /api/projects/:id/tasks/:taskId
// @access  Private
export const updateTask = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    const taskIndex = project.tasks.findIndex(
      task => (task as ITask)._id.toString() === req.params.taskId
    );

    if (taskIndex === -1) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    project.tasks[taskIndex] = {
      ...project.tasks[taskIndex],
      ...req.body,
    } as ITask;

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error updating task' });
  }
};

// @desc    Delete task from project
// @route   DELETE /api/projects/:id/tasks/:taskId
// @access  Private/Admin
export const deleteTask = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    project.tasks = project.tasks.filter(task => (task as ITask)._id.toString() !== req.params.taskId);
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};

// @desc    Add design to project
// @route   POST /api/projects/:id/designs
// @access  Private/Admin
export const addDesign = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({
        success: false,
        error: 'Project not found',
      });
      return;
    }

    project.designs.push(req.body);
    await project.save();

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err: unknown) {
    res.status(400).json({
      success: false,
      error: err instanceof Error ? err.message : 'Error adding design',
    });
  }
};

// @desc    Add invoice to project
// @route   POST /api/projects/:id/invoices
// @access  Private/Admin
export const addInvoice = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({
        success: false,
        error: 'Project not found',
      });
      return;
    }

    project.invoices.push(req.body);
    await project.save();

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err: unknown) {
    res.status(400).json({
      success: false,
      error: err instanceof Error ? err.message : 'Error adding invoice',
    });
  }
}; 