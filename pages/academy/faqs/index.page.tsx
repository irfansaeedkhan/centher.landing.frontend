import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const FAQS: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        Frequently Asked Questions
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/faqs.png"
        alt="FAQS"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <h5 className="text-white">
            <a
              href="https://centher.io/academy/blockchain-work-at-technical-level"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient"
            >
              How does blockchain technology work at a technical level?
            </a>
          </h5>
          <p>
            Understanding the underlying mechanics of blockchain, including data
            structure, cryptography, and consensus algorithms, is crucial to
            grasp its potential and limitations.
          </p>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/environmental-implications-of-blockchain-mining"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What are the environmental implications of blockchain mining
                (proof of work) and how can they be mitigated?
              </a>
            </h5>
            <p>
              Discuss the energy consumption and sustainability concerns
              associated with proof of work blockchains and consider alternative
              consensus mechanisms like proof of stake.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/how-can-blockchain-enhance-supply-chain-transparency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                How can blockchain technology enhance supply chain transparency
                and traceability?
              </a>
            </h5>
            <p>
              Investigate how blockchain can be used to track products and
              materials throughout the supply chain, reducing fraud and ensuring
              authenticity.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/role-of-blockchain-in-identity-verification"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What role can blockchain play in identity verification and
                personal data protection?
              </a>
            </h5>
            <p>
              Explore the potential for self-sovereign identities and data
              ownership on the blockchain, enabling users to control and
              monetize their data.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/role-of-blockchain-in-identity-verification"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                How can blockchain be used in the healthcare industry to secure
                patient records and improve interoperability?
              </a>
            </h5>
            <p>
              Discuss the challenges and benefits of implementing blockchain
              solutions in healthcare, such as securing patient data and
              streamlining medical record sharing.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/how-can-blockchain-be-used-in-healthcare-industry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What are the legal and regulatory challenges of blockchain
                adoption?
              </a>
            </h5>
            <p>
              Consider how governments and regulatory bodies are addressing
              issues like taxation, data privacy, and smart contract legality in
              the blockchain space.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/how-can-blockchain-enhance-voting-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                How can blockchain technology be used to enhance voting systems
                and improve election integrity?
              </a>
            </h5>
            <p>
              Explore the potential for blockchain-based voting systems to
              provide secure, transparent, and tamper-resistant elections.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/implications-of-blockchain-for-financial-industry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What are the implications of blockchain for the financial
                industry, including decentralized finance (DeFi) and central
                bank digital currencies (CBDCs)?
              </a>
            </h5>
            <p>
              Analyze how blockchain is disrupting traditional financial
              services and central banking and its potential to democratize
              finance.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/what-are-the-ethical-considerations-of-blockchain-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What are the ethical considerations of blockchain technology,
                including issues related to anonymity, censorship resistance,
                and the dark web?
              </a>
            </h5>
            <p>
              Discuss the moral and ethical dilemmas raised by the pseudonymous
              nature of blockchain transactions and their impact on society.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/how-does-blockchain-intersect-with-emerging-technologies-like-artificial-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                How does blockchain intersect with emerging technologies like
                artificial intelligence (AI), the Internet of Things (IoT), and
                quantum computing?
              </a>
            </h5>
            <p>
              Explore the synergies and potential challenges when blockchain
              technology interacts with other cutting-edge technologies.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/what-are-the-limitations-and-scalability-challenges-of-blockchain-networks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What are the limitations and scalability challenges of
                blockchain networks, and how can they be overcome?
              </a>
            </h5>
            <p>
              Investigate the technical obstacles that blockchain faces, such as
              scalability, latency, and storage constraints, and discuss
              proposed solutions.
            </p>
          </div>
          <div>
            <h5 className="text-white">
              <a
                href="https://centher.io/academy/what-are-some-promising-real-world-use-cases-of-blockchain-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                What are some promising real-world use cases of blockchain
                technology that have the potential to transform industries?
              </a>
            </h5>
            <p>
              Highlight specific projects and applications that are already
              making a significant impact in areas like finance, supply chain,
              healthcare, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FAQS.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default FAQS;
