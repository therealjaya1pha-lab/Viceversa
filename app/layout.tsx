import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Vice Versa Speech and Language Services | Pediatric Therapy Irving TX',
  description: 'Private practice dedicated to pediatric speech, language, and feeding therapy (AEIOU & SOS certified), Orton-Gillingham reading, and EmpowerEd programs in Irving, TX. Hablamos español.',
  keywords: 'Speech therapy Irving TX, pediatric feeding therapy, speech language pathologist, AEIOU feeding, SOS feeding, Medicaid speech therapy, Orton-Gillingham reading, Vice Versa Speech',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased font-sans">
        <AppProvider>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <Toaster position="top-right" richColors />
        </AppProvider>
      </body>
    </html>
  );
}


