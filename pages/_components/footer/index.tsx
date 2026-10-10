import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blackLime z-30 relative lgTab:px-4 mt-8">
      <nav className="max-w-[1264px] mx-auto w-full flex flex-col gap-2 items-center justify-between px-2 py-4 smTab:p-4">
        <Image
          src="/images/Logo.webp"
          alt="Centher Logo"
          width={138}
          height={38}
          className="w-[100px] h-[28px] smTab:w-[120px] smTab:h-[32px] smLap:w-[138px] smLap:h-[38px]"
        />

        <div className="text-center flex flex-wrap items-center justify-center">
          <p className="inline-block text-xs smTab:text-sm font-normal text-grayLight">
            &copy;CENTHER Decentralized Autonomous Organization All rights
            reserved.
            <a
              href="https://app.centher.io/terms"
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-block text-xs smTab:text-sm font-semibold text-grayLight underline"
            >
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
