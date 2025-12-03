import mongoose from 'mongoose';
import User from './src/server/models/User.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/marktechrover-website')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create admin user
const createAdminUser = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@marktechrover.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email: admin@marktechrover.com');
      console.log('Password: admin123');
      process.exit(0);
    }

    // Create new admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@marktechrover.com',
      password: 'admin123',
      role: 'admin',
      company: 'MarkTechRover'
    });

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@marktechrover.com');
    console.log('🔑 Password: admin123');
    console.log('👤 Role: admin');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    process.exit(1);
  }
};

createAdminUser(); 