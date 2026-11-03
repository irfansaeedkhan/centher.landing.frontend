import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const SociaketUpcomingFeatures: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        Upcoming Features
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/centher-upcoming-features-banner.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p className="relative before:w-[3px] before:h-[100%] before:top-[50%] before:translate-y-[-50%] before:bg-anchor before:block before:absolute before:left-0 pl-3">
            Sociaket Adds New Features That Make Your Experience Smoother
            And Safer.
          </p>
          <p>
            Sociaket, a platform built around user privacy and security, is
            adding a series of upcoming features that lift your online
            experience further. These new additions raise engagement and
            give you an even smoother and safer place to spend time online,
            for all Sociaket users.
          </p>
        </div>
        <h5 className="text-white py-5">Upcoming Services:</h5>
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-white">Airdrop as a Service</h5>
            <p>
              Get ready for a revolutionary way to participate in airdrops!
              Sociaket is introducing &quot;Airdrop as a Service,&quot; a
              feature that streamlines the airdrop process. With this service,
              users can effortlessly discover, join, and receive airdrops from
              various blockchain projects without revealing their personal
              information. Your privacy remains protected as you explore
              exciting opportunities within the crypto space.
            </p>
          </div>
          <div>
            <h5 className="text-white">Giveaway as a Service</h5>
            <p>
              Sociaket is taking giveaways to the next level with
              &quot;Giveaway as a Service.&quot; This feature enables users to
              participate in giveaways hosted by creators and influencers while
              maintaining their privacy. By eliminating the need for personal
              information, Sociaket ensures that your participation in
              giveaways is secure, transparent, and hassle-free.
            </p>
          </div>
          <div>
            <h5 className="text-white">Wallet as a Service</h5>
            <p>
              Experience the convenience of managing your digital assets with
              &quot;Wallet as a Service.&quot; Sociaket&apos;s integrated
              wallet solution allows users to securely store, send, and receive
              cryptocurrencies while preserving their anonymity. Whether
              you&apos;re a seasoned crypto enthusiast or a newcomer, this
              feature simplifies your crypto journey without compromising
              privacy.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              Login Using Third-Party Authentication
            </h5>
            <p>
              Sociaket understands the importance of accessibility and ease of
              use. That&apos;s why we&apos;re introducing &quot;Login Using
              Third-Party Authentication.&quot; Users can now access Sociaket
              using their preferred third-party authentication providers, such
              as Google, Facebook, or Apple, while maintaining their anonymity
              on our platform. This feature streamlines the login process and
              ensures that your privacy is always a priority.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex flex-col gap-3">
              <p>
                These upcoming features show Sociaket&apos;s ongoing work
                to give you a secure, private, and easy to use place online.
                Whether you join airdrops and giveaways, manage crypto assets,
                or sign in to the platform, Sociaket lets you explore the
                digital world with confidence. Watch for these additions and
                keep enjoying a platform that puts you in control of your
                online experience. Join Sociaket and be part of secure,
                anonymous, and user centered online interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SociaketUpcomingFeatures.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default SociaketUpcomingFeatures;
