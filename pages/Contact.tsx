
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Globe } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Details</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We are here to assist you. Feel free to reach out for any information.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-blue-600 transition-colors duration-300">
            <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 mb-6 group-hover:bg-blue-500 group-hover:text-white"><MapPin size={28} /></div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white">Our Address</h3>
            <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed">{SCHOOL_INFO.address}</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-green-600 transition-colors duration-300">
            <div className="bg-green-100 p-4 rounded-2xl text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white"><Phone size={28} /></div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white">Call Us</h3>
            <p className="text-gray-500 group-hover:text-green-100 text-sm">{SCHOOL_INFO.phone}</p>
            <p className="text-xs mt-2 text-gray-400 group-hover:text-green-200 italic">Open during school hours</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-indigo-600 transition-colors duration-300">
            <div className="bg-indigo-100 p-4 rounded-2xl text-indigo-600 mb-6 group-hover:bg-indigo-500 group-hover:text-white"><Globe size={28} /></div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white">Website</h3>
            <a href={`https://${SCHOOL_INFO.website}`} target="_blank" className="text-gray-500 group-hover:text-indigo-100 text-sm hover:underline">{SCHOOL_INFO.website}</a>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-orange-600 transition-colors duration-300">
            <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white"><Clock size={28} /></div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white">School Timings</h3>
            <p className="text-gray-500 group-hover:text-orange-100 text-sm">{SCHOOL_INFO.hours}</p>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full">
            <div className="p-8 border-b border-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-500">Use Google Maps to get directions to our school location.</p>
            </div>
            <div className="flex-grow min-h-[400px]">
              <iframe 
                src={SCHOOL_INFO.embedMapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-14 text-white">
            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <MessageSquare className="text-blue-400" />
                Contact Form
              </h3>
              <p className="text-gray-400">Have questions about admissions or academics? Fill out the form below and we will get back to you as soon as possible.</p>
            </div>
            <form className="space-y-6">
              <div className="space-y-4">
                <input required type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 outline-none transition-all placeholder:text-gray-500" placeholder="Full Name" />
                <input required type="email" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 outline-none transition-all placeholder:text-gray-500" placeholder="Email Address" />
                <textarea required className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 outline-none transition-all h-40 resize-none placeholder:text-gray-500" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2">
                Send Message <ExternalLink size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
