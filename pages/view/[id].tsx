import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

export default function ViewImage() {
  const router = useRouter();

  const metaTitle = "codesteel.io";

  const picContent = "pic.png";

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:image" content={picContent} />
      </Head>
    </div>
  );
}
