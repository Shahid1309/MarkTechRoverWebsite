import mongoose from 'mongoose';
import User from '../server/models/User';

const createClient = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/marktechrover-website');
    console.log('Connected to MongoDB');

    // Check if client already exists
    const existingClient = await User.findOne({ email: 'client@testcompany.com' });
    if (existingClient) {
      console.log('Client already exists, deleting...');
      await User.findByIdAndDelete(existingClient._id);
    }

    // Create new client
    const client = new User({
      name: 'John Client',
      email: 'client@testcompany.com',
      password: 'client123',
      role: 'client',
      company: 'Test Company Inc.',
      phone: '+1 (555) 123-4567',
      isActive: true
    });

    await client.save();
    console.log('Client created successfully!');
    console.log('Email: client@testcompany.com');
    console.log('Password: client123');
    console.log('Role: client');

    process.exit(0);
  } catch (error) {
    console.error('Error creating client:', error);
    process.exit(1);
  }
};

createClient(); 