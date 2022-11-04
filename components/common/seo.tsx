import Head from 'next/head';

export interface SeoData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

export interface SepProps {
  data: SeoData;
}

export function Seo({ data }: SepProps) {
  const { title, description, url, thumbnailUrl } = data;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Learn NextJs | IU2000</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  );
}
