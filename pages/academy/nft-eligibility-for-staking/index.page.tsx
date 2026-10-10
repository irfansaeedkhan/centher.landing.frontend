import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const NFTEligibilityForStaking: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What if not all tokens or NFTs are eligible for staking?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/staking-eligibility.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            If not all tokens or NFTs are eligible for staking, it means that
            the blockchain network or platform where these tokens or NFTs reside
            does not support staking as a feature or does not offer staking
            rewards for holding and participating in the consensus mechanism.
            There could be various reasons why certain tokens or NFTs are not
            eligible for staking
          </p>
          <div>
            <h5 className="text-white">Blockchain Protocol</h5>
            <p>
              Staking is specific to blockchain networks that utilize a
              proof-of-stake (PoS) or delegated proof-of-stake (DPoS) consensus
              mechanism. If the blockchain network uses a different consensus
              mechanism, such as proof-of-work (PoW), staking might not be
              possible
            </p>
          </div>
          <div>
            <h5 className="text-white">Token Type</h5>
            <p>
              Some tokens may not be designed with staking functionality in
              mind. Staking typically requires the token to have certain
              properties and smart contract capabilities that allow locking up
              and validating transactions on the network.
            </p>
          </div>
          <div>
            <h5 className="text-white">Utility Tokens vs. Governance Tokens</h5>
            <p>
              Tokens can serve different purposes within a blockchain ecosystem.
              While some tokens are utility tokens used for specific functions
              like paying transaction fees or accessing services, governance
              tokens may be used for voting on network proposals but might not
              be eligible for staking.
            </p>
          </div>
          <div>
            <h5 className="text-white">Centralized Platforms</h5>
            <p>
              Some tokens may be issued on centralized platforms or exchanges
              that do not support staking features. Staking usually occurs on
              decentralized blockchain networks where participants can directly
              interact with the network protocol.
            </p>
          </div>
          <div>
            <h5 className="text-white">Regulatory Considerations </h5>
            <p>
              Legal and regulatory considerations might impact the ability of
              certain tokens or NFTs to participate in staking activities. Some
              tokens or NFTs may have restrictions on their transferability or
              staking due to compliance requirements.
            </p>
          </div>
          <div>
            <h5 className="text-white">Development Stage</h5>
            <div className="flex flex-col gap-3">
              <p>
                In some cases, a blockchain project might be in its early stages
                of development and has not yet implemented staking features. As
                the project evolves and matures, staking capabilities may be
                added later.
              </p>
              <p>
                It&apos;s important to note that staking is just one way to
                interact with tokens or NFTs within the cryptocurrency and
                blockchain space. Tokens can have various use cases, such as
                providing access to decentralized applications (DApps),
                representing ownership of digital assets, or serving as
                governance instruments in decentralized autonomous organizations
                (DAOs). If staking is not available for a particular token or
                NFT, users can explore other opportunities to utilize or
                interact with those assets based on their intended purpose and
                the features offered by the underlying blockchain network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NFTEligibilityForStaking.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default NFTEligibilityForStaking;
