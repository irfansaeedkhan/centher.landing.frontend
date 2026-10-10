import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section6 = () => {
  return (
    <div className="flex flex-col-reverse px-3  lgTab:flex-row items-center justify-between gap-0 lgTab:gap-16 maxWidth lgTab:px-4 pt-12 lgTab:pt-0">
      <div className="mt-[20px] lgTab:mt-0 w-[80%] mx-auto lgTab:w-[40%] lgTab:mx-0">
        <Image
          src="/images/Metaverse.png"
          alt="NFT Metaverse Marketplace illustration"
          width={540}
          height={540}
          loading="lazy"
          sizes="(max-width: 993px) 80vw, 40vw"
        />
      </div>
      <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
        <HeadingBox className="w-auto ">
          your assets in the Metaverse
        </HeadingBox>
        <AnimatedBox />
        <h2 className="subHeading animationText max-w-[592px]">
          <span className="uppercase">NFT</span> Metaverse Marketplace
        </h2>
        <div className="flex flex-col gap-5 [&>*]:text-17px  [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
          <p>
            The limitation of most NFTs is that they have no underlying and no
            purpose, no prospect of accessibility to anything.
          </p>
          <p>
            On CENTHER we have focused on the opportunities that the world of
            NFTs can give us by already opening up avenues for the future.
          </p>
          <p>
            We believe that NFTs will be the digital property certificates in
            the Metaverse and that the Metaverse will be the new Internet where
            we will be moving shortly.
          </p>
          <p>
            Through our NFT Marketplace you can get access to the most
            high-potential opportunities regarding the new Metaverse Industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
