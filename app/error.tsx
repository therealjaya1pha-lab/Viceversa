'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw, Home, Phone } from 'lucide-react';
import Link from 'next/link';

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js App Router Error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#F8FAFC]">
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xl max-w-lg w-full text-center space-y-6 animate-fade-in-up">
        <div className="w-16 h-16 bg-[#FDF2F4] text-[#9C1D38] border border-[#F4C5CE] rounded-full flex items-center justify-center mx-auto shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-bold text-[#9C1D38] uppercase tracking-widest bg-[#FDF2F4] border border-[#F4C5CE] px-3 py-1 rounded-full inline-block">
            Application Error
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] tracking-tight">
            We encountered a problem
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our app experienced an unexpected issue. You can try refreshing the view or navigate back to safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#9C1D38] hover:bg-[#7A1429] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Page</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need assistance? Call Vice Versa at{' '}
          <a href="tel:4693201700" className="text-[#9C1D38] font-bold hover:underline inline-flex items-center space-x-1">
            <Phone className="w-3 h-3 inline" />
            <span>469-320-1700</span>
          </a>
        </div>
      </div>
    </div>
  );
}
