import { GithubIcon, TwitterIcon } from "lucide-react";
import SiteGenieLogo from "./sitegenie-logo";
import Image from "next/image";
const FooterSection = () => {
  return (
    <>
      <footer class="w-full py-8 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <a href="/" class="flex justify-center mb-8">
              <div className="relative w-64 h-24">
                {" "}
                {/* Adjusted width and height */}
                <Image
                  src="/sitegenie-logo.png"
                  alt="Description of the image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span class="self-center text-black text-5xl whitespace-nowrap">
                {/* <SiteGenieLogo />{" "} */}
              </span>
            </a>

  

            <span class="text-lg text-gray-500">
              © <a href="/">Web Wiz</a> All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
