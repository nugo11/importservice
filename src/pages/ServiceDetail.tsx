import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../lib/usePageMeta';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  Warehouse, 
  Box, 
  ThermometerSnowflake, 
  ShoppingBag, 
  Factory, 
  Sprout,
  Zap,
  ShieldCheck,
  Clock
} from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const servicesData = {
    containers: {
      title: t('services.containers'),
      desc: t('services.containers.desc'),
      types: t('services.containers.types'),
      icon: Box,
      image: "https://i.ibb.co/xqWGTpgS/image.jpg",
      features: [
        "საოფისე კონტეინერები",
        "სასაწყობე კონტეინერები",
        "დრაივი და ტექნიკური კონტეინერები",
        "საცხოვრებელი მოდულები",
        "სწრაფი ტრანსპორტირება და მონტაჟი"
      ]
    },
    warehouses: {
      title: t('services.warehouses'),
      desc: t('services.warehouses.desc'),
      types: t('services.warehouses.types'),
      icon: Warehouse,
      image: "https://i.ibb.co/6RjCS9wD/image.jpg",
      features: [
        "ლოგისტიკური ცენტრები",
        "საწარმოო საწყობები",
        "სადისტრიბუციო ჰაბები",
        "მსუბუქი კონსტრუქციები",
        "ხანძარმედეგი მასალები"
      ]
    },
    cold_storage: {
      title: t('services.cold_storage'),
      desc: t('services.cold_storage.desc'),
      types: t('services.cold_storage.types'),
      icon: ThermometerSnowflake,
      image: "https://i.ibb.co/3ynjY1jc/image.jpg",
      features: [
        "ხილ-ბოსტნეულის საცავები",
        "ხორცპროდუქტების მაცივრები",
        "ფარმაცევტული საწყობები",
        "ტემპერატურული კონტროლი",
        "ჰერმეტული კარებები"
      ]
    },
    commercial: {
      title: t('services.commercial'),
      desc: t('services.commercial.desc'),
      types: t('services.commercial.types'),
      icon: ShoppingBag,
      image: "https://i.ibb.co/1Jpp2zhB/image.jpg",
      features: [
        "სავაჭრო ცენტრები",
        "მაღაზიები და მარკეტები",
        "პავილიონები",
        "კაფე-ბარები",
        "თანამედროვე დიზაინი"
      ]
    },
    industrial: {
      title: t('services.industrial'),
      desc: t('services.industrial.desc'),
      types: t('services.industrial.types'),
      icon: Factory,
      image: "https://i.ibb.co/HDt9W7zF/shutterstock-1822759466-scaled.jpg",
      features: [
        "საწარმოო ხაზები",
        "საამქროები",
        "ტექნიკური შენობები",
        "ვიბრაციისადმი მდგრადობა",
        "ხმის იზოლაცია"
      ]
    },
    agricultural: {
      title: t('services.agricultural'),
      desc: t('services.agricultural.desc'),
      types: t('services.agricultural.types'),
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      features: [
        "ფერმები",
        "სათბურები",
        "მარნები",
        "ფრინველთა ფერმები",
        "ოპტიმალური მიკროკლიმატი"
      ]
    }
  };

  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-black mb-6">მომსახურება ვერ მოიძებნა</h2>
        <Link to="/services" className="btn-primary">სერვისებზე დაბრუნება</Link>
      </div>
    );
  }

  usePageMeta({ title: service.title, description: service.desc, image: service.image });

  return (
    <div className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-brand-dark font-black uppercase tracking-widest text-[10px] mb-12 hover:text-brand-yellow transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          უკან დაბრუნება
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white mb-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src={service.image} 
                    alt={`${service.title} ${i}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-xl mb-6">
              <service.icon className="w-6 h-6" />
              <span className="text-xs font-black uppercase tracking-widest">{service.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-brand-gray font-medium leading-relaxed mb-10">
              {service.desc}
            </p>

            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 mb-10">
              <h3 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-widest flex items-center gap-3">
                <div className="w-1.5 h-6 bg-brand-yellow rounded-full" />
                რა შედის მომსახურებაში?
              </h3>
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-2xl font-black mb-4 text-brand-yellow tracking-tighter">დაინტერესდით?</h4>
              <p className="mb-8 font-medium text-gray-400 text-sm leading-relaxed">დაგვიკავშირდით უფასო კონსულტაციისა და ხარჯთაღრიცხვისთვის.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:591927558" className="btn-primary flex-1 py-4">
                  <Phone className="w-5 h-5" />
                  დაგვირეკეთ
                </a>
                <Link to="/contact" className="btn-outline flex-1 py-4 border-white/20 text-white hover:bg-white hover:text-brand-dark">
                  კონტაქტი
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "სწრაფი მონტაჟი", desc: "მინიმალური დრო მშენებლობისთვის" },
            { icon: ShieldCheck, title: "გარანტია", desc: "უმაღლესი ხარისხის მასალები" },
            { icon: Clock, title: "12 წლიანი გამოცდილება", desc: "პროფესიონალი გუნდი" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mx-auto mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-black text-brand-dark mb-2">{item.title}</h4>
              <p className="text-sm text-brand-gray font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
