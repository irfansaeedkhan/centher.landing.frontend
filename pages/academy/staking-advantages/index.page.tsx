import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const StakingAdvantages: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        Which advantages do I get by staking in more than one project?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/staking-advantages.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            Staking in more than one blockchain project can offer several
            advantages, as it allows you to diversify your staking portfolio and
            potentially maximize your overall rewards and benefits. Here are
            some advantages of staking in multiple projects
          </p>
          <div>
            <h5 className="text-white">Risk Diversification</h5>
            <p>
              Different blockchain projects have varying degrees of risk
              associated with them. By staking in multiple projects, you spread
              your risk across different networks. If one project experiences
              technical issues, security breaches, or a decrease in value, your
              exposure is limited to that specific project, and the other staked
              assets remain unaffected.
            </p>
          </div>
          <div>
            <h5 className="text-white">Enhanced Rewards</h5>
            <p>
              Different blockchain networks may offer varying staking rewards,
              depending on factors such as network size, inflation rates, and
              the total amount of staked coins. By diversifying your staking
              across multiple projects, you increase the potential for earning
              higher overall rewards, especially if some projects have higher
              reward rates than others.
            </p>
          </div>
          <div>
            <h5 className="text-white">Access to Different Cryptocurrencies</h5>
            <p>
              Each blockchain project has its native cryptocurrency that is used
              for staking. By staking in multiple projects, you gain exposure to
              a broader range of cryptocurrencies, which can be advantageous if
              you believe in the long-term potential of those assets.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              Participating in Different Ecosystems
            </h5>
            <p>
              Different blockchain projects have unique features, use cases, and
              ecosystems. By staking in multiple projects, you can participate
              in and support various blockchain applications and industries,
              which align with your interests and beliefs.
            </p>
          </div>
          <div>
            <h5 className="text-white">Hedging Against Market Volatility</h5>
            <p>
              Cryptocurrency markets can be highly volatile. By diversifying
              your staking across multiple projects, you spread your exposure to
              market fluctuations. This diversification can act as a hedge,
              potentially reducing the overall impact of price volatility on
              your staked assets.
            </p>
          </div>
          <div>
            {" "}
            <h5 className="text-white">Exploring New Opportunities</h5>
            <p>
              Staking in multiple projects allows you to explore and learn about
              different blockchain technologies and networks. This exposure can
              help you stay informed about emerging trends, innovations, and
              developments in the cryptocurrency space.
            </p>
          </div>
          <div>
            {" "}
            <h5 className="text-white">Adapting to Changing Conditions </h5>
            <div className="flex flex-col gap-3">
              <p>
                The cryptocurrency market and the performance of blockchain
                projects can change over time. By diversifying your staking, you
                can adapt your strategy to current market conditions and align
                your holdings with projects that show promising growth
                potential.
              </p>

              <p>
                However, it&apos;s essential to conduct thorough research and
                due diligence before staking in any project. Assess the
                project&apos;s fundamentals, team, technology, community
                support, and track record. Additionally, consider the staking
                requirements, lock-up periods, and potential risks associated
                with each project.
              </p>
              <p>
                Keep in mind that staking always involves some level of risk,
                and no investment strategy is entirely risk-free. Only stake
                funds that you can afford to lock up for the specified period
                and be prepared for potential market fluctuations and unforeseen
                events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StakingAdvantages.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default StakingAdvantages;
