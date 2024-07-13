

"use client";
import { useState } from "react";
import { supabase } from "./supabaseClient"; // Adjust the path accordingly
import "../../../styles/globals.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhiteLogo from "C:/Users/User/Downloads/SiteGenie-main/SiteGenie-main/public/image.png";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000', // Your local development URL
      },
    });
    if (error) console.error('Error signing in with GitHub', error.message);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      // Handle successful sign-in (e.g., redirect or display a message)
      console.log("Signed in successfully!");
    }
  };

  return (
    <>
      <div className="container relative hidden h-[750px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900 to-violet-600" />
          <div className="relative z-20 flex flex-col space-y-4">
            <div className="text-5xl font-bold pl-0">
            <Image src={WhiteLogo} alt="SiteGenie Logo" />
            </div>
            <div className="flex items-center text-lg pl-10">
              Try out our service by signing in <ArrowRight className="ml-2" />
            </div>
          </div>
          <div className="relative z-20 mt-72">
            <blockquote className="space-y-2">
              <p className="text-lg pl-6 italic"></p>
              <footer className="text-sm pl-6"></footer>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8">
          <div className="w-full max-w-md mx-auto flex flex-col justify-center space-y-6">
          <button onClick={signInWithGitHub} className="btn">
        Sign in with GitHub
      </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
