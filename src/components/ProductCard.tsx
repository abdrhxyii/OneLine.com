import { Star, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <>
      <Link href={'/product/iphone'}>
        <div className="max-w-xs rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 ease-in-out relative group">
          <div className="relative">
            <Image
              src="/iphon.webp" 
              alt="iPhone 16 Pro Max" 
              width={400} 
              height={400} 
              className="w-full object-center" 
            />
            <div className="absolute top-2 right-2 space-y-2">
              <button className="bg-white p-1.5 rounded-full shadow">
                <Heart className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="p-2">
            <div className="flex items-center space-x-1 mb-2">
              <p className="text-xs font-bold text-yellow-500 flex items-center">
                4.6 <Star className="w-4 h-4 ml-1" />
              </p>
              <p className="text-xs text-gray-500">(100)</p>
            </div>
            <h2 className="text-sm font-medium text-primary-black">iPhone 16 Pro Max</h2>
            <p className="text-xs text-gray-500">Apple, iPhone</p>
            <div className="flex space-x-2 my-2">
              <span className="w-4 h-4 rounded-full bg-[#d9c1a1] border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-[#d1b5a0] border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-black border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-white border border-gray-300"></span>
            </div>
            <div className="flex flex-row items-center space-x-1 gap-1">
              <p className="text-xs font-medium text-gray-400 line-through">Rs. 510,000.00</p>
              <p className="text-xs font-bold text-blue-600">Rs. 514,900.00</p>
            </div>

            <div className="flex items-center mt-2">
              <Image
                src="/free-delivery.png" 
                alt="Free Delivery"
                width={16}
                height={16}
                className="mr-2"
              />
              <p className="text-xs">Free Delivery</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
