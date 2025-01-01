"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import CategorySectionCards from "../components/CategorySectionCards";
import Categoryscroller from "@/components/web/Categoryscroller";
import RecommendedSection from "@/components/RecommendedSection";
import TabsSection from "@/components/TabsSection";

export default function Home() {

  return (
    <>
        <Categoryscroller/>
        <div className="mx-auto px-2 md:px-6 lg:px-10">
          <RecommendedSection/>
          <CategorySectionCards/>
          <TabsSection/>
        </div>
    </>
  );
}
