import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../lib/usePageMeta';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Truck, 
  Layers,
  Layout,
  Phone,
  Mail,
  Facebook,
  Calendar,
  Warehouse,
  ThermometerSnowflake,
  Box,
  ShoppingBag,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { blogPosts } from '../data/blogPosts';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: t('stats.years'), val: "12", suffix: "" },
    { label: t('stats.sold'), val: "500,000", suffix: "+" },
    { label: t('stats.bases'), val: "3", suffix: "" },
    { label: t('stats.guarantee'), val: "100", suffix: "%" }
  ];

  const faqs = [
    {
      q: "რა უპირატესობა აქვს თურქულ სენდვიჩ პანელებს?",
      a: "თურქული სენდვიჩ პანელები დამზადებულია უმაღლესი ევროპული სტანდარტების (ISO 9001, CE) დაცვით. ისინი გამოირჩევიან გალვანიზებული, ანტიკოროზიული თუნუქით და უმაღლესი ხარისხის PIR/Rockwool თერმოიზოლაციით, რაც უზრუნველყოფს 40%-მდე ენერგიის დაზოგვას."
    },
    {
      q: "პანელები ადგილზე გაქვთ თუ შეკვეთით ჩამოგაქვთ?",
      a: "სენდვიჩ პანელები უკვე ჩამოტანილია და ინახება ჩვენს სასაწყობე ბაზებზე თბილისსა (გლდანულა, ლილო) და ქუთაისში (ნიკეას ქუჩა). შეგიძლიათ დაუყოვნებლივ გაიტანოთ ან შეუკვეთოთ ადგილზე მიწოდება."
    },
    {
      q: "რა სისქის და ტიპის პანელები გაქვთ მარაგში?",
      a: "მარაგში მუდმივად გვაქვს 40მმ, 50მმ, 60მმ, 80მმ, 100მმ და 150მმ სისქის როგორც 5-ტალღოვანი სახურავის, ასევე კედლის პანელები (დამალული და სტანდარტული საკეტით)."
    },
    {
      q: "რომელია უკეთესი: PIR თუ Rockwool (ქვაბამბა)?",
      a: "PIR (პოლიიზოციანურატი) გამოირჩევა საუკეთესო თბოიზოლაციით (R-Value) და იდეალურია მაცივრებისთვის, საწყობებისა და საცხოვრებელი ობიექტებისთვის. Rockwool (ქვაბამბა) შეუცვლელია მაღალი ხანძარმედეგობის (A1 კლასი) მოთხოვნის მქონე ობიექტებისთვის."
    },
    {
      q: "შესაძლებელია თუ არა ზომაზე დაჭრა და ტრანსპორტირება?",
      a: "დიახ, ჩვენ ვუზრუნველყოფთ პანელების სასურველ ზომაზე პროფესიონალურ დაჭრას და სწრაფ ტრანსპორტირებას მთელი საქართველოს მასშტაბით."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  usePageMeta({ 
    title: t('hero.title'), 
    description: t('hero.subtitle'),
    image: "/images/og-image.jpg",
    canonicalPath: "/",
    schema: faqSchema
  });

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="სენდვიჩ პანელების იმპორტი თურქეთიდან"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/40" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-black uppercase tracking-wider mb-6 border border-brand-yellow/30 backdrop-blur-md">
                <Globe className="w-4 h-4" />
                {t('quality.made_in')} • ISO 9001
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-medium">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary px-8 py-3.5 text-base">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-outline px-8 py-3.5 text-base border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark">
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stock Availability Banner */}
      <section className="bg-brand-yellow py-4 overflow-hidden shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="text-brand-dark font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                პანელები მარაგშია / PANELS IN STOCK
              </span>
              <span className="text-brand-dark/30 font-black">•</span>
              <span className="text-brand-dark font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Warehouse className="w-5 h-5" />
                ბაზები თბილისსა და ქუთაისში
              </span>
              <span className="text-brand-dark/30 font-black">•</span>
              <span className="text-brand-dark font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Truck className="w-5 h-5" />
                სწრაფი მიწოდება მთელ საქართველოში
              </span>
              <span className="text-brand-dark/30 font-black">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-5xl font-black text-brand-yellow mb-1 tracking-tight">
                  {stat.val}{stat.suffix}
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 tracking-tight">{t('home.products_title')}</h2>
              <p className="text-base text-brand-gray font-medium">
                {t('home.products_desc')}
              </p>
            </div>
            <Link to="/products" className="btn-primary px-8 py-3.5 self-start md:self-auto">
              {t('home.all_products')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: t('nav.wall_panels'), 
                desc: t('products.wall.desc'), 
                img: "/images/wall-panels.jpg",
                link: "/products/wall",
                icon: Layout
              },
              { 
                title: t('nav.roof_panels'), 
                desc: t('products.roof.desc'), 
                img: "/images/roof-panels.jpg",
                link: "/products/roof",
                icon: Layers
              }
            ].map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl aspect-[16/11] shadow-2xl"
              >
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  width={800}
                  height={550}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                  <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark mb-4 shadow-xl">
                    <prod.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">{prod.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 max-w-md line-clamp-2">{prod.desc}</p>
                  <Link 
                    to={prod.link}
                    className="inline-flex items-center gap-3 text-brand-yellow font-black text-sm uppercase tracking-wider group/link"
                  >
                    {t('home.details')} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Services/Solutions Preview Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">{t('home.services_title')}</h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-medium">
              {t('home.services_desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('services.warehouses'), icon: Warehouse, link: "/services/warehouses", image: "/images/warehouses.jpg" },
              { title: t('services.cold_storage'), icon: ThermometerSnowflake, link: "/services/cold_storage", image: "/images/cold-storage.jpg" },
              { title: t('services.containers'), icon: Box, link: "/services/containers", image: "/images/containers.jpg" },
              { title: t('services.commercial'), icon: ShoppingBag, link: "/services/commercial", image: "/images/commercial.jpg" }
            ].map((service, i) => (
              <Link 
                key={i}
                to={service.link}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-xl border border-white/5"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/65 group-hover:bg-brand-dark/45 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-4 backdrop-blur-md">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black tracking-tight text-white">{service.title}</h4>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary px-8 py-3.5">
              {t('home.all_services')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/warehouse-interior.jpg" 
                  alt="სენდვიჩ პანელების საწყობი საქართველოში" 
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-6 rounded-2xl shadow-2xl max-w-[200px]">
                <p className="text-brand-dark font-black text-3xl mb-0.5">12</p>
                <p className="text-brand-dark font-bold text-xs uppercase tracking-wider leading-tight">{t('home.years_exp')}</p>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
                  {t('home.oldest_importers')}
                </h2>
                <p className="text-base text-brand-gray mb-8 font-medium leading-relaxed">
                  {t('home.about_text')}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, title: t('home.quality_control'), desc: t('home.iso_standards') },
                    { icon: Truck, title: t('home.fast_delivery'), desc: t('home.bases_desc') },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3.5 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-dark shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-brand-dark text-sm">{item.title}</h4>
                        <p className="text-xs text-brand-gray font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-flex items-center gap-3 text-brand-dark font-black text-base group">
                  {t('nav.about')}
                  <div className="w-8 h-8 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Map />
        </div>
      </section>

      {/* FAQ Section with Schema.org optimization */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-black uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              ხშირად დასმული კითხვები
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
              ყველაფერი სენდვიჩ პანელების შესახებ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-gray-50/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-base text-brand-dark hover:bg-gray-100/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-brand-dark shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-yellow' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-brand-gray font-medium leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-3 tracking-tight">{t('blog.title')}</h2>
              <p className="text-base text-brand-gray font-medium">{t('home.blog_subtitle')}</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-3 text-brand-dark font-black text-base group">
              {t('home.all_posts')}
              <div className="w-8 h-8 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group"
              >
                <Link to={`/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    width={500}
                    height={312}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-brand-gray text-xs font-bold mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                    {post.date}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-lg font-black text-brand-dark mb-3 leading-snug group-hover:text-brand-yellow transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-brand-gray font-medium mb-4 line-clamp-2 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-dark font-black uppercase tracking-wider text-xs">
                    {t('blog.read_more')} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center text-white shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                {t('home.have_questions')}
              </h2>
              <p className="text-base text-gray-300 mb-8 font-medium">
                {t('home.contact_team')}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <a 
                  href="tel:591927558"
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-brand-yellow hover:text-brand-dark transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider mb-0.5 group-hover:text-brand-dark/70">{t('home.call_us')}</p>
                    <p className="text-lg font-black">591 92 75 58</p>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/importservis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-brand-yellow hover:text-brand-dark transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider mb-0.5 group-hover:text-brand-dark/70">Facebook</p>
                    <p className="text-lg font-black">Importservisi</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@importservisi.ge"
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-brand-yellow hover:text-brand-dark transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider mb-0.5 group-hover:text-brand-dark/70">{t('home.write_us')}</p>
                    <p className="text-sm font-black">info@importservisi.ge</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
