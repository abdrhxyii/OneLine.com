"use client";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import Layout from "../../components/CategoryLayout/Layout";
import { MenuOutlined } from "@ant-design/icons";

const MacProducts = () => {
    const [selectedSort, setSelectedSort] = useState(""); 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

    const handleChange = (event: any) => {
        setSelectedSort(event.target.value);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row px-2 md:px-5 lg:px-6 mt-8">
                <Layout isOpen={isSidebarOpen} onClose={closeSidebar} />

                <main className="w-full px-2 lg:w-3/4 p-4">
                    <div className="flex w-full justify-between items-center mb-5">
                        <button className="lg:hidden flex flex-row items-center gap-2" onClick={toggleSidebar}>
                            <MenuOutlined className="text-xl" /> Show sidebar
                        </button>

                        <select
                            value={selectedSort}
                            onChange={handleChange}
                            className="text-sm bg-white rounded p-2 "
                        >
                            <option value="" disabled className="text-xs">
                                Default sorting
                            </option>
                            <option value="latest" className="text-xs">
                                Sort by latest
                            </option>
                            <option value="low-to-high" className="text-xs">
                                Sort by price: low to high
                            </option>
                            <option value="high-to-low" className="text-xs">
                                Sort by price: high to low
                            </option>
                        </select>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </main>
            </div>
        </>
    );
};

export default MacProducts;