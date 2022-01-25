import React, {
  useRef,
  useCallback,
} from "react";

import ReactToPrint from "react-to-print";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Button, Center } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import { GetStaticProps } from "next";

import markdownTheme from "../../src/lib/markdown_theme";
import contentfulClient from "../../src/lib/contentful_client";
import { Entry, EntryFields } from "contentful";

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
      <Center>
        <Button rightIcon={<DownloadIcon />}>Download</Button>
      </Center>
    ),
    []
  );

  return (
    <>
      <div
        ref={resumeRef}
        style={{ marginBottom: "50px" }}
        className="resume-content"
      >
        <ReactMarkdown
          components={ChakraUIRenderer(markdownTheme)}
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
