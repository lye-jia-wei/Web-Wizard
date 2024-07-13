import "@/styles/globals.css";
import Navbar from "./navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="relative bg-cover bg-center p-0 transition-all duration-500 delay-200">
          <main className="relative mx-auto max-w-12xl px-4">
            <div className="text-center space-y-2 pt-20">
              <div className="border border-violet-800 p-1 w-32 mx-auto rounded-full flex items-center justify-between bg-white hover:bg-violet-50 bg-transparent transition-all duration-300 delay-300">
                <span className="text-xs font-medium text-gray-900 ml-3">
                  Try it now !
                </span>
                <a
                  href="/sign-in"
                  className="w-8 h-8 rounded-full flex justify-center items-center bg-violet-800"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="inline-block text-gray-900 bg-transparent transition-all duration-500 delay-500">
                <div className="flex items-center justify-center p-0.5">

                </div>
                <div className="text-4xl py-10 pb-8 leading-6">
                Crafting Conversational Brilliance from Your Content:                </div>
                <div className="text-3xl block text-violet-700 xl:inline leading-6">
                Empowering Your Website with Intelligent AI Chatbots 
                </div>
              </div>
              <p className="max-w-md mx-auto py-1 pt-5 text-gray-700 text-2xl md:max-w-5xl bg-white bg-opacity-0 transition-all duration-500 delay-700">

              </p>
              <div className="flex items-center justify-center py-8">
                <a
                  href="/sign-in"
                  className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full  bg-gradient-to-r from-violet-800 to-violet-500 shadow-xs hover:bg-violet-600 transition-all duration-500 delay-900"
                >
                  Get started
                  <svg
                    className="ml-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
