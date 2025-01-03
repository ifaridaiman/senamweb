"use client";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

// Import the JSON data
import faqData from "./contents/faq.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define types for the FAQ structure
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  aboutSenam: FAQItem[];
  membershipPolicy: FAQItem[];
}

const Page: React.FC = () => {
  const [stateFaq, setStateFaq] = useState<boolean>(true);
  // Type assertion for imported JSON
  const data: FAQData = faqData;

  return (
    <>
    <section className="">
      <Navbar />
      <div className="h-auto w-auto relative px-10">
        <div className="text-white bg-[#121212] max-w-7xl grid md:grid-cols-2 h-full mx-auto md:px-8">
          {/* Header Section */}
          <div className="flex flex-col items-start w-full max-w-6xl mt-12">
            <div className="mb-8 md:mb-0">
              <p className="text-[#C7F33B] text-4xl font-bold">FAQS</p>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <div
                className={`flex items-center gap-4 cursor-pointer ${
                  stateFaq ? "" : "opacity-50"
                }`}
                onClick={() => setStateFaq(true)}
              >
                <Image src={"/assets/logo/senamLogoWhite_IconOnly.svg"} alt="logoSenam" width={40} height={40} />
                <p className="text-white text-lg font-semibold">ABOUT SENAM</p>
              </div>
              <div
                className={`flex items-center gap-4 cursor-pointer ${
                  stateFaq ? "opacity-50" : ""
                }`}
                onClick={() => setStateFaq(false)}
              >
                <Image src={"/assets/logo/iconMembership_iconOnly.svg"} alt="logoSenam" width={40} height={40} />
                <p className="text-white text-lg font-semibold">
                  MEMBERSHIP POLICY
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="mt-12 w-full max-w-6xl md:border-l-2 md:border-gray-200 md:px-10 text-left">
            {stateFaq ? (
              <div className="mb-8 w-full">
                <p className="text-2xl text-[#C7F33B] font-bold mb-4">
                  ABOUT SENAM
                </p>
                <Accordion className="space-y-6 w-full">
                  {data.aboutSenam.map((item, index) => (
                    <AccordionItem
                      key={index}
                      header={
                        <div className="flex justify-between items-center text-left border-b border-gray-600 pb-4 w-full">
                          <p className="text-xl font-medium">{item.question}</p>
                          <AiOutlinePlus color="#C7F33B" />
                        </div>
                      }
                    >
                      <p className="mt-4 text-gray-300 text-base">
                        {item.answer}
                      </p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div>
                <p className="text-2xl text-[#C7F33B] font-bold mb-4">
                  MEMBERSHIP POLICY
                </p>
                <Accordion className="space-y-6">
                  {data.membershipPolicy.map((item, index) => (
                    <AccordionItem
                      key={index}
                      header={
                        <div className="flex justify-between items-center text-left border-b border-gray-600 pb-4 w-full">
                          <p className="text-xl font-medium">{item.question}</p>
                          <AiOutlinePlus color="#C7F33B" />
                        </div>
                      }
                    >
                      <p className="mt-4 text-gray-300 text-base">
                        {item.answer}
                      </p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default Page;
