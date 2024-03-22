import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { ClassNameInterface } from '../../types/className';
import { cn } from '../../utils/cn';

interface DetailDataType {
  dt: string;
  dd: (string | React.ReactNode)[];
}

interface FrameProps extends ClassNameInterface {
  category: string;
  title: string;
  link: string;
  github: string;
  data: DetailDataType[];
  bgPaused: string;
  bgRunning: string;
}

const Frame = ({
  category,
  title,
  link,
  github,
  data,
  bgPaused,
  bgRunning,
  className,
  children,
}: PropsWithChildren<FrameProps>) => {
  return (
    <div
      className={cn(
        'group w-33% lt-sm:w-100% lt-sm:h-100% hover:w-100% transition-all',
        className
      )}
      css={css({
        '& .frame': {
          backgroundImage: `url('${bgPaused}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
        '@media (max-width: 480px)': {
          ' & .frame': {
            backgroundImage: `url('${bgRunning}')`,
          },
        },
        '&:hover .frame': {
          backgroundImage: `url('${bgRunning}')`,
        },
      })}
    >
      <div className={`frame h-100% h-40rem lt-sm:h-32rem bg-gray-100 rounded-4 mb-4`}>
        {children}
      </div>
      <div className="px-4">
        <h3 className="flex flex-col">
          <span className="text-xl lt-sm:text-1rem">{category}</span>
          <span className="text-2xl lt-sm:text-xl font-extrabold mb-2xl lt-sm:mb-xs">
            {title}
          </span>
          <div className="flex gap-sm items-start mb-1.5">
            <h6 className="text-sm w-3rem shrink-0">Link</h6>
            <a href={link} target="_blank" className="text-sm lt-sm:text-xs break-all">
              {link}
            </a>
          </div>
          <div className="flex gap-sm items-start mb-2xl lt-sm:mb-xs">
            <h6 className="text-sm w-3rem shrink-0">GitHub</h6>
            <a href={github} target="_blank" className="text-sm lt-sm:text-xs break-all">
              {github}
            </a>
          </div>
        </h3>
        <dl className="lt-sm:opacity-100 group-hover:opacity-100 opacity-0 flex flex-col gap-xs text-sm lt-sm:text-xs mt-sm">
          {data.map(({ dt, dd }, i) => (
            <Detail key={i} dt={dt} dd={dd} />
          ))}
        </dl>
      </div>
    </div>
  );
};

const Detail = ({ dt, dd }: DetailDataType) => {
  return (
    <div className="flex justify-between">
      <dt className="font-bold">{dt}</dt>
      <dd className="text-right">
        {dd.map((content, i) => (
          <p key={i}>{content}</p>
        ))}
      </dd>
    </div>
  );
};

export default Frame;
