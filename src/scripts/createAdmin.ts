import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../server/models/User';
// import bcrypt from 'bcryptjs'; // No longer needed

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/marktechrover-website';

async function createAdmin() {
  await mongoose.connect(MONGO_URI);

  // Delete all existing users
  await User.deleteMany({});
  console.log('All existing users deleted.');

  // Create the new admin user (plain password, will be hashed by pre-save hook)
  const admin = await User.create({
    name: 'Ritik',
    email: 'ritik@marktechrover.com',
    password: 'Ritik@14320',
    role: 'admin',
    company: 'MarkTechRover',
  });
  console.log('Admin user created:', admin.email);
  process.exit(0);
}

createAdmin().catch(err => {
  console.error('Error creating admin:', err);
  process.exit(1);
}); 