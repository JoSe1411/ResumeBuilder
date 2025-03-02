import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/constants/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - ResumeForge',
    absolute: 'ResumeForge',
  },
  description:
    'Create a professional resume effortlessly with our AI-powered resume builder. Stand out from the competition and land your dream job.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          themes={['light', 'dark']}
          disableTransitionOnChange={true}>
          <ClerkProvider>
            <div className="flex h-screen flex-col">
              <div className='h-16'> <Navbar /></div>
              <main className='flex-1 overflow-auto'>{children}</main>
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
