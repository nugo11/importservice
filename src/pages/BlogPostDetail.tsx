import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-black mb-6">პოსტი ვერ მოიძებნა</h2>
        <Link to="/blog" className="btn-primary">ბლოგზე დაბრუნება</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

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

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-[48px] shadow-2xl mb-12 border-[12px] border-white">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-brand-gray text-xs font-bold uppercase tracking-widest border-b border-gray-200 pb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-yellow" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-yellow" />
                  IMPORT SERVISI
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-brand-yellow" />
                  {post.category}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-10 leading-tight tracking-tighter">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none text-brand-gray font-medium leading-relaxed mb-16">
                <p className="text-xl font-bold text-brand-dark mb-8 italic border-l-4 border-brand-yellow pl-6">
                  {post.excerpt}
                </p>
                <div className="space-y-6">
                  {post.content.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="font-black text-brand-dark uppercase tracking-widest text-xs">გააზიარე პოსტი</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-yellow transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-yellow transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-yellow transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-brand-dark p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-2xl font-black mb-6 text-brand-yellow tracking-tighter">გჭირდებათ კონსულტაცია?</h4>
              <p className="mb-10 font-medium text-gray-400 text-sm leading-relaxed">ჩვენი სპეციალისტები დაგეხმარებიან თქვენი პროექტისთვის ოპტიმალური მასალების შერჩევაში.</p>
              <a href="tel:591927558" className="btn-primary w-full py-4 text-sm">დაგვიკავშირდით</a>
            </div>

            <div>
              <h4 className="text-xl font-black text-brand-dark mb-8 uppercase tracking-widest flex items-center gap-3">
                <div className="w-1.5 h-6 bg-brand-yellow rounded-full" />
                მსგავსი პოსტები
              </h4>
              <div className="space-y-6">
                {relatedPosts.map(p => (
                  <Link 
                    key={p.id} 
                    to={`/blog/${p.id}`}
                    className="group flex gap-4 items-center"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h5 className="font-black text-brand-dark text-sm leading-tight group-hover:text-brand-yellow transition-colors line-clamp-2">
                        {p.title}
                      </h5>
                      <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mt-2">{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
