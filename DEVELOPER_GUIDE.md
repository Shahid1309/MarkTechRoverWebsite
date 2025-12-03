# 🚀 MarkTechRover Website - Developer Guide

Welcome! This guide will help you set up and start developing the MarkTechRover website quickly.

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Making Changes](#making-changes)
5. [Common Tasks](#common-tasks)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v20.11.0 or higher
- **npm**: v9.0.0 or higher
- **Code Editor**: VS Code recommended

### Setup Instructions

1. **Extract the ZIP file**
   ```bash
   unzip marktechrover-website.zip
   cd "Marktechrover Website"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will take 2-3 minutes and install ~930 MB of packages.

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at: **http://localhost:5173**

4. **Open in Browser**
   Navigate to `http://localhost:5173` to see the website.

That's it! You're ready to start developing. 🎉

---

## 📁 Project Structure

```
marktechrover-website/
├── src/                          # Source code
│   ├── pages/                    # All website pages
│   │   ├── HomePage.tsx          # Main homepage
│   │   ├── AboutPage.tsx         # About page
│   │   ├── ContactPage.tsx       # Contact page
│   │   ├── ServicesPage.tsx      # Services overview
│   │   ├── PortfolioPage.tsx     # Portfolio/case studies
│   │   ├── BlogPage.tsx          # Blog listing
│   │   └── services/             # Service category pages
│   │       ├── seo-lead-generation/    # SEO & Lead Gen services
│   │       ├── revenue-marketing-cro/  # Revenue & CRO services
│   │       ├── ai-technology/          # AI Technology services
│   │       └── ux-interactive/         # UX & Interactive services
│   │
│   ├── components/               # Reusable React components
│   │   ├── layout/              # Header, Footer, Navigation
│   │   ├── ui/                  # Buttons, Cards, etc.
│   │   ├── home/                # Homepage-specific components
│   │   ├── about/               # About page components
│   │   ├── services/            # Service page components
│   │   ├── portfolio/           # Portfolio components
│   │   ├── blog/                # Blog components
│   │   └── contact/             # Contact form components
│   │
│   ├── data/                    # Static data & content
│   │   ├── services.ts          # Services data
│   │   ├── testimonials.ts      # Client testimonials
│   │   ├── caseStudies.ts       # Case study data
│   │   ├── blogPosts.ts         # Blog posts data
│   │   └── teamMembers.ts       # Team information
│   │
│   ├── assets/                  # Images, icons, fonts
│   ├── context/                 # React Context (Auth, Theme, Language)
│   ├── utils/                   # Utility functions
│   ├── services/                # API services
│   ├── types/                   # TypeScript type definitions
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
│
├── public/                      # Static assets
│   ├── ClientLogos/            # Client logo images
│   ├── ClientPhotos/           # Client testimonial photos
│   └── images/                 # General images
│
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project overview
```

---

## 💻 Development Workflow

### Running the Development Server

```bash
# Start dev server (with hot reload)
npm run dev

# Start on a specific port
npm run dev -- --port 5174

# Build for production
npm run build

# Preview production build
npm run preview
```

### Hot Module Replacement (HMR)
When you make changes to any file, the browser will automatically refresh. No need to restart the server!

---

## ✏️ Making Changes

### 1. Editing Page Content

**Example: Changing Homepage Content**

Open `src/pages/HomePage.tsx`:
```tsx
// Find the hero section around line 50-100
<h1 className="text-5xl font-bold">
  Welcome to MarkTechRover  {/* Change this text */}
</h1>
<p className="text-xl">
  Your Digital Growth Partner  {/* Change this text */}
</p>
```

Save the file, and the browser will automatically update!

### 2. Adding a New Page

1. Create a new file in `src/pages/`:
   ```tsx
   // src/pages/NewPage.tsx
   import React from 'react';
   
   const NewPage: React.FC = () => {
     return (
       <div className="min-h-screen p-8">
         <h1 className="text-4xl font-bold">New Page</h1>
         <p>Your content here</p>
       </div>
     );
   };
   
   export default NewPage;
   ```

2. Add the route in `src/App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage';
   
   // Inside the Routes component:
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link in `src/components/layout/Header.tsx`

### 3. Editing Services

**Services data is centralized!** Edit `src/data/services.ts`:

```typescript
export const services = [
  {
    id: 'seo-services',
    title: 'SEO Services',        // Change title
    description: '...',            // Change description
    icon: 'Search',                // Change icon
    link: '/services/seo',         // Change link
  },
  // Add more services...
];
```

### 4. Styling Changes

**Using Tailwind CSS**: Edit classes directly in components
```tsx
// Change colors
<div className="bg-blue-500">  {/* Change to bg-red-500, bg-green-500, etc. */}

// Change sizes
<div className="text-2xl">     {/* Change to text-3xl, text-4xl, etc. */}

// Change spacing
<div className="p-4">          {/* Change to p-8, p-12, etc. */}
```

**Custom CSS**: Edit `src/index.css` for global styles

### 5. Editing Images

**Replace images**:
1. Add new image to `public/images/` or `src/assets/`
2. Update the import or path in the component:
   ```tsx
   // For public folder
   <img src="/images/your-image.jpg" alt="Description" />
   
   // For assets folder
   import myImage from './assets/your-image.jpg';
   <img src={myImage} alt="Description" />
   ```

---

## 🔧 Common Tasks

### Adding a New Service Page

1. **Create the page file**:
   ```bash
   # Choose the appropriate category folder
   src/pages/services/seo-lead-generation/NewService.tsx
   ```

2. **Copy an existing service page as template**:
   ```bash
   # Example: Copy EnterpriseSeoServices.tsx
   cp src/pages/services/seo-lead-generation/EnterpriseSeoServices.tsx \
      src/pages/services/seo-lead-generation/NewService.tsx
   ```

3. **Edit the content** in `NewService.tsx`

4. **Add route** in `src/App.tsx`:
   ```tsx
   <Route path="/services/new-service" element={<NewService />} />
   ```

### Editing Contact Information

Edit `src/pages/ContactPage.tsx`:
```tsx
// Find contact details section
const contactInfo = {
  email: 'info@marktechrover.com',     // Change email
  phone: '+91-XXX-XXX-XXXX',          // Change phone
  address: 'Delhi, NCR, India',        // Change address
};
```

### Editing Testimonials

Edit `src/data/testimonials.ts`:
```typescript
export const testimonials = [
  {
    id: 1,
    name: 'Client Name',              // Change name
    role: 'CEO, Company Name',        // Change role
    content: 'Great service!',        // Change testimonial
    image: '/ClientPhotos/client.jpg', // Change photo
    rating: 5,                        // Change rating
  },
  // Add more testimonials...
];
```

### Adding Blog Posts

Edit `src/data/blogPosts.ts`:
```typescript
export const blogPosts = [
  {
    id: 'post-slug',
    title: 'Blog Post Title',
    excerpt: 'Short description...',
    content: 'Full content here...',
    author: 'Author Name',
    date: '2024-01-15',
    category: 'SEO',
    image: '/images/blog/post-image.jpg',
  },
  // Add more posts...
];
```

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 5173)
npm run dev:clean        # Clean cache and start dev server

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check for code issues
npm run lint:fix         # Auto-fix code issues
npm run type-check       # Check TypeScript types

# Maintenance
npm run clean            # Clean build artifacts
npm run clean:all        # Clean everything (cache, build)

# SEO
npm run generate-sitemap # Generate sitemap.xml
npm run generate-rss     # Generate RSS feed
npm run seo-audit        # Run SEO audit
```

---

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (fast, modern bundler)
- **Styling**: Tailwind CSS (utility-first CSS)
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Graphics**: Three.js (for interactive elements)
- **SEO**: React Helmet Async

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clean and rebuild
npm run clean
npm run build
```

### TypeScript Errors
```bash
# Check for type errors
npm run type-check

# Most errors are informational and won't break the build
```

### Hot Reload Not Working
```bash
# Restart the dev server
# Press Ctrl+C to stop, then run:
npm run dev
```

---

## 📝 Code Style Guidelines

### Component Structure
```tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default MyComponent;
```

### Naming Conventions
- **Components**: PascalCase (`HomePage.tsx`, `ServiceCard.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: Use Tailwind utility classes
- **Variables**: camelCase (`userName`, `isActive`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)

---

## 🔐 Environment Variables

Create a `.env` file if you need environment variables:
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@marktechrover.com
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📦 Adding New Dependencies

```bash
# Install a package
npm install package-name

# Install as dev dependency
npm install -D package-name

# Remove a package
npm uninstall package-name
```

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Deploy to Hosting
- **Vercel**: Connect GitHub repo or upload `dist/` folder
- **Netlify**: Drag and drop `dist/` folder
- **AWS S3**: Upload `dist/` contents to S3 bucket
- **Any Static Host**: Upload `dist/` folder contents

---

## 📞 Need Help?

### Quick Tips
1. **Save your work frequently** - Git commits are your friend!
2. **Test in browser** - Check changes in multiple browsers
3. **Use browser DevTools** - Press F12 to debug
4. **Check console** - Look for errors in browser console
5. **Read error messages** - They usually tell you what's wrong

### Useful Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## ✅ Checklist for Common Edits

- [ ] Change homepage hero text
- [ ] Update contact information
- [ ] Add/edit services
- [ ] Update team member information
- [ ] Add new testimonials
- [ ] Upload client logos
- [ ] Create new blog posts
- [ ] Update footer links
- [ ] Modify navigation menu
- [ ] Change color scheme

---

**Happy Coding! 🎉**

For questions or issues, document them and we'll help resolve them.

---

*Last Updated: October 2025*

