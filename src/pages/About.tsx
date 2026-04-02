import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../lib/usePageMeta';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Truck, Users, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  usePageMeta({ title: t('nav.about'), description: t('about.content') });

  return (
    <div className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark mb-6"
          >
            {t('nav.about')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-gray leading-relaxed font-medium"
          >
            ჩვენ ვართ სენდვიჩ პანელების წამყვანი იმპორტიორი საქართველოში, რომელიც მომხმარებელს სთავაზობს უმაღლესი ხარისხის თურქულ პროდუქციას. 12 წლიანი გამოცდილება და 500,000+ კვ.მ გაყიდული პანელი ჩვენი საიმედოობის გარანტიაა.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://source.unsplash.com/800x1000/?warehouse,interior" 
                alt="Our Warehouse" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-yellow p-10 rounded-[32px] shadow-2xl max-w-[240px]">
              <p className="text-brand-dark font-black text-4xl mb-1">12</p>
              <p className="text-brand-dark font-bold text-[10px] uppercase tracking-widest leading-tight">წლიანი გამოცდილება ბაზარზე</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight">ჩვენი მისია და ხედვა</h2>
            <p className="text-lg text-brand-gray leading-relaxed font-medium">
              {t('about.content')} ჩვენი გუნდი მუდმივად ზრუნავს იმაზე, რომ მშენებლობის პროცესი გახდეს უფრო მარტივი, სწრაფი და ხარისხიანი. ჩვენი ბაზები თბილისსა და ქუთაისში საშუალებას გვაძლევს ოპერატიულად მოვამარაგოთ ნებისმიერი მასშტაბის პროექტი მთელი საქართველოს მასშტაბით.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: Users, title: "პროფესიონალი გუნდი" },
                { icon: Award, title: "სერტიფიცირებული ხარისხი" },
                { icon: ShieldCheck, title: "ISO 9001 სტანდარტი" },
                { icon: Globe, title: "პირდაპირი იმპორტი" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-50">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-black text-brand-dark text-xs">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "გარანტირებული ხარისხი", 
              desc: "თითოეული პანელი გადის მკაცრ კონტროლს წარმოების პროცესში და აკმაყოფილებს საერთაშორისო სტანდარტებს." 
            },
            { 
              icon: Globe, 
              title: "პირდაპირი იმპორტი", 
              desc: "ჩვენ ვთანამშრომლობთ თურქეთის წამყვან ქარხნებთან შუამავლების გარეშე, რაც უზრუნველყოფს საუკეთესო ფასს." 
            },
            { 
              icon: Truck, 
              title: "ლოჯისტიკა", 
              desc: "საკუთარი ავტოპარკი და ბაზები თბილისსა და ქუთაისში გვაძლევს საშუალებას დროულად მოგაწოდოთ პროდუქცია." 
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl flex flex-col items-center text-center group hover:bg-brand-dark transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-dark mb-8 shadow-xl shadow-brand-yellow/20 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black mb-4 text-brand-dark group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-sm text-brand-gray font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
