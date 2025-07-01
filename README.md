# Pavansut School Website - replit.md

## Overview

This is a React-based static school website for Pavansut School in Markal, Maharashtra. The application is designed as a comprehensive informational website showcasing a rural private school that offers three educational streams: Marathi-medium, Semi-English, and English-medium programs from Pre-Primary to Class 6. This is a pure static website with no backend dependencies.

## System Architecture

### Frontend Architecture
- **React 18.2.0** with TypeScript for type safety and modern development
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing
- **TailwindCSS** with custom CSS variables for styling and theming
- **Shadcn/ui** component library for consistent UI components
- **React Query (@tanstack/react-query)** for state management and data fetching

### Static Architecture
- Pure client-side React application with no backend dependencies
- All data stored in static JSON/TypeScript files within the application
- Contact form provides user feedback without server-side processing
- Optimized for static hosting and deployment

### Internationalization
- Custom language context supporting English, Marathi, and Semi-English
- Browser language detection and localStorage persistence
- Font support for Devanagari script (Noto Sans Devanagari)

## Key Components

### Core Components
- **Header**: Navigation with language switcher and mobile menu
- **Footer**: School information and contact details
- **LanguageContext**: Multi-language support system
- **StreamCard**: Educational stream display component
- **FacilityCard**: School facilities showcase
- **FacultyCard**: Staff member profiles

### Pages
- **Home**: Landing page with hero section and overview
- **About**: School mission, vision, and values
- **Academics**: Educational streams and curriculum details
- **Facilities**: School infrastructure and amenities
- **Faculty**: Staff profiles and qualifications
- **Admissions**: Enrollment process and requirements
- **Contact**: Contact form and school information

### UI Components
- Comprehensive Shadcn/ui component library
- Custom styled components with TailwindCSS
- Responsive design with mobile-first approach
- Accessibility-compliant components (WCAG 2.2 AA)

## Data Flow

### Client-Side Data Flow
1. User interactions trigger React state updates
2. Language changes update global context and localStorage
3. Form submissions use controlled components with validation
4. Navigation uses Wouter's routing system

### Static Data Flow
1. All school data pre-loaded from TypeScript files
2. Language context manages translations and user preferences
3. Form interactions provide immediate user feedback
4. No server-side data processing required

### Static Assets
- Images served from Unsplash for demo purposes
- Font Awesome icons for UI elements
- Google Fonts (Inter, Poppins, Noto Sans Devanagari)

## External Dependencies

### Static Content Management
- **TypeScript**: Type-safe static data definitions
- **Zod**: Schema validation for data structures
- **React Hook Form**: Form handling and validation

### UI & Styling
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Dynamic CSS class generation
- **clsx**: Conditional className utility

### State Management & Forms
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation with React Hook Form
- **zod**: Schema validation library

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript compilation with `noEmit` for type checking
- Pure client-side development with no backend dependencies
- Static content served directly from TypeScript files

### Production Build
1. **Frontend**: Vite builds optimized static bundle to `dist/public`
2. **Static Assets**: All content served as static files
3. **Deployment**: Ready for static hosting services (Netlify, Vercel, etc.)

### Environment Configuration
- `NODE_ENV` controls development vs production behavior
- Vite plugins conditionally loaded based on environment
- No external API keys or database connections required

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 30, 2025: Initial React app setup with full-stack architecture
- June 30, 2025: Converted to pure static website - removed all backend dependencies
- June 30, 2025: Optimized React Query setup for static content only
- June 30, 2025: Updated contact form for static website functionality
- June 30, 2025: Enhanced SEO meta tags and performance optimizations
- June 30, 2025: Applied comprehensive performance optimizations:
  * Implemented smooth scrolling with CSS scroll-behavior
  * Added intersection observer for lazy loading animations
  * Created AnimatedSection component with staggered delays
  * Optimized scroll event handlers with requestAnimationFrame
  * Enhanced image loading with lazy loading and decoding attributes
  * Added reduced motion support for accessibility
  * Implemented card-interactive hover effects with cubic-bezier transitions

## Changelog

- June 30, 2025: Complete static website implementation with multilingual support