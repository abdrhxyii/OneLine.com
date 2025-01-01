"use client";

import { usePathname } from "next/navigation";
import { Home, Grid, ShoppingCart, User, Gift } from "lucide-react";

const Tabs = () => {
  const pathname = usePathname(); 

  const navigationItems = [
    { name: "Home", icon: Home, route: "/" },
    { name: "Categories", icon: Grid, route: "/categorylisting" },
    { name: "Deals", icon: Gift, route: "/deals" },
    { name: "My Account", icon: User, route: "/account" },
    { name: "Cart", icon: ShoppingCart, route: "/cart" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md md:hidden h-14">
      <div className="flex justify-around items-center h-full">
        {navigationItems.map((item) => {
          const isActive = pathname === item.route; 
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.route}
              className={`flex flex-col items-center ${
                isActive ? "text-black" : "text-gray-500"
              } hover:text-gray-700`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;