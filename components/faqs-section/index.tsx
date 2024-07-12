'use client'
import React from "react";
import { FAQ } from "./faq";

const faqData = [
  {
    title: "What data does AuthOne have access to?",
    content: `AuthOne only has access to the data you provide. This may include your name, phone number, email, NIN/BVN, and house address. All data is stored and transmitted securely using industry-standard encryption.`,
  },
  {
    title: "How does AuthOne share my data?",
    content: `AuthOne only shares your data with apps you explicitly authorize. If you don't give consent, your data won't be shared with anyone.`,
  },
  {
    title: "Can I edit my data on AuthOne?",
    content: `Yes, but there are limitations:
Non-sensitive data (like phone number and address) can be modified through your user dashboard at www.user.authone.usepolymer.co.
Sensitive data (like names, date of birth, NIN/BVN) cannot be modified directly. To change these, email us with proof of the correct information.`,
  },
  {
    title: "Can I delete my data on AuthOne?",
    content: `Yes, you can request data deletion. However:
We will retain your data for 1 year after deactivation. During this period, you can choose to reactivate your account if needed.
After the 1-year retention period, your data will be permanently deleted from our systems.
We cannot delete data that has already been shared with third-party apps you've authorized.`,
  },
  {
    title: "Is my data secure with AuthOne?",
    content: `Yes, AuthOne takes your data security very seriously:
We use industry-standard encryption and authentication methods to keep your data secure during storage and transmission.
No one working at AuthOne can view your data without your explicit permission. This ensures that your personal information remains private and protected from unauthorized access, even within our organization.`,
  },
];


export const FAQSSection: React.FC = () => {
  return (
    <section
      id="stories"
      className="w-full px-5 md:w-full max-w-[1200px] mx-auto pt-10 md:pt-20 pb-[4.375rem] md:pb-0 bg-[#F9FAFC] md:bg-transparent bg-faq-bg bg-contain md:bg-none"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-[30px] md:text-[3.4375rem] font-medium leading-[78px]">
            Got <span className="font-semibold heading-text">Questions?</span> We&rsquo;ve Got{" "}
            <span className="font-semibold heading-text">Answers!</span>
          </h2>
          <div className="bg-faq-bg bg-contain bg-no-repeat h-full max-h-[550px] mt-[29px] -ml-2 sm:mr-2 sm:-ml-2 xl:mr-20 xl:-ml-20"></div>
        </div>
        <div className="w-full md:w-1/2">
          {faqData.map((faq, index) => (
            <FAQ key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
};
