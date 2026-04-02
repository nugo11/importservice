import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../lib/usePageMeta';
import { motion } from 'motion/react';
import { 
  Box, 
  Warehouse, 
  ThermometerSnowflake, 
  ShoppingBag, 
  Factory, 
  Sprout,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'containers',
      title: t('services.containers'),
      desc: t('services.containers.desc'),
      types: t('services.containers.types'),
      icon: Box,
      image: "https://i.ibb.co/xqWGTpgS/image.jpg",
      link: "/services/containers"
    },
    {
      id: 'warehouses',
      title: t('services.warehouses'),
      desc: t('services.warehouses.desc'),
      types: t('services.warehouses.types'),
      icon: Warehouse,
      image: "https://i.ibb.co/6RjCS9wD/image.jpg",
      link: "/services/warehouses"
    },
    {
      id: 'cold_storage',
      title: t('services.cold_storage'),
      desc: t('services.cold_storage.desc'),
      types: t('services.cold_storage.types'),
      icon: ThermometerSnowflake,
      image: "https://i.ibb.co/DgCRPnMp/image.jpg",
      link: "/services/cold_storage"
    },
    {
      id: 'commercial',
      title: t('services.commercial'),
      desc: t('services.commercial.desc'),
      types: t('services.commercial.types'),
      icon: ShoppingBag,
      image: "https://i.ibb.co/1Jpp2zhB/image.jpg",
      link: "/services/commercial"
    },
    {
      id: 'industrial',
      title: t('services.industrial'),
      desc: t('services.industrial.desc'),
      types: t('services.industrial.types'),
      icon: Factory,
      image: "https://i.ibb.co/HDt9W7zF/shutterstock-1822759466-scaled.jpg",
      link: "/services/industrial"
    },
    {
      id: 'agricultural',
      title: t('services.agricultural'),
      desc: t('services.agricultural.desc'),
      types: t('services.agricultural.types'),
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      link: "/services/agricultural"
    }
  ];

  usePageMeta({ title: t('services.title'), description: t('services.desc') });

  return (
    <div className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-gray font-medium leading-relaxed"
          >
            {t('services.desc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <Link to={service.link} className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <Link to={service.link}>
                  <h3 className="text-2xl font-black text-brand-dark mb-2 tracking-tight group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <div className="text-[10px] font-black text-brand-yellow uppercase tracking-widest mb-4">
                  {service.types}
                </div>
                <p className="text-sm text-brand-gray font-medium leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-3 text-brand-dark font-black text-xs uppercase tracking-widest group/link"
                >
                  {t('home.details')} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us for Construction */}
        <div className="bg-brand-dark rounded-[64px] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                {t('services.why_title')}
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Zap, title: t('services.fast_construction'), desc: t('services.fast_construction_desc') },
                  { icon: ShieldCheck, title: t('services.guaranteed_quality'), desc: t('services.guaranteed_quality_desc') },
                  { icon: Clock, title: t('services.years_exp_title'), desc: t('services.years_exp_desc') }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white/5">
                <img 
                  src="https://i.ibb.co/0p2WHsWv/shutterstock-1715582929-scaled.jpg" 
                  alt="Construction Process" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
