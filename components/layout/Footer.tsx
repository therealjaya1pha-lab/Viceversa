'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Printer, Mail, MapPin, Facebook, Heart } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { language } = useApp();
  const isEs = language === 'es';

  return (
    <footer className="w-full bg-[#333333] text-white">
      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Spanish Banner */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg viewBox="0 0 100 100" className="w-9 h-9">
                <path
                  d="M 25 15 C 10 15 0 27 0 42 C 0 55 8 66 20 70 L 15 88 L 35 78 C 40 80 45 80 50 80 C 65 80 75 68 75 53 C 75 38 65 26 50 26 L 25 15 Z"
                  fill="#9C1D38"
                />
                <path
                  d="M 45 35 C 35 35 25 43 25 55 C 25 65 32 73 42 76 L 38 90 L 53 82 C 58 84 62 84 66 84 C 80 84 90 74 90 61 C 90 48 80 38 66 38 Z"
                  fill="#FFFFFF"
                  opacity="0.9"
                />
              </svg>
              <div>
                <span className="text-2xl font-extrabold tracking-tight font-serif text-white block leading-none">
                  Vice Versa
                </span>
                <span className="text-[10px] uppercase font-semibold text-red-300 tracking-wider">
                  Speech and Language Services
                </span>
              </div>
            </div>

            <p className="text-sm font-medium text-red-200 italic">
              ¡Hablamos español, llámanos hoy!
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                {isEs ? 'Síguenos:' : 'Follow Us:'}
              </h4>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#9C1D38] transition-colors">
                  <Facebook className="w-4 h-4 fill-current text-white" />
                </div>
                <span>@Vice Versa</span>
              </a>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-wide border-b border-gray-700 pb-2">
              {isEs ? 'Información de Contacto:' : 'Contact Info:'}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <a href="tel:4693201700" className="hover:text-white transition-colors">
                  469-320-1700
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Printer className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span>469-320-1732 (Fax)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <a href="mailto:info@viceversaspeech.com" className="hover:text-white transition-colors break-all">
                  info@viceversaspeech.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>
                  6230 N Belt Line Rd Ste 300<br />
                  Irving, TX 75063
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Hours */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-wide border-b border-gray-700 pb-2">
              {isEs ? 'Horario de Atención:' : 'Business Hours:'}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
              <li className="flex justify-between">
                <span>{isEs ? 'Lunes:' : 'Monday'}</span>
                <span className="font-semibold text-white">8:00am–6:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>{isEs ? 'Martes:' : 'Tuesday'}</span>
                <span className="font-semibold text-white">8:00am–6:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>{isEs ? 'Miércoles:' : 'Wednesday'}</span>
                <span className="font-semibold text-white">8:00am–6:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>{isEs ? 'Jueves:' : 'Thursday'}</span>
                <span className="font-semibold text-white">8:00am–6:00pm</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>{isEs ? 'Viernes:' : 'Friday'}</span>
                <span>{isEs ? 'Cerrado' : 'Closed'}</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>{isEs ? 'Sábado:' : 'Saturday'}</span>
                <span>{isEs ? 'Cerrado' : 'Closed'}</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>{isEs ? 'Domingo:' : 'Sunday'}</span>
                <span>{isEs ? 'Cerrado' : 'Closed'}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-wide border-b border-gray-700 pb-2">
              {isEs ? 'Enlaces Rápidos:' : 'Quick Links:'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Sobre Nosotros' : 'About'}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Servicios de Terapia' : 'Services'}
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Seguros Aceptados' : 'Insurance'}
                </Link>
              </li>
              <li>
                <Link href="/empower" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Programas Empower' : 'Empower Programs'}
                </Link>
              </li>
              <li>
                <Link href="/nannies" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Language of Learning Nannies' : 'Nannies (LOLN)'}
                </Link>
              </li>
              <li>
                <Link href="/employment" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Oportunidades de Empleo' : 'Employment'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-300 transition-colors">
                  {isEs ? 'Contacto y Citas' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#9C1D38] py-3 text-center text-xs text-white/90 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Copyright © 2026 by Vice Versa. All Rights Reserved.</span>
          <span className="flex items-center space-x-1 text-red-200">
            <span>Irving, Texas Pediatric Therapy Practice</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
