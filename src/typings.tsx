export interface LandingFrontmatter {
  about_title: string;
  about_text: string;
  roadmap_title: string;
  roadmap: {
    milestone_description: string;
    milestone_title: string;
    milestone_url: string
  }[];
  about_caption: string;
  address: string;
  contact_text: string;
  contact_title: string;
  crew_title: string;
  crew_text: string
  email: string;
  footer_text: string;
  footer_title: string;
  phone: string;
  services: {
    service_markdown: string;
    service_description: string;
    service_name: string;
  }[];
  services_text: string;
  services_title: string;
  talents_people: {
    person_description: string;
    person_name: string;
    person_position: string;
  }[];
  welcome_title: string;
  welcome_text: string;
  welcome_caption: string;
  talents_title: string;


}

export interface BlogEntryFrontmatter {
  title: string;
  date: string;
  path: string;
}
