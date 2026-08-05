import Link from 'next/link';
import { FileQuestion, Home, ArrowRight, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-6 bg-[#F8FAFC]">
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-xl max-w-lg w-full text-center space-y-6 animate-fade-in-up">
        <div className="w-20 h-20 bg-[#F4F3FF] text-[#4C468E] border border-[#C8C5F4] rounded-full flex items-center justify-center mx-auto shadow-xs">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-bold text-[#4C468E] uppercase tracking-widest bg-[#F4F3FF] border border-[#C8C5F4] px-3 py-1 rounded-full inline-block">
            404 - Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The page or service resource you are looking for might have been moved or doesn’t exist. Let’s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#9C1D38] hover:bg-[#7A1429] text-white px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-center space-x-2 text-xs text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-[#9C1D38]" />
          <span>Vice Versa Speech and Language Services • Irving, TX</span>
        </div>
      </div>
    </div>
  );
}
