"use client";

import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AcademySidebarData } from "@/pages/academy/_components/sidebar-data";
import ToggleList from "@/pages/academy/_components/toggle-list";
import { Pattern } from "@/components/svgCollection";

interface Props {
  children: React.ReactNode;
}

export const AcademyLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const h5Tags = document.querySelectorAll("h5");
    h5Tags.forEach((h5) => {
      h5.id = h5.textContent?.replace(/\s+/g, "-")!;
    });
  });
  return (
    <div className="maxWidth w-full lg:px-3 flex flex-col gap-3 pb-10 lg:gap-11 lg:pt-12 mt-[90px] mdTab:mt-[120px]">
      <Pattern className="bg-red-500 absolute bottom-0 left-0" />
      <h1 className="text-48px text-gradient font-semibold">Centher Academy</h1>
      <div className="flex gap-7 min-h-screen w-full z-10">
        <div className="w-[28%] bg-elevationDark border border-anchor rounded-[20px] p-6 hidden flex-col gap-3 lgTab:flex">
          {AcademySidebarData.map((item) => {
            const isSectionOpen = openSection === item.section_title;
            return (
              <div className="flex flex-col gap-3" key={item.section_title}>
                <h5
                  className="text-20px text-gradient font-semibold cursor-pointer"
                  onClick={() =>
                    setOpenSection(isSectionOpen ? null : item.section_title)
                  }
                >
                  {item.section_title}
                </h5>
                <div
                  className={`flex flex-col gap-5 overflow-hidden ${
                    isSectionOpen
                      ? "max-h-[1500px] duration-1000 ease-in-out"
                      : "max-h-0 duration-500 ease-in-out"
                  }`}
                >
                  {item.articles.map((article) => (
                    <ToggleList
                      key={article.path}
                      title={article.title}
                      article_sections={article.article_sections}
                      path={article.path}
                      activeLink={router.pathname === article.path}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1 bg-elevationDark border border-anchor rounded-[16px]">
          {children}
        </div>
      </div>
    </div>
  );
};
