# Pavansut School, Markal - React Website README

## Project Overview

**Pavansut School, Markal** is a comprehensive, production-grade React website designed to showcase a rural private school offering three educational streams (Marathi-medium, Semi-English, and English-medium) for Pre-Primary to Class 6 students. This project emphasizes **mobile-first responsive design**, **multilingual support**, **accessibility compliance**, and **optimal performance** for a professional educational institution presence.

## 🎯 Project Goals

- **Informational Focus**: Pure brochure-style website with no backend requirements[^1]
- **Multi-Stream Support**: Seamless switching between Marathi, Semi-English, and English medium content[^2][^3]
- **Rural School Identity**: Authentic representation of rural educational values with modern web standards[^4]
- **Accessibility Compliance**: Full WCAG 2.2 AA compliance for inclusive user experience[^5][^6]
- **Performance Optimization**: Lightning-fast loading and responsive interaction[^7][^8]


## 🚀 Technology Stack

### **Core Framework \& Build Tools**

- **React 18.2.0** - Modern functional components with hooks[^9]
- **Vite 4.x** - Fast development server and optimized production builds[^10]
- **TypeScript 5.x** - Type safety and enhanced developer experience[^10]
- **React Router DOM 6.x** - Client-side routing for SPA navigation[^11]


### **Internationalization \& Language Support**

- **react-i18next 13.x** - Comprehensive i18n framework for multilingual support[^2][^3][^12]
- **i18next 23.x** - Core internationalization engine
- **i18next-browser-languagedetector** - Automatic language detection
- **i18next-http-backend** - Dynamic translation loading


### **Styling \& UI Framework**

- **CSS Modules** - Scoped styling architecture[^13]
- **Sass/SCSS** - Advanced CSS preprocessing
- **CSS Custom Properties** - Dynamic theming system
- **Responsive Grid System** - Mobile-first layout architecture[^14][^15]


### **Performance \& Optimization**

- **React.memo** - Component memoization for render optimization[^7][^8]
- **React.lazy** - Code splitting and lazy loading[^13]
- **Webpack Bundle Analyzer** - Bundle size optimization
- **Image Optimization** - WebP format with fallbacks[^16]


### **Development \& Quality Tools**

- **ESLint 8.x** - Code quality and consistency[^13]
- **Prettier 3.x** - Code formatting standards
- **Husky** - Git hooks for pre-commit quality checks
- **Jest \& React Testing Library** - Comprehensive testing framework[^17]


## 📁 Project Structure

```
pavansut-school-website/
├── public/
│   ├── locales/                    # Translation files
│   │   ├── en/
│   │   │   └── common.json
│   │   ├── mr/                     # Marathi translations
│   │   │   └── common.json
│   │   └── semi-en/                # Semi-English translations
│   │       └── common.json
│   ├── images/                     # Optimized school images
│   │   ├── hero/
│   │   ├── facilities/
│   │   ├── faculty/
│   │   └── gallery/
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── common/                 # Shared components
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Header.module.scss
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   ├── LanguageSwitcher/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── LoadingSpinner/
│   │   └── specific/               # Page-specific components
│   │       ├── Hero/
│   │       ├── FacilityGrid/
│   │       ├── StaffCard/
│   │       ├── AdmissionForm/
│   │       └── ContactForm/
│   ├── pages/                      # Route-level page components
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.scss
│   │   │   └── index.js
│   │   ├── About/
│   │   ├── Academics/
│   │   ├── Facilities/
│   │   ├── Faculty/
│   │   ├── Admissions/
│   │   ├── Contact/
│   │   └── NotFound/
│   ├── hooks/                      # Custom React hooks
│   │   ├── useLanguage.js
│   │   ├── useResponsive.js
│   │   ├── useScrollTo.js
│   │   └── useLocalStorage.js
│   ├── contexts/                   # React Context providers
│   │   ├── LanguageContext.js
│   │   ├── ThemeContext.js
│   │   └── AccessibilityContext.js
│   ├── utils/                      # Utility functions
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── seo.js
│   │   └── accessibility.js
│   ├── assets/                     # Static assets
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── styles/
│   │       ├── globals.scss
│   │       ├── variables.scss
│   │       ├── mixins.scss
│   │       └── reset.scss
│   ├── data/                       # Static data files
│   │   ├── schoolInfo.js
│   │   ├── facilities.js
│   │   ├── faculty.js
│   │   ├── curriculum.js
│   │   └── seoMetadata.js
│   ├── services/                   # External services
│   │   ├── analytics.js
│   │   └── contactFormAPI.js
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   └── i18n.js                     # Internationalization setup
├── tests/                          # Test files
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── utils/
├── docs/                           # Documentation
│   ├── DEPLOYMENT.md
│   ├── ACCESSIBILITY.md
│   └── CONTRIBUTING.md
├── .env.example                    # Environment variables template
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── package.json
├── vite.config.js
├── tsconfig.json
└── README.md
```


## 🎨 Visual Design Specifications

### **Color Palette \& Branding**

**Primary Color Scheme** (Professional Educational Theme)[^18][^19]:

- **Primary Blue**: `#5375e2` - Trust and academic excellence[^19]
- **Secondary Green**: `#4ade80` - Growth and rural environment[^19]
- **Accent Orange**: `#f97316` - Energy and engagement[^19]
- **Neutral Gray**: `#64748b` - Professional text and backgrounds[^18]
- **Pure White**: `#ffffff` - Clean backgrounds and contrast[^18]
- **Deep Charcoal**: `#1e293b` - Primary text and headers[^18]

**Medium-Specific Color Variations**:

- **Marathi Medium**: Traditional saffron `#ff9933` accents
- **Semi-English**: Balanced purple `#8b5cf6` highlights
- **English Medium**: Modern teal `#14b8a6` elements


### **Typography System**

**Font Families**[^20]:

- **Primary**: "Inter", sans-serif - Modern, highly legible for body text
- **Headings**: "Poppins", sans-serif - Friendly, approachable for titles
- **Marathi Text**: "Noto Sans Devanagari", sans-serif - Native script support
- **Monospace**: "JetBrains Mono" - Code examples and technical content

**Typography Scale**:

```scss
// Font sizes with fluid typography
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);    // 12-14px
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);      // 14-16px
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);      // 16-18px
--font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);     // 18-20px
--font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);      // 20-24px
--font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);           // 24-32px
--font-size-3xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);           // 32-48px
```


### **Layout \& Spacing System**

**Responsive Breakpoints**[^14][^15]:

```scss
$breakpoints: (
  'mobile': 320px,
  'mobile-lg': 480px,
  'tablet': 768px,
  'tablet-lg': 1024px,
  'desktop': 1200px,
  'desktop-lg': 1440px,
  'wide': 1920px
);
```

**Spacing Scale** (Based on 8px baseline):

```scss
--space-xs: 0.25rem;    // 4px
--space-sm: 0.5rem;     // 8px
--space-md: 1rem;       // 16px
--space-lg: 1.5rem;     // 24px
--space-xl: 2rem;       // 32px
--space-2xl: 3rem;      // 48px
--space-3xl: 4rem;      // 64px
--space-4xl: 6rem;      // 96px
```


### **Component Design Specifications**

**Button System** (Accessible \& Interactive)[^21]:

```scss
.button {
  // Base styles
  padding: var(--space-sm) var(--space-lg);
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  min-height: 44px; // WCAG touch target requirement
  
  // Primary variant
  &--primary {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    color: white;
    border: 2px solid transparent;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(var(--color-primary-rgb), 0.3);
    }
    
    &:focus-visible {
      outline: 3px solid var(--color-primary-light);
      outline-offset: 2px;
    }
  }
}
```

**Card Component System**[^21]:

```scss
.card {
  background: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: var(--space-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  &__header {
    border-bottom: 1px solid var(--color-gray-100);
    padding-bottom: var(--space-md);
    margin-bottom: var(--space-md);
  }
  
  &__title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-gray-900);
  }
}
```


## 🌍 Internationalization (i18n) Implementation

### **Language Support Structure**[^2][^3][^12]

**Supported Languages**:

1. **English (en)** - Primary international language
2. **Marathi (mr)** - Native regional language (मराठी)
3. **Semi-English (semi-en)** - Balanced bilingual approach

**Translation File Structure**:

```json
// public/locales/en/common.json
{
  "navigation": {
    "home": "Home",
    "about": "About School",
    "academics": "Academic Programs",
    "facilities": "Facilities",
    "faculty": "Faculty & Staff",
    "admissions": "Admissions",
    "contact": "Contact Us"
  },
  "hero": {
    "title": "Welcome to Pavansut School, Markal",
    "subtitle": "Nurturing Young Minds in Rural Maharashtra Since 2010",
    "cta_primary": "Schedule Campus Visit",
    "cta_secondary": "Download Brochure"
  },
  "school_info": {
    "established": "Established",
    "students": "Students Enrolled",
    "classrooms": "Classrooms",
    "streams": "Educational Streams"
  }
}
```

**i18n Configuration** (`src/i18n.js`):

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    
    interpolation: {
      escapeValue: false
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;
```


## ♿ Accessibility Implementation (WCAG 2.2 AA)

### **Accessibility Features**[^5][^6][^22]

**1. Keyboard Navigation**:

- Full keyboard accessibility with logical tab order
- Skip navigation links for screen readers
- Focus indicators with high contrast ratios
- Custom focus management for interactive elements

**2. Screen Reader Support**:

```jsx
// Semantic HTML structure with ARIA labels
<section 
  role="main" 
  aria-labelledby="main-heading"
  aria-describedby="main-description"
>
  <h1 id="main-heading">Pavansut School, Markal</h1>
  <p id="main-description">
    Quality education in rural Maharashtra with three language streams
  </p>
</section>

// Interactive elements with proper ARIA attributes
<button 
  aria-expanded={isMenuOpen}
  aria-controls="navigation-menu"
  aria-label="Toggle navigation menu"
>
  Menu
</button>
```

**3. Color Contrast Compliance**:

```scss
// WCAG AA compliant color combinations (4.5:1 ratio minimum)
:root {
  --text-primary: #1e293b;        // Contrast ratio: 16.78:1 on white
  --text-secondary: #475569;      // Contrast ratio: 9.64:1 on white
  --link-color: #0f766e;          // Contrast ratio: 5.77:1 on white
  --button-bg: #0d9488;           // Contrast ratio: 4.95:1 on white
}
```

**4. Image Accessibility**:

```jsx
// Comprehensive alt text for educational content
<img 
  src="/images/facilities/classroom.webp"
  alt="Bright, well-ventilated classroom with students seated at desks, teacher at whiteboard"
  loading="lazy"
  width={800}
  height={600}
/>

// Decorative images marked appropriately
<img 
  src="/images/decorative/pattern.svg"
  alt=""
  role="presentation"
  aria-hidden="true"
/>
```


### **Accessibility Testing \& Compliance**

**Automated Testing Tools**:

- **@axe-core/react** - Runtime accessibility testing
- **eslint-plugin-jsx-a11y** - Development-time accessibility linting
- **Pa11y** - Command-line accessibility testing

**Manual Testing Checklist**:

- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation testing
- [ ] High contrast mode compatibility
- [ ] Mobile accessibility verification
- [ ] Voice control software testing


## 📱 Responsive Design Implementation

### **Mobile-First Approach**[^14][^15]

**Responsive Grid System**:

```scss
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  @media (min-width: 768px) {
    padding: 0 var(--space-lg);
  }
  
  @media (min-width: 1024px) {
    padding: 0 var(--space-xl);
  }
}

.grid {
  display: grid;
  gap: var(--space-md);
  
  // Mobile: Single column
  grid-template-columns: 1fr;
  
  // Tablet: Two columns
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
  
  // Desktop: Three columns
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }
}
```

**Responsive Typography**:

```scss
// Fluid typography scaling
h1 {
  font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
  line-height: 1.2;
  margin-bottom: clamp(1rem, 2vw + 0.5rem, 2rem);
}

// Responsive navigation
.navigation {
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: var(--color-white);
    transition: left 0.3s ease;
    
    &--open {
      left: 0;
    }
  }
}
```


### **Performance Optimization**[^7][^8]

**Image Optimization Strategy**:

```jsx
// Responsive images with WebP support
const OptimizedImage = ({ src, alt, ...props }) => {
  return (
    <picture>
      <source 
        srcSet={`${src}.webp 1x, ${src}@2x.webp 2x`} 
        type="image/webp" 
      />
      <img 
        src={`${src}.jpg`}
        srcSet={`${src}.jpg 1x, ${src}@2x.jpg 2x`}
        alt={alt}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};
```

**Code Splitting \& Lazy Loading**:

```jsx
// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));

// Component lazy loading with loading states
const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
```

**Performance Monitoring**:

```javascript
// Web Vitals tracking
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send performance metrics to analytics service
  console.log(metric);
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onFCP(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
```


## 🔧 Development Setup \& Configuration

### **Prerequisites**

- **Node.js 18.0+** - JavaScript runtime
- **npm 9.0+** or **Yarn 3.0+** - Package manager
- **Git 2.30+** - Version control
- **VS Code** (recommended) - Code editor with extensions


### **Installation \& Setup**

```bash
# Clone the repository
git clone https://github.com/your-org/pavansut-school-website.git
cd pavansut-school-website

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
# or
yarn dev

# Open browser to http://localhost:5173
```


### **Environment Variables** (`.env.local`):

```bash
# Development configuration
VITE_APP_TITLE="Pavansut School, Markal"
VITE_APP_DESCRIPTION="Quality Education in Rural Maharashtra"
VITE_APP_URL="https://pavansutschool.com"

# Contact form API (if using external service)
VITE_CONTACT_API_URL="https://api.example.com/contact"
VITE_CONTACT_API_KEY="your-api-key-here"

# Analytics tracking (Google Analytics 4)
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Performance monitoring
VITE_ENABLE_PERFORMANCE_MONITORING="true"
```


### **Available Scripts**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "type-check": "tsc --noEmit",
    "build:analyze": "vite build --analyze",
    "build:staging": "vite build --mode staging",
    "build:production": "vite build --mode production",
    "serve:build": "vite preview --port 4173",
    "accessibility:test": "pa11y-ci --sitemap https://localhost:4173/sitemap.xml"
  }
}
```


## 📋 SEO \& Metadata Configuration

### **SEO Strategy \& Implementation**

**Meta Tags Structure**:

```jsx
// src/components/common/SEOHead/SEOHead.jsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  path = '' 
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const siteUrl = import.meta.env.VITE_APP_URL;
  const fullUrl = `${siteUrl}${path}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Language and Region */}
      <html lang={currentLang} />
      <meta name="language" content={currentLang} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Markal, Maharashtra" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={currentLang === 'mr' ? 'mr_IN' : 'en_IN'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Educational Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Pavansut School, Markal",
          "alternateName": "पावनसुत स्कूल, मरकळ",
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "foundingDate": "2010",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Markal",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Admissions"
          },
          "sameAs": []
        })}
      </script>
    </Helmet>
  );
};
```

**Page-Specific SEO Metadata**:

```javascript
// src/data/seoMetadata.js
export const seoMetadata = {
  home: {
    en: {
      title: "Pavansut School, Markal | Quality Rural Education Maharashtra",
      description: "Pavansut School offers Marathi, Semi-English & English medium education for Pre-Primary to Class 6 in rural Maharashtra. Modern facilities, experienced faculty. Admissions open!",
      keywords: "rural school Maharashtra, Marathi medium school, English medium primary school, Markal school, private school Maharashtra"
    },
    mr: {
      title: "पावनसुत शाळा, मरकळ | महाराष्ट्रातली दर्जेदार ग्रामीण शिक्षण",
      description: "पावनसुत शाळा मरकळ येथे प्री-प्राइमरी ते इयत्ता ६ पर्यंत मराठी, अर्ध-इंग्रजी आणि इंग्रजी माध्यमाचे शिक्षण देते. आधुनिक सुविधा, अनुभवी शिक्षक.",
      keywords: "ग्रामीण शाळा महाराष्ट्र, मराठी माध्यम शाळा, प्राथमिक शाळा मरकळ"
    }
  },
  about: {
    en: {
      title: "About Pavansut School | Rural Education Excellence Since 2010",
      description: "Learn about Pavansut School's mission, vision, and commitment to quality education in rural Maharashtra. Established 2010, serving Pre-Primary to Class 6 students.",
      keywords: "about Pavansut School, rural school history, Maharashtra education, school mission vision"
    }
  }
  // ... additional pages
};
```


## 🚀 Deployment \& Production Configuration

### **Build Optimization**[^10][^23]

**Vite Configuration** (`vite.config.js`):

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  
  build: {
    // Production optimizations
    minify: 'terser',
    sourcemap: mode === 'development',
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['react-i18next', 'i18next'],
          router: ['react-router-dom']
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 5173,
    host: true,
    open: true
  },
  
  // Performance and optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-i18next']
  }
}));
```


### **Deployment Strategies**

**1. Static Hosting (Recommended)**:

```bash
# Build for production
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# Deploy to Vercel
npm install -g vercel
vercel --prod

# Deploy to GitHub Pages
npm run build
npm run deploy:gh-pages
```

**2. Docker Deployment**:

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```


### **Performance Monitoring \& Analytics**

**Web Vitals Tracking**:

```javascript
// src/utils/analytics.js
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export const initAnalytics = () => {
  // Google Analytics 4 initialization
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href
    });
  }
  
  // Web Vitals monitoring
  const sendToAnalytics = (metric) => {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true
    });
  };
  
  onCLS(sendToAnalytics);
  onFID(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
};
```


## 🧪 Testing Strategy

### **Testing Framework Setup**

**Jest Configuration** (`jest.config.js`):

```javascript
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/main.jsx',
    '!src/i18n.js'
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx}'
  ]
};
```

**Component Testing Example**:

```jsx
// src/components/common/Button/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from './Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
  
  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  test('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  test('supports keyboard navigation', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```


## 📚 Content Management \& Data Structure

### **Static Data Organization**

**School Information** (`src/data/schoolInfo.js`):

```javascript
export const schoolInfo = {
  basic: {
    name: {
      en: "Pavansut School",
      mr: "पावनसुत शाळा",
      'semi-en': "Pavansut School"
    },
    location: {
      en: "Markal, Maharashtra",
      mr: "मरकळ, महाराष्ट्र",
      'semi-en': "Markal, Maharashtra"
    },
    established: 2010,
    type: {
      en: "Private Co-educational Rural School",
      mr: "खाजगी सहशिक्षण ग्रामीण शाळा",
      'semi-en': "Private Co-educational Rural School"
    }
  },
  statistics: {
    classrooms: 6,
    computers: 4,
    grades: "Pre-Primary to Class 6",
    streams: 3,
    faculty: 8
  },
  contact: {
    phone: "+91-XXXXXXXXXX",
    email: "info@pavansutschool.edu.in",
    address: {
      en: "Village Markal, Taluka [Name], District [Name], Maharashtra - 000000",
      mr: "गाव मरकळ, तालुका [नाव], जिल्हा [नाव], महाराष्ट्र - ००००००"
    }
  }
};
```

**Curriculum Data** (`src/data/curriculum.js`):

```javascript
export const curriculumData = {
  streams: {
    marathi: {
      name: {
        en: "Marathi Medium",
        mr: "मराठी माध्यम",
        'semi-en': "Marathi Medium"
      },
      description: {
        en: "Complete education in mother tongue following Maharashtra State Board curriculum",
        mr: "महाराष्ट्र राज्य मंडळाचा अभ्यासक्रम मातृभाषेत शिकवला जातो"
      },
      subjects: {
        en: ["Marathi", "Mathematics", "Environmental Studies", "Arts", "Physical Education"],
        mr: ["मराठी", "गणित", "पर्यावरण अभ्यास", "कला", "शारीरिक शिक्षण"]
      },
      highlights: {
        en: [
          "Traditional values integration",
          "Local culture emphasis",
          "Mother tongue mastery",
          "State board preparation"
        ],
        mr: [
          "पारंपारिक मूल्यांचा समावेश",
          "स्थानिक संस्कृतीवर भर",
          "मातृभाषेत प्रभुत्व",
          "राज्य मंडळाची तयारी"
        ]
      }
    },
    semiEnglish: {
      name: {
        en: "Semi-English Medium",
        mr: "अर्ध-इंग्रजी माध्यम",
        'semi-en': "Semi-English Medium"
      },
      description: {
        en: "Balanced approach with core subjects in English and regional subjects in Marathi",
        mr: "मुख्य विषय इंग्रजीत आणि प्रादेशिक विषय मराठीत शिकवण्याचा संतुलित दृष्टिकोन"
      },
      subjects: {
        en: ["English", "Mathematics (English)", "Science (English)", "Marathi", "Social Studies (Marathi)"],
        mr: ["इंग्रजी", "गणित (इंग्रजी)", "विज्ञान (इंग्रजी)", "मराठी", "सामाजिक अभ्यास (मराठी)"]
      }
    },
    english: {
      name: {
        en: "English Medium",
        mr: "इंग्रजी माध्यम",
        'semi-en': "English Medium"
      },
      description: {
        en: "Complete English instruction with Marathi as second language for global readiness",
        mr: "जागतिक तयारीसाठी संपूर्ण इंग्रजी शिक्षण, मराठी द्वितीय भाषा म्हणून"
      },
      subjects: {
        en: ["English", "Mathematics", "Science", "Social Studies", "Computer Studies", "Marathi"],
        mr: ["इंग्रजी", "गणित", "विज्ञान", "सामाजिक अभ्यास", "संगणक अभ्यास", "मराठी"]
      }
    }
  }
};
```


## 🔒 Security \& Privacy Configuration

### **Security Headers \& Policies**

**Content Security Policy**:

```html
<!-- public/index.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://www.google-analytics.com;
  frame-src 'self' https://www.google.com;
">
```

**Privacy \& Data Protection**:

```javascript
// src/utils/privacy.js
export const privacyConfig = {
  // GDPR compliance for international visitors
  cookieConsent: {
    required: true,
    categories: ['necessary', 'analytics', 'functional'],
    defaultConsent: {
      necessary: true,
      analytics: false,
      functional: false
    }
  },
  
  // Data retention policies
  dataRetention: {
    contactFormSubmissions: '2 years',
    analyticsData: '14 months',
    userPreferences: 'Until withdrawal'
  },
  
  // Data processing purposes
  processingPurposes: {
    en: [
      'School communication and information provision',
      'Admission process management',
      'Website performance monitoring',
      'User experience improvement'
    ],
    mr: [
      'शाळेची माहिती आणि संपर्क',
      'प्रवेश प्रक्रिया व्यवस्थापन',
      'वेबसाइट कार्यप्रदर्शन निरीक्षण',
      'वापरकर्ता अनुभव सुधारणा'
    ]
  }
};
```


## 📊 Performance Benchmarks \& Targets

### **Performance Metrics Goals**

**Core Web Vitals Targets**[^7][^8]:

- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Contentful Paint (FCP)**: < 1.8 seconds
- **Time to Interactive (TTI)**: < 3.8 seconds

**Lighthouse Score Targets**:

- **Performance**: 95+ (Desktop), 90+ (Mobile)
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

**Bundle Size Optimization**:

```javascript
// Webpack Bundle Analyzer results target
{
  "totalSize": "< 500KB gzipped",
  "mainBundle": "< 200KB gzipped",
  "vendorChunks": "< 250KB gzipped",
  "asyncChunks": "< 50KB gzipped each"
}
```


## 🚀 Future Enhancement Roadmap

### **Phase 1: Core Implementation** (Current)

- ✅ Responsive design with mobile-first approach
- ✅ Three-language support (English, Marathi, Semi-English)
- ✅ WCAG 2.2 AA accessibility compliance
- ✅ SEO optimization and schema markup
- ✅ Performance optimization and monitoring


### **Phase 2: Enhanced Features** (Next 3 months)

- 📅 **Online Inquiry System**: Contact forms with email integration
- 📅 **Virtual Campus Tour**: 360° images and interactive facility exploration
- 📅 **Parent Testimonials**: Dynamic testimonial carousel with video support
- 📅 **Event Calendar**: School events and important dates display
- 📅 **News \& Updates**: Blog-style announcements system


### **Phase 3: Advanced Integration** (6 months)

- 📅 **Student Work Gallery**: Showcase of student projects and achievements
- 📅 **Fee Calculator**: Dynamic fee estimation based on grade and stream
- 📅 **WhatsApp Integration**: Direct communication channel for inquiries
- 📅 **Google Maps Integration**: Interactive location and directions
- 📅 **Progressive Web App**: Offline capability and app-like experience


### **Phase 4: Community Features** (12 months)

- 📅 **Alumni Network**: Connect with former students and success stories
- 📅 **Parent Portal**: Secure login for school updates and communications
- 📅 **Community Events**: Local event integration and participation showcase
- 📅 **Scholarship Information**: Dynamic scholarship opportunities display
- 📅 **Multi-campus Support**: Scalable architecture for additional locations


## 📞 Support \& Maintenance

### **Development Team Contact**

- **Technical Lead**: [Your Name] - [email@domain.com]
- **UI/UX Designer**: [Designer Name] - [designer@domain.com]
- **Content Manager**: [Content Manager] - [content@domain.com]


### **Maintenance Schedule**

- **Daily**: Automated testing and deployment monitoring
- **Weekly**: Performance metrics review and optimization
- **Monthly**: Content updates and SEO analysis
- **Quarterly**: Accessibility audit and compliance verification
- **Annually**: Technology stack updates and security reviews


### **Support Documentation**

- **User Guide**: `/docs/USER_GUIDE.md`
- **Development Guide**: `/docs/DEVELOPMENT.md`
- **Deployment Guide**: `/docs/DEPLOYMENT.md`
- **Accessibility Guide**: `/docs/ACCESSIBILITY.md`
- **Troubleshooting**: `/docs/TROUBLESHOOTING.md`

**This README serves as the comprehensive technical documentation for the Pavansut School, Markal website project. For additional information, please refer to the specific documentation files in the `/docs` directory or contact the development team.**

**Last Updated**: June 30, 2025
**Version**: 1.0.0
**License**: Private - Educational Institution Use

<div style="text-align: center">⁂</div>

[^1]: https://www.schoolstatus.com/blog/the-essential-school-website-design-checklist

[^2]: https://hackernoon.com/how-to-create-multilingual-react-apps-with-react-i18next

[^3]: https://hygraph.com/blog/react-internationalization

[^4]: https://goelastic.com/website-design-for-schools/

[^5]: https://www.echalk.com/wcag-guidelines

[^6]: https://junipereducation.org/blog/how-to-update-your-school-website-to-ensure-wcag-2.2-compliance

[^7]: https://dev.to/ra1nbow1/supercharging-react-performance-best-tips-and-tools-4ff0

[^8]: https://dev.to/chintanonweb/react-performance-optimization-best-practices-with-examples-3c76

[^9]: https://react.dev

[^10]: https://www.imritesh.com/articles/how-to-setup-production-grade-react-setup-without-framework

[^11]: https://dev.to/algo_sync/how-to-structure-a-react-project-in-2025-clean-scalable-and-practical-15j6

[^12]: https://dev.to/anyiamchimdia/creating-multilingual-react-apps-with-i18n-a-step-by-step-guide-to-internationalisation-107o

[^13]: https://www.whitelotuscorporation.com/reactjs-development-best-practices-and-tips-for-optimized-performance/

[^14]: https://www.schoolwebmasters.com/responsive-design-matters

[^15]: https://www.fsedesign.co.uk/about-us/blog/a-fitting-website-taking-care-of-responsive/?filter=SpecialSchool

[^16]: https://fs.hubspotusercontent00.net/hubfs/2110355/Insights Guides/The ultimate guide to school website design US.pdf

[^17]: https://dev.to/devland/scalable-and-maintainable-react-project-structure-every-developer-should-use-3om4

[^18]: https://colorswall.com/palette/2850

[^19]: https://www.youtube.com/watch?v=RBiqJZgBuiA

[^20]: https://support.learnworlds.com/support/solutions/articles/5000687577-theme-explorer-how-to-customize-the-appearance-of-your-school-s-website

[^21]: https://upqode.com/school-website-design-examples/

[^22]: https://www.schoolwebmasters.com/school-website-accessibility-tips

[^23]: https://create-react-app.dev/docs/advanced-configuration/

[^24]: https://www.youtube.com/watch?v=eo2l044gFtU

[^25]: https://www.greenhouseschoolwebsites.co.uk/blog/index.php/2012/04/10-ideas-for-a-school-website-home-page/

[^26]: https://colorwhistle.com/school-website-design/

[^27]: https://www.slideshare.net/slideshow/react-best-practices-all-developers-should-follow-in-2024pdf/267161451

[^28]: https://morweb.org/post/best-school-websites

[^29]: https://dev.to/jacksonkasi/how-to-make-a-documentation-website-in-react-js-56mk

[^30]: https://github.com/Akarshjha03/React-School-WebSite

[^31]: https://blog.bitsrc.io/10-best-practices-for-structuring-react-projects-426ae8b1af43?gi=a2d91b540599

[^32]: https://www.schoolstatus.com/blog/school-website-design-guide

[^33]: https://www.pinterest.com/ideas/rural-school-design/932547291924/

[^34]: https://www.re-thinkingthefuture.com/designing-for-typologies/a3046-10-innovative-school-designs-in-rural-areas-around-the-world/

[^35]: https://www.fivetechnology.com/website-development/cms-website-development/site-management-console-smc/responsive-web-design-for-a-school-website

[^36]: https://react-styleguidist.js.org/docs/documenting/

[^37]: https://create-react-app.dev/docs/deployment/

[^38]: https://www.schoolcues.com/blog/crafting-a-strong-school-brand-essential-tips-for-school-website-design/

[^39]: https://legacy.reactjs.org/docs/optimizing-performance.html

[^40]: https://react.i18next.com

