import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const CentherFeatures: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        Features of Centher.io
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/centher-features-banner.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <h5 className="text-white py-5">Introducing Centher.io</h5>
        <div className="flex flex-col gap-3">
          <p className="relative before:w-[3px] before:h-[100%] before:top-[50%] before:translate-y-[-50%] before:bg-anchor before:block before:absolute before:left-0 pl-3">
            Your All-in-One Anonymous Platform for Social Networking, Chat, NFT
            Marketplace, Staking, and Token Launchpad and much more.
          </p>
          <p>
            In a world where privacy and security are becoming increasingly
            valuable commodities, Centher.io emerges as a groundbreaking
            platform designed to offer a comprehensive suite of services while
            prioritizing user anonymity. With its seamless integration with
            Metamask, Centher.io provides a safe and private environment for
            individuals seeking to explore a wide range of features, including
            Social Media, Chat Service, Marketplace NFT, Staking as a Service,
            and Token Launchpad.
          </p>
        </div>

        <h5 className="text-white py-5">Features:</h5>
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-white">Social Media</h5>
            <p>
              Centher.io&apos;s Social Media feature allows users to connect
              with friends, family, and like-minded individuals without
              compromising their privacy. Unlike traditional social media
              platforms that collect and monetize your data, Centher.io ensures
              your personal information remains confidential. Share your
              thoughts, photos, and experiences with peace of mind, knowing your
              privacy is safeguarded.
            </p>
          </div>
          <div>
            <h5 className="text-white">Chat Service</h5>
            <p>
              Communicate with your contacts through Centher.io&apos;s secure
              and encrypted chat service. Whether you want to chat one-on-one or
              create group conversations, your messages and media files are
              protected from prying eyes. No need to worry about your
              conversations being used for data mining or targeted ads.
            </p>
          </div>
          <div>
            <h5 className="text-white">Marketplace NFT</h5>
            <p>
              Centher.io features a cutting-edge NFT marketplace where users can
              buy, sell, and trade non-fungible tokens. Discover unique digital
              art, collectibles, and digital assets from creators around the
              world. With its privacy-centric approach, Centher.io ensures that
              your NFT transactions are anonymous and secure.
            </p>
          </div>
          <div>
            <h5 className="text-white">Staking as a Service</h5>
            <p>
              Earn passive income by participating in Centher.io&apos;s Staking
              as a Service. Stake your cryptocurrency assets securely and
              receive rewards in return. With Centher.io&apos;s commitment to
              privacy, you can stake your assets without revealing your
              identity, making it an ideal choice for those who value anonymity
              in their financial activities.
            </p>
          </div>
          <div>
            <h5 className="text-white">Token Launchpad</h5>
            <p>
              Centher.io&apos;s Token Launchpad provides a platform for new
              blockchain projects to launch their tokens and raise funds. Users
              can participate in token sales and initial coin offerings (ICOs)
              while keeping their identity confidential. This feature empowers
              individuals to explore innovative blockchain projects without
              compromising their privacy.
            </p>
          </div>
          <div className="pt-5">
            <h5 className="text-white">Introducing Centher Citizenship</h5>
            <div className="flex flex-col gap-3">
              <p>Elevate Your Digital Realm Experience! 🚀</p>
              <p>
                Welcome to a revolutionary world where innovation meets
                empowerment—Cether Citizenship, the pinnacle of your digital
                journey! More than just a status, it&apos;s a passport to
                unparalleled possibilities, designed to enhance your digital
                presence and supercharge your ventures. Let&apos;s dive into the
                exclusive features that make Cether Citizenship the must-have
                for every digital enthusiast.
              </p>
              <p>💎 NFT Creation: Unleash Your Imagination</p>
              <p>
                With Cether Citizenship, you become the maestro of the digital
                canvas. Seamlessly create, tokenize, and share your unique
                digital assets as Non-Fungible Tokens (NFTs). Our intuitive
                platform empowers you to immortalize your creativity, turning it
                into unique and tradable digital masterpieces.
              </p>
              <p>🌈 Collections: Curate Your Digital Legacy</p>
              <p>
                Elevate your NFT game by curating personalized Collections that
                showcase the essence of your digital journey. As a Cether
                Citizen, you have the tools to craft thematic compilations,
                establishing your digital legacy and attracting a global
                audience.
              </p>
              <p>🚀 Staking Projects: Multiply Your Digital Holdings</p>
              <p>
                Cether Citizenship isn&apos;t just about static assets—it&apos;s
                about growth! Dive into the world of staking and watch your
                digital holdings flourish. Stake your tokens with ease, earn
                rewards, and be part of a dynamic ecosystem that values your
                commitment.
              </p>
              <p>🚀 Token Launchpads: Propel Your Tokens to New Heights</p>
              <p>
                Ready to launch your own token? Cether Citizenship opens the
                doors to exclusive token launchpads, providing a platform to
                introduce your digital currency to the world. Benefit from a
                supportive community, strategic partnerships, and a launch
                experience like no other.
              </p>
              <p>✅ Verified Icons: Trust in Transparency</p>
              <p>
                Ensure credibility and trust with our Verified Icons for all
                your team members. Cether Citizenship bestows a seal of
                authenticity, giving your audience the confidence that they are
                engaging with a reputable and verified digital entity.
              </p>
              <p>🔮 Coming Soon: Anticipate the Future</p>
              <p>
                Hold tight for upcoming features, including engaging AMAs and
                Live sessions, exciting giveaways, and the ability to create
                tokens and launchpads effortlessly. Cether Citizenship is a
                gateway to the future of digital interaction and commerce.
              </p>
              <p>
                Embark on this journey, where your digital aspirations take
                flight, and the possibilities are as limitless as your
                imagination. Don&apos;t miss out—secure your Cether Citizenship
                today and redefine what&apos;s possible in the digital realm!
                🚀✨
              </p>
            </div>
          </div>
          <div className="pt-5">
            <h5 className="text-white">Connecting with Metamask</h5>
            <div className="flex flex-col gap-3">
              <p>
                Centher.io makes it effortless for users to access its suite of
                services by connecting through Metamask. This popular Ethereum
                wallet extension ensures a secure and user-friendly experience,
                allowing users to manage their digital assets and interact with
                the Centher.io platform seamlessly.
              </p>
              <p>
                In a digital landscape where data privacy and security are
                paramount concerns, Centher.io stands as a beacon of innovation
                and protection. By offering a comprehensive range of services
                under one anonymous roof, it empowers users to navigate the
                digital world with confidence, knowing that their privacy is
                respected and safeguarded at every turn. Join Centher.io today
                and embrace a new era of online freedom and security.
              </p>
            </div>
          </div>
          <div className="pt-5">
            <h5 className="text-white">Connecting with Wallet For Dummies</h5>
            <div className="flex flex-col gap-3">
              <video autoPlay muted controls>
                <source
                  src="/videos/wallet-for-dummies-eng.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p>
                Centher.io&apos;s groundbreaking feature, &quot;Wallet For
                Dummies,&quot; represents a significant step forward in making
                cryptocurrency more accessible to a broader audience,
                particularly those who may not be tech-savvy. The
                platform&apos;s innovative approach eliminates the need for a
                traditional crypto wallet, simplifying the onboarding process to
                just an email and password. This streamlined approach removes
                barriers to entry, allowing individuals with limited technical
                knowledge to participate in the crypto ecosystem with ease.
              </p>
              <p>
                To utilize this feature, users simply navigate to the designated
                link provided by Centher.io, where they are greeted with a clear
                and intuitive interface. By clicking on the &quot;Connect
                Wallet&quot; button and selecting &quot;Wallet for
                Dummies,&quot; users initiate the process of creating their
                account. The option to sign up using either an email and
                password or a Google account offers flexibility and convenience,
                catering to a wide range of preferences.
              </p>
              <p>
                Upon entering their credentials, users receive a verification
                code via email to confirm their identity, adding an extra layer
                of security to the registration process. This step ensures that
                only authorized individuals gain access to the platform,
                instilling trust and confidence among users.
              </p>
              <p>
                Once logged in, users are guided through the process of
                generating or importing a wallet, depending on their
                preferences. The platform provides clear instructions at each
                step, making it easy for users to follow along, even if they
                have little to no prior experience with cryptocurrencies.
              </p>
              <p>
                One of the most critical aspects of creating a crypto wallet is
                securing the seed phrase, a series of words that serves as a
                backup in case the wallet is lost or inaccessible.
                Centher.io&apos;s &quot;Wallet For Dummies&quot; feature
                simplifies this process by guiding users through the steps of
                generating and confirming their seed phrase in a straightforward
                manner.
              </p>
              <p>
                By breaking down complex concepts into manageable steps,
                Centher.io&apos;s &quot;Wallet For Dummies&quot; feature
                empowers individuals to participate in the crypto economy
                without feeling overwhelmed or intimidated. This accessibility
                is crucial for driving widespread adoption of cryptocurrency, as
                it allows people from all walks of life to benefit from the
                opportunities presented by blockchain technology.
              </p>
              <p>
                In summary, Centher.i&apos;s &quot;Wallet For Dummies&quot;
                feature represents a significant advancement in making
                cryptocurrency more inclusive and user-friendly. By providing a
                simple and intuitive way for individuals to access the platform
                without the need for a traditional crypto wallet, Centher.io is
                opening the doors to a new wave of adoption and innovation in
                the crypto space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CentherFeatures.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default CentherFeatures;
