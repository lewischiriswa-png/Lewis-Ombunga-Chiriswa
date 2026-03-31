import { motion } from 'motion/react';
import { Scale, Target, Shield, Users } from 'lucide-react';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            About Us
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Firm History & Story */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">Our Founding Story</h2>
              <p className="text-lg text-navy/80 mb-6 leading-relaxed">
                Chiriswa Mungai & Co. Advocates was founded on the principle that exceptional legal representation should be accessible, transparent, and deeply rooted in a profound understanding of the Kenyan legal and business environment.
              </p>
              <p className="text-lg text-navy/80 mb-6 leading-relaxed">
                Our founders recognized a gap in the market for a firm that combines the rigorous standards of international practice with the agility and personalized attention of a boutique firm. Since our inception, we have built a reputation for tenacity in the courtroom and strategic brilliance in the boardroom.
              </p>
              <p className="text-lg text-navy/80 leading-relaxed">
                We pride ourselves on building long-term relationships with our clients, acting not just as legal representatives, but as trusted advisors invested in their success.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
                alt="Legal Documents" 
                className="w-full h-auto rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-8 rounded-sm shadow-lg max-w-xs hidden md:block">
                <p className="font-serif font-bold text-navy text-xl">"Justice delayed is justice denied."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Mission & Core Values</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-navy/70 text-lg">
              Our guiding principles shape every interaction, every strategy, and every outcome we pursue for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', icon: Target, desc: 'We strive for the highest standards in our legal practice, delivering precise and effective solutions.' },
              { title: 'Integrity', icon: Shield, desc: 'Uncompromising ethical standards and transparency form the bedrock of our firm.' },
              { title: 'Client-Centric', icon: Users, desc: 'We prioritize our clients\' goals, offering personalized attention and responsive communication.' },
              { title: 'Justice', icon: Scale, desc: 'A steadfast commitment to fairness, equity, and the rule of law in Kenya.' },
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-offwhite p-8 rounded-sm border-t-4 border-gold shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="mx-auto bg-navy/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-navy/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
