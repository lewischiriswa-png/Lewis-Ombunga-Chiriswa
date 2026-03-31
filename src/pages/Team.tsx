import { motion } from 'motion/react';
import { Mail, Linkedin, Scale } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Jane Chiriswa',
      role: 'Managing Partner',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      specialty: 'Corporate & Commercial Law',
      lsk: 'P.105/1234/20',
      bio: 'Jane is a seasoned corporate lawyer with over 15 years of experience advising multinational corporations entering the East African market. She holds an LL.M from the University of Nairobi and is a recognized expert in corporate governance.',
    },
    {
      name: 'David Mungai',
      role: 'Senior Partner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      specialty: 'Litigation & Dispute Resolution',
      lsk: 'P.105/5678/18',
      bio: 'David is a formidable litigator known for his strategic approach to complex commercial disputes. He has successfully represented clients in landmark cases before the Supreme Court of Kenya and is an accredited mediator.',
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Associate Advocate',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      specialty: 'Conveyancing & Property',
      lsk: 'P.105/9012/22',
      bio: 'Sarah specializes in real estate transactions, guiding developers and investors through the intricacies of Kenyan land laws. Her meticulous attention to detail ensures smooth and secure property transfers.',
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
            Our Team
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-offwhite/80 text-lg">
            Meet the dedicated legal professionals committed to your success.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <a href="#" className="bg-white p-2 rounded-full text-navy hover:text-gold transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-navy hover:text-gold transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-navy mb-1">{member.name}</h2>
                  <p className="text-gold font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                  
                  <div className="flex items-center gap-2 mb-4 bg-navy/5 p-2 rounded-sm inline-flex">
                    <Scale className="h-4 w-4 text-navy/60" />
                    <span className="text-xs font-bold text-navy/60">LSK No: {member.lsk}</span>
                  </div>

                  <p className="text-navy/80 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-navy/50 uppercase tracking-wider mb-1">Specialization</p>
                    <p className="text-navy font-medium">{member.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
