import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const WhatIsStaking: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What is Staking?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/what-is-staking.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <p>
          Staking, in the context of cryptocurrencies and blockchain technology,
          refers to the act of participating in the proof-of-stake (PoS)
          consensus mechanism to secure and validate transactions on a
          blockchain network. Unlike proof-of-work (PoW) used in
          cryptocurrencies like Bitcoin, where miners compete to solve complex
          mathematical puzzles to validate transactions and create new blocks,
          PoS relies on validators who are chosen to create blocks and validate
          transactions based on the number of coins they &quot;stake&quot; or
          lock up as collateral.
        </p>
        <h5 className="text-white py-5">
          Here&apos;s how staking typically works
        </h5>
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-white"> Block Validation</h5>
            <p>
              Validators take turns creating new blocks and validating
              transactions. The probability of being selected to create a block
              is proportional to the amount of cryptocurrency staked. This
              system incentivizes validators to act honestly since they stand to
              lose their staked coins if they attempt any malicious behavior.
            </p>
          </div>
          <div>
            <h5 className="text-white">Block Rewards</h5>
            <p>
              Validators who successfully create and validate a block are
              rewarded with transaction fees and newly minted coins. These
              rewards are distributed among validators based on their stake,
              encouraging them to continue participating in the network.
            </p>
          </div>
          <div>
            {" "}
            <h5 className="text-white">Slashing</h5>
            <div className="flex flex-col gap-3">
              <p>
                {" "}
                To discourage malicious behavior, PoS networks often implement a
                &quot;slashing&quot; mechanism. Validators can lose a portion or
                all of their staked coins if they are found to be dishonest or
                attempt to attack the network.
              </p>
              <p>
                Staking has gained popularity due to its energy efficiency
                compared to PoW, where miners consume large amounts of
                electricity for computational power. Additionally, staking
                allows users to actively participate in the blockchain&apos;s
                security and consensus process while earning rewards for their
                contribution.
              </p>
              <p>
                {" "}
                Different blockchain projects may have variations in their
                staking mechanisms, but the core principle of staking involves
                participants locking up coins to secure the network and receive
                rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhatIsStaking.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default WhatIsStaking;
