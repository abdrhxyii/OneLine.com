import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterInformation = () => {
  const links = [
    { text: 'Careers', href: '/careers' },
    { text: 'Warranty Policy', href: '/warranty-policy' },
    { text: 'Sell with us', href: '/sell-with-us' },
    { text: 'Terms of Use', href: '/terms-of-use' },
    { text: 'Terms of Sale', href: '/terms-of-sale' },
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Consumer Rights', href: '/consumer-rights' },
  ];

  return (
    <footer className="w-full bg-gray-50 py-12 border-t border-gray-100 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright text */}
          <div className="text-sm text-gray-500">
            © 2025 noon. All Rights Reserved
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-3">
            <Image
              src="/card-mastercard.svg"
              alt="Mastercard"
              width={40}
              height={25}
              className="h-6 w-auto object-contain"
            />
            <Image
              src="/card-visa.svg"
              alt="Visa"
              width={40}
              height={25}
              className="h-6 w-auto object-contain"
            />
            <Image
              src="/cod-en.svg"
              alt="Cash on Delivery"
              width={40}
              height={25}
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInformation;