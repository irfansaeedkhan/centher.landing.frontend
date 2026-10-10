import React from "react";
import Image from "next/image";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const CentherFuturePlans: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="text-gradient text-20px font-semibold pt-6 px-4 pb-6 lg:px-8 lg:pt-10">
        Plans For The Next Few Months
      </h2>
      <Image
        width={925}
        height={420}
        src="/images/centher-future-plans-banner.png"
        alt="what is staking"
        className="w-full"
      />
      <div className="content p-5 lg:p-8 text-grayText text-sm font-normal">
        <div className="flex flex-col gap-3  pb-5">
          <p className="relative before:w-[3px] before:h-[100%] before:top-[50%] before:translate-y-[-50%] before:bg-anchor before:block before:absolute before:left-0 pl-3">
            Centher.io Redefines Convenience with Two Game-Changing Apps:
            Trading Service and a Modular Mobile App.
          </p>
          <p>
            Centher.io is on the brink of unleashing two revolutionary apps that
            are set to redefine the way users navigate the world of
            cryptocurrency and blockchain services. These upcoming releases
            promise to simplify trading and enhance the user experience with a
            modular mobile app, providing users with unprecedented flexibility
            and control.
          </p>
        </div>
        <h5 className="text-white relative before:w-[3px] before:h-[100%] before:top-[50%] before:translate-y-[-50%] before:bg-anchor before:block before:absolute before:left-0 pl-2">
          Trading Service (A Universal Trading Hub)
        </h5>
        <p className="pl-2">
          Imagine having all your preferred cryptocurrency exchanges at your
          fingertips within a single app. Centher.io&apos;s Trading Service is
          precisely that - a universal trading hub that enables users to connect
          their preferred cryptocurrency exchanges seamlessly. Here&apos;s what
          this game-changing feature entails:
        </p>
        <div className="flex flex-col gap-3 pt-5">
          <div>
            <h5 className="text-white">Freedom of Choice</h5>
            <p>
              Users can select and connect to the exchanges they trust and
              prefer. This means you can trade on multiple exchanges, all from
              the convenience of Centher.io, without the hassle of switching
              between different platforms or applications.
            </p>
          </div>
          <div>
            <h5 className="text-white">Streamlined Experience</h5>
            <p>
              With all your exchanges accessible in one place, you&apos;ll enjoy
              a streamlined trading experience. No more juggling between
              multiple tabs or apps to monitor your portfolio and execute
              trades.
            </p>
          </div>
          <div>
            <h5 className="text-white">Enhanced Security</h5>
            <p>
              Your private trading data and information remain secure within
              Centher.io&apos;s privacy-centric environment. You can confidently
              trade without worrying about exposing your personal details to
              multiple exchanges.
            </p>
          </div>
          <div>
            <h5 className="text-white">Real-time Insights</h5>
            <p>
              Centher.io&apos;s Trading Service provides real-time insights and
              analytics, giving you a comprehensive view of your trading
              activity across various exchanges, making informed decisions
              easier than ever.
            </p>
          </div>
          <div className="pt-5">
            <h5 className="text-white relative before:w-[3px] before:h-[100%] before:top-[50%] before:translate-y-[-50%] before:bg-anchor before:block before:absolute before:left-0 pl-2">
              Modular Mobile App with Templating Feature (Tailor Your
              Experience)
            </h5>
            <p className="pl-2">
              Centher.io&apos;s upcoming mobile app is designed to offer users
              an all-encompassing and customizable experience without the need
              for a Metamask browser extension. Here&apos;s what sets it apart:
            </p>
          </div>
          <div>
            <h5 className="text-white">Create or Import Wallets</h5>
            <p>
              You&apos;ll have the freedom to generate a Centher Wallet for a
              seamless experience or import an existing wallet of your choice.
              This versatility ensures you can manage your digital assets in a
              way that suits your preferences.
            </p>
          </div>
          <div>
            <h5 className="text-white">Modularity</h5>
            <p>
              The app is designed to be modular, allowing users to customize
              their experience by adding or removing features based on their
              needs. This modularity ensures your app isn&apos;t cluttered with
              unnecessary functionalities, making it efficient and
              user-friendly.
            </p>
          </div>
          <div>
            <h5 className="text-white">Templating Feature</h5>
            <p>
              The templating feature takes personalization to the next level.
              Users can create and save templates for their preferred app
              layout, ensuring a consistent and tailored user experience each
              time they log in.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex flex-col gap-3">
              <p>
                By offering these features, Centher.io is empowering users to
                take control of their crypto journey like never before. Whether
                you&apos;re a seasoned trader or just beginning to explore the
                blockchain space, these apps will simplify your experience,
                enhance your privacy, and provide a level of customization
                that&apos;s unmatched in the industry. Centher.io is leading the
                charge in bringing simplicity, security, and convenience to the
                world of cryptocurrency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CentherFuturePlans.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default CentherFuturePlans;
