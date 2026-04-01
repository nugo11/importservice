import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

const Map = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 'tbilisi-gldanula',
      city: 'Tbilisi',
      address: 'Gldanula',
      coords: { top: '42%', left: '78%' },
      phone: '591 92 75 58'
    },
    {
      id: 'tbilisi-lilo',
      city: 'Tbilisi',
      address: 'Lilo',
      coords: { top: '48%', left: '84%' },
      phone: '591 92 75 58'
    },
    {
      id: 'kutaisi-nikea',
      city: 'Kutaisi',
      address: 'Nikea Street',
      coords: { top: '52%', left: '32%' },
      phone: '591 92 75 58'
    }
  ];

  return (
    <div className="relative w-full aspect-[16/9] bg-brand-gray/5 rounded-[48px] overflow-hidden border border-brand-dark/5 shadow-2xl">
      {/* Stylized SVG Map of Georgia */}
      <svg 
        viewBox="0 0 1000 600" 
        className="w-full h-full opacity-10 fill-brand-dark"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M120,280 L140,260 L180,250 L220,240 L260,235 L300,230 L340,225 L380,220 L420,215 L460,210 L500,205 L540,200 L580,195 L620,190 L660,185 L700,180 L740,185 L780,190 L820,195 L860,200 L880,220 L900,240 L920,260 L940,280 L950,320 L940,360 L920,400 L900,420 L860,440 L820,450 L780,455 L740,460 L700,465 L660,470 L620,475 L580,480 L540,485 L500,490 L460,485 L420,480 L380,475 L340,470 L300,465 L260,460 L220,455 L180,450 L140,440 L120,420 L100,400 L90,360 L100,320 Z" />
        <path d="M50,300 L950,300 M500,50 L500,550" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
      </svg>

      {/* Location Markers */}
      {locations.map((loc) => (
        <motion.div
          key={loc.id}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 150 }}
          style={{ top: loc.coords.top, left: loc.coords.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-yellow rounded-full animate-ping opacity-30" />
            <div className="relative bg-brand-yellow p-2.5 rounded-full shadow-xl cursor-pointer group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-brand-dark" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 bg-brand-dark text-white p-3 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border border-white/10">
              <div className="text-brand-yellow font-black text-[10px] uppercase tracking-widest mb-1">{loc.city}</div>
              <div className="font-bold text-xs mb-1.5">{loc.address}</div>
              <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold">
                <Navigation className="w-3 h-3" />
                {loc.phone}
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-brand-dark" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-5 rounded-[32px] shadow-xl border border-white/20">
        <h4 className="text-brand-dark font-black mb-3 uppercase tracking-widest text-[10px]">{t('home.map_title')}</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full" />
            <span className="text-xs font-bold text-brand-gray">Tbilisi (Gldanula, Lilo)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full" />
            <span className="text-xs font-bold text-brand-gray">Kutaisi (Nikea St.)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
