import { css, keyframes } from '@emotion/react';
import { ClassNameInterface } from '../../types/className';
import { cn } from '../../utils/cn';
import classes from './Whale.module.css';
import { WhaleStateType } from './_Hero';

export interface WhaleProps {
  state: WhaleStateType;
}

const sketch = keyframes`
  0% {
    box-shadow: 0 0 0 0px #313338 inset;
  }
  10% {
    box-shadow: 0 0 0 4px #313338 inset;
  }
  60% {
    box-shadow: 0 0 0 4px #313338 inset;
  }
  70% {
    box-shadow: 0 0 0 0px #313338 inset;
  }
  100% {
    box-shadow: 0 0 0 0px #313338 inset;
  }
`;

const paint = keyframes`
  0% {
    transform: translateY(100%);
  }
  10% {
    transform: scale(2);
  }
  60% {
    transform: scale(2);
  }
  80% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

interface WhlaePartsProps extends ClassNameInterface {
  delay: number;
  state: WhaleStateType;
}

const WhaleParts = ({ className, delay, state }: WhlaePartsProps) => {
  const strokeStyle =
    state === 'define'
      ? css({
          animation: `3s ${sketch} ${delay}s cubic-bezier(.23,.58,.16,.98) infinite`,
        })
      : '';
  const bgStyle =
    state === 'design'
      ? css({
          animation: `3s ${paint} ${delay}s cubic-bezier(.23,.58,.16,.98) infinite`,
        })
      : '';

  return (
    <div className={`${classes.parts} ${className}`}>
      <div className={`${classes.stroke}`} css={strokeStyle} />
      <div className={`${classes.bg}`} css={bgStyle} />
    </div>
  );
};

const Whale = ({ state }: WhaleProps) => {
  return (
    <div className={cn(classes.container, 'lt-sm:pb-14')}>
      <div className={`${classes.whale} ${classes[state]}`}>
        <div className={`${classes.finContainer}`}>
          <WhaleParts
            className={`${classes.fin} ${classes.backFin}`}
            delay={0.2}
            state={state}
          />
        </div>
        <div className={classes.bodyContainer}>
          <WhaleParts
            className={`${classes.body} ${classes.backBody}`}
            delay={0.5}
            state={state}
          />
          <WhaleParts
            className={`${classes.body} ${classes.frontBody}`}
            delay={0.7}
            state={state}
          />
        </div>
        <div className={`${classes.finContainer}`}>
          <WhaleParts
            className={`${classes.fin} ${classes.frontFin}`}
            delay={0.4}
            state={state}
          />
        </div>
        <div className={`${classes.tailContainer}`}>
          <WhaleParts
            className={`${classes.tail} ${classes.backTail}`}
            delay={0.3}
            state={state}
          />
          <WhaleParts
            className={`${classes.tail} ${classes.frontTail}`}
            delay={0.6}
            state={state}
          />
        </div>
      </div>
    </div>
  );
};

export default Whale;
