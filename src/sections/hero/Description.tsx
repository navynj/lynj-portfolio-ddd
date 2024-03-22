import { cn } from '../../utils/cn';
import classes from './Description.module.css';

interface DescriptionProps {
  subject: string;
  content: string;
  isActive: boolean;
}

const Description = ({ subject, content, isActive }: DescriptionProps) => {
  return (
    <div className={cn('flex flex-col items-start', classes.description)}>
      <h6 className="text-lg lt-sm:text-1rem font-extrabold tracking-tighter leading-100%">
        {isActive ? subject.slice(1) : subject}
      </h6>
      <p className="lt-sm:text-xs font-bold tracking-tighter">{content}</p>
      <div className={classes.D} />
    </div>
  );
};

export default Description;
