import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const WhyShouldStakeTokens: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        Why Should I Stake my Tokens?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/why-should-stake-token.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            Staking your coins can offer several benefits, depending on the
            specific blockchain network you are staking on and your personal
            financial goals. Here are some reasons why you might consider
            staking your coins:
          </p>
          <div>
            <h5 className="text-white">Earning Rewards</h5>
            <p>
              Staking allows you to earn passive income by participating in the
              validation process of the blockchain network. As a validator, you
              can receive rewards in the form of transaction fees and newly
              minted coins for your contribution to securing the network. The
              more coins you stake, the higher your potential rewards.
            </p>
          </div>
          <div>
            <h5 className="text-white">Supporting Network Security</h5>
            <p>
              By staking your coins and becoming a validator, you actively
              contribute to the security and decentralization of the blockchain
              network. The more validators there are, the more distributed and
              robust the network becomes, making it more resilient to attacks.
            </p>
          </div>
          <div>
            <h5 className="text-white">Avoiding Energy-Intensive Mining</h5>
            <p>
              Unlike mining in proof-of-work systems, staking is
              energy-efficient since it doesn&apos;t require powerful hardware
              and intense computations. This means you can participate in
              securing the network without consuming large amounts of
              electricity.
            </p>
          </div>
          <div>
            <h5 className="text-white">Gaining Governance Rights</h5>
            <p>
              Some PoS networks provide governance rights to coin stakers. This
              means that you can participate in decision-making processes, such
              as proposing and voting on protocol upgrades, changes to network
              parameters, or the allocation of resources.
            </p>
          </div>
          <div>
            {" "}
            <h5 className="text-white">Inflation Hedge</h5>
            <p>
              If the blockchain network has a fixed or predictable inflation
              rate, staking your coins can serve as a hedge against inflation.
              The rewards you earn may help your staked assets retain their
              value over time.
            </p>
          </div>
          <div>
            {" "}
            <h5 className="text-white">Long-Term Investment Strategy</h5>
            <p>
              Staking can be considered a long-term investment strategy. By
              staking and holding your coins, you may benefit from potential
              price appreciation of the cryptocurrency over time while earning
              staking rewards.
            </p>
          </div>
          <div>
            {" "}
            <h5 className="text-white">Community Engagement</h5>
            <div className="flex flex-col gap-3">
              <p>
                Staking can deepen your engagement with the blockchain
                project&apos;s community. You become an active participant in
                the network&apos;s growth and development, and your stake aligns
                your interests with the success of the project.
              </p>

              <p>
                However, it&apos;s essential to consider potential risks
                associated with staking. For example, if the network experiences
                security issues or a validator fails to perform its duties
                correctly, you may face penalties, including the partial or
                complete loss of your staked coins.
              </p>
              <p>
                Before staking your coins, thoroughly research the specific
                blockchain network and staking mechanism to understand the
                risks, rewards, and potential returns. Additionally, consider
                factors like lock-up periods, liquidity, and your own risk
                tolerance before committing your funds to staking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhyShouldStakeTokens.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default WhyShouldStakeTokens;
