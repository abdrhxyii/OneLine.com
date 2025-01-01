'use client';
import React, { useState } from 'react'
import ProductCard from './ProductCard';

const categories = [
    { title: "SAMSUNG", id: "samsung" },
    { title: "REDMI", id: "redmi" },
    { title: "ZTE", id: "zte" },
    { title: "GOOGLE", id: "google" },
    { title: "HONOR", id: "honor" },
    { title: "INFINIX", id: "infinix" },
];

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState("samsung");

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mt-8">
                <h4 className="text-3xl font-bold">Android Collection</h4>
                <p className="text-sm text-gray-custom font-normal">Which Android is right for you?</p>
                </div>

                <div className="overflow-x-auto mt-6">
                <div className="flex md:justify-center lg:justify-center space-x-4">
                    {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`text-sm font-semibold py-2 px-4 transition duration-300 ${
                        activeTab === category.id
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                        }`}
                    >
                        {category.title}
                    </button>
                    ))}
                </div>
                </div>

                <div className="mt-8 mb-8">
                <div className={`tab-content ${activeTab === "samsung" ? "block" : "hidden"}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
                <div className={`tab-content ${activeTab === "redmi" ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
                <div className={`tab-content ${activeTab === "zte" ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
                <div className={`tab-content ${activeTab === "google" ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
                <div className={`tab-content ${activeTab === "honor" ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
                <div className={`tab-content ${activeTab === "infinix" ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
            </div>
        </>
    )
}
