import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const WhatIsBlockchain: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How can blockchain technology enhance supply chain transparency and
        traceability?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/how-can-blockchain-enhance-supply-chain-transparency.png"
        alt="how-can-blockchain-enhance-supply-chain-transparency"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <p>
            Blockchain technology has the potential to significantly enhance
            supply chain transparency and traceability by providing a secure,
            immutable, and decentralized ledger of transactions and data.
          </p>

          <h5 className="text-white">
            Here&apos;s how blockchain achieves this and its key benefits:
          </h5>
          <div>
            <h5 className="text-white">Immutable Record Keeping</h5>
            <p>
              Blockchain creates a permanent and tamper-resistant ledger. Once
              data is recorded on the blockchain, it cannot be altered or
              deleted, ensuring the integrity of the supply chain data.
            </p>
          </div>
          <div>
            <h5 className="text-white">End-to-End Visibility</h5>
            <p>
              Participants in the supply chain, from manufacturers to consumers,
              can access a shared blockchain ledger. This visibility allows
              stakeholders to track the movement and status of goods in
              real-time.
            </p>
          </div>
          <div>
            <h5 className="text-white">Traceability of Goods</h5>
            <p>
              Each product or batch can be assigned a unique identifier or
              digital &quot;token&quot; on the blockchain. This token can store
              detailed information about the item, such as its origin,
              manufacturing date, shipping history, and more. Consumers can scan
              QR codes or use other methods to access this information, ensuring
              that they receive authentic products.
            </p>
          </div>
          <div>
            <h5 className="text-white">Transparency</h5>
            <p>
              Blockchain provides a transparent view of transactions and data
              across the supply chain, reducing the risk of fraudulent
              activities and ensuring accountability among participants.
            </p>
          </div>
          <div>
            <h5 className="text-white">Authentication and Verification</h5>
            <p>
              Consumers, retailers, and manufacturers can verify the
              authenticity of products by checking the blockchain. This helps
              combat counterfeit goods and boosts consumer confidence.
            </p>
          </div>
          <div>
            <h5 className="text-white">Reduced Counterfeiting</h5>
            <p>
              By enabling easy verification of product authenticity, blockchain
              helps combat the proliferation of counterfeit products, which can
              be a significant issue in various industries.
            </p>
          </div>
          <div>
            <h5 className="text-white">Quality Control</h5>
            <p>
              Detailed records on the blockchain allow for better quality
              control and compliance tracking. In cases of product recalls,
              stakeholders can quickly identify affected batches and take
              appropriate action.
            </p>
          </div>
          <div>
            <h5 className="text-white">Supply Chain Optimization</h5>
            <p>
              Access to real-time data allows for more efficient inventory
              management, reduced delays, and optimized routes, which can result
              in cost savings and reduced waste.
            </p>
          </div>
          <div>
            <h5 className="text-white">Compliance and Sustainability</h5>
            <p>
              Blockchain can be used to track and verify compliance with
              environmental, ethical, and sustainability standards, making it
              easier for companies to demonstrate their commitment to
              responsible practices.
            </p>
          </div>
          <div>
            <h5 className="text-white">Smart Contracts</h5>
            <p>
              Smart contracts, self-executing agreements with predefined rules,
              can automate various processes in the supply chain, such as
              payments, quality checks, and delivery confirmations. This reduces
              the need for intermediaries and ensures compliance with
              agreed-upon terms.
            </p>
          </div>
          <div>
            <h5 className="text-white">Enhanced Trust</h5>
            <p>
              The transparency and immutability of blockchain data build trust
              among participants in the supply chain. Partners can confidently
              collaborate and share data, knowing that it cannot be altered
              without consensus.
            </p>
          </div>
          <div>
            <h5 className="text-white">Faster Dispute Resolution</h5>
            <div className="flex flex-col gap-5">
              <p>
                In cases of disputes or discrepancies, blockchain records
                provide a transparent and auditable history of transactions,
                making it easier to resolve issues quickly and fairly.
              </p>
              <p>
                Blockchain technology is already being applied in various
                industries, including food and agriculture, pharmaceuticals,
                luxury goods, and logistics, to improve supply chain
                transparency and traceability. As the technology continues to
                evolve and gain broader adoption, it has the potential to
                revolutionize how supply chains operate, making them more
                efficient, secure, and accountable.
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
