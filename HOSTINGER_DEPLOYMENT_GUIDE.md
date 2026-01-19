# Hostinger Deployment Guide

## Easy Steps to Deploy Your Website on Hostinger

### Prerequisites
- ✅ Your build is complete (files are in the `dist` folder)
- ✅ You have a Hostinger account and hosting plan
- ✅ You have FTP/cPanel access credentials

---

## Method 1: Using File Manager (Easiest - Recommended)

### Step 1: Access Hostinger Control Panel
1. Log in to your Hostinger account at [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Go to **Websites** → Select your domain
3. Click on **File Manager** or **Manage**

### Step 2: Navigate to Public HTML Folder
1. In File Manager, go to the `public_html` folder (this is your website root)
2. **Important**: If you see an existing `index.html` or other files, you may want to:
   - Back them up first (download to your computer)
   - Or delete them if you're replacing the old site

### Step 3: Upload Your Build Files
1. Click **Upload** button in File Manager
2. Navigate to your local `dist` folder on your computer
3. Select **ALL files and folders** from the `dist` directory
4. Upload them to `public_html`
5. Wait for upload to complete (may take a few minutes)

### Step 4: Verify Upload
1. Check that these files exist in `public_html`:
   - `index.html`
   - `assets/` folder (with CSS, JS, images)
   - Other folders like `ClientLogos/`, `ClientPhotos/`, etc.

### Step 5: Test Your Website
1. Visit your domain in a browser (e.g., `https://yourdomain.com`)
2. Your website should now be live!

---

## Method 2: Using FTP (Alternative Method)

### Step 1: Get FTP Credentials
1. In Hostinger hPanel, go to **FTP Accounts**
2. Note down:
   - FTP Host (usually `ftp.yourdomain.com` or an IP)
   - FTP Username
   - FTP Password
   - Port (usually 21)

### Step 2: Connect with FTP Client
**Option A: Using FileZilla (Free)**
1. Download FileZilla from [filezilla-project.org](https://filezilla-project.org)
2. Open FileZilla
3. Enter your FTP credentials:
   - Host: `ftp.yourdomain.com`
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
4. Click **Quickconnect**

**Option B: Using VS Code (If you use it)**
1. Install "FTP-Sync" extension
2. Configure connection settings
3. Upload files directly from VS Code

### Step 3: Upload Files
1. In FileZilla, navigate to `public_html` on the server (right side)
2. Navigate to your local `dist` folder (left side)
3. Select all files and folders from `dist`
4. Right-click → **Upload**
5. Wait for upload to complete

### Step 4: Test Your Website
1. Visit your domain in a browser
2. Your website should be live!

---

## Important Configuration Steps

### 1. Set Up HTTPS (SSL Certificate)
1. In Hostinger hPanel, go to **SSL**
2. Enable **Let's Encrypt SSL** (free)
3. Wait a few minutes for activation
4. Your site will be accessible via `https://`

### 2. Configure Domain Settings
1. In hPanel, go to **Domains**
2. Make sure your domain points to the correct hosting account
3. If using a subdomain, configure it in **Subdomains**

### 3. Set Up Redirects (If Needed)
If you want to redirect `www` to non-www (or vice versa):
1. Go to **Advanced** → **Redirects** in hPanel
2. Set up 301 redirects as needed

---

## Troubleshooting

### Issue: Website shows "Index of" or blank page
**Solution**: 
- Make sure `index.html` is in the `public_html` root folder
- Check file permissions (should be 644 for files, 755 for folders)

### Issue: CSS/JS/Images not loading
**Solution**:
- Check that the `assets` folder was uploaded correctly
- Verify file paths in browser console (F12)
- Make sure all files from `dist` folder were uploaded

### Issue: 404 errors on routes
**Solution**:
- For React Router to work, you need to configure `.htaccess` (see below)

### Issue: Slow loading
**Solution**:
- Enable caching in Hostinger
- Consider using a CDN
- Check image sizes (already optimized in your build)

---

## Configure .htaccess for React Router

If your site uses React Router (client-side routing), create a `.htaccess` file in `public_html`:

1. In File Manager, go to `public_html`
2. Click **New File**
3. Name it `.htaccess`
4. Add this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

5. Save the file

---

## Quick Checklist

Before going live, make sure:
- [ ] All files from `dist` folder are uploaded to `public_html`
- [ ] `index.html` exists in `public_html` root
- [ ] SSL certificate is enabled
- [ ] `.htaccess` file is configured (for React Router)
- [ ] Test the website in a browser
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test navigation between pages

---

## Need Help?

- **Hostinger Support**: Available 24/7 via live chat in hPanel
- **Documentation**: [hostinger.com/tutorials](https://www.hostinger.com/tutorials)

---

## Quick Command Reference

If you need to rebuild your site:
```bash
npm run build
```

The built files will be in the `dist` folder - upload everything from there to `public_html`.





