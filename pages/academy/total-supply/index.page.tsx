import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const TotalSupply: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What is Total Supply?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/total-supply.png"
        alt="what is staking"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            Tokens, in the context of cryptocurrencies and blockchain
            technology, can have different total supply models, which affect
            their scarcity, value, and utility.
          </p>

          <h5 className="text-white">
            Here are a few common types of token supply
          </h5>
          <div>
            <h5 className="text-white">Fixed Supply</h5>
            <p>
              Some tokens have a fixed supply, meaning that the total number of
              tokens that will ever exist is predetermined and cannot be
              changed. Bitcoin, for example, has a fixed supply of 21 million
              coins. This limited supply is designed to create scarcity and
              potentially increase value over time.
            </p>
          </div>
          <div>
            <h5 className="text-white">Inflationary Supply</h5>
            <p>
              Inflationary tokens have a mechanism that continuously adds new
              tokens to the supply over time. These additional tokens can be
              used to reward network participants, incentivize certain
              behaviors, or maintain the network&apos;s operations. An example
              of this is the &quot;proof-of-stake&quot; model, where new tokens
              are minted and distributed to validators as rewards.
            </p>
          </div>
          <div>
            <h5 className="text-white">Deflationary Supply</h5>
            <p>
              Deflationary Supply: In contrast to inflationary tokens,
              deflationary tokens decrease their supply over time. This can be
              achieved through mechanisms like token burning, where tokens are
              intentionally destroyed or removed from circulation. The goal is
              often to increase scarcity and potentially enhance the
              token&apos;s value.
            </p>
          </div>
          <div>
            <h5 className="text-white">Dynamic Supply</h5>
            <p>
              Some tokens have a dynamic supply model that adjusts based on
              certain conditions. For instance, the supply might increase during
              periods of high demand or decrease during periods of low demand.
            </p>
          </div>
          <div>
            <h5 className="text-white">Capped Supply</h5>
            <div className="flex flex-col gap-3">
              <p>
                Tokens with a capped supply have a maximum limit to the number
                of tokens that can be created. This limit is set to ensure a
                balance between scarcity and utility.
              </p>
              <p>
                It&apos;s important to research and understand the tokenomics of
                a specific cryptocurrency to know its total supply model and how
                it might impact its value and utility over time. The total
                supply of a token is a fundamental aspect of its design and can
                play a significant role in its adoption and use within its
                associated blockchain ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TotalSupply.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default TotalSupply;
