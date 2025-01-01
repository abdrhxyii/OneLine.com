"use client";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Plus, Minus } from "lucide-react";
import { categoriesx } from "@/data/appData";
import SupportSection from "./SupportSection";
import FooterInformation from "./FooterInformation";

export default function Footer() {
  const [visibleCategory, setVisibleCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setVisibleCategory(visibleCategory === index ? null : index);
  };

  return (
    <>
      <SupportSection />
      <div className="w-full bg-white p-3 md:px-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7">
          {categoriesx.map((categoryx, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between md:block"
                onClick={() => toggleCategory(index)}
              >
                <h3 className="font-semibold text-base mb-4">{categoryx.title}</h3>
                {/* Conditional Icon Rendering */}
                {visibleCategory === index ? (
                  <Minus
                    className="block md:hidden text-gray-600 cursor-pointer"
                    size={20}
                  />
                ) : (
                  <Plus
                    className="block md:hidden text-gray-600 cursor-pointer"
                    size={20}
                  />
                )}
              </div>
              <ul
                className={`space-y-2 ${
                  visibleCategory === index
                    ? "block"
                    : "hidden md:block"
                }`}
              >
                {categoryx.items.map((item: any, idx: any) => (
                  <li
                    key={idx}
                    className="text-gray-600 text-sm hover:text-gray-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg text-center font-semibold text-gray-800 mb-1">
            Connect with us
          </h3>
          <div className="flex space-x-4 justify-center items-center">
            <Link
              href="https://facebook.com"
              className="bg-[#feee00] p-3 rounded-full text-black"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              className="bg-[#feee00] p-3 rounded-full text-black"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              className="bg-[#feee00] p-3 rounded-full text-black"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="bg-[#feee00] p-3 rounded-full text-black"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
      <FooterInformation />
    </>
  );
}

const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth <= 768;
