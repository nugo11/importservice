import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Truck, 
  ChevronLeft, 
  ChevronRight,
  Layers,
  Layout,
  Phone,
  Mail,
  Facebook,
  Calendar,
  Warehouse,
  ThermometerSnowflake,
  Box,
  ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1920',
      cta: t('hero.cta')
    },
    {
      id: 2,
      title: t('hero.slide2_title'),
      subtitle: t('hero.slide2_subtitle'),
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1920',
      cta: t('nav.products')
    },
    {
      id: 3,
      title: t('hero.slide3_title'),
      subtitle: t('hero.slide3_subtitle'),
      image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1920',
      cta: t('nav.contact')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const stats = [
    { label: t('stats.years'), val: "12", suffix: "" },
    { label: t('stats.sold'), val: "500,000", suffix: "+" },
    { label: t('stats.bases'), val: "3", suffix: "" },
    { label: t('stats.guarantee'), val: "100", suffix: "%" }
  ];

  return (
    <div className="bg-brand-light">
      {/* Hero Slider Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-brand-dark">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="absolute inset-0 will-change-[opacity]"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              key={currentSlide + '-content'}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 text-brand-yellow text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-yellow/30 backdrop-blur-md">
                <Globe className="w-4 h-4" />
                {t('quality.made_in')}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1]">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-medium">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary px-8 py-3.5 text-base">
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-outline px-8 py-3.5 text-base border-white/20 text-white hover:bg-white hover:text-brand-dark">
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 z-20">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-brand-yellow/20 w-full z-20">
          <motion.div 
            key={currentSlide}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full bg-brand-yellow"
          />
        </div>
      </section>

      {/* Stats Section - Full Width, No Rounding */}
      <section className="py-12 bg-brand-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-brand-yellow mb-2 tracking-tighter">
                  {stat.val}{stat.suffix}
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section - PRIORITY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter">{t('home.products_title')}</h2>
              <p className="text-lg text-brand-gray font-medium">
                {t('home.products_desc')}
              </p>
            </div>
            <Link to="/products" className="btn-primary px-8 py-4">
              {t('home.all_products')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { 
                title: t('nav.wall_panels'), 
                desc: t('products.wall.desc'), 
                img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200",
                link: "/products/wall",
                icon: Layout
              },
              { 
                title: t('nav.roof_panels'), 
                desc: t('products.roof.desc'), 
                img: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1200",
                link: "/products/roof",
                icon: Layers
              }
            ].map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-[48px] aspect-[16/11] shadow-2xl"
              >
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark mb-6 shadow-xl">
                    <prod.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight">{prod.title}</h3>
                  <Link 
                    to={prod.link}
                    className="inline-flex items-center gap-4 text-brand-yellow font-black text-base uppercase tracking-widest"
                  >
                    {t('home.details')} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Solutions Preview Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">{t('home.services_title')}</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
              {t('home.services_desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('services.warehouses'), icon: Warehouse, link: "/services/warehouses", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
              { title: t('services.cold_storage'), icon: ThermometerSnowflake, link: "/services/cold_storage", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
              { title: t('services.containers'), icon: Box, link: "/services/containers", image: "https://images.unsplash.com/photo-1590644365607-1c5a519a9a37?auto=format&fit=crop&q=80&w=800" },
              { title: t('services.commercial'), icon: ShoppingBag, link: "/services/commercial", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" }
            ].map((service, i) => (
              <Link 
                key={i}
                to={service.link}
                className="group relative overflow-hidden rounded-[32px] aspect-square shadow-xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/60 group-hover:bg-brand-dark/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-6 backdrop-blur-md">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black tracking-tight text-white">{service.title}</h4>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-primary px-10 py-4">
              {t('home.all_services')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                  alt="Sandwich Panels" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-yellow p-8 rounded-[32px] shadow-2xl max-w-[220px]">
                <p className="text-brand-dark font-black text-4xl mb-1">12</p>
                <p className="text-brand-dark font-bold text-[10px] uppercase tracking-widest leading-tight">{t('home.years_exp')}</p>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter">
                  {t('home.oldest_importers')}
                </h2>
                <p className="text-lg text-brand-gray mb-10 font-medium leading-relaxed">
                  {t('home.about_text')}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: ShieldCheck, title: t('home.quality_control'), desc: t('home.iso_standards') },
                    { icon: Truck, title: t('home.fast_delivery'), desc: t('home.bases_desc') },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark shrink-0 shadow-lg shadow-brand-yellow/20">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-brand-dark mb-1 text-sm">{item.title}</h4>
                        <p className="text-xs text-brand-gray font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-flex items-center gap-4 text-brand-dark font-black text-lg group">
                  {t('nav.about')}
                  <div className="w-10 h-10 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter">{t('home.our_bases')}</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto font-medium">
              {t('home.bases_visit')}
            </p>
          </div>
          <Map />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-white rounded-[64px] mx-4 sm:mx-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter">{t('blog.title')}</h2>
              <p className="text-lg text-brand-gray font-medium">{t('home.blog_subtitle')}</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-4 text-brand-dark font-black text-lg group">
              {t('home.all_posts')}
              <div className="w-10 h-10 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden rounded-[32px] mb-6 shadow-xl">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </Link>
                <div className="flex items-center gap-3 text-brand-gray text-xs font-bold mb-3">
                  <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                  {post.date}
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-yellow transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-dark font-black uppercase tracking-widest text-[10px]">
                  {t('blog.read_more')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[48px] p-10 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none tracking-tighter">
                {t('home.have_questions')}
              </h2>
              <p className="text-lg text-gray-400 mb-12 font-medium">
                {t('home.contact_team')}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <a 
                  href="tel:591927558"
                  className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col items-center gap-4 hover:bg-brand-yellow hover:text-brand-dark transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1 group-hover:text-brand-dark/60">{t('home.call_us')}</p>
                    <p className="text-xl font-black">591 92 75 58</p>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/importservis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col items-center gap-4 hover:bg-brand-yellow hover:text-brand-dark transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                    <Facebook className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1 group-hover:text-brand-dark/60">Facebook</p>
                    <p className="text-xl font-black">Importservisi</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@importservisi.ge"
                  className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col items-center gap-4 hover:bg-brand-yellow hover:text-brand-dark transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1 group-hover:text-brand-dark/60">{t('home.write_us')}</p>
                    <p className="text-base font-black">info@importservisi.ge</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
