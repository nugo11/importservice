import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';

// Lazy load routes for code-splitting and rapid FCP
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const RoofPanels = lazy(() => import('./pages/RoofPanels'));
const WallPanels = lazy(() => import('./pages/WallPanels'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Non-blocking, lightweight fallback
const RouteFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center py-20" aria-label="Loading content">
    <div className="w-10 h-10 rounded-full border-3 border-brand-yellow/30 border-t-brand-yellow animate-spin" />
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/roof" element={<RoofPanels />} />
        <Route path="/products/wall" element={<WallPanels />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-light font-sans text-brand-dark flex flex-col antialiased selection:bg-brand-yellow/40 selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow flex flex-col pt-18">
          <AppRoutes />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
