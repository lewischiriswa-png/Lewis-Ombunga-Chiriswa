import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Insights() {
  const posts = [
    {
      title: 'Navigating the Data Protection Act, 2019: A Guide for Kenyan SMEs',
      excerpt: 'Understanding the compliance requirements and implications of Kenya\'s data privacy laws for small and medium enterprises.',
      date: 'October 15, 2023',
      author: 'Jane Chiriswa',
      category: 'Corporate Compliance',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Recent Amendments to the Employment Act: What Employers Need to Know',
      excerpt: 'A comprehensive review of the latest changes to labour laws in Kenya and how they affect workplace policies and contracts.',
      date: 'September 28, 2023',
      author: 'David Mungai',
      category: 'Employment Law',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'The Future of Alternative Dispute Resolution in Commercial Contracts',
      excerpt: 'Why more Kenyan businesses are opting for arbitration and mediation clauses over traditional litigation in their commercial agreements.',
      date: 'August 10, 2023',
      author: 'Sarah Wanjiku',
      category: 'Dispute Resolution',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-navy text-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Insights & News
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-offwhite/80 text-lg">
            Legal updates, case law commentary, and regulatory news from our experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-navy/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-serif font-bold text-navy mb-3 leading-snug group-hover:text-gold transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  
                  <p className="text-navy/70 text-sm mb-6 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:text-navy transition-colors">
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="border border-navy text-navy px-8 py-3 rounded-sm font-bold hover:bg-navy hover:text-offwhite transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
