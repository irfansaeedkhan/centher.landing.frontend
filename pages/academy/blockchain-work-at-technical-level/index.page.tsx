import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const BlockchainTechnicalLevel: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How does blockchain technology work at a technical level?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/blockchain-work-at-technical-level.png"
        alt="blockchain-work-at-technical-level"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            Blockchain technology operates at a technical level through a
            combination of key concepts and components that work together to
            create a secure and tamper-resistant ledger of transactions.
          </p>

          <h5 className="text-white">
            Here&apos;s a simplified overview of how blockchain technology
            works:
          </h5>
          <div>
            <h5 className="text-white">
              Decentralization and Distributed Ledger
            </h5>
            <p>
              A blockchain is a decentralized network of computers (nodes), each
              of which maintains a copy of the entire blockchain ledger. There
              is no central authority or single point of control. This
              distributed ledger ensures redundancy and makes the system
              resilient to failures.
            </p>
          </div>
          <div>
            <h5 className="text-white">Transactions</h5>
            <p>
              The fundamental building block of a blockchain is a transaction.
              Transactions represent the exchange of assets or information
              between participants in the network. Each transaction is
              cryptographically signed by the sender to verify its authenticity.
            </p>
          </div>
          <div>
            <h5 className="text-white">Blocks</h5>
            <p>
              {" "}
              Transactions are grouped together into blocks. These blocks
              contain a set of transactions, a timestamp, and a reference to the
              previous block, forming a chain of blocks (hence the name
              &quot;blockchain&quot;). The previous block reference ensures the
              chronological order of transactions.
            </p>
          </div>
          <div>
            <h5 className="text-white">Consensus Mechanism</h5>
            <p>
              To validate and agree on the contents of the blockchain, nodes in
              the network use a consensus mechanism. The two most common
              consensus mechanisms are:
            </p>
            <div className="pl-3 pt-2">
              <div>
                <h5 className="text-white">(a) Proof of Work (PoW)</h5>
                <p>
                  Nodes (miners) compete to solve complex mathematical puzzles.
                  The first one to solve it gets the right to add a new block of
                  transactions to the blockchain. PoW is energy-intensive and
                  used by cryptocurrencies like Bitcoin.
                </p>
              </div>
              <div>
                <h5 className="text-white">(b) Proof of Stake (PoS)</h5>
                <p>
                  Validators are chosen to create new blocks based on the amount
                  of cryptocurrency they hold and are willing to
                  &quot;stake&quot; as collateral. PoS is more energy-efficient
                  and used by blockchains like Ethereum 2.0.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-white">Mining (PoW)</h5>
            <p>
              In PoW blockchains like Bitcoin, miners compete to solve
              cryptographic puzzles. When a miner successfully solves a puzzle,
              they propose a new block of transactions. Other nodes in the
              network verify the solution, and if it&apos;s correct, they add
              the new block to their copy of the blockchain.
            </p>
          </div>
          <div>
            <h5 className="text-white">Consensus and Validation (PoS)</h5>
            <p>
              In PoS blockchains, validators are selected to create new blocks
              based on their stake and other factors. Validators propose blocks,
              and other validators verify and confirm the validity of the
              proposed blocks.
            </p>
          </div>
          <div>
            <h5 className="text-white">Security and Immutability</h5>
            <p>
              Once a block is added to the blockchain, altering or deleting any
              information within it becomes nearly impossible due to the
              cryptographic hash functions used. Changing data in one block
              would require changing it in all subsequent blocks, which is
              computationally infeasible. This property ensures the security and
              immutability of the blockchain.
            </p>
          </div>
          <div>
            <h5 className="text-white">Public and Private Keys</h5>
            <p>
              {" "}
              Participants in the network have a pair of cryptographic keys—a
              public key for receiving assets or information and a private key
              for signing transactions. The private key must be kept secret, as
              it provides control over a user&apos;s assets on the blockchain.
            </p>
          </div>
          <div>
            <h5 className="text-white">Decentralized Applications (DApps)</h5>
            <p>
              Blockchain technology supports the development of decentralized
              applications (DApps) that can interact with the blockchain. DApps
              can execute smart contracts, which are self-executing contracts
              with predefined rules written in code.
            </p>
          </div>

          <div>
            <h5 className="text-white">
              Transactions and Smart Contracts Execution
            </h5>
            <div className="flex flex-col gap-5">
              <p>
                When a transaction or smart contract is initiated, it is
                broadcast to the network, validated, and added to a pending
                pool. Miners or validators include these transactions in a new
                block, and once the block is added to the blockchain, the
                transaction or contract is considered executed.
              </p>
              <p>
                This simplified overview provides a high-level understanding of
                how blockchain technology works. It&apos;s important to note
                that there are many different blockchain implementations with
                unique features and variations in how they operate. The specific
                technical details can vary significantly between different
                blockchain projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlockchainTechnicalLevel.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default BlockchainTechnicalLevel;
