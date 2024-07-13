import "@/styles/globals.css";

const CTA = () => {
  return (
    <>
      <section class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-violet-800 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
            <div class="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 class="text-5xl text-white mb-5 lg:mb-2">Connect with us</h2>
              <p class="text-lg text-indigo-100">
                Always ready for any kind of feedback{" "}
              </p>
            </div>
            <a
              href="https://github.com/lye-jia-wei"
              class="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
            >
              Get In Touch
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#4F46E5"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
