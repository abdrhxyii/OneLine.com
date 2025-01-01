import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categoriesx } from '@/data/appData';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: "Men's Fashion" },
  { id: 3, name: "Women's Fashion" },
  { id: 4, name: 'Kids Fashion' },
  { id: 5, name: 'Home & Kitchen' },
  { id: 6, name: 'Beauty & Fragrance' },
  { id: 7, name: 'Baby' },
  { id: 8, name: 'Toys' },
  { id: 9, name: 'Sports & Outdoors' },
  { id: 10, name: 'Health & Nutrition' },
  { id: 11, name: 'Automotive' },
  { id: 12, name: "Stationary books, & media" },
  { id: 13, name: "Food" }
];

const CategoryScroller = () => {
  const [activeCategory, setActiveCategory] = React.useState<number | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="hidden lg:block relative w-full bg-white z-10">
      <div className="max-w-screen-2xl mx-auto px-4 relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap text-gray-600 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-black"
            >
              {category.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {activeCategory && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-md p-4"
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7">
            {categoriesx.map((categoryx, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base mb-4">{categoryx.title}</h3>
                <ul className="space-y-2">
                  {categoryx.items.map((item: any, idx: any) => (
                    <li key={idx} className="text-gray-600 text-sm hover:text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryScroller;
