
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Users, MapPin, ArrowRight, Star, GraduationCap, 
  Heart, Clock, Bell, Quote, ExternalLink,
  Microscope, Library, Laptop, Music,
  ChevronLeft, ChevronRight, Award, Sparkles, Phone
} from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Home: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1523050853051-f75dbba890cf?auto=format&fit=crop&q=80",
      title: "Main Campus Entrance",
      category: "Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      title: "Interactive Smart Classroom",
      category: "Classrooms"
    },
    {
      url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
      title: "Students Group Activity",
      category: "Students"
    }
  ];

  const upcomingEvents = [
    { day: "15", month: "DEC", title: "Annual Sports Meet", time: "09:00 AM" },
    { day: "22", month: "DEC", title: "Science Exhibition", time: "10:30 AM" },
    { day: "05", month: "JAN", title: "New Session Orientation", time: "11:00 AM" }
  ];

  const facilities = [
    { icon: <Microscope />, title: "Modern Science Lab", desc: "Equipped for hands-on learning." },
    { icon: <Library />, title: "Digital Library", desc: "5,000+ books and e-resources." },
    { icon: <Laptop />, title: "Computer Center", desc: "Learning digital literacy early." },
    { icon: <Music />, title: "Activity Hall", desc: "Space for arts, music, and yoga." }
  ];

  const googleReviews = [
    { 
      name: "Sanjay Kumar", 
      text: "The bilingual approach has helped my son grasp complex subjects much faster. The teachers are incredibly supportive and professional. Highly recommend for local parents.", 
      date: "2 months ago"
    },
    { 
      name: "Anita Devi", 
      text: "God's Grace provides the perfect balance of discipline and academic excellence. My daughter loves going to school every day. The facilities are great.", 
      date: "1 month ago"
    },
    { 
      name: "Rajesh Prasad", 
      text: "Impressive focus on English speaking skills while keeping the local culture alive. Best school in the Rautari / Bijaipur area for quality education.", 
      date: "3 weeks ago"
    },
    { 
      name: "Meera Singh", 
      text: "A wonderful environment for holistic growth. My children have shown great progress in both studies and extra-curricular activities since joining.", 
      date: "1 week ago"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % googleReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* High-Impact Split Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-white pt-24 lg:pt-0 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 hidden lg:block -z-10">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1e40af 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Content Area */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                <Sparkles size={14} className="animate-pulse" />
                Admission Open for Session 2025-26
              </div>

              <div>
                <h2 className="text-blue-600/70 font-bold text-xl mb-2 tracking-tight">
                  {SCHOOL_INFO.nameHi}
                </h2>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tighter">
                  Nurturing Minds <br />
                  <span className="text-blue-600">Building Futures.</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A premier English and Hindi medium institution in <span className="text-gray-900 font-bold">Rautari, Bijaipur</span>, where academic excellence meets traditional values.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <Link 
                  to="/admissions" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1"
                >
                  Apply Now <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/academics" 
                  className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm"
                >
                  Curriculum
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-4 border-white bg-blue-${i * 100 + 200}`}></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 leading-none">500+ Students</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Enrolled Yearly</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 leading-none">4.8 Rating</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Area */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,64,175,0.2)] border-[16px] border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80" 
                  alt="Students learning at God's Grace School" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Info Badge on Image */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl animate-float">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-2xl text-white">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-sm leading-none mb-1">Empowering Youth</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Since foundation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Achievement Badge */}
              <div className="absolute -top-12 -right-6 lg:-right-12 w-32 h-32 lg:w-48 lg:h-48 z-20 animate-spin-slower">
                <svg className="w-full h-full text-blue-600 opacity-20" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] font-black uppercase tracking-[0.2em] fill-current">
                    <textPath xlinkHref="#textPath">
                      • Academic Excellence • Character Building • Quality Education •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-600 text-white w-16 h-16 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl">
                    <Award size={32} />
                    <span className="text-[8px] font-bold uppercase mt-1">Best Choice</span>
                  </div>
                </div>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute top-1/2 right-0 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Bar */}
      <section className="bg-white border-b border-gray-100 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Contact Us</p>
                <p className="text-sm font-bold text-gray-900">{SCHOOL_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0 md:px-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Campus Hours</p>
                <p className="text-sm font-bold text-gray-900">{SCHOOL_INFO.hours}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Recognition</p>
                <p className="text-sm font-bold text-gray-900">Registered Educational Inst.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-6xl font-black mb-2 italic">15:1</div>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Student Ratio</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black mb-2 italic">10+</div>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Expert Teachers</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black mb-2 italic">100%</div>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Pass Rate</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black mb-2 italic">15+</div>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Activities</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      </section>

      {/* Announcements Bar - FIXED OVERLAP */}
      <section className="bg-orange-50 py-6 border-b border-orange-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
          {/* Label Curtain Mask */}
          <div className="flex items-center gap-3 text-orange-600 font-bold shrink-0 z-20 bg-orange-50 pr-8 relative after:absolute after:right-0 after:top-0 after:h-full after:w-8 after:bg-gradient-to-r after:from-orange-50 after:to-transparent">
            <Bell size={20} className="animate-bounce" />
            <span className="uppercase text-[10px] tracking-[0.2em] whitespace-nowrap">School Updates:</span>
          </div>
          
          {/* Scrolling Marquee Container */}
          <div className="flex-1 overflow-hidden z-10">
            <div className="flex gap-20 animate-marquee whitespace-nowrap text-gray-700 font-bold text-sm">
              <span>• Admissions Open for 2025-26 Session •</span>
              <span>• Annual Sports Day scheduled for Dec 15th •</span>
              <span>• Mid-Term results are now available at the office •</span>
              <span>• Winter Uniform Policy starts from November 1st •</span>
              {/* Duplicate for seamless scrolling */}
              <span>• Admissions Open for 2025-26 Session •</span>
              <span>• Annual Sports Day scheduled for Dec 15th •</span>
              <span>• Mid-Term results are now available at the office •</span>
              <span>• Winter Uniform Policy starts from November 1st •</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Stay Updated</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h3>
              <p className="text-gray-500 mt-4">Mark your calendars for these exciting activities at God's Grace School.</p>
            </div>
            <Link to="/academics" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View School Calendar <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="flex gap-6 items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center bg-blue-600 text-white w-20 h-20 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black">{event.day}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">{event.month}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{event.title}</h4>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Clock size={12} />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Highlights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h3>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={28} />,
                title: "English Medium Education",
                desc: "Primary medium of instruction is English, following top educational standards.",
                color: "bg-blue-600"
              },
              {
                icon: <Users size={28} />,
                title: "Bilingual Teaching Support",
                desc: "We use both English and Hindi to ensure every child understands complex concepts clearly.",
                color: "bg-green-600"
              },
              {
                icon: <Heart size={28} />,
                title: "Caring Teachers",
                desc: "Experienced educators who provide individual attention to every student's growth.",
                color: "bg-red-500"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Infrastructure</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Campus Facilities</h3>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((fac, idx) => (
              <div key={idx} className="text-center p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-blue-100 transition-all duration-500 group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(fac.icon as React.ReactElement<any>, { size: 30 })}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{fac.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Parent Feedback</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Reviews on Google</h3>
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-bold ml-2 text-lg">4.8 / 5.0</span>
              </div>
            </div>
            <a 
              href={SCHOOL_INFO.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl"
            >
              View All Google Reviews <ExternalLink size={18} />
            </a>
          </div>

          <div className="relative max-w-4xl mx-auto px-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {googleReviews.map((t, idx) => (
                  <div key={idx} className="w-full shrink-0 px-4">
                    <div className="bg-white/5 p-10 md:p-14 rounded-[3rem] border border-white/10 relative text-center min-h-[400px] flex flex-col justify-center">
                      <Quote className="absolute top-10 left-10 text-blue-500/10" size={80} />
                      <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center text-2xl font-black border border-blue-500/20 shadow-inner">
                          {t.name.charAt(0)}
                        </div>
                      </div>
                      <p className="text-gray-200 text-lg md:text-2xl italic mb-10 leading-relaxed font-medium px-4">
                        "{t.text}"
                      </p>
                      <div className="flex flex-col items-center">
                        <h5 className="text-white font-bold text-xl mb-1">{t.name}</h5>
                        <div className="flex items-center gap-2">
                           <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Verified Parent</span>
                           <span className="text-gray-600 text-xs">•</span>
                           <span className="text-gray-500 text-xs">{t.date}</span>
                        </div>
                        <div className="flex gap-1 mt-3">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {googleReviews.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentReview === idx ? 'bg-blue-500 w-8' : 'bg-white/20'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Admissions Path Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Join Us Today</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">4 Simple Steps to Enroll</h3>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { step: "01", title: "Inquire", desc: "Contact us via phone or web form." },
              { step: "02", title: "Campus Tour", desc: "Visit our campus to see the facilities." },
              { step: "03", title: "Documents", desc: "Submit birth certificate and photos." },
              { step: "04", title: "Enroll", desc: "Complete registration & join the batch." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 text-center bg-blue-50 rounded-[2.5rem] border border-blue-100 hover:border-blue-300 transition-colors group">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/admissions" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-xl shadow-blue-900/20">
              Start Admission Process <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Glimpse into our school</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h3>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative h-80 rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="inline-block w-fit bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-white text-2xl font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
            <div className="lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-6">Find Us Easily</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Our school is located in the heart of Rautari, Bijaipur, Bihar. We welcome visitors during office hours.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-2.5 rounded-xl text-blue-400">
                    <MapPin size={22} />
                  </div>
                  <span className="text-gray-300 font-medium">{SCHOOL_INFO.address}</span>
                </div>
              </div>
              <a 
                href={SCHOOL_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-center inline-block transition-all shadow-lg shadow-blue-900/40"
              >
                Get Directions
              </a>
            </div>
            <div className="lg:w-3/5 h-[450px] lg:h-auto border-l border-white/5">
              <iframe 
                src={SCHOOL_INFO.embedMapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="School Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Styles for Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
