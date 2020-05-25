import Head from "next/head";
import { SITE_TITLE } from "../constants";
import Header from "./header/header";
import { Container } from "next/app";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="container">
      <Head>
        <meta name="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}