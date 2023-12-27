'use client'

import React from "react";
import Link from "next/link";

type BlogCardType = {
  id: string;
  title: string;
  tags: string[];
  description?: string;
  updatedAt: string;
}
const BlogCard: React.FC<BlogCardType> = ({ id, title, tags, description='', updatedAt }) => {
  const updatedAtDate = new Date(updatedAt)

  return (
    <article className='p-5 border-b relative hover:bg-gray-700/40'>
      <h3 className='text-2xl mb-3'>
        <Link href={`/posts/${id}`} className='before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-0'>{title}</Link>
      </h3>
      <p className='text-md line-clamp-5 md:line-clamp-3'>{description}</p>
      <div className='flex justify-between items-baseline mt-4'>
        <div>
          {tags.length && tags.map((tag) => <span key={tag} className='rounded bg-gray-400/20 text-gray-300 px-2 py-1 text-xs mr-2 mb-1'>{tag}</span>)}
        </div>
        <p className='text-sm font-bold px-4'>{updatedAtDate.toLocaleDateString('ja-JP')}</p>
      </div>
    </article>
  )
}
export default BlogCard;
