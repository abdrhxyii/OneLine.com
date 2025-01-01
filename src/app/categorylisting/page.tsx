'use client';
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  "Just for you",
  "Home & Kitchen",
  "Men's Fashion",
  "Women's Fashion",
  "Mobiles & Accessories",
  "Appliances",
  "Beauty & Personal Care",
  "Fragrance",
  "Laptops & Accessories",
  "Electronics",
  "Baby"
];

const kitchenCategories = [
  {
    name: "Cookware",
    image: "/producttest.png"
  },
  {
    name: "Storage & Organisation",
    image: "/producttest.png"
  },
  {
    name: "Coffee & Tea",
    image: "/producttest.png"
  },
  {
    name: "Dinnerware & Serveware",
    image: "/producttest.png"
  },
  {
    name: "Accessories",
    image: "/producttest.png"
  },
  {
    name: "Cutlery & Flatware",
    image: "/producttest.png"
  },
  {
    name: "Bakeware",
    image: "/producttest.png"
  },
  {
    name: "Kitchen Appliances",
    image: "/producttest.png"
  }
];

const expandableCategories = [
  {
    name: "Kitchen & Dining",
    isExpanded: true,
    subcategories: kitchenCategories
  },
  {
    name: "Furniture",
    isExpanded: false,
    subcategories: []
  },
  {
    name: "Tools & Home Improvement",
    isExpanded: false,
    subcategories: []
  },
  {
    name: "Home Decor",
    isExpanded: false,
    subcategories: []
  }
];

const CategoryListing = () => {
    const [expanded, setExpanded] = React.useState(
      expandableCategories.reduce((acc: any, category: any) => {
        acc[category.name] = category.isExpanded;
        return acc;
      }, {})
    );
  
    const toggleExpand = (categoryName: any) => {
      setExpanded((prev: any) => ({
        ...prev,
        [categoryName]: !prev[categoryName]
      }));
    };
  
    return (
      <div className="flex h-screen bg-gray-100">
        <div className="w-28 md:w-38 lg:w-48 bg-white shadow-sm overflow-y-auto">
          <nav className="py-4">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="block px-4 md:px-6 py-2 leading-5 font-semibold text-gray-600 hover:bg-gray-100 text-sm md:text-base text-center break-words whitespace-normal"
                >
                {category}
              </a>
            ))}
          </nav>
        </div>
  
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {expandableCategories.map((category) => (
            <div key={category.name} className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => toggleExpand(category.name)}
              >
                <h2 className="text-base md:text-xl font-medium text-gray-800">
                  {category.name}
                </h2>
                {expanded[category.name] ? (
                  <ChevronUp className="w-4 h-4 md:w-6 md:h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-gray-500" />
                )}
              </div>
  
              {expanded[category.name] && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                  {category.subcategories.map((subcat) => (
                    <div
                      key={subcat.name}
                      className="flex flex-col items-center p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4">
                        <img
                          src={subcat.image}
                          alt={subcat.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-center text-gray-600">
                        {subcat.name}
                      </span>
                    </div>
                  ))}
                  {category.name === "Kitchen & Dining" && (
                    <div className="flex flex-col items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                      <span className="text-base md:text-lg font-medium text-gray-800">
                        Shop all
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default CategoryListing;