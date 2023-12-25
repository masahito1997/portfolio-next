import React, {
  useRef,
  useCallback,
} from "react";

import ReactToPrint from "react-to-print";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { GetStaticProps } from "next";

import markdownTheme from "../../src/lib/markdown_theme";
import contentfulClient from "../../src/lib/contentful_client";
import { Entry, EntryFields } from "contentful";

import HeadContent from '../../src/components/head_content'

type resumeContentType = {
  markdown: string;
};

const Resume: React.FC<resumeContentType> = ({ markdown }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const printContent = useCallback(
    () => resumeRef.current,
    [resumeRef.current]
  );
  const printTrigger = useCallback(
    () => (
      <div className='flex justify-center'>
        <button className='inline-flex items-center justify-center relative font-bold rounded-md bg-gray-400/20 px-4 py-2 hover:opacity-75'>
          Download
          <span className='inline-flex self-center flex-shrink ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
          </span>
        </button>
        {/*<Button rightIcon={<DownloadIcon/>}>Download</Button>*/}
      </div>
    ), []
  );

  return (
    <>
      <HeadContent title='Resume - Love Beautiful Code' description="職務経歴書"/>
      <div
        ref={resumeRef}
        style={{marginBottom: "50px"}}
        className="resume-content"
      >
        <ReactMarkdown
          components={markdownTheme}
          remarkPlugins={[gfm]}
          skipHtml
        >
          {markdown}
        </ReactMarkdown>
      </div>
      <ReactToPrint
        content={printContent}
        documentTitle="resume"
        trigger={printTrigger}
        copyStyles
        bodyClass="resume-pdf-content"
      />
    </>
  );
};
export default Resume;

export const getStaticProps: GetStaticProps = async () => {
  const id = String(process.env.NEXT_PUBLIC_RESUME_CONTENTFUL_ID);
  const resume = await contentfulClient
    .getEntry(id)
    .then((response: Entry<EntryFields.Object>) => {
      const { markdown } = response.fields;
      return { markdown };
    })
    .catch((err) => {
      console.error(err);
      return { notFound: true };
    });
  return { props: resume };
};
