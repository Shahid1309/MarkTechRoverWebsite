# 🔐 Admin Dashboard Access Guide

## 🚀 Quick Access Links

### 🌐 Application URLs
- **Main Application**: http://localhost:5173
- **Login Page**: http://localhost:5173/client-login
- **Admin Dashboard**: http://localhost:5173/admin-dashboard
- **Client Dashboard**: http://localhost:5173/client-dashboard

## 📋 Admin Credentials

### Admin User
- **Email**: `admin@marktechrover.com`
- **Password**: `admin123`
- **Role**: Admin

### Test Client Users
- **Email**: `client@marktechrover.com`
- **Password**: `client123`
- **Role**: Client

- **Email**: `sarah@marktechrover.com`
- **Password**: `sarah123`
- **Role**: Client

## 🔧 How to Access Admin Dashboard

### Method 1: Direct Login
1. Go to http://localhost:5173/client-login
2. Enter admin credentials:
   - Email: `admin@marktechrover.com`
   - Password: `admin123`
3. Click "Sign In"
4. You'll be automatically redirected to the admin dashboard

### Method 2: Direct Dashboard Access
1. Go to http://localhost:5173/admin-dashboard
2. If not logged in, you'll be redirected to the login page
3. Login with admin credentials
4. You'll be redirected back to the admin dashboard

## 🛠️ Server Status

### Backend Server
- **Port**: 5000
- **Status**: ✅ Running
- **API Endpoint**: http://localhost:5000/api/auth/login

### Frontend Server
- **Port**: 5173
- **Status**: ✅ Running
- **URL**: http://localhost:5173

### Database
- **MongoDB**: ✅ Connected
- **Database**: marktechrover-website
- **Users**: ✅ Created and ready

## 🔍 Troubleshooting

### If Login Fails
1. **Clear Browser Cache**: Press `Ctrl+Shift+R` to hard refresh
2. **Clear localStorage**: Open browser console and run:
   ```javascript
   localStorage.clear();
   ```
3. **Check Console Errors**: Press `F12` and check the Console tab for errors
4. **Verify Servers**: Make sure both servers are running:
   ```bash
   # Check if servers are running
   netstat -tlnp | grep -E "(5000|5173)"
   ```

### If Servers Are Not Running
```bash
# Start both servers
npm run dev:all

# Or start them separately
npm run server  # Backend on port 5000
npm run dev     # Frontend on port 5173
```

### If Database Issues
```bash
# Reset database with test users
npm run setup-db
```

## 📱 Admin Dashboard Features

The admin dashboard includes the following modules:

### 🏠 Overview
- Dashboard statistics
- Recent activity
- Quick actions

### 👥 Leads Management
- Lead tracking
- Lead status updates
- Lead assignment

### 🏢 Clients Management
- Client list
- Client details
- Client communication

### 📁 Projects Management
- Project tracking
- Project status
- Task management

### 🚀 Campaigns
- Campaign overview
- Performance metrics
- Campaign settings

### 📄 Invoices
- Invoice generation
- Payment tracking
- Financial reports

### ✅ Approvals
- Content approvals
- Approval workflow
- Status tracking

### 💬 Chat System
- Client communication
- Message history
- Real-time chat

### 📊 Analytics
- Performance metrics
- Data visualization
- Reports

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin and client role separation
- **Protected Routes**: Automatic redirection for unauthorized access
- **Session Management**: Automatic token refresh and logout

## 🎯 Quick Test

You can test the login functionality using the included test file:
```bash
# Open the test file
xdg-open test-login.html
```

This will open a test page where you can:
- Verify API connectivity
- Test login credentials
- Access all application links

## 📞 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all servers are running
3. Ensure MongoDB is accessible
4. Clear browser cache and localStorage
5. Try using incognito/private browsing mode

---

**Last Updated**: $(date)
**Status**: ✅ All systems operational 