import React from "react";
import Image from "next/image";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";

const Section3 = () => {
  return (
    <div className="relative lgTab:px-4 pt-6 lgTab:pt-0">
      <Image
        src="/images/Pattern2.png"
        alt=""
        width={655}
        height={1030}
        className="absolute bottom-[0%] right-[0%] z-0 opacity-20 w-auto"
        loading="lazy"
        aria-hidden="true"
      />

      <div className="flex flex-col-reverse px-3 items-center lgTab:flex-row-reverse  justify-between  gap-0 lgTab:gap-16 maxWidth">
        <div className="w-[80%] mx-auto lgTab:w-[40%] lgTab:mx-0">
          <Image
            src="/images/privacy.png"
            alt="Three levels of privacy illustration"
            width={540}
            height={540}
            loading="lazy"
            sizes="(max-width: 993px) 80vw, 40vw"
          />
        </div>
        <div className="content flex flex-col items-start gap-8 w-full lgTab:w-[52%]">
          <HeadingBox className="w-auto">Three Levels of Privacy</HeadingBox>
          <AnimatedBox />
          <h2 className="subHeading animationText max-w-[656px]">
            Freedom of Privacy
          </h2>
          <div className="flex flex-col gap-5 [&>*]:text-17px [&>*]:text-grayLight [&>*]:font-medium [&>*]:leading-7 max-w-[656px]">
            <p>
              CENTHER is the world&apos;s first Social Network where you choose
              the level of privacy about your identity.
            </p>
            <p>
              You can appear with your real name, you can choose to use a
              pseudonym, or you can even show yourself to others with your
              public key address in total anonymity.
            </p>
            <p>
              We think that in this century more than ever it is important to
              support technologies that ensure the value of privacy and our
              personal data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
