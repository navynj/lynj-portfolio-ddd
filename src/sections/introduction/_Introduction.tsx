import React from 'react';
import Paragraph from './Paragraph';

const Introduction = () => {
  return (
    <section className="flex flex-col space-y-8xl max-w-3xl mx-auto">
      <Paragraph title="도전적인 UI 개발을 즐깁니다.">
        <p>
          일반적인 구조의 정적인 UI가 아닌 난이도 있는 구성의 독창적인
          UI/인터랙션/애니메이션이더라도, 개발 난이도를 고려하여 기획을 재조정하는 것이
          아니라 그대로 개발에 도전합니다.
        </p>
        <p>
          개인 프로젝트에서 난이도 있는 UI를 직접 기획하였으며, 개발 작업까지 실현해내어
          본인의 기획에 책임을 졌습니다. 대표적인 도전으로는 가계부 프로젝트에서의{' '}
          <a href="#" target="_blank">
            ‘동물 스킨을 입힌 링 모양 차트 애니메이션'
          </a>
          과 타이머 플래너 프로젝트에서의{' '}
          <a href="#" target="_blank">
            ‘시간 슬라이드를 통해 계획과 실행을 비교할 수 있는 타임블록 토글 테이블'
          </a>
          이 있습니다.
        </p>
      </Paragraph>
      <Paragraph title="사용자 경험을 최우선의 가치에 둡니다.">
        <p>
          학부 과정 중 ‘감성 UI/UX’, ‘인간공학과 실습', ‘인간-컴퓨터 시스템 설계', ‘공학과
          심리' 등의 과목을 통해 UX의 중요성을 배울 수 있었고 이를 위해 어떤 부분들을
          고려해야하는지 공부하였습니다.
        </p>
        <p>
          서비스의 최종 목적지는 사용자입니다. 서비스의 가치는 사용자에게 어떤 경험을
          제공하느냐에 좌우되며, 탁월한 서비스는 만족스럽고 매끄러운 사용자 경험을
          제공합니다. 개발에 있어서 최우선적으로 고려되어야할 것은 바로 이 사용자
          경험입니다.
        </p>
        <p>
          개발 난이도가 있음에도 불구하고 사용자 경험을 위해 방안을 모색하고 실현해냈던
          경험으로는{' '}
          <a href="#" target="_blank">
            ‘오버레이 닫기 경험 개선 과정'
          </a>
          이 있습니다.
        </p>
      </Paragraph>
      <Paragraph title="1px을 중요하게 생각합니다.">
        <p>
          디자인은 부수적인 장식이 아닙니다. 작은 디테일은 희생해도 되는 요소가 아닙니다.
          서비스의 인상을 결정하고, 호감과 만족감을 전달하는 중요한 부분입니다.
        </p>
        <p>
          디테일을 포기하지 않았던 경험으로는 모서리 둥글리기 구현이 있습니다. 둥근
          모서리는 인지 부하를 덜어주며, 안정감을 전달합니다. 개인 프로젝트 중 개발에
          고려할 것이 많고 실현하기 어려웠음에도{' '}
          <a href="#" target="_blank">
            ‘링 차트의 시작점을 둥글리는 처리’
          </a>
          를 하였으며,{' '}
          <a href="#" target="_blank">
            ‘조건 상세를 통한 토글되는 각각의 블록 모서리 둥글리기 작업'
          </a>
          을 해냈습니다.
        </p>
      </Paragraph>
      <Paragraph title="체계의 중요성에 집중합니다.">
        <p>
          개인 프로젝트를 진행할 때 가계부, 타이머 및 플래너 서비스를 주제로 잡았던 이유는
          ‘체계를 갖추는 것’에 큰 관심을 두고 있었기 때문입니다. 삶을 관리하는 생산성
          도구를 개발하는 것이 목표였습니다.
        </p>
        <p>
          체계를 중요시 여기는 것은 프로젝트의 목표 뿐 아니라 진행 과정 중에서도 영향을
          미쳤습니다. 모든 작업을 GitHub의 이슈로 관리하고, 이슈에 해당하는 브랜치를
          생성하여 작업을 진행하였으며 각 이슈는 GitHub의 프로젝트를 통해 진행 상태와
          일정을 관리하였습니다.
        </p>
      </Paragraph>
    </section>
  );
};

export default Introduction;