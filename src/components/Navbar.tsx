'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import AuthenticationModal from './Modals/AuthenticationModal';
import OtpVerificationModal from './Modals/OtpVerificationModal';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true)
  }

  const handleClose = () => {
    setIsopen(false)
  }

  return (
    <>
    <AuthenticationModal isOpen={isOpen} onClose={handleClose}/>
    <header className="bg-[#feee00] px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/noon1.png" alt="Logo" width={70} height={35} />
        </div>

        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-2 border-hidden rounded-md focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 p-2 bg-transparent border-none cursor-pointer" onClick={handleOpen}>
            <span className="hidden md:block">Login</span>
            <User size={15} />
          </button>

          <Link
              href="/wishlist" 
              className="hidden md:flex items-center gap-1 p-2 bg-transparent border-none cursor-pointer"
            >
              <span className="hidden md:block">Wishlist</span>
              <Heart size={15} />
          </Link>

          <button className="hidden md:flex items-center gap-1 p-2 bg-transparent border-none cursor-pointer">
            <span className="hidden md:block">Cart</span>
            <ShoppingCart size={15} />
          </button>

          <Link href="/wishlist" className="md:hidden flex items-center gap-1 p-2 bg-transparent border-none cursor-pointer">
            <Heart size={22} />
          </Link>
        </div>
      </div>

      <div className="flex md:hidden mt-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
    </header>
    </>
  );
};

export default Navbar;
