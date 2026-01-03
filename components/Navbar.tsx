
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { NAVIGATION_LINKS, SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-blue-900 text-white py-2 px-4 transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-blue-400" />
              <span>{SCHOOL_INFO.phone}</span>
            </div>
            <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-6">
              <Clock size={12} className="text-blue-400" />
              <span>{SCHOOL_INFO.hours}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a 
              href={SCHOOL_INFO.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <MapPin size={12} /> View on Maps
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`transition-all duration-500 border-b ${
          scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3 border-gray-100' 
          : 'bg-white py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center">
              <Link to="/" className="flex shrink-0 items-center gap-3 group">
                <div className="bg-blue-600 p-2.5 rounded-2xl group-hover:bg-blue-700 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-600/20">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-900 font-black text-xl leading-none uppercase tracking-tighter">
                    God's Grace
                  </span>
                  <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                    English Medium School
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 group ${
                      isActive ? 'text-blue-700' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </Link>
                );
              })}
              
              <div className="pl-6 ml-6 border-l border-gray-100">
                <Link
                  to="/admissions"
                  className="bg-blue-600 text-white px-7 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 flex items-center gap-2"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-2xl transition-colors ${
                  isOpen ? 'bg-gray-100 text-gray-900' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar/Menu */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-[100%] bg-white border-t border-gray-100 shadow-2xl transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
          style={{ height: 'calc(100vh - 100%)' }}
        >
          <div className="p-6 space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
                <ArrowRight size={18} className={location.pathname === link.path ? 'opacity-100' : 'opacity-0'} />
              </Link>
            ))}
            <div className="pt-6">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-600 text-white p-5 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl shadow-blue-600/20"
              >
                Admissions Enquiry
              </Link>
            </div>
            
            <div className="mt-auto pt-10 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Contact School Office</p>
              <div className="flex justify-center gap-6">
                <a href={`tel:${SCHOOL_INFO.phone}`} className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Phone size={20} />
                </a>
                <a href={SCHOOL_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
