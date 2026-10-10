import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section1 = () => {
  return (
    <div className="text-left mdTab:text-center pt-4 pb-10 smLap:pt-36 mdLap:pt-44 mdLap:pb-16 relative px-3 lgTab:px-4 mt-28 mdTab:mt-0">
      <div className="flex z-0 ">
        <Image
          src="/images/Pattern1.webp"
          alt=""
          width={215}
          height={1031}
          className="absolute top-[57%] -left-[5%] z-0 opacity-20 w-auto"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
      <div className="z-10 flex flex-col items-start mdTab:items-center gap-8 maxWidth">
        <HeadingBox className="w-[250px]">CENTHER IS HERE</HeadingBox>
        <AnimatedBox />
        <div className="flex flex-col gap-8 max-w-[1174px]">
          <h1 className="heading animationText">
            The First Social NFTwork With You At Centher!
          </h1>
          <p className="text-20px text-grayLight font-medium max-w-[948px] mx-auto">
            The only Social Network designed for a new generation of
            influencers, where micro-blogging, social networking, and content
            creations run under the same roof: your contents, your privacy, your
            asset… directly in Blockchain.
          </p>
        </div>
        <div className="headerImg relative -mt-3 lgTab:mt-6 px-3 overflow-hidden w-full lgTab:w-[80%]">
          {/* Native img so preload href matches the real LCP request (next/image uses /_next/image). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/socialnftwork.webp"
            alt="Centher Social NFTwork platform preview"
            width={1282}
            height={720}
            decoding="async"
            loading="eager"
            // @ts-expect-error React 18 types; lowercase required for the attribute
            fetchpriority="high"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 lgTab:left-6 px-3 w-full lgTab:w-[90%]">
            <Image
              src="/images/cubess.webp"
              alt=""
              width={1246}
              height={298}
              loading="lazy"
              aria-hidden="true"
              sizes="(max-width: 993px) 100vw, 72vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
