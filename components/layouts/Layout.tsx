import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Tikimioo" />
        <meta name="description" content="Pokemon Information" />
        <meta name="keywords" content="XXX" />

        <meta property="og:title" content={`El pokemon es ${title}`} />
        <meta
          property="og:description"
          content="Get from SEO newbie to SEO pro in 8 simple steps."
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      {/* Navbar */}
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
