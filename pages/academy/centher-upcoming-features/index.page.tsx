import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const CentherUpcomingFeaturesRedirect: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/academy/sociaket-upcoming-features");
  }, [router]);
  return (
    <div>
      <p>This page has moved.</p>
      <Link href="/academy/sociaket-upcoming-features">
        Continue to Sociaket Upcoming Features
      </Link>
    </div>
  );
};

CentherUpcomingFeaturesRedirect.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default CentherUpcomingFeaturesRedirect;
