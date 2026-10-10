import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import MetaHead from "./meta.head";
import { AcademyLayout } from "./academy-layout";
import Header2 from "@/pages/_components/header/header2";

const Header = dynamic(() => import("@/pages/_components/header"));
const Footer = dynamic(() => import("@/pages/_components/footer"));

interface Props {
  children: React.ReactNode;
  Layout?: string;
}

export const PageLayout: React.FC<Props> = ({
  Layout = "landing",
  ...props
}) => {
  return (
    <div className="landingLayout font-monto">
      <MetaHead />
      {(Layout === "landing" || Layout === "academy") && <Header2 />}
      {Layout === "academy" && (
        <Suspense fallback={null}>
          <Header />
        </Suspense>
      )}
      {Layout === "academy" ? (
        <AcademyLayout>{props.children}</AcademyLayout>
      ) : (
        <main id="main-content">{props.children}</main>
      )}

      {Layout === "landing" && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};
