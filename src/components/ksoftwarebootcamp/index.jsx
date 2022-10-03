import React from "react"
import { ImGoogle } from "react-icons/im"
import ContentWrapper from "../contentWrapper"
import * as Style from "./ksoftwarebootcamp.module.css"

const KSoftwareBootcamp = () => {
  return (
    <ContentWrapper>
      <div className={Style.top-navigator}>
        <div className={Style.nav-title}>K-Software<br/>Empowerment<br/>BootCamp</div>
        <div className={Style.menu}>수업설명</div>
        <div className={Style.menu}>교수진</div>
        <div className={Style.menu}>FAQ</div>
        <div className={Style.menu}>Contact</div>
      </div>
      <div className={Style.content-container}>
        <div className={Style.top=content}>
          <div className={Style.title}>K-Software<br/>Empowerment<br/>BootCamp</div>
          <img src="../../../assets/prgintro.png"/>
          <h5>인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 &lt;K-Software BootCamp 2022&gt;를 시작합니다</h5>
        </div>
        <div className={Style.program-intro}>
          <div className={Style.first-title}>프로그램 소개</div>
          <h5>본 프로그램은 총 640시간으로 구성되어 있으며 280시간은 대학 연합으로 프로그래밍, SW 기술에 대한 교육으로 360시간은 참여기업 주관의 프로젝트 심화 과목으로 구성되어 있습니다.</h5>
          <div className={Style.second-title}>대학 연합 개설 교과목</div>
          <h5>3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어 중심대학)에서 개설하는 실습 중심의 강좌를 통해, 프로그래밍 기술과 SW전반에 대한 지식을 쌓을 수 있습니다.<br/><br/>대학 연합에서 주관하는 SW 강좌는 크게 프로그래밍(기초),SW이론교육(기초) , SW기술역량교육(심화) 으로 총 280시간으로 구성되어 있으며 하부 강좌들이 존재합니다.</h5>
          <div className={Style.third-title}>프로그래밍 기초</div>
          <h5>- SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다.</h5>
          <h5>- 프로그래밍-기초 커리큘럼을 이수하기 위해서는 최소 2과목의 선택과목을 수강하여야 합니다.</h5>
          <img src="../../../assets/basicProgramming.png"/>
          {/* 이제 SW이론 교육 기초 */}
          <div className={Style.third-title}>SW이론교육(기초)</div>
          <h5>- SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다.</h5>
          <h5>- SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.</h5>
          <h5>- SW이론교육-기초 커리큘럼을 이수하기 위해서는 2가지 필수 과목을 수강하여야 합니다.</h5>
          <img src="../../../assets/SWTheory.png"/>
          {/* 이제 SW기술역량 교육(심화) */}
          <div className={Style.third-title}>SW기술역량 교육(심화)</div>
          <h5>- SW 개발은 여러가지 분야가 존재합니다. 현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다.</h5>
          <h5>- SW 기술역량 교육-심화 커리큘럼을 이수하기 위해서는 필수과목 2개와 최소 1과목의 선택과목을 수강하여야 합니다.</h5>
          <img src="../../../assets/SWTechAbility.png"/>
        </div>
        {/* prgintro 끝  */}

        <div className={Style.company-project}>
          <div className={Style.first-title}>참여기업 프로젝트</div>
          <h5>27개 참여기업(SK CC, Kakao, Nexon 등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업 역량을 갖춘 SW 개발자로 거듭날 수 있습니다. <br/><br/>
          프로젝트는 크게  `**스마트 팩토리**` `**헬스케어**` `**게임**` 로 구성되어 있으며 각 주제 아래 세부 주제들의 프로젝트가 존재합니다.<br/><br/>
          팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며, 각 프로젝트당 60~90시간 정도가 소요됩니다. </h5>
          <div className={Style.second-title}>스마트 팩토리</div>
          <h5>- 제조 산업을 주제로 SW개발을 수행하는 프로젝트로 **하드웨어 기반**, **소프트웨어 기반**, **디지털 트윈 기반** 의 프로젝트를 경험하고 현업 기술을 기를 수 있습니다.</h5>
          <h5>- 스마트 팩토리 분야에서 개설되는 프로젝트는 아래 표와 같습니다.</h5>
          <img src="../../../assets/smartFactory.png"></img>
          <div className={Style.second-title}>헬스케어</div>
          <h5>- 의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수 있으며, **임베디드 기반**, **클라우드 기반** , **모바일 기반 개인 서비스** 등의 프로젝트를 경험할 수 있습니다.</h5>
          <h5>- 헬스케어 분야에서 개설되는 프로젝트는 아래 표와 같습니다.</h5>
          <img src="../../../assets/healthCare.png"></img>
          <div className={Style.second-title}>게임</div>
          <h5>- 게임산업에서 많이 사용되는 프로그램의 실습과 사용을 통해 현업 역량을 양성할 수 있으며, **슈팅 게임**, **아케이드 게임**, **RPG 게임**, **퍼즐 게임**, **플랫폼** 등의 프로젝트를 경험할 수 있습니다.</h5>
          <h5>- 게임 분야에서 개설되는 프로젝트는 아래 표와 같습니다.</h5>
          <img src="../../../assets/game.png"></img>
        </div>
        <div className={Style.schedule-box}>
          <div className={Style.first-title}>교육일정</div>
          <h5>7~8월(주 5일) 280시간 →오프라인</h5>
          <h5>9월~ 12월 80시간 → 온라인 및 주말 (변동있음)</h5>
          <h5>12월~2월(겨울방학 기업교육) → 무료셔틀</h5>
          <h4>교육 시작일</h4>
          <h5>2022년 7월 15일</h5>
          <img src="../../../assets/schedule.png"/>
        </div>
        <div className={Style.faculty}>
          <div className={Style.faculty-title}>열정과 진심으로</div>
          <h5>교육에 대한 열정과 학생들에 대한 진심으로<br/> 
          더 나은 &lt;K-Software BootCamp 2022&gt;를 만들어 갑니다</h5>
          <div className={Style.first-title}>이서진 교수님</div>
          
        </div>
        <div className={Style.FAQ}>
          <div className={Style.FAQ-title}>FAQ</div>
          <h5>자주 유입되는 문의사항은 FAQ에 업데이트 될 예정입니다.</h5>
          <div className={Style.question}>Q1. K-Software BootCamp는 누구를 위한 대상인가요?</div>
          <div className={Style.answer}>A1. 인하대학교의 K-Software BootCamp는 비전공의 학생에 중점을 맞춘 커리큘럼으로써 IT관심이 있는 학생(복수,부전공, 연계,마이크로 전공 포함)이라면 누구나 지원이 가능하며 비전공자 우대합니다.</div>
          <div className={Style.question}>Q2. 신청서를 잘못 제출하였습니다. 어떻게 해야 하나요?</div>
          <div className={Style.answer}>A2. 마지막에 접수된 신청서를 최종 신청서로 구별할 예정입니다.</div>
          <div className={Style.question}>Q3. 일정표(교육기간) , 교육과목, 장소 등이 궁금합니다.</div>
          <div className={Style.answer}>A3. 현재 교육장소는 인하대학교내의 하이테크혹은 60주년 기념관 건물을 사용예정중에 있습니다. 또한, 교육과목은 기업과의 연계를 통해 협의하에 있습니다.</div>
        </div>

        <div className={Style.contact}>
          <div className={Style.contact-title}>Contact</div>
          <h5>기타 문의 사항이 있다면 연락 또는 방문 부탁드립니다.</h5>
          <div className={Style.first-title}>이메일</div>
          <h5>x21999@inha.ac.kr</h5>
          <div className={Style.first-title}>전화번호</div>
          <h5>032-860-9504</h5>
          <div className={Style.first-title}>오시는 길</div>
          <h5>인천광역시 남구 용현동 인하로 100</h5>
          <h5>60주년 기념관 1406호</h5>
          <img src="../../../assets/map4here.png"/>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default KSoftwareBootcamp
