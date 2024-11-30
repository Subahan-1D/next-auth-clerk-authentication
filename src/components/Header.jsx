import Link from "next/link";
import React from "react";
import { SignInButton , SignedIn , SignedOut , UserButton } from "@clerk/nextjs";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-red-500 text-3xl font-bold hover:text-red-600 transition duration-300">
            Next-auth
          </span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/home"
                className="hover:text-red-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-red-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
             <SignedIn>
              <UserButton></UserButton>
             </SignedIn>
             <SignedOut>
              <SignInButton></SignInButton>
             </SignedOut>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
