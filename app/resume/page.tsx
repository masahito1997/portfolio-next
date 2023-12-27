import contentfulClient from "../../src/lib/contentful_client";
import { Entry, EntryFields } from "contentful";

import ResumePage from './resumePage'

import { Metadata } from "next";
import { metadata as metadataBase } from '../layout'
import {notFound} from "next/navigation";

export const metadata: Metadata = {
  ...metadataBase,
  title: 'Resume - Love Beautiful Code',
  description: '職務経歴書'
}

type ResumeType = {
  markdown: string;
}

const getResume = async () => {
  const id = String(process.env.NEXT_PUBLIC_RESUME_CONTENTFUL_ID);

  return await contentfulClient
    .getEntry<ResumeType>(id)
    .then((response) => {
      const { markdown } = response.fields;
      return markdown;
    })
    .catch((err) => {
      console.error(err);
      return undefined;
    });
}

const Resume = async () => {
  const markdown = await getResume();
  if (!markdown) {
    notFound();
  }

  return <ResumePage markdown={markdown} />
};

export default Resume;
