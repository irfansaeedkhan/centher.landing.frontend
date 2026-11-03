import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const CentherFuturePlansRedirect: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/academy/sociaket-future-plans");
  }, [router]);
  return (
    <div>
      <p>This page has moved.</p>
      <Link href="/academy/sociaket-future-plans">
        Continue to Sociaket Future Plans
      </Link>
    </div>
  );
};

CentherFuturePlansRedirect.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default CentherFuturePlansRedirect;
