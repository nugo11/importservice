import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../lib/usePageMeta';
import { Phone, MapPin, Mail, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const phoneNumber = "591 92 75 58";

  usePageMeta({ title: t('nav.contact'), description: t('contact.any_questions') });

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-brand-dark mb-6">
            {t('nav.contact')}
          </h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto font-medium">
            {t('contact.any_questions')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-yellow mx-auto mb-8 shadow-lg shadow-brand-dark/20">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-brand-dark">{t('contact.phone')}</h3>
            <p className="text-gray-500 mb-6 font-medium">{t('contact.anytime')}</p>
            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-2xl font-black text-brand-dark hover:text-brand-yellow transition-colors">
              {phoneNumber}
            </a>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-yellow mx-auto mb-8 shadow-lg shadow-brand-dark/20">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-brand-dark">{t('locations.title')}</h3>
            <p className="text-gray-600 mb-2 font-black text-lg">Tbilisi - Kutaisi</p>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{t('contact.location_message')}</p>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-yellow mx-auto mb-8 shadow-lg shadow-brand-dark/20">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-brand-dark">{t('contact.hours')}</h3>
            <p className="text-gray-500 mb-2 font-medium">{t('contact.days')}</p>
            <p className="text-brand-dark font-black text-xl">09:00 - 18:00</p>
          </div>
        </div>

        <div className="bg-brand-dark rounded-[40px] p-8 lg:p-16 text-white overflow-hidden relative shadow-2xl text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-[150px] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-4">
              <MessageSquare className="text-brand-yellow w-10 h-10" />
              {t('contact.questions')}
            </h2>
            <p className="text-gray-300 mb-12 text-xl leading-relaxed font-medium">
              {t('contact.description')}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark shadow-lg shadow-brand-yellow/20 shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-lg font-bold leading-tight">{t('contact.free_consultation')}</span>
              </div>
              <div className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark shadow-lg shadow-brand-yellow/20 shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-lg font-bold leading-tight">{t('contact.discount')}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:591927558" className="btn-primary px-12 py-5 text-lg">
                <Phone className="w-6 h-6" />
                {t('contact.call_now')}
              </a>
              <a href="https://www.facebook.com/importservis/" target="_blank" rel="noopener noreferrer" className="btn-outline px-12 py-5 text-lg border-white/20 text-white hover:bg-white hover:text-brand-dark">
                {t('contact.facebook')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
