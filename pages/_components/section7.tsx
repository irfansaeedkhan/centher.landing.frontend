import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";
import CoreTeamCard from "./core-team-card";
import { coreTeam } from "./core-team-information";

const Section7 = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full relative text-left mdTab:text-center pt-14 mdTab:pt-0">
      <Image
        src="/images/Pattern4.png"
        alt="Pattern2"
        width={655}
        height={1030}
        className="absolute -bottom-[7%] right-[0%] z-0 opacity-20 w-auto"
      />
      <div className=" w-full flex flex-col items-start mdTab:items-center gap-8 maxWidth px-3">
        <HeadingBox className=" w-auto mdTab:w-[377px]">
          Leadership changes the world
        </HeadingBox>
        <AnimatedBox />
        <h1 className="subHeading animationText pb-16">Core Team Member</h1>
      </div>
      <div className={`flex flex-col gap-8 px-3`}>
        <div
          className={`w-full h-[500px] bg-center flex items-center justify-between  `}
        >
          <div
            ref={ref}
            className={clsx(
              "flex w-[calc(100%)] items-center gap-8 !overflow-y-hidden py-8 overflow-x-scroll scrollSetLight2 "
            )}
          >
            {coreTeam.map((item, index) => (
              <CoreTeamCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
