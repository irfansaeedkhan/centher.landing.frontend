import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const StakingRewards: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What will the staking rewards depend on?
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
            The staking rewards that participants can earn depend on several key
            factors, which may vary from one proof-of-stake (PoS) blockchain
            network to another. Here are the primary factors that influence
            staking rewards
          </p>
          <div>
            <h5 className="text-white">Staked Amount</h5>
            <p>
              The amount of the native cryptocurrency staked by an individual or
              entity is a crucial determinant of staking rewards. Generally, the
              more coins staked, the higher the potential rewards. Staking a
              larger percentage of the total network stake increases the
              likelihood of being chosen as a validator to create and validate
              new blocks, leading to more frequent rewards.
            </p>
          </div>
          <div>
            <h5 className="text-white">Network Participation </h5>
            <p>
              Some PoS networks utilize a delegation model where participants
              can delegate their stake to a validator node. Validators with
              higher delegated stakes may receive increased rewards due to the
              greater responsibility and commitment they demonstrate in securing
              the network.
            </p>
          </div>
          <div>
            <h5 className="text-white">Network Size</h5>
            <p>
              The overall size of the staking network can also impact rewards.
              In smaller networks, the probability of being selected as a
              validator might be higher, leading to more frequent rewards for
              individual validators.
            </p>
          </div>
          <div>
            <h5 className="text-white">Inflation Rate</h5>
            <p>
              Many PoS networks have a predefined inflation rate, meaning that
              new coins are minted and distributed as staking rewards to
              validators and delegators. The inflation rate affects the overall
              supply of coins, which can influence the value of the
              cryptocurrency and, consequently, the staking rewards.
            </p>
          </div>
          <div>
            <h5 className="text-white">Block Time and Reward Distribution</h5>
            <p>
              The time it takes to create a new block and how the rewards are
              distributed among validators can also affect staking rewards. Some
              networks may have shorter block times, leading to more frequent
              rewards for validators.
            </p>
          </div>
          <div>
            <h5 className="text-white">Validator Performance</h5>
            <p>
              Validators who perform their duties honestly and efficiently are
              generally rewarded, while those who engage in malicious behavior
              or fail to meet network requirements may face penalties or have
              their staked coins slashed.
            </p>
          </div>
          <div>
            <h5 className="text-white">Consensus Mechanism</h5>
            <p>
              Different PoS networks may employ different consensus mechanisms,
              leading to variations in how rewards are calculated and
              distributed. For example, some networks use delegated
              proof-of-stake (DPoS) or liquid proof-of-stake (LPoS) variants,
              which have their specific rules for rewards.
            </p>
          </div>
          <div>
            <h5 className="text-white">Lock-Up Period</h5>
            <p>
              Staking rewards may be subject to a lock-up period, during which
              staked coins cannot be withdrawn or transferred. The duration of
              the lock-up period can vary from one network to another and may
              impact the overall staking strategy.
            </p>
          </div>
          <div>
            <h5 className="text-white">Network Fees</h5>
            <div className="flex flex-col gap-3">
              <p>
                Some PoS networks may include transaction fees in the staking
                rewards, adding an additional source of income for validators.
              </p>
              <p>
                It&apos;s essential to understand the specific staking rules and
                reward mechanisms of each blockchain project before staking your
                coins. Rewards can vary significantly between networks, and some
                networks may offer additional benefits, such as governance
                rights or participation in network decision-making processes. As
                with any investment, it&apos;s crucial to conduct thorough
                research and consider your risk tolerance and investment goals
                before participating in staking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StakingRewards.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default StakingRewards;
