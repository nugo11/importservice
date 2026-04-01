import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Layers, Layout, ThermometerSnowflake } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 'roof',
      title: t('products.roof.title'),
      desc: t('products.roof.desc'),
      link: '/products/roof',
      image: 'https://picsum.photos/seed/roof-panels-cat/800/600',
      icon: Layers
    },
    {
      id: 'wall',
      title: t('products.wall.title'),
      desc: t('products.wall.desc'),
      link: '/products/wall',
      image: 'https://picsum.photos/seed/wall-panels-cat/800/600',
      icon: Layout
    },
    {
      id: 'cold_doors',
      title: t('products.cold_doors.title'),
      desc: t('products.cold_doors.desc'),
      link: '/contact',
      image: 'https://picsum.photos/seed/cold-doors-cat/800/600',
      icon: ThermometerSnowflake
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter"
          >
            {t('products.main_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-gray max-w-3xl mx-auto font-medium"
          >
            {t('products.main_desc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[40px] bg-white shadow-2xl border border-gray-100 flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/10 transition-colors duration-500" />
              </div>
              
              <div className="p-8 relative flex flex-col flex-grow">
                <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark mb-6 shadow-lg shadow-brand-yellow/20 -mt-16 relative z-10">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3 tracking-tight group-hover:text-brand-yellow transition-colors">{cat.title}</h3>
                <p className="text-sm text-brand-gray mb-8 font-medium leading-relaxed flex-grow">
                  {cat.desc}
                </p>
                <Link 
                  to={cat.link}
                  className="inline-flex items-center gap-3 text-brand-dark font-black text-xs group/link uppercase tracking-widest"
                >
                  {t('home.details')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
