import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 75,
        progressive: true,
        mozjpeg: true
      },
      jpeg: {
        quality: 75,
        progressive: true,
        mozjpeg: true
      },
      png: {
        quality: 75,
        progressive: true
      },
      webp: {
        quality: 75,
        lossless: false,
        effort: 6
      },
      avif: {
        quality: 75,
        lossless: false,
        effort: 6
      },
      cache: true,
      cacheLocation: '.cache'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'three': path.resolve(__dirname, 'node_modules/three'),
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'scheduler': path.resolve(__dirname, 'node_modules/scheduler'),
      'react-reconciler': path.resolve(__dirname, 'node_modules/react-reconciler')
    }
  },
  optimizeDeps: {
    include: [
      'three',
      'react',
      'react-dom',
      'scheduler',
      'react-reconciler',
      'framer-motion',
      'lucide-react',
      'react-router-dom'
    ],
    exclude: []
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2015',
    commonjsOptions: {
      sourceMap: false,
      transformMixedEsModules: true
    },
    // Core Web Vitals optimizations
    cssTarget: 'chrome61',
    assetsInlineLimit: 4096, // Inline small assets
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@headlessui/react'],
          'utils-vendor': ['axios', 'date-fns'],
          'three-vendor': ['three']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1] || 'unknown';
          if (assetInfo.name && /\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (assetInfo.name && /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false
  },
  server: {
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  css: {
    devSourcemap: false
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
});
