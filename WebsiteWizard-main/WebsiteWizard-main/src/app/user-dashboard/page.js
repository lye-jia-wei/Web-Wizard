"use client";
import "../../styles/globals.css";
import Create from "@/components/createChatbot";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import FooterSection from "@/components/footer";
import InternalNavbar from "@/components/internalnavbar";

const create = {
  tiers: [
    {
      title: "https://www.ionorchard.com/en.html",
      price: "Ion Orchard",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://www.ionorchard.com/en.html",
    },
    {
      title: "https://www.hdb.gov.sg/",
      price: "HDB",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://www.hdb.gov.sg/",
    },
    {
      title: "https://mothership.sg/",
      price: "Mothership",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://mothership.sg/",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <InternalNavbar />
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-24 sm:px-0 pb-12">
            <div className="text-4xl">Dashboard</div>
            <div className="border-4 border-dashed border-gray-200 rounded-lg mt-8 pb-8">
              <div className="flex justify-center items-center">
                <div className="m-8 relative py-2 px-3 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-row items-center w-[350px] text-violet-700 hover:shadow-lg">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex justify-between items-center w-full">
                        <span className="text-lg">Create new chatbot</span>
                        <button
                          type="button"
                          className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gradient-to-r from-violet-800 to-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                      <Create />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Dashed Border */}
              {/* <div className="border-t-4 border-dashed border-gray-200 mx-4"></div> */}

              {/* Text Below Dashed Border */}
              <div className="text-center text-3xl text-gray-700  py-4">
                Already created chatbots
              </div>

              <div className="max-w-7xl mx-auto py-2 px-4 bg-white sm:px-6 lg:px-8">
                <div className="mt-0 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  {create.tiers.map((tier) => (
                    <div
                      key={tier.title}
                      className="relative p-6 text-lg bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col hover:shadow-lg"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg text-violet-500">
                          {tier.title}
                        </h3>
                        <p className="mt-4 flex items-baseline text-gray-900">
                          <span className="text-4xl tracking-tight">
                            {tier.price}
                          </span>
                        </p>
                      </div>
                      <a
                        href={tier.link} // Use the link property for the href attribute
                        className={classNames(
                          tier.mostPopular
                            ? "bg-violet-500 text-white hover:bg-violet-600"
                            : "bg-violet-50 text-violet-700 hover:bg-violet-100",
                          "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                        )}
                      >
                        {tier.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
