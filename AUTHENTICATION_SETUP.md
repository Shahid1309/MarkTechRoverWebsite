# 🔐 Authentication System Setup & Usage Guide

## 🚀 Quick Start

### 1. Start the Backend Server
```bash
npm run server
```
This starts the Express.js server on `http://localhost:5000`

### 2. Start the Frontend Development Server
```bash
npm run dev
```
This starts the Vite development server on `http://localhost:5173`

### 3. Setup Database (First Time Only)
```bash
npm run setup-db
```
This creates test users in the MongoDB database.

## 📋 Test Credentials

### Client Users
| Email | Password | Company |
|-------|----------|---------|
| `client@marktechrover.com` | `client123` | Tech Solutions Inc. |
| `sarah@marktechrover.com` | `sarah123` | Digital Marketing Pro |

### Admin User
| Email | Password | Role |
|-------|----------|------|
| `admin@marktechrover.com` | `admin123` | Admin |

## 🔗 Access Points

### Login Page
- **URL**: `http://localhost:5173/client-login`
- **Features**: 
  - Beautiful split-screen design
  - Animated right side with rotating quotes
  - Demo credentials displayed
  - Form validation and error handling

### Client Dashboard
- **URL**: `http://localhost:5173/client-dashboard`
- **Access**: Only authenticated client users
- **Features**:
  - Overview with stats and recent activity
  - Content approvals management
  - Project tracking
  - Invoice management
  - Messaging system

### Admin Dashboard
- **URL**: `http://localhost:5173/admin-dashboard`
- **Access**: Only authenticated admin users
- **Features**: Full admin functionality

## 🛡️ Security Features

### Protected Routes
- All dashboard routes are protected with `ProtectedRoute` component
- Unauthenticated users are redirected to login
- Role-based access control (client vs admin)

### Authentication Flow
1. User enters credentials on login page
2. Frontend sends POST request to `/api/auth/login`
3. Backend validates credentials against MongoDB
4. JWT token is generated and returned
5. Token is stored in localStorage
6. User is redirected to appropriate dashboard

### JWT Token Management
- Tokens are automatically included in API requests
- Tokens expire after 7 days
- Secure token storage in localStorage

## 🗄️ Database Schema

### User Model
```typescript
interface User {
  name: string;
  email: string;
  password: string; // Hashed with bcrypt
  role: 'admin' | 'client';
  company?: string; // Required for clients
  phone?: string;
  avatar?: string;
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Projects (Future)
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `POST /api/projects/:id/tasks` - Add task to project

## 🎨 UI/UX Features

### Login Page Design
- **Split-screen layout** with login form on left
- **Animated background** with floating elements
- **Rotating quotes** on the right side
- **Glass-morphism effects** with backdrop blur
- **Responsive design** for all screen sizes
- **Loading states** and error handling
- **Password visibility toggle**

### Client Dashboard Features
- **Modern card-based layout**
- **Real-time stats** with gradient backgrounds
- **Interactive approval system**
- **Progress tracking** for projects
- **Invoice management** with status indicators
- **Search and filter** functionality
- **Modal previews** for content

## 🚨 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   ```bash
   # Make sure MongoDB is running
   sudo systemctl start mongod
   # or
   brew services start mongodb-community
   ```

2. **Port Already in Use**
   ```bash
   # Kill process on port 5000
   lsof -ti:5000 | xargs kill -9
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

3. **JWT Token Issues**
   ```bash
   # Clear localStorage in browser
   localStorage.clear()
   # Or restart the server with fresh JWT_SECRET
   ```

### Development Commands
```bash
# Start both servers simultaneously
npm run dev:all

# Setup database with fresh data
npm run setup-db

# Check server logs
npm run server:dev

# Build for production
npm run build
```

## 🔄 Data Flow

1. **Login Process**:
   ```
   User Input → Form Validation → API Call → JWT Generation → Dashboard Redirect
   ```

2. **Protected Route Access**:
   ```
   Route Request → Auth Check → Token Validation → Role Check → Component Render
   ```

3. **API Request Flow**:
   ```
   Frontend Request → Axios Interceptor → Token Addition → Backend Validation → Response
   ```

## 📱 Responsive Design

The authentication system is fully responsive:
- **Mobile**: Stacked layout with full-width elements
- **Tablet**: Optimized spacing and touch targets
- **Desktop**: Split-screen with enhanced animations

## 🔮 Future Enhancements

- [ ] Password reset functionality
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] Session management
- [ ] Activity logging
- [ ] User profile management
- [ ] Real-time notifications
- [ ] File upload system

## 🎯 Testing

### Manual Testing Checklist
- [ ] Login with valid client credentials
- [ ] Login with valid admin credentials
- [ ] Login with invalid credentials (error handling)
- [ ] Access protected routes without authentication
- [ ] Role-based access control
- [ ] Logout functionality
- [ ] Token expiration handling
- [ ] Responsive design on different screen sizes

### Automated Testing (Future)
- Unit tests for authentication logic
- Integration tests for API endpoints
- E2E tests for login flow
- Performance testing for concurrent users

---

## 🎉 Success!

Your authentication system is now fully functional with:
- ✅ Secure login system
- ✅ Protected routes
- ✅ Role-based access control
- ✅ Beautiful UI/UX
- ✅ Database integration
- ✅ JWT token management
- ✅ Responsive design

**Access your client dashboard at**: `http://localhost:5173/client-login` 