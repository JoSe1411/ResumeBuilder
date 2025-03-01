"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assests/logo.png";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
  
  return (
    <>

      <nav className="border-b bg-background sticky top-0 left-4 right-4 z-50 rounded-lg shadow-sm">
        <div className="flex items-center p-4 justify-between ">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl md:text-3xl flex items-center">
          <Image
          src = {logo}
          alt="Logo"
          width = {35}
          height = {30}
          className = "rounded-full"
          />
            <span className="text-primary">Resume</span>Forge
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton 
              appearance = {{
                elements:{
                  avatarBox : {
                    height: 35,
                    width: 35
                  }
                }
              }}
              afterSignOutUrl="/" >
                <UserButton.MenuItems>
                     
                  </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm" className="hidden sm:inline-flex">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </>
  );
}