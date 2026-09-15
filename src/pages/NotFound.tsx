import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Warehouse, Phone } from 'lucide-react';
import usePageMeta from '../lib/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: '404 - გვერდი ვერ მოიძებნა',
    description: 'მოთხოვნილი გვერდი არ არსებობს ან გადატანილია.',
    canonicalPath: '/404'
  });

  return (
    <div className="pt-28 pb-20 bg-brand-light flex-grow flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-dark mx-auto mb-8 shadow-xl">
          <Warehouse className="w-10 h-10" />
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-brand-dark mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mb-4">გვერდი ვერ მოიძებნა</h2>
        <p className="text-gray-600 mb-8 font-medium">
          სამწუხაროდ, თქვენ მიერ მოთხოვნილი მისამართი არ არსებობს. გთხოვთ დაბრუნდეთ მთავარ გვერდზე ან დაათვალიეროთ ჩვენი პროდუქცია.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-5 h-5" />
            მთავარ გვერდზე დაბრუნება
          </Link>
          <Link to="/products" className="btn-outline border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
            პროდუქციის კატალოგი
          </Link>
        </div>
      </div>
    </div>
  );
}
