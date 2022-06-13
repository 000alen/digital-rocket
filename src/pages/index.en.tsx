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
      frontmatter: { title: { eq: "landing" }, language: { eq: "en" } }
    ) {
      frontmatter {
        about_title
        about_text
        roadmap_title
        roadmap {
          milestone_description
          milestone_title
          milestone_url
        }
        about_caption
        address
        contact_text
        contact_title
        crew_title
        crew_text
        email
        footer_text
        footer_title
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
