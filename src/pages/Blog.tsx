import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-brand-dark mb-8 tracking-tighter"
          >
            {t('blog.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-gray max-w-3xl mx-auto font-medium"
          >
            {t('home.blog_title')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-brand-yellow text-brand-dark font-black rounded-full text-sm shadow-lg shadow-brand-yellow/20">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-brand-gray text-sm font-bold mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-yellow" />
                    {post.date}
                  </span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-2xl font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-yellow transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-brand-gray mb-8 font-medium leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-3 text-brand-dark font-black text-xs uppercase tracking-widest group/link"
                >
                  {t('blog.read_more')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
