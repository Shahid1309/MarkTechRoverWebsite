import { Request, Response } from 'express';
import User from '../models/User.js';

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, company } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        success: false,
        error: 'User already exists',
      });
      return;
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
      company,
    });

    sendTokenResponse(user, 200, res);
  } catch (err: any) {
    console.error('Register error:', err);
    res.status(400).json({
      success: false,
      error: err.message || 'Error registering user',
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role } = req.body;

    // Validate email, password, and role
    if (!email || !password || !role) {
      res.status(400).json({
        success: false,
        error: 'Please provide an email, password, and role',
      });
      return;
    }

    console.log(`Login attempt for email: ${email}, role: ${role}`);

    // Check for user with matching email and role
    const user = await User.findOne({ email, role }).select('+password');

    if (!user) {
      console.log('User not found or role mismatch:', email, role);
      res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
      return;
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      console.log('Password mismatch for user:', email);
      res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
      return;
    }

    console.log('Login successful for user:', email, 'role:', role);
    sendTokenResponse(user, 200, res);
  } catch (err: any) {
    console.error('Login error:', err);
    res.status(400).json({
      success: false,
      error: err.message || 'Error logging in',
    });
  }
};

// Get token from model, create cookie and send response
const sendTokenResponse = (user: any, statusCode: number, res: Response): void => {
  try {
    // Create token
    const token = user.generateAuthToken();

    res.status(statusCode).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
      },
    });
  } catch (err: any) {
    console.error('Token generation error:', err);
    res.status(500).json({
      success: false,
      error: 'Error generating authentication token',
    });
  }
}; 