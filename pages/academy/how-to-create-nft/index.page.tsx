import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const HowToCreateNFT: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        How to create a NFT?
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/create-nft.png"
        alt="How to create a NFT"
        className="w-full"
      />

      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3">
          <div>
            <p>
              Make sure you have already purchased your{" "}
              <a
                href="https://centher.io/citizenship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                Citizen Passport
              </a>{" "}
              and head over the button on the left menu Create NFT.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/how-to-create-nft-img-1.png"
              alt="How to create a NFT"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <p>
            Before you create a NFT you might want to{" "}
            <a
              href="https://centher.io/how-to-create-collection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient"
            >
              Create a Collection
            </a>
            , in case you are interested in selling them as part of Gouped
            Items.
          </p>
          <p>
            After you are set up with your collection, if you need one, you can
            proceed with creating your NFT by adding your Image, Audio or Video
            file
          </p>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/how-to-create-nft-img-2.png"
              alt="How to create a NFT"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <p>
            After you have uploaded the file you&apos;ll need to fill in the
            NAME, DESCRIPTION, NFT SYMBOL, AMOUNT, PRICE, CATEGORY and
            COLLECTION (which can be the same you have previously created or
            Centher Native Collection). You can choose to sell for a fixed price
            or have an Auction placed on Centher&apos;s marketplace by clicking
            the button &ldquo;Auction&ldquo; on the top. of the following image.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/how-to-create-nft-img-3.png"
              alt="How to create a NFT"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <p>
            Metadata (Properties) are not mandatory fields but your preview
            could look something like this:
          </p>
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <Image
              width={701}
              height={347}
              src="/images/how-to-create-nft-img-4.png"
              alt="How to create a NFT"
              className="w-full lg:w-9/12 mx-auto"
            />
            <h6 className="text-grayText text-[10px]">Image source: Centher</h6>
          </div>
          <p>
            If you are satisfied with your NFT Preview click on submit on the
            top right and proceed with the minting of the NFT.
          </p>
        </div>
      </div>
    </div>
  );
};

HowToCreateNFT.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default HowToCreateNFT;
