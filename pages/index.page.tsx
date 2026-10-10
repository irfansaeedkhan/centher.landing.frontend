import React from "react";
import dynamic from "next/dynamic";

import { PageLayout } from "@/layouts";
import LazyWhenVisible from "@/components/LazyWhenVisible";
import Section1 from "./_components/section1";

import { NextPageWithLayout } from "./_app.page";

const Section2 = dynamic(() => import("./_components/section2"));
const Section3 = dynamic(() => import("./_components/section3"));
const Section4 = dynamic(() => import("./_components/section4"));
const Section5 = dynamic(() => import("./_components/section5"));
const Section6 = dynamic(() => import("./_components/section6"));
const Section8 = dynamic(() => import("./_components/section8"));

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col">
      <Section1 />

      <div className="flex flex-col pt-8 pb-16 mdTab:pt-0 gap-[50px] mdTab:gap-32">
        <LazyWhenVisible minHeight={480}>
          <Section2 />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={480}>
          <Section3 />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={480}>
          <Section4 />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={520}>
          <Section5 />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={480}>
          <Section6 />
        </LazyWhenVisible>

        <LazyWhenVisible minHeight={720}>
          <Section8 />
        </LazyWhenVisible>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default Home;
