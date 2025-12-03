// Service Worker Registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', registration);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available
              showUpdateNotification();
            }
          });
        }
      });

      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Show update notification
const showUpdateNotification = () => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('MarkTechRover Update', {
      body: 'A new version is available. Refresh to update.',
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'update-notification'
    });
  }
};

// Request notification permission
export const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  return false;
};

// Send push notification
export const sendPushNotification = (title: string, body: string) => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, {
        body,
        icon: '/favicon.svg',
        badge: '/favicon.svg',
        // vibrate: [100, 50, 100], // Not supported in all browsers
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      });
    });
  }
};

// Unregister service worker
export const unregisterServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.unregister();
      console.log('Service Worker unregistered');
    }
  }
};

// Check if app is installed
export const isAppInstalled = (): boolean => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
};

// Install prompt handling
export const handleInstallPrompt = () => {
  let deferredPrompt: any;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or prompt
    const installButton = document.getElementById('install-app');
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt = null;
          installButton.style.display = 'none';
        });
      });
    }
  });
};

// Offline/Online status handling
export const handleConnectivityChange = () => {
  const updateOnlineStatus = () => {
    const statusElement = document.getElementById('connection-status');
    if (statusElement) {
      if (navigator.onLine) {
        statusElement.textContent = 'Online';
        statusElement.className = 'text-green-500';
      } else {
        statusElement.textContent = 'Offline';
        statusElement.className = 'text-red-500';
      }
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
};

// Cache management
export const clearAllCaches = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('All caches cleared');
  }
};

// Performance monitoring
export const monitorPerformance = () => {
  if ('PerformanceObserver' in window) {
    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', {
            dns: entry.domainLookupEnd - entry.domainLookupStart,
            tcp: entry.connectEnd - entry.connectStart,
            ttfb: entry.responseStart - entry.requestStart,
            domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            load: entry.loadEventEnd - entry.loadEventStart
          });
        }
      });
    });
    
    navigationObserver.observe({ entryTypes: ['navigation'] });

    // Monitor resource timing
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (entry.initiatorType === 'img' && entry.duration > 1000) {
          console.warn('Slow image load:', entry.name, entry.duration);
        }
      });
    });
    
    resourceObserver.observe({ entryTypes: ['resource'] });
  }
}; 