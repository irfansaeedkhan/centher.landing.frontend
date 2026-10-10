import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const TypesOfBlockchain: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What are the different types of blockchain (public, private, consortium)
        and their use cases?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/types-of-blockchain.png"
        alt="types-of-blockchain"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            Blockchain technology comes in several different types, each
            tailored to specific use cases and requirements.The main types of
            blockchains are:
          </p>
          <h5 className="text-white pt-3">Public Blockchain:</h5>
          <div className="pl-3">
            <div>
              <h5 className="text-white">Definition</h5>
              <p>
                Public blockchains are open and permissionless networks where
                anyone can participate, view the blockchain&apos;s data, and
                validate transactions. There is no central authority, and the
                network relies on decentralized consensus mechanisms.
              </p>
            </div>
            <div>
              <h5 className="text-white pt-2">Use Cases:</h5>
              <div className="pl-3">
                <div>
                  <h5 className="text-white">(a) Cryptocurrencies</h5>
                  <p>
                    Public blockchains like Bitcoin and Ethereum are primarily
                    used for digital currencies and token-based applications.
                  </p>
                </div>
                <div>
                  <h5 className="text-white">
                    (b) Decentralized Finance (DeFi)
                  </h5>
                  <p>
                    DeFi platforms and applications, which aim to recreate
                    traditional financial services on blockchain, often use
                    public blockchains.
                  </p>
                </div>
                <div>
                  <h5 className="text-white">(c) Global Supply Chain</h5>
                  <p>
                    Some supply chain tracking and verification systems use
                    public blockchains to provide transparency and traceability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-white  pt-3">Private Blockchain:</h5>
          <div className="pl-3">
            <div>
              <h5 className="text-white">Definition</h5>
              <p>
                Private blockchains are closed networks where participation and
                access are restricted to a select group of known entities or
                participants. These entities often have known identities and may
                be required to obtain permission to join the network.
              </p>
            </div>
            <div>
              <h5 className="text-white  pt-2">Use Cases:</h5>
              <div className="pl-3">
                <div>
                  <h5 className="text-white">(a) Enterprise Solutions</h5>
                  <p>
                    Public blockchains like Bitcoin and Ethereum are primarily
                    used for digital currencies and token-based applications.
                  </p>
                </div>
                <div>
                  <h5 className="text-white">(b) Consortiums</h5>
                  <p>
                    Groups of organizations in a specific industry may
                    collaborate on a shared blockchain to improve industry-wide
                    processes and reduce friction, such as in banking consortia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-white  pt-3">Consortium Blockchain:</h5>
          <div className="pl-3">
            <div>
              <h5 className="text-white">Definition</h5>
              <p>
                Consortium blockchains are semi-decentralized networks
                controlled by a group of organizations or entities that work
                together to maintain the blockchain. Consortium blockchains
                provide a balance between public and private blockchains.
              </p>
            </div>
            <div>
              <h5 className="text-white  pt-2">Use Cases:</h5>
              <div className="pl-3">
                <div>
                  <h5 className="text-white">(a) Supply Chain Management</h5>
                  <p>
                    In supply chain consortiums, multiple stakeholders, such as
                    manufacturers, shippers, and retailers, collaborate to
                    create a shared blockchain to track goods and reduce
                    inefficiencies.
                  </p>
                </div>
                <div>
                  <h5 className="text-white">(b) Financial Services</h5>
                  <p>
                    Financial institutions often use consortium blockchains to
                    streamline processes like cross-border payments and trade
                    finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-white pt-5">
            Each type of blockchain has its own advantages and trade-offs,
            making them suitable for different applications:
          </h5>
          <div>
            <h5 className="text-white">Public Blockchains</h5>
            <div className="flex flex-col gap-3">
              <p>
                These are ideal for applications where transparency,
                decentralization, and censorship resistance are paramount. They
                are openly accessible, but they may suffer from scalability
                issues and high energy consumption.
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-white">Private Blockchains</h5>
            <div className="flex flex-col gap-3">
              <p>
                Private blockchains offer greater control, privacy, and
                efficiency for organizations. They are suitable for internal use
                cases where trust between participants is established and known.
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-white">Consortium Blockchains</h5>
            <div className="flex flex-col gap-5">
              <p>
                Consortium blockchains provide a middle ground, allowing
                organizations to collaborate while maintaining some level of
                control. They are well-suited for industries or ecosystems where
                multiple entities need to work together without relying on a
                single central authority.
              </p>
              <p>
                The choice of blockchain type depends on the specific needs of
                the application or organization, including considerations like
                data privacy, scalability, security, and the level of
                decentralization required. It&apos;s also important to note that
                hybrid models and interoperability between different types of
                blockchains are emerging to address diverse use cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TypesOfBlockchain.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default TypesOfBlockchain;
