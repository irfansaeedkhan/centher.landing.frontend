import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const HowToCreateCollection: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How to create a collection?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/create-nft.png"
        alt="How to create a collection"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <h3>Why should I Crete Collection?</h3>
          <div>
            <p>
              Creating a collection of NFTs (Non-Fungible Tokens) can be an
              exciting and potentially rewarding endeavor, but it&apos;s
              essential to understand your motivations and goals before diving
              in. Here are some reasons why you might consider creating an NFT
              collection:
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-2">
            <div>
              <h5 className="text-white">Artistic Expression</h5>
              <p>
                NFTs provide a platform for artists and creators to showcase
                their work in a digital format. If you&apos;re an artist,
                musician, writer, or any other creative, NFTs can help you gain
                recognition and monetize your creations.
              </p>
            </div>
            <div>
              <h5 className="text-white">Ownership and Provenance</h5>
              <p>
                NFTs are built on blockchain technology, which ensures unique
                ownership and provenance of digital assets. Creating an NFT
                collection can help you establish a transparent and immutable
                record of ownership for your digital creations.
              </p>
            </div>
            <div>
              <h5 className="text-white">Monetization</h5>
              <p>
                NFTs can be sold in online marketplaces, allowing you to
                monetize your digital assets directly. If your collection gains
                popularity, you can earn royalties on secondary sales as well.
              </p>
            </div>
            <div>
              <h5 className="text-white">Community Engagement</h5>
              <p>
                NFT collections often attract a community of collectors and fans
                who appreciate your work. This community can provide feedback,
                support, and engagement, helping you grow your audience and
                brand.
              </p>
            </div>
            <div>
              <h5 className="text-white">Innovation</h5>
              <p>
                NFTs enable new forms of digital art and experiences that were
                not possible before. You can experiment with interactive,
                dynamic, and programmable NFTs to push the boundaries of
                creativity.
              </p>
            </div>
            <div>
              <h5 className="text-white">Collaborations</h5>
              <p>
                Collaborating with other artists, creators, or brands to create
                NFT collections can be mutually beneficial. It can expand your
                network, introduce your work to new audiences, and create unique
                collectibles.
              </p>
            </div>
            <div>
              <h5 className="text-white">Tokenization of Physical Assets</h5>
              <p>
                NFTs can represent ownership of physical assets like real
                estate, collectibles, or luxury items. Creating a collection of
                NFTs tied to physical assets can offer new investment
                opportunities.
              </p>
            </div>
            <div>
              <h5 className="text-white">Educational or Social Impact</h5>
              <p>
                Some creators use NFTs to raise awareness or funds for social
                causes, education, or charitable purposes. Your NFT collection
                can serve a broader mission beyond personal gain.
              </p>
            </div>
            <div>
              <h5 className="text-white">Speculative Investment</h5>
              <p>
                While it&apos;s essential to approach NFTs with caution, some
                people create collections with the hope that their value will
                appreciate over time. Just be aware of the volatile nature of
                the NFT market.
              </p>
            </div>
            <div>
              <h5 className="text-white">Early Adoption</h5>
              <p>
                Being an early adopter of NFT technology can position you as a
                pioneer in the digital art and collectibles space, potentially
                opening up future opportunities.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              It&apos;s crucial to research and plan your NFT collection
              carefully, considering factors like the quality of your work,
              target audience, marketing strategy, and the platform you choose
              for minting and selling NFTs.
            </p>
            <p>
              Once you are done with your research and know what your collection
              is going to be all about, let&apos;s head ove the left menu button
              Creaate Collection inside of centher-app.vercel.app, creating collections
              like NFTs alike is aa feature that only Citizens can access, so if
              you haven&apos;t done that yet, head over to Purchae Citizenship
              and become a member now!
            </p>
          </div>
          <div>
            <h5 className="text-white">
              Creating a collection is pretty simple
            </h5>
            <p>
              Upload a Banner Picture and a Logo Image like shown in the
              piclture below:
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/how-to-create-collection-img-1.png"
              alt="How to create a collection"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <div>
            <h5 className="text-white">Upload a Banner Image</h5>
            <p>
              This image will appear at the top of your collection page. Avoid
              including too much text in the banner image, 1400 * 350
              recommened.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/how-to-create-collection-img-2.png"
              alt="How to create a collection"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Follow the instructions for the size of the image to get the best
              effect in autoframing for mobile and desktop.
            </p>
            <p>
              Add Name, Symbol, Category and a Description of your collection,
              URL to your website and social links.
            </p>
            <p>Submit to preview and you are all set!</p>
            <p>
              If you like the looks of how your collection will look like you
              can proceed and submit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HowToCreateCollection.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default HowToCreateCollection;
