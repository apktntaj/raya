import React from "react";

export default function TitlePage({ title }: { title: string }) {
  return (
    <h1 className='text-center text-6xl font-bold m-4 prose-headings bg-gradient-to-r p-2 from-primary to-secondary text-transparent bg-clip-text'>
      {title}
    </h1>
  );
}
