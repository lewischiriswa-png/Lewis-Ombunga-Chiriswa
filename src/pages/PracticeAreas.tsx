import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Scale, Users, Heart, Lightbulb, Landmark, ArrowRight } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    {
      title: 'Corporate & Commercial Law',
      icon: Briefcase,
      desc: 'We advise local and international businesses on formation, corporate governance, mergers and acquisitions, joint ventures, and regulatory compliance within the Kenyan market.',
      forWho: 'Startups, SMEs, Multinational Corporations',
    },
    {
      title: 'Conveyancing & Property',
      icon: FileText,
      desc: 'Expert guidance on real estate transactions, including sale and purchase of land, commercial leases, property development, and resolving complex land disputes.',
      forWho: 'Property Developers, Investors, Homebuyers',
    },
    {
      title: 'Litigation & Dispute Resolution',
      icon: Scale,
      desc: 'Robust representation in civil and commercial litigation across all Kenyan courts and tribunals, as well as arbitration and mediation services.',
      forWho: 'Individuals, Businesses facing disputes',
    },
    {
      title: 'Employment & Labour Law',
      icon: Users,
      desc: 'Drafting employment contracts, advising on workplace policies, handling redundancies, and representing clients in the Employment and Labour Relations Court.',
      forWho: 'Employers, Employees, Trade Unions',
    },
    {
      title: 'Family Law',
      icon: Heart,
      desc: 'Sensitive and confidential handling of divorce proceedings, child custody, adoption, matrimonial property disputes, and succession/probate matters.',
      forWho: 'Individuals, Families',
    },
    {
      title: 'Intellectual Property',
      icon: Lightbulb,
      desc: 'Protecting your innovations and brand identity through trademark registration, patents, copyright protection, and IP infringement litigation.',
      forWho: 'Creators, Innovators, Brands',
    },
    {
      title: 'Constitutional & Public Law',
      icon: Landmark,
      desc: 'Advising on constitutional rights, administrative law, judicial review of government actions, and public interest litigation.',
      forWho: 'Citizens, NGOs, Public Bodies',
    },
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
            Practice Areas
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-offwhite/80 text-lg">
            Comprehensive legal expertise tailored to the complexities of the Kenyan legal landscape.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {areas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-navy/5 p-4 rounded-full">
                    <area.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy">{area.title}</h2>
                </div>
                <p className="text-navy/70 mb-6 flex-grow leading-relaxed">
                  {area.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <p className="text-sm font-bold text-navy/60 uppercase tracking-wider mb-4">
                    Best For: <span className="text-navy/90 font-normal normal-case">{area.forWho}</span>
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-gold font-bold hover:text-navy transition-colors"
                  >
                    Consult an Expert <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
