import React, { useState } from "react";
import Image from "next/image";

import { TabLine } from "@/components/svgCollection";

import AnimatedBox from "./animated.box";
import { HeadingBox } from "./heading.box";
import VideoBox from "./video.box";
const Section8 = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full relative text-left mdTab:text-center pb-22 mdTab:pb-32 pt-20 mdTab:pt-3 ">
      <Image
        src="/images/Pattern5.png"
        alt=""
        width={655}
        height={1030}
        className="absolute -bottom-[7%] left-[0%] z-0 opacity-20 w-auto"
        loading="lazy"
        aria-hidden="true"
      />
      <div className=" relative z-20 w-full flex flex-col items-start mdTab:items-center gap-8 lgTab:gap-6 maxWidth px-3 lgTab:px-4 pt-6 lgTab:pt-0">
        <HeadingBox className="w-auto mdTab:w-[377px]">
          LEARN TOGETHER
        </HeadingBox>
        <AnimatedBox />
        <h2 className="subHeading animationText ">
          Learn how you can get started
        </h2>
        <p className="mt-[-18px] text-17px font-medium text-grayLight max-w-[755px]">
          If you are new or want to learn from tutorials then here we are with
          some best practices video by experts
        </p>
      </div>

      <div className=" relative  videostages pt-10 mdLap:pt-18 mdLap:pt-20 flex flex-col lgTab:flex-row  justify-between items-start  maxWidth px-3 gap-9 mdTab:gap-5">
        <div
          className="tabs flex flex-row lgTab:flex-col gap-8 smTab:gap-12 lgTab:gap-16 mdLap:gap-18 mdLap:gap-20 "
          role="tablist"
          aria-label="Tutorial videos"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 1}
            onClick={() => {
              setActiveTab(1);
            }}
            className={`tab flex flex-col items-start gap-6 min-h-[48px] bg-transparent border-0 p-0 appearance-none ${
              activeTab === 1 && "[&>*]:w-[30px] [&>*]:lgTab:!w-full"
            }`}
          >
            <span
              className={`text-73px text-left font-semibold  cursor-pointer ${
                activeTab === 1 ? "text-white" : "text-grayThunder"
              }`}
            >
              01
            </span>

            {activeTab === 1 && <TabLine />}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 2}
            onClick={() => {
              setActiveTab(2);
            }}
            className={`tab flex flex-col items-start gap-6 min-h-[48px] bg-transparent border-0 p-0 appearance-none ${
              activeTab === 2 && "[&>*]:w-[30px] [&>*]:lgTab:!w-full"
            }`}
          >
            <span
              className={`text-73px text-left font-semibold  cursor-pointer ${
                activeTab === 2 ? "text-white" : "text-grayThunder"
              }`}
            >
              02
            </span>
            {activeTab === 2 && <TabLine />}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 3}
            onClick={() => {
              setActiveTab(3);
            }}
            className={`tab flex flex-col items-start gap-6 min-h-[48px] bg-transparent border-0 p-0 appearance-none ${
              activeTab === 3 && "[&>*]:w-[30px] [&>*]:lgTab:!w-full"
            }`}
          >
            <span
              className={`text-73px text-left font-semibold  cursor-pointer ${
                activeTab === 3 ? "text-white" : "text-grayThunder"
              }`}
            >
              03
            </span>
            {activeTab === 3 && <TabLine />}
          </button>
          {/* <div
            onClick={() => {
              setActiveTab(4);
            }}
            className={`tab flex flex-col items-start gap-6 ${
              activeTab === 4 && "[&>*]:w-[30px] [&>*]:lgTab:!w-full"
            }`}
          >
            <h5
              className={`text-73px text-left font-semibold  cursor-pointer ${
                activeTab === 4 ? "text-white" : "text-grayThunder"
              }`}
            >
              04
            </h5>
            {activeTab === 4 && <TabLine />}
          </div> */}
        </div>
        <div className="registerCard text-left w-full h-full    py-4 px-4 mdTab:py-16 mdTab:px-12">
          {activeTab === 1 && (
            <div className="bg-[url('/images/noice.png')] w-full   bg-no-repeat bg-center bg-contain">
              <div className="cardhead">
                <h3 className="subHeading text-white">
                  How to Register on <br className="hidden mdTab:block" />
                  <span className="animationText">Centher.io ?</span>
                </h3>
                <p className="mt-5 text-17px font-medium text-grayLight max-w-[530px]">
                  You will learn how to become a member of Centher Platform in
                  just a few easy steps.
                </p>
              </div>
              <VideoBox Videolink="https://www.youtube.com/embed/73FEEvoL-5c" />
              <div className="cardFooter mt-9">
                <TabLine />
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="bg-[url('/images/noice.png')] w-full   bg-no-repeat bg-center bg-contain">
              <div className="cardhead">
                <h3 className="subHeading text-white">
                  How to Register on <br className="hidden mdTab:block" />
                  <span className="animationText">Centher.io </span>
                  Using Referral Link ?
                </h3>
                <p className="mt-5 text-17px font-medium text-grayLight max-w-[530px]">
                  You will learn how to become a member of Centher Platform
                  using referral link in just a few easy steps.
                </p>
              </div>
              <VideoBox Videolink="https://www.youtube.com/embed/sYSiZRJvY_Q" />
              <div className="cardFooter mt-9">
                <TabLine />
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="bg-[url('/images/noice.png')] w-full   bg-no-repeat bg-center bg-contain">
              <div className="cardhead">
                <h3 className="subHeading text-white">
                  How to Download <br className="hidden mdTab:block" />
                  <span className="animationText">Metamask ?</span>
                </h3>
                <p className="mt-5 text-17px font-medium text-grayLight max-w-[530px]">
                  You will learn how to download Metamask in few and easy steps.
                </p>
              </div>
              <VideoBox Videolink="https://www.youtube.com/embed/SX0DKogFvT8" />
              <div className="cardFooter mt-9">
                <TabLine />
              </div>
            </div>
          )}
          {/* {activeTab === 4 && (
            <div className="bg-[url('/images/noice.png')] w-full   bg-no-repeat bg-center bg-contain">
              <div className="cardhead">
                <h1 className="subHeading text-white">
                  How to Register on <br />
                  <span className="animationText">Centher.io ?</span>
                </h1>
                <h2 className="mt-5 text-17px font-medium text-grayLight max-w-[530px]">
                  You will learn how to be a member of Centher Platform Platform
                  in few and easy steps.
                </h2>
              </div>
              <div className="cardVideoSection bg-[#1f1f23] w-full mdTab:w-[400px] h-[250px] rounded-xl mt-5 relative">
                <div className="">
                  <div className="">
                    <button id="play-video" className="video-play-button">
                      <span></span>
                    </button>
                  </div>
                  <div id="video-overlay" className="video-overlay">
                    <a className="video-overlay-close">&times;</a>
                  </div>
                </div>
              </div>
              <div className="cardFooter mt-9">
                <TabLine />
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Section8;
