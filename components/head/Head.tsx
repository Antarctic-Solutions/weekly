import { default as NextHead } from "next/head";
import React from "react";
import CONSTANTS from "../constants/constants";

interface Props {
  weekType: number;
}

const Head: React.FC<Props> = ({ weekType }) => {
  const getRandom = () => {
    // 1 in 10 chance of getting it's morbing time
    if (Math.floor(Math.random() * 10) === 0) {
      return "It's Morb(et)ing Time";
    }
    return "It's Marketing Week";
  };

  const title = weekType ? "It's Coding Week" : getRandom();

  const toImageString = (image: string) => {
    return `https://${CONSTANTS.DEFAULT_SITE_NAME}/${image}`;
  };

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="title" property="og:title" content={title} />
      <meta name="keywords" content={CONSTANTS.DEFAULT_KEYWORDS.join(",")} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONSTANTS.DEFAULT_SITE_NAME} />
      <meta property="og:url" content={CONSTANTS.DEFAULT_BASE_URL} />
      <meta
        property="og:image"
        content={toImageString(
          weekType === 1
            ? "coding.png"
            : title === "It's Marketing Week"
            ? "marketing.png"
            : "morbing.png"
        )}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={CONSTANTS.DEFAULT_BASE_URL} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:image"
        content={toImageString(
          weekType === 1
            ? "coding.png"
            : title === "It's Marketing Week"
            ? "marketing.png"
            : "morbing.png"
        )}
      />
      <link rel="icon" href="favicon.ico" />

      {/* Google Analytics */}
      {CONSTANTS.DEFAULT_GOOGLE_ANALYTICS ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${CONSTANTS.DEFAULT_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${CONSTANTS.DEFAULT_GOOGLE_ANALYTICS}');`,
            }}
          />{" "}
        </>
      ) : null}
    </NextHead>
  );
};
export default Head;
