import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SCHOOL_INFO } from '../constants';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am the GraceBot assistant. How can I help you regarding God\'s Grace English Medium School today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      /* Strictly initialize GoogleGenAI as per guidelines using a named parameter for the API key */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const systemPrompt = `
        You are GraceBot, an AI assistant for "God's Grace English Medium School" in Rautari, Bijaipur, Bihar.
        Your goal is to help parents and students with basic information about the school.
        
        School Details:
        - Name: ${SCHOOL_INFO.nameEn} / ${SCHOOL_INFO.nameHi}
        - Tagline: ${SCHOOL_INFO.tagline}
        - Address: ${SCHOOL_INFO.address}
        - Hours: ${SCHOOL_INFO.hours}
        - Location: Rautari, Bijaipur, Bihar. Plus Code: ${SCHOOL_INFO.plusCode}.
        - Curriculum: Bilingual (English & Hindi Medium).
        - Contact: ${SCHOOL_INFO.phone}, ${SCHOOL_INFO.email}.
        
        Guidelines:
        - Be professional, polite, and helpful.
        - Answer in English unless the user asks in Hindi.
        - For complex questions about fees or specific grades, tell them to use the "Admissions Enquiry" form or visit the school office.
        - Keep answers short and clear.
      `;

      const response = await ai.models.generateContent({
        model: model,
        contents: userMsg,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please contact the school office directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having some trouble connecting. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="bg-white w-[350px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg"><Bot size={20} /></div>
              <div>
                <h4 className="font-bold text-sm">GraceBot Assistant</h4>
                <p className="text-[10px] text-blue-100">Always online to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-400 text-xs italic">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 top-1.5 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">
            Ask GraceBot
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;