import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section5 = () => {
  return (
    <div className="relative">
      <Image
        src="/images/Pattern3.png"
        alt=""
        width={655}
        height={1030}
        className="absolute -top-[61%] left-[0%] z-0 opacity-20 w-auto"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="flex flex-col-reverse px-3 items-center lgTab:flex-row-reverse justify-between gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-12 lgTab:pt-0">
        <div className="mt-[40px] lgTab:mt-0 w-[80%] mx-auto lgTab:w-[40%] lgTab:mx-0">
          <Image
            src="/images/launchpad.png"
            alt="DEX Launchpad illustration"
            width={540}
            height={540}
            loading="lazy"
            sizes="(max-width: 993px) 80vw, 40vw"
          />
        </div>
        <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
          <HeadingBox className="w-auto">Tokenize your assets</HeadingBox>
          <AnimatedBox />
          <h2 className="subHeading animationText max-w-[592px]">
            <span className="uppercase">DEX</span> Launchpad
          </h2>
          <div className="flex flex-col gap-5 [&>*]:text-17px  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
            <p>
              With CENTHER you can launch tokenize all your assets whether it is
              a startup or a Personality Token.
            </p>
            <p>
              We want to value projects but especially personalities, because it
              is the personalities of human beings that think up projects and
              promote them.
            </p>
            <p>
              Our Social Network allows us to show each influencer their true
              market value by using Fungible and Non-Fungible Tokens to promote
              their Personal Brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
