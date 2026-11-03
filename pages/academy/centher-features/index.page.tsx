import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app.page";

const CentherFeaturesRedirect: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/academy/sociaket-features");
  }, [router]);
  return (
    <div>
      <p>This page has moved.</p>
      <Link href="/academy/sociaket-features">
        Continue to Sociaket Features
      </Link>
    </div>
  );
};

CentherFeaturesRedirect.getLayout = (page) => {
  return <PageLayout Layout={"academy"}>{page}</PageLayout>;
};

export default CentherFeaturesRedirect;
