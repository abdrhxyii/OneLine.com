import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const AuthenticationModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <Image
            src="/authentication-image.png"
            alt="Authentication"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-md"
          />
        </div>

        <h2 className="text-2xl font-medium text-center mb-6">
          Hala! Let&apos;s get started
        </h2>

        <div className="flex gap-2 mb-6">
          <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
            Log in
          </button>
          <button className="flex-1 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800">
            Sign up
          </button>
        </div>

        <input
          type="text"
          placeholder="Please enter email or mobile number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />

        <button className="w-full py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 mb-4">
          CONTINUE
        </button>

        <p className="text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
};

export default AuthenticationModal;
