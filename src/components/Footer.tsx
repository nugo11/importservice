import React from 'react';
import { useTranslation } from 'react-i18next';
import { Warehouse, Phone, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const phoneNumber = "591 92 75 58";

  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark shadow-lg shadow-brand-yellow/20 group-hover:rotate-12 transition-transform duration-300">
                <Warehouse className="w-6 h-6" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                IMPORT<span className="text-brand-yellow">SERVISI</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8 font-medium">
              {t('seo.description')}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/importservis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-brand-yellow mb-8 uppercase tracking-widest text-xs">{t('nav.products')}</h4>
            <ul className="space-y-5">
              <li><Link to="/products" className="text-gray-400 hover:text-brand-yellow transition-colors font-bold text-sm">{t('nav.products_all')}</Link></li>
              <li><Link to="/products/wall" className="text-gray-400 hover:text-brand-yellow transition-colors font-bold text-sm">{t('nav.wall_panels')}</Link></li>
              <li><Link to="/products/roof" className="text-gray-400 hover:text-brand-yellow transition-colors font-bold text-sm">{t('nav.roof_panels')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-yellow mb-8 uppercase tracking-widest text-xs">{t('nav.contact')}</h4>
            <ul className="space-y-5">
              <li><Link to="/blog" className="text-gray-400 hover:text-brand-yellow transition-colors font-bold text-sm">{t('nav.blog')}</Link></li>
              <li className="flex items-center gap-3 text-gray-400 font-bold text-sm">
                <Phone className="w-4 h-4 text-brand-yellow" />
                {phoneNumber}
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-bold text-sm">
                <MapPin className="w-4 h-4 text-brand-yellow" />
                Tbilisi / Kutaisi
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs font-bold">
          <p>
            © {new Date().getFullYear()} Importservisi. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
