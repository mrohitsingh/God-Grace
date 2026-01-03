
import React from 'react';
import { Target, Eye, Book, Shield, GraduationCap, Heart, User, History, Star, Lightbulb } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our School</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{SCHOOL_INFO.nameEn}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A trusted bilingual educational institution located in Rautari, Bijaipur, Bihar.</p>
        </div>

        {/* Principal's Message Section */}
        <div className="bg-blue-900 rounded-[3rem] p-10 md:p-20 text-white mb-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 shrink-0">
            <div className="relative">
              <div className="w-full aspect-square bg-blue-800 rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1544161515-4af6ce1dbbe3?auto=format&fit=crop&q=80" alt="Principal" className="w-full h-full object-cover grayscale brightness-90" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl text-blue-900 shadow-xl border border-blue-100">
                <h5 className="font-black text-lg">Principal</h5>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">God's Grace School</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <User className="text-blue-400" />
              Principal's Message
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6 italic">
              "Welcome to God's Grace English Medium School. Our mission is to go beyond textbooks and empower our students with character, integrity, and the confidence to lead. We believe every child is a unique gift of God, and our job is to nurture their inherent potential in a safe, bilingual environment."
            </p>
            <p className="text-blue-200">
              Education is the most powerful weapon which you can use to change the world. We are committed to providing that weapon to the children of Bijaipur.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Our Core Values</h3>
            <p className="text-gray-500 mt-2">The pillars that hold our institution together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="text-blue-600" />, title: "Integrity", desc: "Honesty and strong moral principles are the foundation of our student's character." },
              { icon: <Heart className="text-red-600" />, title: "Respect", desc: "Developing empathy and respect for all cultures, languages, and individuals." },
              { icon: <Lightbulb className="text-yellow-600" />, title: "Excellence", desc: "Striving for the best in every academic and extra-curricular endeavor." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   {v.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="bg-gray-50 rounded-[3rem] p-10 md:p-20 mb-20">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                 <History size={16} />
                 Our Journey
               </div>
               <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Building a Legacy of Knowledge in Bihar.</h3>
               <div className="space-y-10 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                    <h5 className="font-bold text-lg mb-1">Founding Year</h5>
                    <p className="text-gray-600 text-sm">Established with a vision to bring quality English medium education to Rautari, Bijaipur.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-300 border-4 border-white"></div>
                    <h5 className="font-bold text-lg mb-1">Campus Expansion</h5>
                    <p className="text-gray-600 text-sm">Growing our facilities to include science labs and dedicated sports areas.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-300 border-4 border-white"></div>
                    <h5 className="font-bold text-lg mb-1">Future Forward</h5>
                    <p className="text-gray-600 text-sm">Integrating modern technology and digital learning tools for our students.</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Students" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[4/5] rounded-3xl overflow-hidden mt-8">
                 <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80" alt="Building" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-10 rounded-[2rem] border border-blue-100">
            <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
              <Target size={30} />
            </div>
            <h4 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h4>
            <p className="text-blue-800 leading-relaxed text-lg">
              To provide quality education that helps students grow academically, socially, and morally in a safe and positive learning environment.
            </p>
          </div>
          <div className="bg-green-50 p-10 rounded-[2rem] border border-green-100">
            <div className="bg-green-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
              <Eye size={30} />
            </div>
            <h4 className="text-2xl font-bold text-green-900 mb-4">Our Vision</h4>
            <p className="text-green-800 leading-relaxed text-lg">
              To become a trusted educational institution that prepares students for future challenges through knowledge, values, and discipline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
