import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-offwhite pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Scale className="h-8 w-8 text-gold" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight">Chiriswa Mungai & Co.</span>
                <span className="text-xs text-gold tracking-widest uppercase">Advocates</span>
              </div>
            </Link>
            <p className="text-sm text-offwhite/70 leading-relaxed">
              A premier Kenyan legal practice dedicated to providing strategic, ethical, and results-driven legal solutions for businesses and individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-offwhite/80 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/practice-areas" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Practice Areas</Link></li>
              <li><Link to="/team" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Our Team</Link></li>
              <li><Link to="/insights" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Insights & News</Link></li>
              <li><Link to="/contact" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Practice Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/practice-areas" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Corporate & Commercial</Link></li>
              <li><Link to="/practice-areas" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Conveyancing & Property</Link></li>
              <li><Link to="/practice-areas" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Litigation & Dispute Resolution</Link></li>
              <li><Link to="/practice-areas" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Employment & Labour</Link></li>
              <li><Link to="/practice-areas" className="text-sm text-offwhite/80 hover:text-gold transition-colors">Family Law</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-offwhite/80">
                  Westlands Commercial Centre,<br />
                  Ring Road Parklands,<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm text-offwhite/80">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm text-offwhite/80">info@chiriswamungai.co.ke</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-offwhite/60">
            &copy; {new Date().getFullYear()} Chiriswa Mungai & Co. Advocates. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-offwhite/60 hover:text-gold cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-offwhite/60 hover:text-gold cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
