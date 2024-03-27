import React, { PropsWithChildren } from 'react';

interface Paragraph {
  title: string;
}

const Paragraph = ({ title, children }: PropsWithChildren<Paragraph>) => {
  return (
    <div className="flex flex-col space-y-2xl lt-sm:space-y-lg">
      <hr className="border-0 h-4px bg-black" />
      <h3 className="text-2xl lt-sm:text-xl font-extrabold">#&nbsp;{title}</h3>
      <div className="flex flex-col space-y-lg lt-sm:text-sm leading-loose lt-sm:leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Paragraph;
