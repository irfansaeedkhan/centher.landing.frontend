import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const HowToCreateStakingProject: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How to create a staking project?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/create-staking-1.png"
        alt="what is staking"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <div>
            <p>
              Let&apos;s get into a step-by-step-guide on how to Create your
              first Staking Project! First of all, you will need to be a Centher
              Citizen in order to benefit from this Service. If you haven&apos;t
              gotten your Passport yet,{" "}
              <a
                href="https://centher-app.vercel.app/citizenship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                Buy Centher Citizenship here.
              </a>
            </p>
            <p>
              Once you are set up with Citizenship, head on the left menu bar
              (click on the three menu lines on mobile) and select Staking.
              Click on Create New button.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/create-staking-2.png"
              alt="what is staking"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <p>
            The Staking Form will appear on screen and indicate all mandatory
            fields with * mark.
          </p>
          <div className="flex flex-col gap-4 pt-2">
            <div>
              <h5 className="text-white">Logo and Banner</h5>
              <p>
                The first element needed is the logo image (suggested size
                350x350). Following the logo you will need to upload the banner
                image (suggested size 1400x350). These fields are required.
              </p>
            </div>
            <div>
              <h5 className="text-white">Name and Token Address</h5>
              <p>
                The Staking Name will be what the users will see when they go
                through the staking projects list, so choose something
                catchy!The Token Address is the address of the token you want to
                allow users to stake. These fields are mandatory.
              </p>
            </div>
            <div>
              <h5 className="text-white">Reward Token Address</h5>
              <p>
                This field is not mandatory and if left empty will have the same
                value as Token Address, this means that the same staked token
                will be given in rewards during the staking period. If another
                token is selected, that token will be used to reward the users
                for staking.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/create-staking-3.png"
              alt="what is staking"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              {" "}
              Multilevel Rewards SystemRefer to he expenaded version of{" "}
              <Link
                href="/academy/affiliate-system"
                target="_blank"
                className="text-gradient"
              >
                how-does-affiliate-system-works
              </Link>{" "}
              for more information about affiliation.
            </p>
            <h5 className="text-white py-2">You can choose</h5>
            <ul className="list-disc list-outside pl-6 pb-8">
              <li>no referral: there is no reward system in place.</li>
              <li>
                recurring return: (claimable according to Claim Period). can go
                from 0 o 6 levels of affiliation expressed in monthly percentage
                for each level.
              </li>
              <li>
                fix commission: there is a commission paid that will be
                distributed among 1 to 6 levels of referrals to the staking
                project.
              </li>
              <li>
                Express it in percentage of the fee that you want each level to
                get.
              </li>
            </ul>
            <div>
              <h5 className="text-white">Staking / Reward Token Price Ratio</h5>
              <p>
                For a deep learning of the topic, head to the academy section at{" "}
                <Link
                  href="/academy/reward-token-price-ratio"
                  target="_blank"
                  className="text-gradient"
                >
                  what-is-token-price-ratio.
                </Link>{" "}
                When you want to pay rewards to the users who are actively using
                your staking with a different token than the one staked, we
                calculate the reward based on the staked token and then by this
                ratio we calculate the amount of reward token to give.Give
                anything above 0 if reward token is more valuable than stake
                token.
              </p>
            </div>
            <div>
              <h5 className="text-white">Staking Period</h5>
              <p>
                This will be the length of the staking of tokens. It goes from
                15 days to 5 years and the next field will determine whether or
                not the staking is cancelable and how much fee we want our users
                to pay to unstake their tokens. Is CancelableDetermines the
                possibility to cancel the staking of tokens by the users and it
                can be applied a fee to unstaking the tokens.
              </p>
            </div>
            <div>
              <h5 className="text-white">Charge Fee on Cancel</h5>
              <p>
                Will only be applied if is cancelable is true, can go from
                anywhere between 0 and 100%.
              </p>
            </div>
            <div>
              <h5 className="text-white">APY</h5>
              <p>
                Annual Percentage Yield that the tokens will produce while on
                staking and thee users will be able to claim.
              </p>
            </div>
            <div>
              <h5 className="text-white">Start Date</h5>
              <p>
                {" "}
                Select from the dropdown calendar a date you wish your staking
                project to start from. It will be active from that date onwards.
              </p>
            </div>
            <div>
              <h5 className="text-white">Reward Release Start</h5>
              <p>
                {" "}
                The rewards that you will be paying to the users staking your
                tokens will be possible to schedule using this field. You can
                choose any time you want or set it accordingly to claim period.
              </p>
            </div>
            <div>
              <h5 className="text-white">Claim Period</h5>
              <p>
                {" "}
                Claim period can be anytime (meaning users can claim as soon as
                they collect some rewards) or based on a period of 15 - 30 - 45
                - 60 - 120 - 180 days. Users will be able to claim their rewards
                based on this parameter.
              </p>
            </div>
            <div>
              <h5 className="text-white">Show on Centher</h5>
              <p>
                {" "}
                The staking for is a Software As A Service so it can be used
                inside or outside of Centher for your project. If you want to
                show your project on your on landing page, select FALSE, if you
                want Centher to advertise your project on the platform choose
                TRUE. Showing the project on Centher costs 1 BNB. Talk to our
                support team at &nbsp;
                <a href="mailto:info@centher.io" className="text-gradient">
                  info@centher.io
                </a>
                &nbsp; to have your project set up outside of Centher platform.
              </p>
            </div>
            <div>
              <h5 className="text-white">Liquidity Pool Provided</h5>
              <p>
                {" "}
                If you are going to provide a Liquidity Pool for the rewards
                payout select TRUE, if you select FALSE and at the same time you
                select TRUE on Show on Centher your project will be flagged as
                dangerous.
              </p>
            </div>
            <div>
              <h5 className="text-white">Minimum Stakable Amount</h5>
              <p>
                {" "}
                It&apos;s the minimum amount you want your users to stake, it
                can be any number but if you set a min value then staking amount
                is always a coefficient of this value, for example if min value
                is 250, then allowed amounts are 250,500,750,1000,etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/create-staking-4.png"
              alt="what is staking"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h5 className="text-white">Maximum Stakable Amount</h5>
              <p>
                It must be a number that is a coefficient of the Minimum
                Stakable Amount and it&apos;s the maximum amount that can be put
                in staking per each stake. Each user can stake multiple times
                the maximum amount and each stake will follow the same vesting
                contract prepared in this form.
              </p>
            </div>
            <div>
              <h5 className="text-white">Total Supply</h5>
              <p>
                This field indicates how many tokens will be available for users
                to stake. Project MetadataAdd any characteristics to your
                project like &quot;Rarity&quot; - &quot;Common&quot; or
                &quot;Round&quot; - &quot;One&quot; or whatever you want to mark
                your project with.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/create-staking-5.png"
              alt="what is staking"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              After you click on Next button you will be directed to the social
              page where you can add all of the social links you have at your
              disposal to maximise the networking of your project.
            </p>
            <p>
              Save and see the preview of your project before submitting. In
              this phase you can still edit the project details.
            </p>
            <p>
              Once you click on submit your wallet will show indicating an
              amount of Stake Token you want to assign to the stake and the same
              thing will happen if you chose a different token as Reward Token.
              Select Max Amount inside your wallet interface and approve the
              transaction.
            </p>
            <p>Congratulations! Your staking project is now live!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

HowToCreateStakingProject.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default HowToCreateStakingProject;
