
import React from 'react';
import { BookOpen, UserCheck, RefreshCw, ClipboardCheck, GraduationCap, Palette, Music, Trophy, Dumbbell, Cpu, Library, Paintbrush, Mic2, Swords, Gamepad2 } from 'lucide-react';

const Academics: React.FC = () => {
  const activities = [
    {
      category: "Sports & Athletics",
      icon: <Dumbbell className="text-red-500" />,
      items: ["Cricket & Football", "Kho-Kho & Kabaddi", "Yoga & Meditation", "Annual Sports Meet", "Track & Field Events"],
      color: "bg-red-50"
    },
    {
      category: "Visual & Performing Arts",
      icon: <Palette className="text-purple-500" />,
      items: ["Painting & Sketching", "Traditional Folk Dance", "School Choir & Music", "Clay Modeling", "Drama & Theater"],
      color: "bg-purple-50"
    },
    {
      category: "Literary & Cultural",
      icon: <Mic2 className="text-blue-500" />,
      items: ["Debate & Elocution", "Bilingual Quiz Club", "Poetry Recitation", "Spelling Bee", "Cultural Festivals"],
      color: "bg-blue-50"
    },
    {
      category: "Life Skills & Hobbies",
      icon: <Trophy className="text-yellow-600" />,
      items: ["Gardening & Ecology", "Basic Computer Skills", "Social Service Club", "Leadership Workshops", "Craft & Origami"],
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="pt-12 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Curriculum</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Academic Overview</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a structured and student-friendly approach that focuses on understanding concepts rather than rote learning.</p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <BookOpen className="text-blue-600" />,
              title: "Concept-based learning",
              desc: "Deep understanding of fundamentals before moving to complex topics."
            },
            {
              icon: <UserCheck className="text-green-600" />,
              title: "Individual student attention",
              desc: "Small class sizes allow teachers to focus on every child's specific needs."
            },
            {
              icon: <RefreshCw className="text-indigo-600" />,
              title: "Bilingual explanation",
              desc: "Concepts explained in both English and Hindi for maximum clarity."
            },
            {
              icon: <ClipboardCheck className="text-orange-600" />,
              title: "Regular assessments",
              desc: "Frequent testing and constructive feedback to track progress."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Classes Offered */}
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Classes Offered</h3>
            <p className="text-gray-600 text-lg mb-8">
              We provide foundational and intermediate education levels, ensuring a seamless transition between grades.
            </p>
            <div className="space-y-4">
              {[
                "Primary Classes (Nursery to Class 5)",
                "Middle Classes (Class 6 to Class 8)"
              ].map((lvl, i) => (
                <div key={i} className="flex items-center gap-4 bg-blue-50 p-5 rounded-2xl border border-blue-100">
                  <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-bold text-blue-900 text-lg">{lvl}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
               <h4 className="text-4xl font-extrabold mb-2 italic">100%</h4>
               <p className="text-blue-100 text-sm font-medium">Concept Focused</p>
             </div>
             <div className="bg-indigo-600 rounded-3xl p-8 text-white text-center">
               <h4 className="text-4xl font-extrabold mb-2 italic">Bilingual</h4>
               <p className="text-indigo-100 text-sm font-medium">Learning Support</p>
             </div>
             <div className="col-span-2 bg-gray-900 rounded-3xl p-8 text-white flex items-center justify-between">
               <div>
                 <h4 className="text-xl font-bold mb-1">Modern Methods</h4>
                 <p className="text-gray-400 text-xs">Preparing students for tomorrow</p>
               </div>
               <BookOpen className="text-blue-400" size={40} />
             </div>
          </div>
        </div>

        {/* Detailed Extracurricular Activities Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Extracurricular Excellence</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We believe in holistic development. Beyond the classroom, our students engage in a variety of activities to discover their hidden talents and build confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((act, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row h-full">
                <div className={`${act.color} p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100`}>
                  <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    {React.cloneElement(act.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h4 className="font-bold text-gray-900">{act.category}</h4>
                </div>
                <div className="p-8 md:w-2/3 flex-grow bg-white">
                  <ul className="grid grid-cols-1 gap-3">
                    {act.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Resources Section */}
        <div className="bg-blue-900 rounded-[3rem] p-10 md:p-16 text-white">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6">Student Resources</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">We provide modern facilities that act as catalysts for better learning outcomes.</p>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Library className="text-blue-400" />
                  <div>
                    <h5 className="font-bold">Resource Library</h5>
                    <p className="text-blue-200 text-sm">Over 5,000 books covering curriculum and general knowledge.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Cpu className="text-green-400" />
                  <div>
                    <h5 className="font-bold">E-Learning Lab</h5>
                    <p className="text-blue-200 text-sm">Computer facilities with educational software and internet access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
               <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b54a?auto=format&fit=crop&q=80" alt="Resources" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
