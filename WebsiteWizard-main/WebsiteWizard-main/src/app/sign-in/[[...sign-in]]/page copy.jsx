"use client";
import { useState } from "react";
import { supabase } from "./supabaseClient"; // Adjust the path accordingly
import "../../../styles/globals.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhiteLogo from "@/components/white-logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      console.log('Signed in successfully!');
    }
  };

  return (
    <>
      <div className="container relative hidden h-[750px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900 to-violet-600" />
          <div className="relative z-20 flex flex-col space-y-4">
            <div className="text-5xl font-bold pl-0">
              <WhiteLogo />
            </div>
            <div className="flex items-center text-lg pl-10">
              Try out our service by signing in <ArrowRight className="ml-2" />
            </div>
          </div>
          <div className="relative z-20 mt-72">
            <blockquote className="space-y-2">
              <p className="text-lg pl-6 italic">

              </p>
              <footer className="text-sm pl-6">
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8">
          <div className="w-full max-w-md mx-auto flex flex-col justify-center space-y-6">
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                Sign In
              </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
