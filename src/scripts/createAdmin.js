const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const path = require('path');

dotenv.config();

// Import User model (compiled JS)
const User = require(path.join(__dirname, '../server/models/User.js'));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/marktechrover-website';

async function createAdmin() {
  await mongoose.connect(MONGO_URI);

  const existing = await User.findOne({ email: 'admin@example.com' });
  if (existing) {
    console.log('Admin user already exists:', existing.email);
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await User.create({
    name: 'Admin User',
    email: 'admin@example.com',
    password: hashedPassword,
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