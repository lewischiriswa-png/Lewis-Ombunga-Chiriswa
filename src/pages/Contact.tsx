import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    matterType: '',
    message: '',
    callbackTime: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', matterType: '', message: '', callbackTime: '' });
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
            Contact & Enquiry
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-offwhite/80 text-lg">
            Get in touch with our team to schedule a consultation or discuss your legal needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-navy mb-8">Our Office</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Location</h3>
                    <p className="text-navy/70 leading-relaxed">
                      Westlands Commercial Centre, 4th Floor<br />
                      Ring Road Parklands<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Phone & WhatsApp</h3>
                    <p className="text-navy/70 leading-relaxed">
                      +254 700 000 000<br />
                      +254 20 000 0000 (Landline)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Email</h3>
                    <p className="text-navy/70 leading-relaxed">
                      info@chiriswamungai.co.ke<br />
                      legal@chiriswamungai.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full shrink-0">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Working Hours</h3>
                    <p className="text-navy/70 leading-relaxed">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-sm overflow-hidden border border-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-navy/50 font-medium">
                  [Google Map Embed Placeholder]
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-sm shadow-lg border-t-4 border-gold"
            >
              <h2 className="text-2xl font-serif font-bold text-navy mb-6">Online Consultation Intake</h2>
              <p className="text-navy/70 mb-8 text-sm">
                Please provide details about your legal matter. All information submitted is strictly confidential and protected by attorney-client privilege.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="matterType" className="block text-sm font-bold text-navy mb-2">Matter Type *</label>
                    <select 
                      id="matterType" 
                      name="matterType" 
                      required
                      value={formData.matterType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-navy"
                    >
                      <option value="" disabled>Select an area</option>
                      <option value="corporate">Corporate & Commercial</option>
                      <option value="conveyancing">Conveyancing & Property</option>
                      <option value="litigation">Litigation & Dispute</option>
                      <option value="employment">Employment & Labour</option>
                      <option value="family">Family Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="callbackTime" className="block text-sm font-bold text-navy mb-2">Preferred Callback Time</label>
                    <select 
                      id="callbackTime" 
                      name="callbackTime" 
                      value={formData.callbackTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-navy"
                    >
                      <option value="" disabled>Select a time</option>
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">Brief Description of Matter *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Please provide a brief overview of how we can assist you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-navy text-offwhite px-6 py-4 rounded-sm font-bold text-lg hover:bg-navy/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" /> Submit Enquiry
                </button>
                
                <p className="text-xs text-navy/50 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy in accordance with the Data Protection Act 2019.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
