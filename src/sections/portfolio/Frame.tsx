import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import Github from '../../assets/svg/github.svg?react';
import Link from '../../assets/svg/link.svg?react';
import { ClassNameInterface } from '../../types/className';
import { cn } from '../../utils/cn';
interface FrameProps extends ClassNameInterface {
  category: string;
  title: string;
  bg: string;
  link: string;
  github: string;
  stack: string[];
  overview: string[];
  description: { id?: string; title: string; content: React.ReactNode }[];
}

const Frame = ({
  category,
  title,
  bg,
  link,
  github,
  stack,
  overview,
  description,
  className,
  children,
}: PropsWithChildren<FrameProps>) => {
  return (
    <div
      className={cn(
        'flex gap-2xl lt-sm:flex-col w-100% lt-sm:h-100% hover:w-100% transition-all',
        className
      )}
      css={css({
        '& .frame': {
          backgroundImage: `url('${bg}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      })}
    >
      <a
        href={link}
        target="_blank"
        className={`block frame w-33% shrink-0 lt-sm:w-100% h-100% h-40rem lt-sm:h-32rem bg-gray-100 rounded-4 mb-4`}
      >
        {children}
      </a>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <h3 className="flex flex-col">
            <span className="text-xl lt-sm:text-1rem">{category}</span>
            <span className="text-2xl lt-sm:text-xl font-extrabold">{title}</span>
          </h3>
          <ul className="flex gap-0.375rem items-center">
            <li>
              <a href={link} target="_blank" className="p-1.5 ">
                <Link width="1rem" />
              </a>
            </li>
            <li>
              <a href={github} target="_blank" className="p-1.5 ">
                <Github width="1rem" />
              </a>
            </li>
          </ul>
        </div>
        {/* 기술 스택 */}
        <ul className="flex lt-sm:flex-col gap-lg lt-sm:gap-none text-lg mb-2xl">
          {stack.map((item, i) => (
            <li key={i}>
              <u>#&nbsp;{item}</u>
            </li>
          ))}
        </ul>
        {/* 개요 */}
        <ul className="list-disc text-0.95rem lt-sm:text-0.875rem ml-lg leading-loose font-extralight mb-5xl">
          {overview.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {/* 상세 */}
        <ul className="flex flex-col space-y-6xl lt-sm:text-sm">
          {description.map((item, i) => (
            <li key={i} id={item.id}>
              <h5 className="text-lg lt-sm:text-1rem lt-sm:mb-lg leading-normal font-extrabold">
                {item.title}
              </h5>
              <div className="lt-sm:text-0.875rem flex flex-col space-y-lg leading-loose">
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Frame;
