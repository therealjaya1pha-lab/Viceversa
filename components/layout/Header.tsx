'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, Menu, X, Globe, Calendar, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, openBookingWithService, setIsScreenerOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isEs = language === 'es';

  const navLinks = [
    { name: isEs ? 'INICIO' : 'HOME', href: '/' },
    { name: isEs ? 'NOSOTROS' : 'ABOUT', href: '/about' },
    { name: isEs ? 'SEGUROS' : 'INSURANCE', href: '/insurance' },
    { name: isEs ? 'SERVICIOS' : 'SERVICES', href: '/services' },
    { name: isEs ? 'NIÑERAS' : 'NANNIES', href: '/nannies' },
    { name: isEs ? 'EMPOWER' : 'EMPOWER', href: '/empower' },
    { name: isEs ? 'EMPLEO' : 'EMPLOYMENT', href: '/employment' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top Red Contact Bar */}
      <div className="bg-gradient-to-r from-[#86172E] via-[#9C1D38] to-[#7A1429] text-white py-1.5 px-4 text-xs md:text-sm font-medium shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:info@viceversaspeech.com"
              className="flex items-center space-x-1.5 hover:text-burgundy-soft transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-rose-200" />
              <span>info@viceversaspeech.com</span>
            </a>
            <a
              href="tel:4693201700"
              className="flex items-center space-x-1.5 hover:text-burgundy-soft transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-200" />
              <span>469-320-1700</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsScreenerOpen(true)}
              className="hidden lg:flex items-center space-x-1.5 bg-white/15 hover:bg-white/25 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transition-all shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>{isEs ? 'Evaluación Rápida' : 'Therapy Screener'}</span>
            </button>

            <div className="flex items-center space-x-1 bg-black/25 p-0.5 rounded-full text-xs border border-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full transition-all font-semibold ${
                  language === 'en' ? 'bg-white text-[#9C1D38] shadow-xs' : 'text-white/90 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-0.5 rounded-full transition-all font-semibold ${
                  language === 'es' ? 'bg-white text-[#9C1D38] shadow-xs' : 'text-white/90 hover:text-white'
                }`}
              >
                ES (Español)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Logo & Nav Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Double speech bubbles icon mirroring original logo */}
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm transition-transform group-hover:scale-105">
              <path
                d="M 25 15 C 10 15 0 27 0 42 C 0 55 8 66 20 70 L 15 88 L 35 78 C 40 80 45 80 50 80 C 65 80 75 68 75 53 C 75 38 65 26 50 26 L 25 15 Z"
                fill="#9C1D38"
              />
              <path
                d="M 45 35 C 35 35 25 43 25 55 C 25 65 32 73 42 76 L 38 90 L 53 82 C 58 84 62 84 66 84 C 80 84 90 74 90 61 C 90 48 80 38 66 38 Z"
                fill="#2B2B2B"
                opacity="0.88"
              />
            </svg>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2B2B2B] leading-none font-serif">
              Vice Versa
            </div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9C1D38] mt-0.5">
              Speech and Language Services
            </div>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#9C1D38] font-bold border-b-2 border-[#9C1D38]'
                    : 'text-gray-700 hover:text-[#9C1D38]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => openBookingWithService()}
            className="bg-[#1E293B] hover:bg-[#0F172A] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all hover:shadow-md active:scale-95"
          >
            {isEs ? 'CONTACTO' : 'CONTACT'}
          </button>
          <Link
            href="/nannies"
            className="bg-[#C8C5F4] hover:bg-[#B5B1EF] text-[#4C468E] px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all hover:shadow-md border border-[#B5B1EF] active:scale-95"
          >
            LOLN
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => openBookingWithService()}
            className="sm:hidden bg-[#2B2B2B] text-white px-3 py-1.5 rounded text-xs font-bold uppercase"
          >
            {isEs ? 'CITA' : 'BOOK'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-[#9C1D38] hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#9C1D38]/10 text-[#9C1D38] font-bold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingWithService();
              }}
              className="w-full bg-[#2B2B2B] text-white py-2.5 rounded-md font-bold text-center text-xs uppercase tracking-wider"
            >
              {isEs ? 'AGENDAR CITA' : 'CONTACT / BOOK APPOINTMENT'}
            </button>
            <Link
              href="/nannies"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#C8C5F4] text-[#2B2B2B] py-2.5 rounded-md font-bold text-center text-xs uppercase tracking-wider block"
            >
              LOLN (LANGUAGE OF LEARNING NANNIES)
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsScreenerOpen(true);
              }}
              className="w-full bg-amber-50 text-amber-800 border border-amber-200 py-2.5 rounded-md font-medium text-center text-xs flex items-center justify-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isEs ? 'Evaluación de Síntomas' : 'Child Therapy Screener'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
