import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../server/models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/marktechrover-website';

// Test user credentials
const testUsers = [
  {
    name: 'John Client',
    email: 'client@marktechrover.com',
    password: 'client123',
    role: 'client',
    company: 'Tech Solutions Inc.'
  },
  {
    name: 'Sarah Client',
    email: 'sarah@marktechrover.com',
    password: 'sarah123',
    role: 'client',
    company: 'Digital Marketing Pro'
  },
  {
    name: 'Admin User',
    email: 'admin@marktechrover.com',
    password: 'admin123',
    role: 'admin'
  }
];

async function setupDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully');

    // Clear existing users
    await User.deleteMany({});
    console.log('🗑️  Cleared existing users');

    // Create test users
    for (const userData of testUsers) {
      const user = new User(userData);
      await user.save();
      console.log(`✅ Created user: ${userData.email} (${userData.role})`);
    }

    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📋 Test Credentials:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    testUsers.forEach(user => {
      console.log(`👤 ${user.name}`);
      console.log(`📧 Email: ${user.email}`);
      console.log(`🔑 Password: ${user.password}`);
      console.log(`🏢 Role: ${user.role}`);
      if (user.company) {
        console.log(`🏢 Company: ${user.company}`);
      }
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    });

    console.log('\n🚀 You can now use these credentials to login!');
    console.log('💡 Client users will be redirected to the client dashboard');
    console.log('💡 Admin users will be redirected to the admin dashboard');

  } catch (error) {
    console.error('❌ Database setup failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

setupDatabase(); 