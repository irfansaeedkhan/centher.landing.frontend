"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "@/utils/cn";
import { ArrowUp } from "@/components/svgCollection";
import ToggleList from "@/pages/academy/_components/toggle-list";
import { AcademySidebarData } from "@/pages/academy/_components/sidebar-data";

interface Props {}

export const Header: React.FC<Props> = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="block z-40 lgTab:hidden sticky top-[60px] backdrop-blur-md bg-themeDark/30">
        {/* Mobile Header */}
        <nav className="w-full flex flex-col items-start p-3 gap-5">
          <div className="w-full py-5 menu border-t border-anchor">
            {/* Mobile Menu Button */}
            <button
              className="smTab:hidden text-sm text-white flex items-center gap-1 "
              onClick={toggleMobileMenu}
            >
              Menu{" "}
              <ArrowUp
                className={cn(isMobileMenuOpen ? "rotate-180" : "rotate-0")}
              />
            </button>
            {/* Mobile Navigation Menu */}
            <div
              className={cn(
                "fixed top-[80px] right-0 w-full max-h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out flex justify-center bg-themeDark rounded-tl-[16px] rounded-tr-[16px]",
                isMobileMenuOpen ? "translate-y-0" : "translate-y-[105vh]"
              )}
            >
              {isMobileMenuOpen && (
                <div
                  className="fixed top-0 left-0 w-full rounded-[16px]"
                  onClick={toggleMobileMenu}
                ></div>
              )}

              <div
                className={cn(
                  "bg-themeDark p-4 overflow-y-auto",
                  isMobileMenuOpen ? "min-h-[200vh]" : ""
                )}
              >
                {AcademySidebarData.map((item) => {
                  const isSectionOpen = openSection === item.section_title;
                  return (
                    <div className="flex flex-col " key={item.section_title}>
                      <h5
                        className="text-20px text-gradient font-semibold py-2 cursor-pointer"
                        onClick={() =>
                          setOpenSection(
                            isSectionOpen ? null : item.section_title
                          )
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
                        {item.articles.map((artcile, index) => (
                          <ToggleList
                            key={index}
                            title={artcile.title}
                            article_sections={artcile.article_sections}
                            path={artcile.path}
                            activeLink={router.pathname === artcile.path}
                            onLinkClick={() => setIsMobileMenuOpen(false)}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
