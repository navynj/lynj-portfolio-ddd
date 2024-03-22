import { useEffect, useRef, useState } from 'react';
import { ClassNameInterface } from '../../types/className';
import Description from './Description';
import classes from './Description.module.css';
import Whale from './Whale';

export type WhaleStateType = 'define' | 'design' | 'develop' | 'idle';

const Descriptions: { subject: WhaleStateType; content: string }[] = [
  { subject: 'define', content: '의미의 아름다움' },
  { subject: 'design', content: '시각적 아름다움' },
  { subject: 'develop', content: '기능의 아름다움' },
];

const Hero = ({ className }: ClassNameInterface) => {
  const [whaleState, setWhaleState] = useState<WhaleStateType>('define');
  const repeater = useRef<number | undefined>();

  useEffect(() => {
    if (whaleState === 'develop') {
      clearInterval(repeater.current);
    }
  }, [whaleState]);

  useEffect(() => {
    repeater.current = setInterval(() => {
      setWhaleState((state) => {
        switch (state) {
          case 'define':
            return 'design';
          case 'design':
            return 'develop';
          case 'develop':
            return 'define';
          default:
            return 'idle';
        }
      });
    }, 1500);
    return () => clearInterval(repeater.current);
  }, []);

  return (
    <section className={className}>
      {/* Title */}
      <h1 className="font-extrabold">
        <span className="text-3xl lt-sm:text-xl">아름다움을 추구하는 개발자,</span>
        <br />
        <span className="text-4xl lt-sm:text-3xl">이윤지입니다.</span>
      </h1>
      {/* Whale graphic */}
      <div className="lt-sm:text-xs">
        <Whale state={whaleState} />
      </div>
      {/* Description */}
      <div className="flex justify-end">
        <div className="flex lt-sm:flex-col gap-5xl">
          {Descriptions.map(({ subject, content }, i) => (
            <button
              key={i}
              className={
                subject === whaleState ? `${classes.active} ${classes[whaleState]}` : ''
              }
              onClick={() => {
                setWhaleState(subject);
              }}
            >
              <Description
                key={i}
                subject={subject.toUpperCase()}
                content={content}
                isActive={subject === whaleState}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
