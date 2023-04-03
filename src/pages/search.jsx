import Search from "@/modules/search/search";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Digivarsity</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search/>
    </>
  );
}
