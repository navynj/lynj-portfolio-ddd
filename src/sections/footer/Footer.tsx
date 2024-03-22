import Github from '../../assets/svg/github.svg?react';
import Mail from '../../assets/svg/mail.svg?react';
import Phone from '../../assets/svg/phone.svg?react';
import Twitter from '../../assets/svg/twitter.svg?react';

const data = [
  {
    icon: <Mail />,
    link: 'mailto:navyoonj@gmail.com',
    description: 'navyoonj@gmail.com',
  },
  {
    icon: <Phone />,
    link: 'tel:_82-10-6774-8109',
    description: '+82 10-6774-8109',
  },
  {
    icon: <Github />,
    link: 'https://github.com/navynj',
    description: '@navynj',
  },
  {
    icon: <Twitter />,
    link: 'https://twitter.com/wateritten',
    description: '@wateritten',
  },
];

const Footer = () => {
  return (
    <footer className="mb-80 lt-sm:mb-40 w-100% flex justify-end">
      <ul className="w-16rem lt-sm:w-11rem">
        {data.map((item, i) => (
          <li key={i} className="mb-4">
            <a
              href={item.link}
              target="_blank"
              className="text-black no-underline w-100% flex justify-between items-center"
            >
              <div className="w-1.5rem h-1.25rem lt-sm:w-0.875rem lt-sm:h-0.9125rem">
                {item.icon}
              </div>
              <p className="lt-sm:text-sm">{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
