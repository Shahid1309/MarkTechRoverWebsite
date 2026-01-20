// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// // Plugin to ensure React loads before entry point and all other chunks
// function ensureReactLoadsFirst() {
//   return {
//     name: 'ensure-react-loads-first',
//     transformIndexHtml(html: string) {
//       // Ensure react-vendor chunk loads before index and all other scripts
//       const reactVendorPreload = html.match(/<link rel="modulepreload"[^>]*react-vendor[^>]*>/);
//       const reactVendorScript = html.match(/<script type="module"[^>]*react-vendor[^>]*><\/script>/);
//       const indexScript = html.match(/<script type="module"[^>]*index-[^>]*><\/script>/);
//       const vendorScript = html.match(/<script type="module"[^>]*vendor-[^>]*><\/script>/);
      
//       // Remove any vendor chunk scripts (they shouldn't exist, but if they do, remove them)
//       if (vendorScript) {
//         html = html.replace(vendorScript[0], '');
//       }
      
//       if (indexScript) {
//         // If react-vendor exists as preload, ensure it's loaded as script before index
//         if (reactVendorPreload && !reactVendorScript) {
//           const reactVendorHref = reactVendorPreload[0].match(/href="([^"]+)"/)?.[1];
//           if (reactVendorHref) {
//             html = html.replace(reactVendorPreload[0], '');
//             html = html.replace(
//               indexScript[0],
//               `<script type="module" crossorigin src="${reactVendorHref}"></script>\n    ${indexScript[0]}`
//             );
//           }
//         }
//         // If react-vendor exists as script, ensure it's before index
//         else if (reactVendorScript && reactVendorScript.index && indexScript.index && reactVendorScript.index > indexScript.index) {
//           const reactVendorScriptTag = reactVendorScript[0];
//           html = html.replace(reactVendorScriptTag, '');
//           html = html.replace(
//             indexScript[0],
//             `${reactVendorScriptTag}\n    ${indexScript[0]}`
//           );
//         }
//       }
//       return html;
//     }
//   };
// }

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: 'automatic',
//       jsxImportSource: 'react',
//       // Ensure production build uses jsx, not jsxDEV
//       babel: {
//         plugins: [],
//         presets: [],
//         env: {
//           production: {
//             plugins: []
//           }
//         }
//       }
//     }),
//     ensureReactLoadsFirst(),
//     ViteImageOptimizer({
//       jpg: {
//         quality: 75,
//         progressive: true,
//         mozjpeg: true
//       },
//       jpeg: {
//         quality: 75,
//         progressive: true,
//         mozjpeg: true
//       },
//       png: {
//         quality: 75,
//         progressive: true
//       },
//       webp: {
//         quality: 75,
//         lossless: false,
//         effort: 6
//       },
//       avif: {
//         quality: 75,
//         lossless: false,
//         effort: 6
//       },
//       cache: true,
//       cacheLocation: '.cache'
//     })
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       'three': path.resolve(__dirname, 'node_modules/three'),
//       'react': path.resolve(__dirname, 'node_modules/react'),
//       'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
//       'scheduler': path.resolve(__dirname, 'node_modules/scheduler'),
//       'react-reconciler': path.resolve(__dirname, 'node_modules/react-reconciler')
//     }
//   },
//   optimizeDeps: {
//     include: [
//       'three',
//       'react',
//       'react-dom',
//       'scheduler',
//       'react-reconciler',
//       'framer-motion',
//       'lucide-react',
//       'react-router-dom'
//     ],
//     exclude: []
//   },
//   define: {
//     'process.env.NODE_ENV': JSON.stringify('production'),
//     'import.meta.env.MODE': JSON.stringify('production'),
//     'import.meta.env.PROD': JSON.stringify(true),
//     'import.meta.env.DEV': JSON.stringify(false),
//   },
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     sourcemap: false,
//     minify: 'terser',
//     target: 'es2015',
//     // Ensure proper module resolution and chunk loading order
//     modulePreload: {
//       polyfill: true
//     },
//     commonjsOptions: {
//       sourceMap: false,
//       transformMixedEsModules: true
//     },
//     // Core Web Vitals optimizations
//     cssTarget: 'chrome61',
//     assetsInlineLimit: 4096, // Inline small assets
//     rollupOptions: {
//       output: {
//         sourcemap: false,
//         // Ensure proper chunk dependencies - React must load before everything
//         // This ensures react-vendor is loaded before index.js and all other chunks
//         manualChunks: (id) => {
//           // CRITICAL: React core MUST be in its own chunk and load first
//           // This is essential for JSX runtime (jsxDEV/jsx) to work
//           if (id.includes('node_modules/react/') || 
//               id.includes('node_modules/react-dom/') || 
//               id.includes('node_modules/react/jsx-runtime') ||
//               id.includes('node_modules/react/jsx-dev-runtime') ||
//               id.includes('/jsx-runtime') ||
//               id.includes('/jsx-dev-runtime') ||
//               id.includes('node_modules/scheduler/') || 
//               id.includes('node_modules/react-reconciler/')) {
//             return 'react-vendor';
//           }
//           // CRITICAL: All React-related packages MUST go with React
//           // This prevents "c.t is not a function" and other dependency errors
//           if (id.includes('node_modules/react-') || 
//               id.includes('node_modules/@react-') ||
//               id.includes('node_modules/react-router-dom') ||
//               id.includes('node_modules/framer-motion') ||
//               id.includes('node_modules/lucide-react') || 
//               id.includes('node_modules/@headlessui') ||
//               id.includes('node_modules/@emotion') || 
//               id.includes('node_modules/@mui') ||
//               id.includes('node_modules/@lottiefiles') || 
//               id.includes('node_modules/react-countup') ||
//               id.includes('node_modules/react-helmet') ||
//               id.includes('node_modules/react-helmet-async')) {
//             return 'react-vendor';
//           }
//           // Three.js ecosystem - independent
//           if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
//             return 'three-vendor';
//           }
//           // Utilities without React dependency - be very specific
//           if (id.includes('node_modules/axios') || 
//               id.includes('node_modules/sitemap') || 
//               id.includes('node_modules/xml') || 
//               id.includes('node_modules/svgo') ||
//               id.includes('node_modules/tailwind-merge') || 
//               id.includes('node_modules/clsx') ||
//               id.includes('node_modules/sharp') ||
//               id.includes('node_modules/postcss') ||
//               id.includes('node_modules/autoprefixer')) {
//             return 'utils-vendor';
//           }
//           // CRITICAL: Eliminate generic vendor chunk completely
//           // All remaining node_modules go to react-vendor to ensure React is available
//           // This prevents "useLayoutEffect" and other React dependency errors
//           if (id.includes('node_modules')) {
//             // Only truly independent, non-React packages go to utils-vendor
//             // Everything else goes to react-vendor to be safe
//             const safeUtilsPackages = [
//               'axios', 'sitemap', 'xml', 'svgo', 'tailwind-merge', 'clsx',
//               'sharp', 'postcss', 'autoprefixer'
//             ];
//             const isSafeUtils = safeUtilsPackages.some(pkg => id.includes(`node_modules/${pkg}`));
            
//             if (isSafeUtils) {
//               return 'utils-vendor';
//             }
//             // When in doubt, put in react-vendor to ensure React is available
//             // This is safer than creating a separate vendor chunk
//             return 'react-vendor';
//           }
//         },
//         entryFileNames: 'assets/js/[name]-[hash].js',
//         chunkFileNames: 'assets/js/[name]-[hash].js',
//         // Ensure proper chunk loading order - react-vendor must load first
//         // This prevents "useLayoutEffect" and other React dependency errors
//         assetFileNames: (assetInfo) => {
//           const info = assetInfo.name?.split('.') || [];
//           const ext = info[info.length - 1] || 'unknown';
//           if (assetInfo.name && /\.(css)$/.test(assetInfo.name)) {
//             return `assets/css/[name]-[hash].${ext}`;
//           }
//           if (assetInfo.name && /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
//             return `assets/images/[name]-[hash].${ext}`;
//           }
//           return `assets/[name]-[hash].${ext}`;
//         }
//       }
//     },
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//         pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
//         passes: 2,
//         // Preserve function names for React hooks and JSX runtime
//         keep_fnames: /^(jsx|jsxs|Fragment|createElement|useState|useEffect|useLayoutEffect|useContext|useRef|useMemo|useCallback)$/,
//         keep_classnames: false,
//         // Don't break React imports
//         unsafe: false,
//         unsafe_comps: false,
//         unsafe_math: false,
//         unsafe_proto: false
//       },
//       mangle: {
//         safari10: true,
//         // Don't mangle React and JSX runtime imports
//         reserved: [
//           'jsx', 'jsxDEV', 'jsxs', 'Fragment', 'createElement',
//           'React', 'useState', 'useEffect', 'useLayoutEffect',
//           'useContext', 'useRef', 'useMemo', 'useCallback'
//         ],
//         properties: {
//           // Preserve React and JSX runtime properties
//           reserved: [
//             'jsx', 'jsxDEV', 'jsxs', 'Fragment', 'createElement',
//             'default', 'React', 'useState', 'useEffect', 'useLayoutEffect'
//           ],
//           // Don't mangle property names that might break React imports
//           keep_quoted: true
//         }
//       },
//       format: {
//         // Preserve comments for JSX runtime
//         comments: false
//       }
//     },
//     cssCodeSplit: true,
//     chunkSizeWarningLimit: 1000,
//     reportCompressedSize: false
//   },
//   server: {
//     host: true, // allow access from LAN/mobile
//     port: 5175,
//     strictPort: true,
//     hmr: {
//       overlay: false
//     },
//     proxy: {
//       '/api': 'http://localhost:5000',
//     },
//   },
//   css: {
//     devSourcemap: false
//   },
//   esbuild: {
//     drop: ['console', 'debugger']
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(), // automatic runtime (GOOD for your codebase)
    ViteImageOptimizer({
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
      webp: { quality: 75 },
      avif: { quality: 75 },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'es2017',
    minify: 'esbuild', // 🔥 CRITICAL FIX
    sourcemap: false,

    rollupOptions: {
      output: {
        // 🚫 NO manualChunks for react
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },

  server: {
    port: 5173,
    strictPort: true,
  },
});
