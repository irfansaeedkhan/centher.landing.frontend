import React from "react";

import { PageLayout } from "@/layouts";

import { NextPageWithLayout } from "../_app.page";
import { Button } from "./_components/button";

const About: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Button>Internal Button</Button>
    </div>
  );
};

About.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default About;
