import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { LandingFrontmatter } from "../typings";
import { Title } from "./Title";

interface FormProps {
  subscribe: any;
  status: any;
  message: any;
}

export const Form: React.FC<FormProps> = ({ subscribe, status, message }) => {
  const [email, setEmail] = React.useState("");

  return (
    <form
      className="flex flex-row items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (!email) return;

        subscribe({
          MERGE0: email,
        });
      }}
    >
      <input
        className="px-6 py-4 text-black rounded-full lg:w-96"
        type="email"
        placeholder="Leave us your email!"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        {...(status === "success" ? { readOnly: true } : {})}
      />

      {status === "success" ? (
        <span className="font-semibold">We will reach out soon!</span>
      ) : (
        <button
          className="bg-[#e41388] px-6 py-4 space-x-2 rounded-full hover:opacity-70 transition-all"
          type="submit"
        >
          <span className="font-semibold">Send</span>
        </button>
      )}
    </form>
  );
};

export const Contact: React.FC<LandingFrontmatter> = () => {
  const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${"6199c04658e592bafab08cbd8"}&id=${"5a8cb64ae9"}`;

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 p-8 bg-gradient-to-r from-purple-900 to-purple-500">
      <Title>
        Got a Project?
        <br />
        We want to hear about it
      </Title>

      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Form subscribe={subscribe} status={status} message={message} />
        )}
      />
    </section>
  );
};
