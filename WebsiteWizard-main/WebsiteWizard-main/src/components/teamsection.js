import { User2Icon } from "lucide-react";
import React from "react";

const Teamsection = () => {
  return (
    <>
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="text-5xl text-center text-gray-900 ">Our team </h2>
          </div>
          <div class="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-4xl">
            <div class="block group md:col-span-1 lg:col-span-1">
              <div class="relative mb-6 ">
                <User2Icon className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-gray-500  border-solid border-transparent group-hover:border-indigo-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Jia Wei
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900"></span>
            </div>

            <div class="block group md:col-span-1 lg:col-span-1">
              <div class="relative mb-6">
                <div class="relative mb-6">
                  <User2Icon className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-gray-500  border-solid border-transparent group-hover:border-indigo-600" />
                </div>
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Wen Hong
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900"></span>
            </div>

            <div class="block group md:col-span-1 lg:col-span-1">
              <div class="relative mb-6">
                <div class="relative mb-6">
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teamsection;
