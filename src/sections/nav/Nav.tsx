import Whale from '../hero/Whale';

const Nav = () => {
  return (
    <nav className="flex items-center box-border h-8rem px-4rem lt-sm:px-2rem text-0.125rem sticky top-0 lt-sm:top-unset">
      <a href="/">
        <Whale state="idle" />
      </a>
    </nav>
  );
};

export default Nav;
