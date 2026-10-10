import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const HowToPurchaseStakeTokens: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How to purchase and stake your tokens ?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/stake-token-1.png"
        alt="what is staking"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-white">Staking Stablecoin</h5>
            <p>
              For those projects involving Stablecoin you can simply head to
              Staking on the left side menu inside our app and access the
              Project you are interested in by clicking on &quot;View Project
              Details&quot;. Once you are inside of the Project page you&apos;ll
              find a simple form shown in the picture below:
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/stake-token-2.png"
              alt="what is staking"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <div>
            <h5 className="text-white">Staking Altcoins</h5>
            <p>
              If you instead want to invest in a project involving Altcoins
              available on Centher, head to Launchpad on the left side menu and
              purchase your tokens by adding the amount you want to buy in the
              form shown below, which you&apos;ll find at the top right of the
              page:
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/stake-token-3.png"
              alt="what is staking"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <p>
            After you swapped your tokens, head to Staking page again and follow
            the same instructions written in point nr 1.
          </p>
          <p>That&apos;s it. Happy Staking!</p>
        </div>
      </div>
    </div>
  );
};

HowToPurchaseStakeTokens.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default HowToPurchaseStakeTokens;
