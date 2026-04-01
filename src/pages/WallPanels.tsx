import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Phone } from 'lucide-react';

const WallPanels = () => {
  const { t } = useTranslation();
  const thicknesses = ["40mm", "50mm", "80mm", "100mm", "150mm"];

  return (
    <div className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-[48px] overflow-hidden shadow-2xl mb-8 border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                alt="Wall Sandwich Panels Detail" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-brand-dark text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-2xl font-black mb-4 text-brand-yellow tracking-tighter">გჭირდებათ კონსულტაცია?</h4>
              <p className="mb-8 font-medium text-gray-400 text-base leading-relaxed">ჩვენი სპეციალისტები დაგეხმარებიან თქვენი პროექტისთვის ოპტიმალური სისქის და ტიპის პანელის შერჩევაში.</p>
              <a href="tel:591927558" className="btn-primary w-full py-4 text-base">
                <Phone className="w-5 h-5" />
                დაგვიკავშირდით
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-yellow/20">
              <Layout className="w-3.5 h-3.5" />
              პროდუქტის დეტალები
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark mb-8 leading-none">
              {t('products.wall.title')}
            </h1>
            <div className="text-brand-gray mb-12 font-medium leading-relaxed text-base">
              <p className="mb-4">
                ჩვენი კედლის სენდვიჩ პანელები იდეალურია ფასადების, შიდა ტიხრებისა და სამრეწველო შენობების მოსაწყობად. ისინი გამოირჩევიან მაღალი თერმოიზოლაციით, ხანძარმედეგობითა და სწრაფი მონტაჟით.
              </p>
              <p>
                პანელები ხელმისაწვდომია სხვადასხვა ტიპის შევსებით (PIR, PUR, Rockwool) და ფერების ფართო არჩევანით RAL კატალოგის მიხედვით. ეს საშუალებას გაძლევთ შექმნათ თანამედროვე და ენერგოეფექტური შენობა მინიმალურ დროში.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-widest flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-brand-yellow rounded-full" />
                  ხელმისაწვდომი სისქეები
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {thicknesses.map(size => (
                    <div key={size} className="bg-white p-4 rounded-2xl text-center shadow-lg border border-gray-100 group hover:bg-brand-yellow transition-colors duration-300">
                      <span className="block text-xl font-black text-brand-dark group-hover:scale-110 transition-transform">{size.replace('mm', '')}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-gray group-hover:text-brand-dark">მმ</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-widest flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-brand-yellow rounded-full" />
                  გამოყენების სფეროები
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "ფასადების მოპირკეთება",
                    "შიდა ტიხრები",
                    "მაცივარ-კამერები",
                    "სამრეწველო შენობები",
                    "ოფისები და საცხოვრებლები",
                    "სავაჭრო ცენტრები"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-50">
                      <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-brand-dark text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-widest flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-brand-yellow rounded-full" />
                  ტექნიკური მახასიათებლები
                </h3>
                <div className="bg-brand-dark p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2" />
                  <ul className="space-y-4 relative z-10">
                    <li className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-gray-400 font-black uppercase tracking-widest text-[9px]">იზოლაცია:</span>
                      <span className="font-black text-brand-yellow text-base">PIR / PUR / Rockwool</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-gray-400 font-black uppercase tracking-widest text-[9px]">ლითონის სისქე:</span>
                      <span className="font-black text-brand-yellow text-base">0.4mm - 0.7mm</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-gray-400 font-black uppercase tracking-widest text-[9px]">თბოგამტარობა:</span>
                      <span className="font-black text-brand-yellow text-base">0.022 W/mK</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-400 font-black uppercase tracking-widest text-[9px]">ხანძარმედეგობა:</span>
                      <span className="font-black text-brand-yellow text-base">B-s1, d0 (PIR)</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WallPanels;
