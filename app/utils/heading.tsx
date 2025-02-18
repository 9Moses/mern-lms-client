import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  keywords: string;
}

export const Heading: FC<Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};
