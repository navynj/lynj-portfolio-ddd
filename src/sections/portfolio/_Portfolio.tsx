import { ClassNameInterface } from '../../types/className';
import Frame from './Frame';

const Portfolio = ({ className }: ClassNameInterface) => {
  return (
    <section className={className}>
      <h1 className={'text-4xl lt-sm:text-2xl font-extrabold mb-8'}>Portfolio</h1>
      <div className="flex lt-sm:flex-col gap-sm lt-sm:gap-7xl w-100% justify-between lt-sm:h-100% lt-sm:hover:h-100% ">
        <Frame
          category="Project"
          title="DURING"
          link="https://during.money"
          github="https://github.com/during-budget/during-web"
          bgPaused="/image/during.png"
          bgRunning="/image/during.gif"
          data={[
            { dt: '개요', dd: ['예산 관리 시각화 가계부 서비스'] },
            { dt: '담당', dd: ['기획 / 디자인 / FE 개발'] },
            { dt: '기술', dd: ['React / React-Native'] },
            {
              dt: '현황',
              dd: ['주요 기능 개발 완료', '출시 전 서버 리팩토링 작업 진행중'],
            },
          ]}
        ></Frame>
        <Frame
          category="Prototype"
          title="PLOT"
          link="https://plot-client.vercel.app"
          github="https://github.com/plot-timer/plot-client"
          bgPaused="/image/plot.png"
          bgRunning="/image/plot.gif"
          data={[
            { dt: '개요', dd: ['타이머 및 스케줄링 서비스'] },
            { dt: '담당', dd: ['기획 / 디자인 / FE 개발'] },
            { dt: '기술', dd: ['React / Framer Motion'] },
            {
              dt: '현황',
              dd: ['UI 인터랙션 프로토타입 제작'],
            },
          ]}
        ></Frame>
        <Frame
          category="Study"
          title="3D Bass Custom"
          link="https://3d-bass-custom.vercel.app"
          github="https://github.com/navynj/3d-bass-custom"
          bgPaused="/image/bass.png"
          bgRunning="/image/bass.gif"
          data={[
            { dt: '개요', dd: ['3D 베이스 커스텀 인터랙션 서비스'] },
            { dt: '기술', dd: ['React / R3F'] },
            {
              dt: '참고',
              dd: [
                <>
                  <a href="https://codesandbox.io/p/sandbox/shoe-configurator-qxjoj">
                    예제
                  </a>
                  {' 참고 후 응용 구현'}
                </>,
              ],
            },
          ]}
        ></Frame>
      </div>
    </section>
  );
};

export default Portfolio;
