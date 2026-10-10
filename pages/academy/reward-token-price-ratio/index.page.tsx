import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const RewardTokenPriceRatio: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What is Staking / Reward Token Price Ratio?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/staking-rewards.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            The &quot;Staking / Reward Token Price Ratio&quot; refers to the
            relationship between the price of a cryptocurrency&apos;s staking
            token and its reward token in a proof-of-stake (PoS) or similar
            consensus mechanism. In a PoS system, participants can
            &quot;stake&quot; a certain amount of the staking token as
            collateral to validate transactions and secure the network. In
            return for their participation, they receive rewards in the form of
            the reward token.
          </p>
          <p>
            The staking/reward token price ratio is significant because it can
            impact the attractiveness of staking as an investment strategy.
            Here&apos;s how the ratio can affect participants
          </p>
          <h5 className="text-white">
            Here&apos;s how the ratio can affect participants
          </h5>
          <div>
            <h5 className="text-white">
              High Ratio (Staking Token Price &gt; Reward Token Price)
            </h5>
            <p>
              In this scenario, the staking token is valued more highly than the
              reward token. Staking becomes more attractive, as participants are
              willing to lock up their staking tokens in order to earn the
              relatively valuable reward tokens. This can lead to increased
              network security and participation.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              Low Ratio (Staking Token Price &lt; Reward Token Price)
            </h5>
            <p>
              When the reward token is worth more than the staking token,
              staking becomes less appealing. Participants might prefer to sell
              their staking tokens on the open market rather than lock them up
              for staking rewards. This could potentially lead to reduced
              network security and participation.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              Balanced Ratio (Staking Token Price ≈ Reward Token Price)
            </h5>
            <div className="flex flex-col gap-3">
              <p>
                A balanced ratio generally promotes a healthy staking ecosystem.
                Participants are incentivized to stake their tokens due to
                reasonable rewards relative to the market value of the staking
                token.
              </p>
              <p>
                It&apos;s important to note that the staking/reward token price
                ratio is influenced by various factors, including market demand
                for the tokens, the overall health and adoption of the network,
                changes in the supply of tokens, and broader market trends in
                the cryptocurrency space.
              </p>
              <p>
                Investors and participants in PoS networks often consider this
                ratio, along with other economic and technical factors, when
                deciding whether to stake their tokens or pursue other
                investment strategies within the cryptocurrency ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RewardTokenPriceRatio.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default RewardTokenPriceRatio;
