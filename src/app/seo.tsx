import React, { FC } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  tags?: Array<{
    name: string;
    content: string;
  }>;
};

export const SEO: FC<Props> = ({
  title = 'DevFest Boilerplate',
  description = 'test',
  keywords = 'gdg lagos, devfest, devfest lagos, devfest lagos 2023',
  // image = '/og-images/home-page.png',
  tags = [],
}) => {
  // const title = `Devfest Lagos 2023 | ${_title}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image:type' content='image/png' />
      <meta
        property='og:image'
        itemProp='image'
        content={`https://www.devfestlagos.com/mock-og.png`}
      />
      {/* {image && (
        <>
          <meta name='twitter:image' content={`https://www.devfestlagos.com/${image}`} />
          <meta
            property='og:image'
            itemProp='image'
            content={`https://www.devfestlagos.com/${image}`}
          />
        </>
      )} */}
      {keywords && <meta name='keywords' content={keywords} />}
      {tags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
    </Head>
  );
};
