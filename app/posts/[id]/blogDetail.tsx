'use client'

import ReactMarkdown, {Components} from "react-markdown";
import markdownTheme from "../../../src/lib/markdown_theme";
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import gfm from "remark-gfm";
import {Prism, SyntaxHighlighterProps} from "react-syntax-highlighter";

const SyntaxHighlighter = (Prism as any) as React.FC<SyntaxHighlighterProps>;

const customMarkdownTheme: Components = {
  ...markdownTheme,
  p: (props: any) => <p className='mb-4'>{props.children}</p>,
  ol: (props: any) => <ol className='list-decimal mb-4 ml-6'>{props.children}</ol>,
  ul: (props: any) => <ul className='list-disc mb-4 ml-6'>{props.children}</ul>,
  li: (props: any) => <li className='mb-2'>{props.children}</li>,
  table: (props: any) => <table className='mb-4'>{props.children}</table>,
  th: (props: any) => <th className='py-2 px-4 text-left border'>{props.children}</th>,
  td: (props: any) => <td className='py-2 px-4 border'>{props.children}</td>,
  blockquote: (props: any) => {
    return <blockquote className='mb-4 italic font-bold bg-slate-700 px-4 pt-4 pb-1.5 border-l-4 border-slate-300'>{props.children}</blockquote>
  },
  code: (props: any) => {
    const {children, className, node, ...rest} = props
    const match = /language-(\w+)/.exec(className || '')

    return match ? (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        language={match[1]}
        style={atomOneDark}
        showLineNumbers
        className='mb-4'
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code {...rest} className={`${className} rounded-md bg-red-400/20 text-red-300 px-2.5 py-0.5 text-sm font-bold text-nowrap`}>
        {children}
      </code>
    )
  }
}

type BlogDetailProps = {
  title: string;
  description?: string;
  tags: string[];
  markdown: string;
  updatedAt: string;
}
const BlogDetail: React.FC<BlogDetailProps> = ({ title, description, tags, markdown, updatedAt }) => {
  return (
    <>
      <div className='mb-10 md:mb-20'>
        <h1 className='text-3xl mb-2 md:mb-4'>{title}</h1>
        <div className='flex justify-between items-baseline'>
          <div>
            {tags.length ? (tags.map((tag) => <span key={tag} className='rounded bg-gray-400/20 text-gray-300 px-2 py-1 text-xs mr-2 mb-1'>{tag}</span>)) : ''}
          </div>
          <p className='font-bold'>{updatedAt}</p>
        </div>
      </div>
      <ReactMarkdown components={customMarkdownTheme} remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
    </>
  )
}
export default BlogDetail;
