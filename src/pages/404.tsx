import React from "react";

import { Title } from "../components/Title";

interface Props {}

export default function Template({}: Props) {
  return (
    <div>
      {/* <div className="flex flex-col items-end gap-2 p-12 lg:flex-row lg:justify-around">
        <Link to="/">
          <WMSLogo className="w-24" />
        </Link>

        <div className="flex flex-row gap-4">
          <a href={globalFrontmatter.twitter_url} target="_blank">
            <TwitterIcon />
          </a>
          <a href={globalFrontmatter.instagram_url} target="_blank">
            <InstagramIcon />
          </a>
          <a href={globalFrontmatter.discord_url} target="_blank">
            <DiscordIcon />
          </a>
          <a href={globalFrontmatter.opensea_url}>
            <OpenseaIcon />
          </a>
        </div>
      </div> */}

      <main className="flex flex-col items-center p-8">
        <Title>Not Found 😥</Title>

        <p className="font-mono italic">
          We cannot find the page you requested.
        </p>
      </main>

      {/* <Footer
        landing={false}
        twitter_url={globalFrontmatter.twitter_url}
        instagram_url={globalFrontmatter.instagram_url}
        discord_url={globalFrontmatter.discord_url}
        opensea_url={globalFrontmatter.opensea_url}
        digitalrocket_url={globalFrontmatter.digitalrocket_url}
        mailing_text={globalFrontmatter.mailing_text}
      /> */}
    </div>
  );
}
