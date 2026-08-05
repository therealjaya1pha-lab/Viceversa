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
          className="bg-[#9C1D38] hover:bg-[#7A1429] text-white p-4 rounded-full shadow-2xl flex items-center space-x-2 transition-transform hover:scale-105 group border-2 border-white"
          aria-label="Open AI Speech Assistant"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider pr-1">
            {isEs ? 'Asistente Vice Versa' : 'Ask Vice Versa AI'}
          </span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl w-[90vw] sm:w-[380px] h-[480px] shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#9C1D38] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm font-serif">Vice Versa Parent Assistant</h4>
                <p className="text-[10px] text-red-100 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                  <span>{isEs ? 'En línea • Terapia Infantil' : 'Online • Speech & Feeding Support'}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
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
          <div className="px-3 py-1.5 bg-gray-100 flex items-center justify-between text-[11px]">
            <button
              onClick={() => openBookingWithService()}
              className="text-[#9C1D38] font-bold flex items-center space-x-1 hover:underline"
            >
              <Calendar className="w-3 h-3" />
              <span>{isEs ? 'Solicitar Cita' : 'Book Evaluation'}</span>
            </button>
            <a
              href="tel:4693201700"
              className="text-gray-700 font-semibold flex items-center space-x-1 hover:underline"
            >
              <Phone className="w-3 h-3 text-[#9C1D38]" />
              <span>469-320-1700</span>
            </a>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isEs ? 'Escriba su pregunta aquí...' : 'Ask about speech, feeding, insurance...'}
              className="flex-1 px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#9C1D38]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#9C1D38] text-white p-2 rounded-xl hover:bg-[#7A1429] disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
