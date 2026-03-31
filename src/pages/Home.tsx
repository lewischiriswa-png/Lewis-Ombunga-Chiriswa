import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Briefcase, Users, FileText, CheckCircle } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000" 
            alt="Nairobi Law Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-offwhite">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
            >
              Strategic Legal Solutions in <span className="text-gold">Kenya</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl mb-10 text-offwhite/90 font-light"
            >
              Chiriswa Mungai & Co. Advocates provides authoritative, results-driven legal counsel for businesses and individuals across East Africa.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gold text-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
              >
                Book a Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/practice-areas" 
                className="bg-transparent border-2 border-offwhite text-offwhite px-8 py-4 rounded-sm font-bold text-lg hover:bg-offwhite hover:text-navy transition-colors flex items-center justify-center"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-navy/70">
            <div className="flex items-center gap-3">
              <Scale className="h-8 w-8 text-gold" />
              <span className="font-serif font-semibold text-lg">Law Society of Kenya Member</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-gold" />
              <span className="font-serif font-semibold text-lg">15+ Years Combined Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-gold" />
              <span className="font-serif font-semibold text-lg">Corporate & Commercial Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
                Committed to Excellence, <br/>Driven by <span className="text-gold">Integrity</span>.
              </h2>
              <p className="text-lg text-navy/80 mb-6 leading-relaxed">
                Based in the heart of Nairobi, Chiriswa Mungai & Co. Advocates is a dynamic law firm dedicated to delivering bespoke legal services. We understand the nuances of the Kenyan legal landscape and leverage this knowledge to protect our clients' interests.
              </p>
              <p className="text-lg text-navy/80 mb-8 leading-relaxed">
                Whether you are navigating complex corporate transactions, resolving disputes, or securing your family's future, our team provides the clarity and strategy you need to succeed.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-gold font-bold hover:text-navy transition-colors">
                Read Our Story <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-sm transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1505664173615-04f1b0b23f16?auto=format&fit=crop&q=80&w=800" 
                alt="Law Books" 
                className="relative z-10 w-full h-auto rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Teaser */}
      <section className="py-20 bg-navy text-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-offwhite/80 text-lg">
              Comprehensive legal services tailored to the unique needs of the Kenyan market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Corporate & Commercial', icon: Briefcase, desc: 'Business formation, mergers, acquisitions, and compliance.' },
              { title: 'Conveyancing & Property', icon: FileText, desc: 'Real estate transactions, leases, and property disputes.' },
              { title: 'Litigation & Dispute', icon: Scale, desc: 'Civil litigation, arbitration, and alternative dispute resolution.' },
              { title: 'Employment & Labour', icon: Users, desc: 'Contracts, workplace policies, and dispute representation.' },
            ].map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group"
              >
                <area.icon className="h-12 w-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-bold mb-3">{area.title}</h3>
                <p className="text-offwhite/70 mb-6">{area.desc}</p>
                <Link to="/practice-areas" className="text-gold text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/practice-areas" className="inline-block border border-gold text-gold px-8 py-3 rounded-sm font-bold hover:bg-gold hover:text-navy transition-colors">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold text-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-xl mb-10 font-medium">
            Schedule a consultation with our experienced advocates today. We are ready to listen and provide actionable legal strategies.
          </p>
          <Link to="/contact" className="inline-block bg-navy text-offwhite px-10 py-4 rounded-sm font-bold text-lg hover:bg-navy/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
