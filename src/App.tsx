import { useRef } from 'react';
import Footer from './sections/footer/Footer';
import Hero from './sections/hero/_Hero';
import Information from './sections/information/_Information';
import Nav from './sections/nav/Nav';
import Portfolio from './sections/portfolio/_Portfolio';
import './styles/global.css';

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const handleScrollTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={topRef} className="absolute top-0" />
      <Nav />
      <div className="max-w-240 mx-auto px-2rem">
        <main>
          <Hero className="box-border mt-40 mb-80 lt-sm:mt-2 lt-sm:mb-48" />
          <Portfolio className="mb-40 lt-sm:mb-48" />
          <Information className="mb-80 lt-sm:mb-48" />
        </main>
        <Footer />
      </div>
      <button
        className="font-extrabold text-xl lt-sm:text-1rem fixed bottom-5rem right-5rem lt-sm:bottom-2rem lt-sm:right-2rem"
        onClick={() => {
          handleScrollTop();
        }}
      >
        ↑TOP
      </button>
    </>
  );
}

export default App;
