import contentfulClient from "../../src/lib/contentful_client";
import { Entry, EntryFields } from "contentful";

import ResumePage from './resumePage'

import { Metadata } from "next";
import { metadata as metadataBase } from '../layout'
import NotFound from "../not-found";

export const metadata: Metadata = {
  ...metadataBase,
  title: 'Resume - Love Beautiful Code',
  description: '職務経歴書'
}

const getResume = async () => {
  const id = String(process.env.NEXT_PUBLIC_RESUME_CONTENTFUL_ID);

  let resumeMarkdown: string;
  await contentfulClient
    .getEntry(id)
    .then((response: Entry<EntryFields.Object>) => {
      const { markdown } = response.fields;
      resumeMarkdown = markdown;
    })
    .catch((err) => {
      console.error(err);
      return NotFound();
    });
  return resumeMarkdown;
}

const Resume = async () => {
  const markdown = await getResume();
  return <ResumePage markdown={markdown} />
};

export default Resume;
