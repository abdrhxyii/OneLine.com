import React from 'react';
import { HelpCircle, Mail } from 'lucide-react';

const SupportSection = () => {
  return (
    <div className="w-full bg-gray-50 px-4 py-6 md:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left section */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              We're Always Here To Help
            </h2>
            <p className="mt-1 text-sm md:text-base text-gray-600">
              Reach out to us through any of these support channels
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Help Center */}
            <div className="flex items-center gap-3 p-4 rounded-lg">
              <HelpCircle className="w-5 h-5 " />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">CUSTOMER HAPPINESS CENTER</span>
                <a 
                  href="https://help.noon.com" 
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  help.noon.com
                </a>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-center gap-3 p-4 rounded-lg">
              <Mail className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">EMAIL SUPPORT</span>
                <a 
                  href="mailto:care@noon.com" 
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  care@noon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;