'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Phone, Calendar } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ParentAssistant() {
  const { language, openBookingWithService } = useApp();
  const isEs = language === 'es';

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string }>>([
    {
      sender: 'assistant',
      text: isEs
        ? '¡Hola! Soy el asistente virtual de Vice Versa. ¿Tiene alguna pregunta sobre los hitos del habla, terapia de alimentación o seguros medicos?'
        : 'Hello! I am the Vice Versa Parent Assistant. Do you have questions about speech milestones, feeding therapy, or insurance coverage?'
    }
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText, language }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: 'assistant', text: data.text }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: isEs
            ? 'Nos encantaría ayudarle directamente. Llámenos al 469-320-1700 para hablar con nuestro equipo.'
            : 'We would love to help! Please call our office at 469-320-1700 to speak with our intake team.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#86172E] via-[#9C1D38] to-[#7A1429] hover:from-[#7A1429] hover:to-[#5F0F1F] text-white p-4 rounded-full shadow-2xl flex items-center space-x-2.5 transition-all hover:scale-105 group border-2 border-white/90 active:scale-95"
          aria-label="Open AI Speech Assistant"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider pr-1">
            {isEs ? 'Asistente Vice Versa' : 'Ask Vice Versa AI'}
          </span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl w-[90vw] sm:w-[380px] h-[480px] shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#86172E] via-[#9C1D38] to-[#7A1429] text-white p-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/20">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Vice Versa Parent Assistant</h4>
                <p className="text-[10px] text-rose-100/90 flex items-center space-x-1 font-medium">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                  <span>{isEs ? 'En línea • Terapia Infantil' : 'Online • Speech & Feeding Support'}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#9C1D38] text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 border border-gray-200 p-3 rounded-2xl text-xs flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#9C1D38] animate-spin" />
                  <span>{isEs ? 'Pensando respuesta...' : 'Consulting Vice Versa clinical guidelines...'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick CTAs */}
          <div className="px-3.5 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <button
              onClick={() => openBookingWithService()}
              className="text-[#9C1D38] font-bold flex items-center space-x-1.5 hover:text-[#7A1429] transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#9C1D38]" />
              <span>{isEs ? 'Solicitar Cita' : 'Book Evaluation'}</span>
            </button>
            <a
              href="tel:4693201700"
              className="text-slate-600 font-semibold flex items-center space-x-1.5 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9C1D38]" />
              <span>469-320-1700</span>
            </a>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isEs ? 'Escriba su pregunta aquí...' : 'Ask about speech, feeding, insurance...'}
              className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#9C1D38] focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#9C1D38] text-white p-2.5 rounded-xl hover:bg-[#7A1429] disabled:opacity-50 transition-all active:scale-95 shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
