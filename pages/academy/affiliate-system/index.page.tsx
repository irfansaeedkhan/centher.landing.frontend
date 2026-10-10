import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const TotalSupply: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How Does Affiliate System works?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/affiliate-system.png"
        alt="what is staking"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            An affiliate system, also known as an affiliate marketing program,
            is a marketing arrangement where an individual or entity (the
            affiliate) promotes products or services of another company (the
            merchant or advertiser) and earns a commission for every successful
            sale or action generated through their promotional efforts. It is a
            performance-based marketing strategy, where affiliates are rewarded
            for driving valuable actions, such as sales, leads, or clicks, to
            the merchant&apos;s website or platform.
          </p>

          <h5 className="text-white">
            Here&apos;s how an affiliate system typically works
          </h5>
          <div>
            <h5 className="text-white">Affiliate Sign-Up</h5>
            <p>
              The affiliate program is set up by the merchant or advertiser.
              Interested individuals or businesses can sign up for the affiliate
              program through the merchant&apos;s website. The merchant may have
              specific criteria for approving affiliates, such as website
              traffic, niche relevance, or marketing experience.
            </p>
          </div>
          <div>
            <h5 className="text-white">Unique Affiliate Links</h5>
            <p>
              After approval, the merchant provides each affiliate with unique
              affiliate links or tracking codes. These links are used by the
              affiliates in their promotional efforts to direct potential
              customers to the merchant&apos;s website or specific product
              pages.
            </p>
          </div>
          <div>
            <h5 className="text-white">Promotional Efforts</h5>
            <p>
              Affiliates promote the merchant&apos;s products or services
              through various channels, such as their websites, social media
              accounts, email lists, YouTube channels, or other marketing
              platforms. They may write product reviews, create promotional
              content, or use banner ads to attract potential customers.
            </p>
          </div>
          <div>
            <h5 className="text-white">Customer Actions</h5>
            <p>
              When a potential customer clicks on an affiliate&apos;s unique
              link and performs a specific action on the merchant&apos;s
              website, such as making a purchase, submitting contact
              information, or signing up for a service, the affiliate system
              tracks this action through cookies or other tracking methods.
            </p>
          </div>
          <div>
            <h5 className="text-white">Commission and Tracking</h5>
            <p>
              The affiliate system accurately tracks the referred
              customer&apos;s actions, attributing them to the respective
              affiliate who referred them. The system records the details of the
              sale or action, including the order value, date, and the specific
              affiliate responsible for the referral.
            </p>
          </div>
          <div>
            <h5 className="text-white">Commission Payout</h5>
            <p>
              Based on the agreed-upon commission structure, the affiliate earns
              a commission for each successful sale or action generated through
              their affiliate link. Commissions can be a percentage of the sale
              value or a fixed amount per action.
            </p>
          </div>
          <div>
            <h5 className="text-white">Performance Reporting</h5>
            <div className="flex flex-col gap-3">
              <p>
                Both the merchant and the affiliate can access performance
                reports, which provide insights into the number of clicks,
                leads, sales, and the commission earned. This data allows both
                parties to optimize their strategies and track the success of
                the affiliate program.
              </p>
              <p>
                Affiliate systems are popular because they provide a win-win
                situation for both merchants and affiliates. Merchants can
                expand their reach and gain access to a broader audience, while
                affiliates have the opportunity to earn income without the need
                to create their own products or services. Successful affiliate
                marketing programs rely on clear communication, transparent
                tracking, and fair commission structures to foster a mutually
                beneficial partnership between merchants and affiliates.
              </p>
              <p>
                Centher&apos;s affiliate system allows to expand your network up
                to 6 levels of affiliation. Every transaction paid by the users
                in the affiliate program generates revenue for the referrer
                allowing them to earn just by inviting active users to the
                platform.
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
