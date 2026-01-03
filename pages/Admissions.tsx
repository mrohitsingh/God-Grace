
import React, { useState } from 'react';
import { SCHOOL_INFO } from '../constants';
import { Send, FileText, Calendar, UserPlus, HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';

const Admissions: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    { q: "What is the medium of instruction?", a: "The primary medium is English, but we use a bilingual approach (English and Hindi) to ensure every student understands the concepts clearly." },
    { q: "Is transport facility available?", a: "Yes, we provide safe and supervised transport facilities for students coming from nearby areas in Bijaipur." },
    { q: "What are the school fees?", a: "Fees are structured per grade. Please visit the school office during working hours for a detailed fee structure for the current session." },
    { q: "Are uniforms mandatory?", a: "Yes, a standard school uniform is mandatory for all students to foster equality and discipline." }
  ];

  const ageCriteria = [
    { grade: "Nursery", age: "3+ Years" },
    { grade: "L.K.G", age: "4+ Years" },
    { grade: "U.K.G", age: "5+ Years" },
    { grade: "Class 1", age: "6+ Years" }
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Enrollment</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Admissions Information</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Admissions are open for students seeking quality English medium education in a disciplined and supportive environment.
          </p>
        </div>

        {/* Age Guidelines Section */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-sm mb-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Age Criteria</h3>
              <p className="text-gray-500 mb-8">Please ensure your child meets the age requirements for the respective grade before applying.</p>
              <div className="grid grid-cols-1 gap-4">
                {ageCriteria.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="font-bold text-gray-900">{item.grade}</span>
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{item.age}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-blue-900 p-10 rounded-3xl text-white">
                <h4 className="text-2xl font-bold mb-4">Registration Note</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 shrink-0 mt-1" size={18} />
                    <span>Age calculation as of March 31st of the academic year.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 shrink-0 mt-1" size={18} />
                    <span>Admission depends on seat availability and assessment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Info Section */}
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="text-blue-600" />
                Admission Process
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Visit the school campus", desc: "Come and see our facilities and environment first-hand." },
                  { step: "2", title: "Meet school authorities", desc: "A brief interaction session with parents and the student." },
                  { step: "3", title: "Submit required documents", desc: "Provide necessary paperwork for the enrollment process." },
                  { step: "4", title: "Admission confirmation", desc: "Finalize registration and secure your child's place." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FileText className="text-green-600" />
                Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "Birth Certificate",
                  "Previous School Records (if applicable)",
                  "Passport-size photographs"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-medium text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-blue-600 rounded-2xl text-white">
                <h5 className="font-bold mb-2 flex items-center gap-2">
                  <UserPlus size={18} />
                  Office Note
                </h5>
                <p className="text-blue-100 text-sm">
                  Visit the school during working hours ({SCHOOL_INFO.hours}) for a personal guided tour and direct inquiry.
                </p>
              </div>
            </section>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12 relative">
            {submitted ? (
              <div className="text-center py-24">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Enquiry Submitted</h3>
                <p className="text-gray-600 text-lg mb-8">Thank you for your interest! We will get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3 justify-center lg:justify-start">
                    <HelpCircle className="text-blue-600" />
                    Admission Enquiry
                  </h3>
                  <p className="text-gray-500">Have questions? Fill out the form below and we will get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Parent Name" />
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Student Name" />
                    <input required type="tel" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Phone Number" />
                    <textarea required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all h-32 resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 text-lg">
                    Submit Enquiry <Send size={20} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Admissions FAQ</h3>
            <p className="text-gray-500">Quick answers to common questions from parents.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{f.q}</span>
                  <ChevronDown className={`text-gray-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-in slide-in-from-top-2">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
