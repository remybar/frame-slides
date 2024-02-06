import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Get Started !",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Slides demo",
  description: "A demo of Slides frame",
  openGraph: {
    title: "Slides demo",
    description: "A demo of Slides frame",
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/images/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Hey !</h1>
    </>
  );
}
