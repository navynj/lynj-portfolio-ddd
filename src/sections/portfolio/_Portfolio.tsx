import { ClassNameInterface } from '../../types/className';
import Frame from './Frame';

const Portfolio = ({ className }: ClassNameInterface) => {
  return (
    <section className={className}>
      <h1 className={'text-4xl lt-sm:text-2xl font-extrabold mb-8'}>Portfolio</h1>
      <div className="flex-col space-y-9xl lt-sm:gap-7xl w-100% justify-between lt-sm:h-100% lt-sm:hover:h-100% ">
        <Frame
          category="Project"
          title="DURING"
          link="https://during.money"
          github="https://github.com/during-budget/during-web"
          bg="/image/during.gif"
          stack={['React', 'React Native', 'Redux Toolkit']}
          overview={[
            '예산 관리 시각화에 중점을 둔 가계부 서비스입니다.',
            '간결한 UI와 호감을 주는 그래픽/애니메이션에 집중하였습니다.',
            '모바일 우선 디자인 웹으로 기본 개발을 진행하였으며, 앱개발은 웹뷰를 활용하였습니다.',
            '기획/디자인/프론트엔드 개발을 담당했으며, 서버 개발자 1명과 협업하였습니다.',
            '현재 웹 배포 및 앱 개발 완료되었으며, 마켓 출시 전 서버 리팩토링 작업 진행 중에 있습니다.',
          ]}
          description={[
            {
              id: 'skin',
              title: '동물 모양 스킨이 적용된 링 차트 UI 및 애니메이션 구현',
              content: (
                <>
                  <p>
                    호감을 주는 인상적인 비주얼 요소를 적용하기 위해 원형 링 차트의 그래프
                    끝부분에 동물모양 스킨을 입히는 UI를 디자인하고 구현했습니다.
                  </p>
                  <img
                    className="w-xs"
                    src="/image/rotating.png"
                    alt="중앙 회전 중심점 스킨 이미지"
                  />
                  <p>
                    회전 중심점이 이미지 중앙에 오도록 스킨 이미지를 프레임 구석에
                    위치시켜, 중앙을 기준으로 회전 애니메이션을 적용했을 때 원형 링 차트를
                    따라 움직이도록 구성하였습니다.
                  </p>
                  <p>
                    애니메이션 타이밍 속성에 cubic-bezier를 적용하자 차트와 이미지의 회전
                    사이에 속도 차이가 생겨 스킨이 그래프 끝에서 떨어지는 문제를 딜레이
                    조정으로 해결하였습니다.
                  </p>
                  <img
                    id="ring-round"
                    className="w-xs"
                    src="/image/rounding.png"
                    alt="모서리 둥글리기 가림 이미지"
                  />
                  <p>
                    기존에는 svg 필터를 활용하여 그래프 끝부분 모서리를 둥글렸으나, 필터
                    적용이 애니메이션 버벅임 문제의 원인임을 파악했습니다. 애니메이션 성능
                    개선과 둥근 모서리 적용 두가지 모두를 실현하기 위해 모서리 가림
                    이미지를 덮는 방식을 새롭게 채택하였습니다. 해당 이미지가 스킨
                    이미지를 가리지 않도록 차트가 일정 비율 이상 차올랐을 때 가림 이미지의
                    opacity 값이 0이 되도록 처리하였습니다.
                  </p>
                </>
              ),
            },
            {
              title: '오버레이 애니메이션 최적화',
              content: (
                <>
                  <p>
                    애니메이션 성능 향상을 위해 브라우저의 UI 렌더링 순서를 학습하던 중
                    height 속성에 기반하여 오버레이 나타나기 애니메이션을 구현한 코드를
                    transform으로 바꾸어 최적화할 수 있다는 사실을 알게 되었습니다. layout
                    - paint - composite의 세 단계를 거쳐 렌더링되는 height 속성에 비해
                    transform은 composite 단계만을 거쳐 렌더링되어 렌더링 단계를
                    최대한으로 줄일 수 있으므로 transform을 활용하도록 코드를
                    수정했습니다.
                  </p>
                  <p>
                    해당 과정 중 조상 중 transform 속성이 있을 경우 position: fixed가
                    적용된 요소의 위치가 뷰포트 기준으로 작동하지 않는 문제를
                    발견하였습니다. 해당 경우에 한해서만 height 속성으로 오버레이 나타나기
                    애니메이션을 적용할 수 있도록 오버레이 컴포넌트의 props를 받아 조건에
                    따라 height 혹은 transform으로 처리하는 코드로 수정하였습니다.
                  </p>
                </>
              ),
            },
            {
              id: 'overlay',
              title: '사용자 피드백을 바탕으로 오버레이 닫기 경험 개선',
              content: (
                <>
                  <p>
                    개발이 어느 정도 진행된 이후 사용자를 직접 만나 실제 사용 과정을 보고
                    피드백을 수집하였습니다. 가장 어려웠던 요구사항은 오버레이 창을
                    뒤로가기 버튼으로 닫을 수 있게 해달라는 것이었습니다. 오버레이는
                    라우터 이동이 아닌 페이지 내 상태 변경에 기반하여 작동하기 때문에 해당
                    피드백을 반영하기가 까다로웠습니다. 그러나 중요한 사용자 경험 이슈라고
                    생각했고 이를 반드시 해결해야겠다고 생각했습니다.
                  </p>
                  <p>
                    해당 이슈는 오버레이를 열 때마다 현재 url에 해시를 붙여 이동시키는
                    것으로 해결하였습니다. 해시 변경은 페이지를 리로드하지 않지만 url
                    히스토리에 기록됩니다. 따라서 뒤로가기를 누르면 해시가 붙지 않은 이전
                    url로 이동되면서도 화면 깜빡임 및 상태 초기화 없이 오버레이를 닫을 수
                    있습니다. 오버레이가 열리고 닫히는 조건은 해당 오버레이 아이디로 된
                    해시의 유무로 설정하였습니다.
                  </p>
                  <p>
                    이후 해시가 있는 url에서 해시 없는 url로 이동할 경우 리로드가 일어나는
                    문제를 발견하여, 이동 시 항상 url에 #base라는 해시를 붙여 이동하도록
                    수정하였습니다.
                  </p>
                </>
              ),
            },
            {
              title: '결제 시스템 구현 (웹 결제 / 인앱 결제)',
              content: (
                <>
                  <p>
                    <strong>(웹 결제)</strong> 포트원을 통해 토스 페이먼츠 결제 시스템을
                    구현하였고, 결제 테스트 검증을 마쳤습니다.
                  </p>

                  <p>
                    <strong>(인앱결제)</strong> react-native-iap를 활용하여 인앱 결제
                    시스템을 구현하였고, 안드로이드 환경에서의 결제 테스트를 마쳤습니다.
                    웹뷰와 react native 간의 통신을 구현하여 결제 요청을 하도록
                    하였습니다.
                  </p>
                </>
              ),
            },
          ]}
        />
        <Frame
          category="Prototype"
          title="PLOT"
          link="https://plot-client.vercel.app"
          github="https://github.com/plot-timer/plot-client"
          bg="/image/plot.gif"
          stack={['React', 'React Native', 'Redux Toolkit']}
          overview={[
            '할 일을 등록하고, 스케줄링하고, 할 일 별로 타이머를 동작시킬 수 있는 타이머 플래너 앱으로, 뮤직 플레이어 컨셉의 UI를 구성하였습니다.',
            '기획/디자인/프론트엔드 개발을 담당하였으며, 프론트엔드 팀원 1명, 서버 팀원 2명과 협업하였습니다.',
            '프로젝트 진행 중 다른 일을 시작하게 되어 프로토타입 단계에서 진행이 중단되었습니다.',
          ]}
          description={[
            {
              id: 'time',
              title: '스케줄 관리 타임블록 UI 인터랙션 구현',
              content: (
                <>
                  <img
                    className="w-xs"
                    src="/image/block.png"
                    alt="중앙 회전 중심점 스킨 이미지"
                  />
                  <p>
                    스케줄 화면에서 분을 나타내는 구분선과 타임블록이 겹치도록 각각을
                    감싸는 div 요소에 absolute 속성을 적용하였습니다. 블록을 클릭하여 시간
                    지정/해제를 토글할 수 있도록 각 블록을 checkbox input으로
                    구성하였습니다.
                  </p>
                  <p id="time-round">
                    블록 토글 인터랙션 구현의 난이도를 높였던 것은 각 블록의 모서리를
                    둥글리는 작업이었습니다. 시작 시간과 종료 시간을 체크한 후 시작에
                    해당할 경우 좌측 모서리를, 끝에 해당할 경우 우측 모서리를, 첫번째 열에
                    해당할 경우 좌측 모서리를, 마지막 열에 해당할 경우 우측 모서리를
                    둥글리도록 조건을 세세하게 나누었습니다. 블록을 토글하였을 때에도 이
                    로직이 적용될 수 있도록 시간 기록 상태를 관리하였습니다.
                  </p>
                  <p>
                    스케줄 화면은 타임블록 체크/해제를 통해 기록할 수 있는 스케줄링 외에도
                    타이머로 측정된 히스토리를 표시해주는 타임트래킹 기능을 겸합니다. 현재
                    시간을 기준으로 위쪽은 히스토리 블록이, 아래쪽은 스케줄 블록이
                    표시됩니다. 기준 시간은 기본적으로는 현재 시간이지만, 슬라이더를
                    움직여 기준 시간을 조정할 수 있습니다. 이를 통해 슬라이더를 올려 현재
                    시간 이전에 스케줄링했던 현황을 볼 수 있으며, 슬라이더를 내려 계획
                    대비 실행 시간을 확인할 수 있습니다.
                  </p>
                </>
              ),
            },
            {
              title: '반응형 UI 구현',
              content: (
                <>
                  <p>
                    모바일에서 좌우 슬라이드를 통해 개별적으로 볼 수 있던 플레이어 화면과
                    플레이리스트 화면 두 가지를 PC에서는 한 화면 안에서 볼 수 있도록
                    반응형으로 구성하였습니다. 먼저 두 화면을 Main 컨테이너에 포함시키고,
                    Main 컨테이너의 너비를 200vw로 설정하였습니다. 각 화면 너비를 Main의
                    50%로 잡으면 한 화면이 100vw를 차지하게 되는데, Main 컨테이너의 left를
                    0으로 주면 좌측 화면이, right를 0으로 주면 우측 화면이 전체 뷰포트에
                    보여지게 됩니다. PC 화면일 경우 Main의 너비를 100vw로 주어 두 화면이
                    뷰포트 내에 모두 나타나게 하여 반응형 UI를 구성하였습니다.
                  </p>
                  <p>
                    추후 left, right를 조정하는 코드를 transform 속성을 이용한 코드로
                    수정하여 애니메이션 최적화를 진행할 예정입니다.
                  </p>
                </>
              ),
            },
            {
              title: '코드 리뷰 진행',
              content: (
                <>
                  <a
                    href="https://github.com/plot-timer/plot-client/pull/46"
                    target="_blank"
                  >
                    https://github.com/plot-timer/plot-client/pull/46
                  </a>
                  <p>
                    협업하는 프론트엔드 팀원과 위와 같이 매 PR마다 코드리뷰를
                    진행했습니다. 리뷰어의 입장에서 팀원의 코드를 읽고 피드백하는 경험을
                    쌓을 수 있었습니다.
                  </p>
                </>
              ),
            },
          ]}
        />
        <Frame
          category="Study"
          title="3D Bass Custom"
          link="https://3d-bass-custom.vercel.app"
          github="https://github.com/navynj/3d-bass-custom"
          bg="/image/bass.gif"
          stack={['React', 'R3F']}
          overview={[
            '베이스 기타 3D 모델의 바디, 넥, 픽가드, 헤드 등 각각의 파츠를 컬러링할 수 있는 커스텀 서비스입니다.',
            'R3F 학습을 위해 진행했던 간단한 프로젝트로, 예제를 참고하여 응용 구현하였습니다.',
          ]}
          description={[
            {
              title: '색상 선택 시 모델 크기가 작아졌다 커지는 애니메이션 적용',
              content: (
                <p>
                  예제에 없는 인터랙션이지만 선택 과정 경험의 다이나믹을 더하기 위해여
                  새롭게 추가하였습니다. @react-spring/three의 useSpring 훅을 활용하여
                  선택 상태에 따라 scale이 조정되도록 구현하였습니다.
                </p>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Portfolio;
