import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../lib/usePageMeta';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Layers, Layout, ThermometerSnowflake } from 'lucide-react';

export default function Products() {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 'roof',
      title: t('products.roof.title'),
      desc: t('products.roof.desc'),
      link: '/products/roof',
      image: '/images/roof-panels.jpg',
      icon: Layers
    },
    {
      id: 'wall',
      title: t('products.wall.title'),
      desc: t('products.wall.desc'),
      link: '/products/wall',
      image: '/images/wall-panels.jpg',
      icon: Layout
    },
    {
      id: 'cold_doors',
      title: t('products.cold_doors.title'),
      desc: t('products.cold_doors.desc'),
      link: '/contact',
      image: '/images/cold-doors.jpg',
      icon: ThermometerSnowflake
    }
  ];

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "სენდვიჩ პანელების პროდუქცია",
    "description": "თურქული სახურავისა და კედლის სენდვიჩ პანელები (40მმ-150მმ).",
    "url": "https://importservisi.ge/products",
    "hasPart": productCategories.map(p => ({
      "@type": "Product",
      "name": p.title,
      "description": p.desc,
      "image": `https://importservisi.ge${p.image}`,
      "url": `https://importservisi.ge${p.link}`,
      "brand": { "@type": "Brand", "name": "Importservisi" }
    }))
  };

  usePageMeta({ 
    title: t('products.main_title'), 
    description: t('products.main_desc'),
    canonicalPath: '/products',
    image: '/images/roof-panels.jpg',
    schema: productsSchema
  });

  return (
    <div className="pt-24 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 tracking-tight"
          >
            {t('products.main_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-brand-gray max-w-3xl mx-auto font-medium"
          >
            {t('products.main_desc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  width={600}
                  height={375}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors duration-500" />
              </div>
              
              <div className="p-8 relative flex flex-col flex-grow">
                <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark mb-5 shadow-lg shadow-brand-yellow/20 -mt-14 relative z-10">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-brand-dark mb-3 tracking-tight group-hover:text-brand-yellow transition-colors">{cat.title}</h2>
                <p className="text-sm text-brand-gray mb-6 font-medium leading-relaxed flex-grow">
                  {cat.desc}
                </p>
                <Link 
                  to={cat.link}
                  className="inline-flex items-center gap-2 text-brand-dark font-black text-xs group/link uppercase tracking-wider"
                >
                  {t('home.details')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
