'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/utils/supabase';

const AuthenticationModal = ({ isOpen, onClose }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setError('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
      });

      if (error) {
        console.log("error", error)
      } else {
        console.log(data, "data")
        alert('Check your email for the confirmation link!');
        setEmail('');
        setPassword('');
      }
    } catch (err: any) {
      console.log(err, "err___")
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />

        <button
          onClick={handleSignUp}
          disabled={loading}
          className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 mb-4"
        >
          {loading ? 'Loading...' : 'Sign Up'}
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
