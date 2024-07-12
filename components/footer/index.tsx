'use client'
import React, { FormEvent, useState } from "react";
import {
  Alert,
  ArrowRight,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  TwitterIcon,
} from "../svg";
// import { SubscriptionModal } from "../SubscriptionModal/SubscriptionModal";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const headers = {
    "Content-Type": "application/json",
    "web-api-key": `${apiKey}`,
  };
  const body = JSON.stringify({
    email,
    channel: "news_letter",
  });
  const requestOptions = {
    method: "POST",
    headers,
    body,
  };

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setError("");
      setIsModalOpen(true);
      // fetch(`${baseUrl}/api/v1/web/emailsub/subscribe`, requestOptions)
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log(result);
      //     setIsModalOpen(true);
      //     setEmail("");
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     setError(error.message);
      //   });
    }
  };
  return (
    <>
      <footer
        id="footer"
        className="w-full bg-primary flex relative z-10 pt-[50px] md:rounded-t-[40px] -mb-3"
      >
        <div className="relative bg-gradientProcess w-full">
          <div className="flex flex-col w-[90%] max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-12 mb-[60px] md:mb-[100px] gap-0 md:gap-8">
              <div className="col-span-3 order-3 md:order-1 flex flex-col gap-5 md:gap-[30px]">
                <div>
                  <Logo />
                </div>
                <p className="font-semibold leading-[30px]">
                Auth One accelerates user onboarding, minimizes drop-offs, and meets evolving KYC regulations effortlessly for your Nigerian user base.
                </p>
                <div className="flex gap-5">
                  <a
                    className="social-icon scale-110 hover:opacity-90 active:scale-100"
                    href="https://twitter.com/usepolymerco"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="social-icon scale-110 hover:opacity-90 active:scale-100"
                    href="https://www.instagram.com/usepolymerco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    className="social-icon scale-110 hover:opacity-90 active:scale-100"
                    href="#"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 col-span-6 order-2 mb-[60px] md:mb-0 gap-6 pt-2">
                <div className="col-span-2">
                  <h2 className="text-white pb-[30px] pt-2">Company</h2>
                  <div className="flex flex-col text-white space-y-[15px]">
                    <a href="#">About Us</a>
                    <a href="mailto:devs@polymer.co">Contact Us</a>
                    <a href="#">Our Team</a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://usepolymer.notion.site/Open-Roles-at-Polymer-51f8ecd60e9b4c4e903cf4efb1ca6ffc"
                    >
                      Careers
                    </a>
                  </div>
                </div>
                <div className="col-span-2 order-3 sm:order-2">
                  <h2 className="text-white pb-[30px] pt-2">Explore</h2>
                  <div className="flex flex-col text-white space-y-[15px]">
                    <Link href="/#stories">FAQs</Link>
                    <Link href="/#stories">How does AuthOne secure my data?</Link>
                  </div>
                </div>
                <div className="col-span-2 order-2 sm:order-3">
                  <h2 className="text-white pb-[30px] pt-2">Resources</h2>
                  <div className="flex flex-col text-white space-y-[15px]">
                    <Link href="/#">Download the app</Link>
                    <a href="#">Web PayPoint</a>
                  </div>
                </div>
              </div>
              <div className="col-span-3 pt-4 order-1 md:order-3 mb-[60px] md:mb-0">
                <h2 className="text-white">
                  We will only ever send you cool stuff!
                </h2>
                <form
                  onSubmit={(e) => handleSubscribe(e)}
                  className="flex items-center border-b-2 border-[#D9D9D980] py-5 gap-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Subscribe To Our NewsLetter"
                    className="text-white placeholder:text-[rgba(240,240,240,0.70)] bg-transparent border-none w-full outline-none"
                  />
                  <button aria-label="Subscribe">
                    <ArrowRight />
                  </button>
                </form>
                {error && (
                  <div className={`flex mt-2 text-red-500 text-sm break-words`}>
                    <div className="pt-0.5 mr-1">
                      <Alert />
                    </div>
                    {error}
                  </div>
                )}
              </div>
            </div>
            <hr className="text-[#D9D9D980] w-full hidden md:flex mb-10" />
            <div className="flex flex-col md:flex-row justify-between mb-[30px]">
              <p className="text-[#FCFCFC]/90 mb-[27px] md:mb-0 text-sm md:text-lg font-semibold md:font-bold">
                &copy; 2024 AuthOne. All rights reserved.
              </p>
              <div className="flex gap-x-4 md:gap-x-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://usepolymer.notion.site/Privacy-Policy-9b4c006950f8436bbff00312631003ea?pvs=4"
                  className="order-3 md:order-1 text-[#FCFCFCE5] text-sm md:text-lg font-semibold md:font-medium"
                >
                  Privacy <span className="hidden md:inline-flex">Policy</span>
                </a>
                <span className="hidden order-2 md:inline-flex text-[#FCFCFCE5] font-medium">
                  |
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://usepolymer.notion.site/Terms-Conditions-342ca8c343fd4609a2bc8d50c777e53b?pvs=4"
                  className="order-1 md:order-3 text-[#FCFCFCE5] text-sm md:text-lg font-semibold md:font-medium"
                >
                  Terms{" "}
                  <span className="hidden md:inline-flex"> and Conditions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </>
  );
};
