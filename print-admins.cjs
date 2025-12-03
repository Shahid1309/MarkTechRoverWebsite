const mongoose = require('mongoose');
const UserModule = require('./src/server/models/User.cjs');
const User = UserModule.default || UserModule;

mongoose.connect('mongodb://localhost:27017/marktechrover-website')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const printAdmins = async () => {
  try {
    const admins = await User.find({ role: 'admin' }).select('+password');
    console.log('Admin users:');
    admins.forEach(u => {
      console.log({
        email: u.email,
        role: u.role,
        password: u.password,
        name: u.name
      });
    });
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

printAdmins(); 