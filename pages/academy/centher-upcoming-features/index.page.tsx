import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const CentherUpcomingFeatures: NextPageWithLayout = () => {
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
            Centher.io Unveils Exciting New Features for Enhanced User
            Experience.
          </p>
          <p>
            Centher.io, the innovative platform known for its commitment to user
            privacy and security, is thrilled to announce a series of upcoming
            features that will further elevate your online experience. These new
            additions will not only enhance user engagement but also provide an
            even more seamless and secure environment for all Centher.io users.
          </p>
        </div>
        <h5 className="text-white py-5">Upcoming Services:</h5>
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-white">Airdrop as a Service</h5>
            <p>
              Get ready for a revolutionary way to participate in airdrops!
              Centher.io is introducing &quot;Airdrop as a Service,&quot; a
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
              Centher.io is taking giveaways to the next level with
              &quot;Giveaway as a Service.&quot; This feature enables users to
              participate in giveaways hosted by creators and influencers while
              maintaining their privacy. By eliminating the need for personal
              information, Centher.io ensures that your participation in
              giveaways is secure, transparent, and hassle-free.
            </p>
          </div>
          <div>
            <h5 className="text-white">Wallet as a Service</h5>
            <p>
              Experience the convenience of managing your digital assets with
              &quot;Wallet as a Service.&quot; Centher.io&apos;s integrated
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
              Centher.io understands the importance of accessibility and ease of
              use. That&apos;s why we&apos;re introducing &quot;Login Using
              Third-Party Authentication.&quot; Users can now access Centher.io
              using their preferred third-party authentication providers, such
              as Google, Facebook, or Apple, while maintaining their anonymity
              on our platform. This feature streamlines the login process and
              ensures that your privacy is always a priority.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex flex-col gap-3">
              <p>
                These upcoming features demonstrate Centher.io&apos;s ongoing
                commitment to providing a secure, private, and user-friendly
                environment for all its users. Whether you&apos;re engaging in
                airdrops, giveaways, managing your crypto assets, or accessing
                the platform, Centher.io empowers you to explore the digital
                world with confidence. Stay tuned for these exciting additions
                and continue to enjoy the benefits of a privacy-centric platform
                that puts you in control of your online experience. Join
                Centher.io and be a part of the future of secure, anonymous, and
                user-centric online interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CentherUpcomingFeatures.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default CentherUpcomingFeatures;
