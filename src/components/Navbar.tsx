import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, Phone, Warehouse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
  }, [location]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'ka', name: 'GE' },
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  const phoneNumber = "591 92 75 58";

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500 border-b",
      isScrolled ? "bg-brand-dark/95 backdrop-blur-md py-3 border-white/5 shadow-2xl" : "bg-brand-dark py-5 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark shadow-lg shadow-brand-yellow/20 group-hover:rotate-12 transition-transform duration-300">
            <Warehouse className="w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            IMPORT<span className="text-brand-yellow">SERVISI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-brand-yellow",
                    isActive ? "text-brand-yellow" : "text-gray-400"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-yellow"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="h-6 w-px bg-white/10 mx-2" />

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-white text-[10px] font-black transition-all border border-white/10"
            >
              <Globe className="w-3.5 h-3.5 text-brand-yellow" />
              {currentLang.name}
              <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-24 bg-brand-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full px-4 py-2 text-left text-[10px] font-black transition-colors",
                        i18n.language === lang.code ? "bg-brand-yellow text-brand-dark" : "text-white hover:bg-white/5"
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-brand-yellow text-brand-dark px-5 py-2.5 rounded-xl text-xs font-black hover:bg-white transition-all shadow-lg shadow-brand-yellow/10"
          >
            <Phone className="w-3.5 h-3.5" />
            {phoneNumber}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block text-2xl font-black transition-colors",
                    location.pathname === link.path ? "text-brand-yellow" : "text-white hover:text-brand-yellow"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-black transition-all",
                      i18n.language === lang.code ? "bg-brand-yellow text-brand-dark" : "bg-white/5 text-white"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-brand-yellow text-brand-dark px-6 py-4 rounded-2xl font-black text-lg shadow-lg shadow-brand-yellow/10"
              >
                <Phone className="w-6 h-6" />
                {phoneNumber}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
