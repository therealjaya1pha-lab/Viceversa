'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by Vice Versa ErrorBoundary:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[450px] my-12 flex items-center justify-center p-6 bg-slate-50 border border-slate-200/80 rounded-2xl max-w-2xl mx-auto shadow-sm">
          <div className="text-center space-y-5 max-w-md">
            <div className="w-16 h-16 bg-[#FDF2F4] text-[#9C1D38] border border-[#F4C5CE] rounded-full flex items-center justify-center mx-auto shadow-xs animate-scale-in">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-[#1E293B] tracking-tight">
                Something went wrong
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We encountered an unexpected glitch. Please try refreshing or returning to our home page.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#9C1D38] hover:bg-[#7A1429] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500">
              Need immediate assistance? Call our clinic directly at{' '}
              <a href="tel:4693201700" className="text-[#9C1D38] font-bold hover:underline inline-flex items-center space-x-1">
                <Phone className="w-3 h-3 inline" />
                <span>469-320-1700</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
