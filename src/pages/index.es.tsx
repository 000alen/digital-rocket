import { graphql } from "gatsby";
import React from "react";

import { IndexLayout } from "../layouts";
import { LandingFrontmatter } from "../typings";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: LandingFrontmatter;
    };
  };
}

export default ({ data }: Props) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return <IndexLayout {...frontmatter} />;
};

export const pageQuery = graphql`
  {
    markdownRemark(
      frontmatter: { title: { eq: "landing" }, language: { eq: "es" } }
    ) {
      frontmatter {
        about_title
        about_text
        roadmap_title
        roadmap {
          milestone_description
          milestone_title
          milestone_url
          milestone_revealed
          milestone_image
        }
        about_caption
        address
        contact_nav_title
        contact_title
        contact_placeholder
        contact_button
        crew_title
        crew_text
        instagram_handle
        instagram_url
        email
        footer_title
        footer_text
        footer_text
        footer_contact
        footer_social
        footer_copyright
        phone
        services {
          service_markdown
          service_description
          service_name
        }
        services_text
        services_title
        talents_people {
          person_description
          person_name
          person_position
        }
        welcome_title
        welcome_text
        welcome_caption
        talents_title
      }
    }
  }
`;
