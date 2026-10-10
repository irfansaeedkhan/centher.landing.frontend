import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const WhatIsBlockchain: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        What is a Blockchain?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/what-is-blockchain.png"
        alt="what-is-blockchain"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            A blockchain is a decentralized and distributed digital ledger
            technology used to record transactions across multiple computers or
            nodes. It is designed to be secure, transparent, and
            tamper-resistant, making it suitable for various applications beyond
            its initial use as the underlying technology for cryptocurrencies
            like Bitcoin.
          </p>

          <h5 className="text-white">
            Here are some key characteristics and concepts associated with
            blockchain technology:
          </h5>
          <div>
            <h5 className="text-white">Decentralization</h5>
            <p>
              Unlike traditional centralized databases controlled by a single
              entity, a blockchain operates on a network of computers (nodes).
              Each node maintains a copy of the entire blockchain, and no single
              entity has full control over the network. This decentralization
              enhances security and resilience.
            </p>
          </div>
          <div>
            <h5 className="text-white">Transparency</h5>
            <p>
              Transactions recorded on a blockchain are visible to all
              participants in the network. This transparency ensures that anyone
              can verify the validity of transactions, promoting trust and
              reducing the risk of fraud.
            </p>
          </div>
          <div>
            <h5 className="text-white">Immutability</h5>
            <p>
              Once data is added to a blockchain, it becomes extremely difficult
              to alter or delete. This immutability is achieved through
              cryptographic techniques and consensus mechanisms, making the
              blockchain tamper-resistant.
            </p>
          </div>
          <div>
            <h5 className="text-white">Security</h5>
            <p>
              Blockchains use cryptographic algorithms to secure data and
              control access. Transactions must be verified by network
              participants (through consensus mechanisms like proof of work or
              proof of stake) before they are added to the blockchain, ensuring
              the integrity of the ledger.
            </p>
          </div>
          <div>
            <h5 className="text-white">Distributed Ledger</h5>
            <p>
              A blockchain is a distributed ledger, meaning that copies of the
              ledger exist on multiple nodes across the network. This redundancy
              enhances fault tolerance and ensures that the ledger remains
              accessible even if some nodes go offline.
            </p>
          </div>
          <div>
            <h5 className="text-white">Smart Contracts</h5>
            <p>
              Some blockchains, such as Ethereum, support smart contracts. These
              are self-executing contracts with the terms of the agreement
              directly written into code. Smart contracts automatically execute
              when predefined conditions are met, eliminating the need for
              intermediaries in many contractual agreements.
            </p>
          </div>
          <div>
            <h5 className="text-white">Consensus Mechanisms</h5>
            <p>
              Blockchains rely on consensus mechanisms to validate and agree on
              the order of transactions. Common consensus mechanisms include
              proof of work (used in Bitcoin) and proof of stake. These
              mechanisms ensure that all nodes in the network reach consensus on
              the state of the ledger.
            </p>
          </div>
          <div>
            <h5 className="text-white">Cryptocurrency</h5>
            <div className="flex flex-col gap-5">
              <p>
                While blockchain technology has applications beyond
                cryptocurrencies, many blockchains have their own native digital
                currencies or tokens. These tokens are used for various purposes
                within the blockchain ecosystem, such as transaction fees,
                rewards, and governance.
              </p>
              <p>
                Blockchains have found applications in various industries,
                including finance, supply chain management, healthcare, voting
                systems, and more. They offer a secure and transparent way to
                record and verify transactions and data, reducing the need for
                intermediaries and enhancing trust in digital interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhatIsBlockchain.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default WhatIsBlockchain;
