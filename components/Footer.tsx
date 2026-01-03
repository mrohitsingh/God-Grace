
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-2xl font-black uppercase tracking-tighter">God's Grace</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Empowering the future generation with quality bilingual education and moral values in the heart of Bijaipur, Bihar.
            </p>
            <div className="flex gap-4">
               <div className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-blue-400">
                 <MapPin size={20} />
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Academics', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="hover:text-blue-400 transition-colors font-medium text-gray-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="text-gray-400 italic">
                English & Hindi Medium Education
              </li>
              <li>
                <span className="text-blue-500">W:</span> {SCHOOL_INFO.website}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SCHOOL_INFO.nameEn}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
