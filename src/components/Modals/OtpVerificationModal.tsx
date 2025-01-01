import React, { useState, useRef } from 'react';
import { X, Mail } from 'lucide-react';

const OtpVerificationModal = ({ isOpen, onClose, email = "temp@gmail.com" }: any) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); 

  if (!isOpen) return null;

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus(); 
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm ${
              activeTab === 'otp'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('otp')}
          >
            Log in using OTP
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm ${
              activeTab === 'password'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('password')}
          >
            Log in with Password
          </button>
        </div> */}

        <h2 className="text-2xl font-medium text-center mb-1">
          Verify your email
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Enter the 6-digit OTP sent to
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="w-4 h-4 text-gray-600" />
          <span className="text-gray-800">{email}</span>
          <button className="text-blue-600 text-sm">Change</button>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border-2 rounded-lg text-center text-xl font-medium 
                       focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">Didn't get the OTP?</p>
          <p className="text-sm text-gray-500">
            Resend OTP on email in <span className="text-gray-800">11s</span>
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-start gap-2">
          <span className="text-yellow-500">💡</span>
          <p className="text-sm text-gray-700">
            OTP verification protects your account from unauthorized access.
          </p>
        </div>

        <button className="w-full py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 mb-4">
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
