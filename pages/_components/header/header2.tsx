import React, { useState } from "react";
import cn from "@/utils/cn";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        `bg-themeDark/60 fixed w-full top-0 left-0 backdrop-blur-[8px] sm:p-3  z-50`,
        isOpen ? "bg-themeDark" : "bg-themeDark/60"
      )}
    >
      <div className="maxWidth flex flex-wrap items-center justify-between mx-auto py-4 sm:p-4">
        <Link
          href={{
            pathname: "/",
          }}
          className="hidden smTab:block"
        >
          <Image
            src="/images/Logo.webp"
            alt="Centher"
            width={138}
            height={38}
            sizes="138px"
          />
        </Link>
        <Link
          href={{
            pathname: "/",
          }}
          className="block smTab:hidden"
          aria-label="Centher home"
        >
          <Image
            src="/images/mobileLogo.webp"
            alt="Centher"
            width={38}
            height={38}
            sizes="38px"
          />
        </Link>

        <div className="flex">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="inline-flex items-center justify-center min-w-[48px] min-h-[48px] p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 accent-themeDark"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              // Cross icon when the menu is open
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Burger icon when the menu is closed
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        {/* desktop */}
        <div
          className={cn(
            `items-center justify-between hidden w-full md:flex md:w-auto`
          )}
        >
          <div className="flex flex-col p-4 md:p-0 w-full items-center justify-between">
            <div className="flex w-full text-center items-center gap-2">
              <Link href="/academy/centher-features">
                <Button
                  title="Centher Academy"
                  variant="borderless"
                  className="btnTest"
                />
              </Link>
              <Link href="https://centher-app.vercel.app">
                <Button
                  title="Launch app NOW!"
                  variant="primary"
                  className="btnTest"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div
          id="mobile-nav"
          className={cn(
            `items-center justify-between hidden w-full md:w-auto z-50`,
            isOpen ? "flex sm:hidden" : "hidden"
          )}
        >
          <div className="flex flex-col p-4 md:p-0 mt-4 min-h-[90vh] w-full items-center justify-between pt-12">
            <div className="flex flex-col w-full text-center items-center">
              <Link href="/academy/centher-features">
                <Button
                  title="Centher Academy"
                  variant="borderless"
                  className="btnTest"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </Link>
              <div className="h-[1px] bg-[#202027] w-full mt-1 mb-8" />
              <Link href="https://centher-app.vercel.app">
                <Button
                  title="Launch app NOW!"
                  variant="primary"
                  className="btnTest"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </Link>
            </div>
            <div className="flex flex-col ">
              <div className="text-center flex flex-wrap items-center justify-center">
                <p className="inline-block text-xs smTab:text-sm font-normal text-grayLight">
                  &copy;CENTHER Decentralized Autonomous Organization All rights
                  reserved.{" "}
                  <a
                    href="https://centher-app.vercel.app/terms"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 inline-block text-xs smTab:text-sm font-semibold text-grayLight underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header2;
