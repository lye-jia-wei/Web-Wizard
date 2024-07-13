"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import "../../../styles/globals.css";
import { ArrowRight } from "lucide-react";
import WhiteLogo from "@/components/white-logo";

// pages/signin.js
import { supabase } from '../lib/supabaseClient';

export default function SignIn() {
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000', // Your local development URL
      },
    });
    if (error) console.error('Error signing in with GitHub', error.message);
  };

  return (
    <div className="container">
      <button onClick={signInWithGitHub} className="btn">
        Sign in with GitHub
      </button>
    </div>
  );
}




const Page = () => {
  return (
    <>
      <div className="container relative hidden h-[750px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-indigo-600" />
          <div className="relative z-20 flex flex-col space-y-6">
            <div className="text-5xl font-bold pl-0">
              <WhiteLogo />
            </div>
            <div>
              <div className="flex items-center text-lg pl-10">
                Welcome techie!
              </div>
              <div className="flex items-center text-lg pl-10">
                Avail our service by signing up
                <ArrowRight className="ml-2" />
              </div>
            </div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg pl-10 italic">
                &ldquo;Some people call this artificial intelligence, but the
                reality is this technology will enhance us. So instead of
                artificial intelligence, I think we&apos;ll augment our
                intelligence.&rdquo;
              </p>
              <footer className="text-sm pl-10">
                &ndash; Ginni Rometty, Former CEO of IBM
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8">
          <div className="w-full max-w-md mx-auto flex flex-col justify-center space-y-6">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
