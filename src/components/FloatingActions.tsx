import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 bg-white/90 backdrop-blur-md text-brand-dark rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-brand-dark hover:text-white transition-all transform hover:scale-110 active:scale-95"
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/995511427042?text=%E1%83%92%E1%83%90%E1%83%9B%E1%83%90%E1%83%A0%E1%83%AF%E1%83%90%E1%83%91%E1%83%90%2C+%E1%83%9B%E1%83%90%E1%83%98%E1%83%9C%E1%83%A2%E1%83%94%E1%83%A0%E1%83%94%E1%83%A1%E1%83%94%E1%83%91%E1%83%A1+%E1%83%A1%E1%83%94%E1%83%9C%E1%83%93%E1%83%95%E1%83%98%E1%83%A9+%E1%83%9E%E1%83%90%E1%83%9C%E1%83%94%E1%83%9Term%E1%83%94%E1%83%91%E1%83%98"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-13 h-13 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        title="Chat on WhatsApp"
        aria-label="Chat with Importservisi on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:591927558"
        className="pointer-events-auto flex items-center gap-2 bg-brand-yellow text-brand-dark px-4 py-3 rounded-full shadow-2xl hover:bg-brand-dark hover:text-brand-yellow active:scale-95 transition-all text-xs font-black group"
        title="Call 591 92 75 58"
        aria-label="Call 591 92 75 58"
      >
        <div className="w-6 h-6 rounded-full bg-brand-dark/10 group-hover:bg-brand-yellow/20 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="font-extrabold text-sm">591 92 75 58</span>
      </a>
    </aside>
  );
}
