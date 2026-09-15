import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Phone, ExternalLink, Clock, Warehouse } from 'lucide-react';

export default function Map() {
  const { t, i18n } = useTranslation();
  const [activeLoc, setActiveLoc] = useState<string>('tbilisi-gldanula');

  const locations = [
    {
      id: 'tbilisi-gldanula',
      name: i18n.language === 'en' ? 'Tbilisi - Gldanula Base' : i18n.language === 'ru' ? 'Тбилиси - Глданула' : 'თბილისი - გლდანულას ბაზა',
      address: i18n.language === 'en' ? 'V. Janjgava St. #62' : i18n.language === 'ru' ? 'ул. В. Джанджгава #62' : 'ვლადიმერ ჯანჯღავას ქ. #62',
      phone: '591 92 75 58',
      hours: '09:00 - 18:00 (ორშ-შაბ)',
      coords: { top: '42%', left: '76%' },
      mapsUrl: 'https://maps.google.com/?q=41.8152,44.8217'
    },
    {
      id: 'tbilisi-lilo',
      name: i18n.language === 'en' ? 'Tbilisi - Lilo Base' : i18n.language === 'ru' ? 'Тбилиси - Лило' : 'თბილისი - ლილოს ბაზა',
      address: i18n.language === 'en' ? 'Kakheti Highway, Lilo' : i18n.language === 'ru' ? 'Кахетинское шоссе, Лило' : 'კახეთის გზატკეცილი, ლილო',
      phone: '591 92 75 58',
      hours: '09:00 - 18:00 (ორშ-შაბ)',
      coords: { top: '50%', left: '85%' },
      mapsUrl: 'https://maps.google.com/?q=Lilo+Tbilisi'
    },
    {
      id: 'kutaisi-nikea',
      name: i18n.language === 'en' ? 'Kutaisi - Nikea Base' : i18n.language === 'ru' ? 'Кутаиси - ул. Никея' : 'ქუთაისი - ნიკეას ბაზა',
      address: i18n.language === 'en' ? 'Nikea Street' : i18n.language === 'ru' ? 'ул. Никея' : 'ნიკეას ქუჩა',
      phone: '591 92 75 58',
      hours: '09:00 - 18:00 (ორშ-შაბ)',
      coords: { top: '52%', left: '34%' },
      mapsUrl: 'https://maps.google.com/?q=Nikea+Street+Kutaisi'
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 max-w-7xl mx-auto my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-black uppercase tracking-wider mb-2">
            <Warehouse className="w-4 h-4" />
            {i18n.language === 'en' ? 'Direct Warehouses' : i18n.language === 'ru' ? 'Склады в Грузии' : 'ჩვენი ბაზები და საწყობები'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
            {t('home.map_title')}
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-md font-medium">
          {i18n.language === 'en'
            ? 'Sandwich panels are in stock and ready for immediate loading from our warehouses in Tbilisi and Kutaisi.'
            : i18n.language === 'ru'
            ? 'Панели в наличии на складах в Тбилиси и Кутаиси. Быстрая отгрузка и доставка по всей Грузии.'
            : 'პანელები მარაგშია და ხელმისაწვდომია დაუყოვნებლივ გასატანად ჩვენი ბაზებიდან თბილისსა და ქუთაისში.'}
        </p>
      </div>

      {/* Location Cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {locations.map((loc) => {
          const isSelected = activeLoc === loc.id;
          return (
            <div
              key={loc.id}
              onClick={() => setActiveLoc(loc.id)}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-brand-yellow bg-brand-yellow/5 shadow-lg shadow-brand-yellow/10'
                  : 'border-gray-100 bg-gray-50/60 hover:border-gray-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-dark text-white'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                    მარაგშია
                  </span>
                </div>
                <h3 className="text-base font-black text-brand-dark mb-1">{loc.name}</h3>
                <p className="text-xs text-gray-600 font-medium mb-3">{loc.address}</p>

                <div className="space-y-1.5 text-xs text-gray-500 font-medium border-t border-gray-200/60 pt-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-dark" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-dark" />
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="font-bold text-brand-dark hover:underline">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200/60">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-brand-dark hover:text-brand-yellow transition-colors"
                >
                  <span>Google Maps-ზე გახსნა</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Stylized Map with Live Pin Points */}
      <div className="relative w-full aspect-[21/9] min-h-[260px] bg-brand-dark rounded-2xl overflow-hidden border border-brand-dark shadow-inner flex items-center justify-center">
        {/* Subtle Map SVG silhouette */}
        <svg 
          viewBox="0 0 1000 500" 
          className="absolute inset-0 w-full h-full opacity-20 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M120,240 L160,220 L210,210 L270,200 L340,195 L420,190 L500,185 L580,180 L660,175 L740,170 L800,180 L860,195 L910,220 L940,260 L930,310 L890,360 L830,390 L760,410 L680,420 L600,430 L520,435 L440,430 L360,420 L280,410 L210,390 L150,360 L120,310 Z" />
        </svg>

        {locations.map((loc) => {
          const isSelected = activeLoc === loc.id;
          return (
            <div
              key={loc.id}
              style={{ top: loc.coords.top, left: loc.coords.left }}
              onClick={() => setActiveLoc(loc.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
            >
              <div className="relative flex items-center justify-center">
                <div className={`absolute rounded-full transition-all duration-500 ${
                  isSelected ? 'w-12 h-12 bg-brand-yellow/30 animate-ping' : 'w-8 h-8 bg-white/10'
                }`} />
                <div className={`p-2.5 rounded-full transition-all shadow-xl ${
                  isSelected ? 'bg-brand-yellow text-brand-dark scale-125' : 'bg-white/20 text-white hover:scale-110'
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>

                {/* Badge Label */}
                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-black px-3 py-1 rounded-full shadow-lg border transition-all ${
                  isSelected 
                    ? 'bg-brand-yellow text-brand-dark border-brand-yellow scale-105' 
                    : 'bg-brand-dark/90 text-gray-300 border-white/10 opacity-80 group-hover:opacity-100'
                }`}>
                  {loc.name.split(' - ')[1] || loc.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
