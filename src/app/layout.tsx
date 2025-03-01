import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/constants/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Resume for Everyone',
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
            <Navbar />
            <main>{children}</main>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
