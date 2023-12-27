'use client'

import React, {useCallback, useRef} from "react";
import ReactMarkdown from "react-markdown";
import markdownTheme from "../../src/lib/markdown_theme";
import gfm from "remark-gfm";
import ReactToPrint from "react-to-print";

type ResumePageType = {
  markdown: string;
}

const ResumePage: React.FC<ResumePageType> = ({ markdown }) => {
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
      </div>
    ), []
  );

  return (
    <>
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
export default ResumePage;
