import { Request, Response } from 'express';
import User from '../models/User.js';

// @desc    Get all client users
// @route   GET /api/users/clients
// @access  Admin
export const getClients = async (_req: Request, res: Response) => {
  try {
    const clients = await User.find({ role: 'client' }).select('-password');
    res.status(200).json({ success: true, clients });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
};

// @desc    Create a new client user
// @route   POST /api/users/clients
// @access  Admin
export const createClient = async (req: Request, res: Response) => {
  try {
    const { name, email, password, company } = req.body;
    if (!name || !email || !password || !company) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }
    const client = await User.create({
      name,
      email,
      password,
      role: 'client',
      company,
    });
    res.status(201).json({ success: true, client: { id: client._id, name: client.name, email: client.email, company: client.company } });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
};

// @desc    Update a client user
// @route   PUT /api/users/clients/:id
// @access  Admin
export const updateClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, company, password } = req.body;
    const updateFields: any = {};
    if (name) updateFields.name = name;
    if (email) updateFields.email = email;
    if (company) updateFields.company = company;
    if (password) updateFields.password = password;
    let client = await User.findOne({ _id: id, role: 'client' });
    if (!client) {
      return res.status(404).json({ success: false, error: 'Client not found' });
    }
    // If password is being updated, set it and let pre-save hook hash it
    if (password) {
      client.password = password;
      if (name) client.name = name;
      if (email) client.email = email;
      if (company) client.company = company;
      await client.save();
    } else {
      client = await User.findByIdAndUpdate(id, updateFields, { new: true, runValidators: true });
    }
    res.status(200).json({ success: true, client: { id: client!._id, name: client!.name, email: client!.email, company: client!.company } });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
};

// @desc    Delete a client user
// @route   DELETE /api/users/clients/:id
// @access  Admin
export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const client = await User.findOneAndDelete({ _id: id, role: 'client' });
    if (!client) {
      return res.status(404).json({ success: false, error: 'Client not found' });
    }
    res.status(200).json({ success: true, message: 'Client deleted' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
};

// (Optional) Update and delete endpoints can be added as needed. 