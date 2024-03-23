import { ClassNameInterface } from '../../types/className';
import { cn } from '../../utils/cn';

const Information = ({ className }: ClassNameInterface) => {
  return (
    <section className={cn('mb-8', className)}>
      <h1 className={'text-4xl lt-sm:text-2xl font-extrabold mb-8'}>Information</h1>
      <div className="flex flex-col gap-24">
        {/* 기술 */}
        <div className="flex gap-40 lt-sm:flex-col lt-sm:gap-4">
          <h3 className="text-2xl font-extrabold shrink-0">기술</h3>
          <div className="flex gap-20 lt-sm:flex-col lt-sm:gap-8">
            <div>
              <h5 className="mb-2 text-1rem font-extrabold">주로 활용</h5>
              <ul className="text-sm">
                <li>HTML, CSS, Javascript & Typescript</li>
                <li>React</li>
                <li>Recoil, Jotai</li>
                <li>TailwindCSS, Styled Component, Emotion</li>
                <li>GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-2 text-1rem font-extrabold">활용 경험 있음</h5>
              <ul className="text-sm">
                <li>React Native, Next.js</li>
                <li>Framer Motion, Three.js, R3F</li>
                <li>Redux Toolkit</li>
                <li>Python, Django, Flask</li>
                <li>AngularJS</li>
                <li>Blender, Rhino</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 경력 */}
        <div className="flex gap-40 lt-sm:flex-col lt-sm:gap-4">
          <h3 className="text-2xl font-extrabold shrink-0">경력</h3>
          <ul className="flex flex-col gap-10">
            <li>
              <p className="text-sm lt-sm:text-xs font-extrabold">2024. 3 ~</p>
              <h5 className="text-lg lt-sm:text-1rem font-extrabold mb-2">
                아티스트-팬 연결 플랫폼 쿠키독 서비스 웹 프론트엔드 개발 기여
              </h5>
              <ul className="pl-5 list-disc text-sm">
                <li>
                  <a href="https://studio.cookiedog.xyz" target="_blank">
                    아티스트 대시보드 웹페이지
                  </a>{' '}
                  신규 기능 추가 <strong>(React)</strong>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-sm lt-sm:text-xs font-extrabold">2023. 9 ~ 2023. 12</p>
              <h5 className="text-lg lt-sm:text-1rem font-extrabold mb-2">
                국립암센터 산학협력단 연구원
              </h5>
              <ul className="pl-5 list-disc text-sm">
                <li>
                  치과질환 인공지능 서비스 모델 구축 지원을 위한 분할 정복 생성 모델 기반
                  구강 이미지 합성 데이터 구축 프로젝트 참여
                </li>
                <li>
                  Visual Turing Test 웹애플리케이션 유지보수/기능 추가 및 운영 자동화
                  스크립트 작업 <strong>(Python, Django)</strong>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-sm lt-sm:text-xs font-extrabold">2021.6 ~ 2022. 3</p>
              <h5 className="text-lg lt-sm:text-1rem font-extrabold mb-2">
                (주) 모비젠 UI솔루션연구팀 인턴
              </h5>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  빅데이터 시각화 에디터{' '}
                  <a
                    href="http://www.mobigen.com/solution/IRIS-Studio.php"
                    target="_blank"
                  >
                    IRIS Studio
                  </a>{' '}
                  유지보수 및 신규 기능 개발 <strong>(AngularJS)</strong>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* 학력 */}
        <div className="flex gap-40 lt-sm:flex-col lt-sm:gap-4">
          <h3 className="text-2xl font-extrabold shrink-0">학력</h3>
          <ul className="flex flex-col lt-sm:gap-4">
            <li className="flex gap-20 mb-10 lt-sm:flex-col lt-sm:gap-4">
              <div>
                <p className="text-sm lt-sm:text-xs font-extrabold">2018. 3 ~ 2021. 8</p>
                <h4 className="text-lg lt-sm:text-1rem font-extrabold">
                  한양대학교 ERICA <br className="lt-sm:hidden" /> 디자인테크놀로지전공
                  <br /> 학사
                </h4>
              </div>
              <ul className="flex flex-col gap-8">
                <li>
                  <h5 className="text-0.875rem font-extrabold mb-2">
                    [ICT융합 캡스톤 디자인]
                  </h5>
                  <ul className="list-disc pl-5">
                    <li className="mb-2">
                      <h6 className="text-1rem lt-sm:text-0.875rem">
                        웹 애플리케이션 개발
                      </h6>
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          집중도 높은 영상 제작을 위한 영상 편집 웹 애플리케이션 개발
                          <br />
                          <strong>(Python, Flask, Redis)</strong>
                        </li>
                        <li>교내 캡스톤 경진대회 대상</li>
                      </ul>
                    </li>
                    <li className="mb-1">
                      <h6 className="text-1rem lt-sm:text-0.875rem">
                        한국 HCI학회 학술대회 논문 투고
                      </h6>
                      <ul className="list-disc pl-8 text-sm">
                        <li>⟪ 합성곱 신경망 기반 유튜브 동영상 섬네일 스타일 분석 ⟫</li>
                        <li>HCI KOREA 2021 학술대회 발표 논문집 등재</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5 className="text-0.875rem font-extrabold mb-2">[이수 과목]</h5>
                  <ul className="list-disc pl-5">
                    <li className="mb-1">
                      <h6 className="text-1rem lt-sm:text-0.875rem">컴퓨터 공학</h6>
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          프로그래밍기초(Python), 시스템프로그래밍기초(C),
                          프로그램설계방법론(JAVA)
                        </li>
                        <li>자료구조론, 컴퓨터알고리즘, 데이터베이스</li>
                        <li>전산통계학, 선형대수, 논리학</li>
                        <li>오픈소스SW, 피지컬컴퓨팅(C++), 기계학습, AI+X:머신러닝</li>
                      </ul>
                    </li>
                    <li className="mb-1">
                      <h6 className="text-1rem lt-sm:text-0.875rem">디자인</h6>
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          감성UI/UX, 인간-컴퓨터시스템설계, 인간공학과 실습, 공학과심리
                        </li>
                        <li>
                          디자인공학드로잉&2D/3D실습, 디자인공학소프트웨어실습(3D모델링)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="flex gap-20 lt-sm:flex-col lt-sm:gap-4">
              <div>
                <p className="text-sm lt-sm:text-xs font-extrabold">2015. 3 ~ 2018. 2</p>
                <h4 className="text-lg lt-sm:text-1rem font-extrabold">
                  고양국제고등학교 졸업
                </h4>
              </div>
              <ul className="list-disc pl-5">
                <li className="mb-2">
                  <h6 className="text-1rem lt-sm:text-0.875rem">동아리 활동</h6>
                  <ul className="list-disc pl-8 text-sm">
                    <li>
                      (2017) 학술동아리 IT'st 운영 - 급식 메뉴 안내 웹페이지 '식사의 민족'
                      개발
                      <br /> <strong>(HTML, CSS, JQuery)</strong>
                    </li>
                  </ul>
                </li>
                <li className="mb-1">
                  <h6 className="text-1rem lt-sm:text-0.875rem">봉사활동</h6>
                  <ul className="list-disc pl-8 text-sm">
                    <li>
                      (2017.8) 정발신성지역아동센터 코딩멘토링 <strong>(Python)</strong>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Information;
