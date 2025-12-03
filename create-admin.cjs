const mongoose = require('mongoose');
const UserModule = require('./src/server/models/User.cjs');
const User = UserModule.default || UserModule;

mongoose.connect('mongodb://localhost:27017/marktechrover-website')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const createAdminUser = async () => {
  try {
    // Delete any existing admin user with this email
    await User.deleteOne({ email: 'admin@marktechrover.com' });

    // Create new admin user
    await User.create({
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
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  }
};

createAdminUser(); 