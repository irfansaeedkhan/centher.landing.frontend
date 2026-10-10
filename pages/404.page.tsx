import Image from "next/image";
import Link from "next/link";

// Inside the "pages/404.js" file
export default function Custom404() {
  return (
    <div className="h-screen w-full landingLayout font-monto flex items-center justify-center">
      <div className="flex text-center xl:text-left  flex-col-reverse xl:flex-row gap-7 items-center justify-center max-w-[1360px] p-8">
        <div className="w-[80%] mx-auto  flex flex-col  items-center">
          <div>
            <h1 className="text-white text-48px font-semibold pb-3">
              Page not Found
            </h1>
            <p className="text-[#888DAA] text-20px font-medium pb-6 ">
              The requested URL was not found on this server.
            </p>
            <Link
              href={{
                pathname: "/",
              }}
              className="text-themeDark text-14px font-bold  bg-yellow rounded-lg px-10 py-3  hover:text-white hover:bg-[#b8b7bc] transition duration-300 ease-in-out"
            >
              Back to home
            </Link>
          </div>
        </div>
        <Image
          width={818}
          height={525}
          src="/images/notfound.png"
          alt="Picture of the notfound robot"
        />
      </div>
    </div>
  );
}
