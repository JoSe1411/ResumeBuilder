import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import{
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';


const inter = Inter({ subsets: ["latin"] });


// This metadata is displayed in search results and when sharing the site
export const metadata: Metadata = {
  title: {
    template: "%s - Resume for Everyone",
    absolute: "AI Resume Builder",
  },
  description:
    "Create a professional resume effortlessly with our AI-powered resume builder. Stand out from the competition and land your dream job.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </body>
    </html>
    </ClerkProvider>
  );
}
