import React from "react"
import { ImGoogle } from "react-icons/im"
import ContentWrapper from "../contentWrapper"
import * as Style from "./ksoftwarebootcamp.module.css"
import { StaticImage } from "gatsby-plugin-image"

const KSoftwareBootcamp = () => {
  return (
    <ContentWrapper>
      <div className={Style.top_navigator}>
        <div className={Style.nav_title}>K-Software<br/>Empowerment<br/>BootCamp</div>
        <div className={Style.menu}>수업설명</div>
        <div className={Style.menu}>교수진</div>
        <div className={Style.menu}>FAQ</div>
        <div className={Style.menu}>Contact</div>
      </div>


      <div className={Style.content_container}>
        <div className={Style.top_content}>
          <div className={Style.title}>K-Software<br/>Empowerment<br/>BootCamp</div>
          <h5 className={Style.first_h5}>인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 &lt;K-Software BootCamp 2022&gt;를 시작합니다</h5>
        </div>

        <div className={Style.program_intro}>
          <div className={Style.first_title}>프로그램 소개</div>
          <StaticImage className={Style.prgintro_img} src="../../assets/images/prgintro.png"></StaticImage>
          <h5>본 프로그램은 총 640시간으로 구성되어 있으며 280시간은 대학 연합으로 프로그래밍, SW 기술에 대한 교육으로 360시간은 참여기업 주관의 프로젝트 심화 과목으로 구성되어 있습니다.</h5>
          <div className={Style.second_title}>대학 연합 개설 교과목</div>
          <h5>3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어 중심대학)에서 개설하는 실습 중심의 강좌를 통해, 프로그래밍 기술과 SW전반에 대한 지식을 쌓을 수 있습니다.<br/><br/>대학 연합에서 주관하는 SW 강좌는 크게 프로그래밍(기초),SW이론교육(기초) , SW기술역량교육(심화) 으로 총 280시간으로 구성되어 있으며 하부 강좌들이 존재합니다.</h5>
          <div className={Style.third_title}>프로그래밍 기초</div>
          <h5 className={Style.h5_before_img}>- SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다.<br/><br/>
          - 프로그래밍-기초 커리큘럼을 이수하기 위해서는 최소 2과목의 선택과목을 수강하여야 합니다.</h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/basicProgramming.png"></StaticImage>
          {/* 이제 SW이론 교육 기초 */}
          <div className={Style.third_title}>SW이론교육(기초)</div>
          <h5 className={Style.h5_before_img}>- SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다.<br/><br/>
          - SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.<br/><br/>
          - SW이론교육-기초 커리큘럼을 이수하기 위해서는 2가지 필수 과목을 수강하여야 합니다.</h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/SWTheory.png"></StaticImage>
          {/* 이제 SW기술역량 교육(심화) */}
          <div className={Style.third_title}>SW기술역량 교육(심화)</div>
          <h5 className={Style.h5_before_img}>- SW 개발은 여러가지 분야가 존재합니다. 현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다.<br/><br/>
          - SW 기술역량 교육-심화 커리큘럼을 이수하기 위해서는 필수과목 2개와 최소 1과목의 선택과목을 수강하여야 합니다.</h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/SWTechAbility.png"></StaticImage>
        </div>
        {/* prgintro 끝  */}

        <div className={Style.company_project}>
          <div className={Style.first_title}>참여기업 프로젝트</div>
          <h5 className={Style.h5_before_title}>27개 참여기업(SK CC, Kakao, Nexon 등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업 역량을 갖춘 SW 개발자로 거듭날 수 있습니다. <br/><br/>
          프로젝트는 크게  `스마트 팩토리` `헬스케어` `게임` 로 구성되어 있으며 각 주제 아래 세부 주제들의 프로젝트가 존재합니다.<br/><br/>
          팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며, 각 프로젝트당 60~90시간 정도가 소요됩니다. </h5>
          <div className={Style.third_title}>스마트 팩토리</div>
          <h5 className={Style.h5_before_img}>- 제조 산업을 주제로 SW개발을 수행하는 프로젝트로 하드웨어 기반, 소프트웨어 기반, 디지털 트윈 기반의 프로젝트를 경험하고 현업 기술을 기를 수 있습니다.<br/><br/>
          - 스마트 팩토리 분야에서 개설되는 프로젝트는 아래 표와 같습니다.</h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/smartFactory.png"></StaticImage>
          <div className={Style.third_title}>헬스케어</div>
          <h5 className={Style.h5_before_img}>- 의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수 있으며, 임베디드 기반, 클라우드 기반 , 모바일 기반 개인 서비스 등의 프로젝트를 경험할 수 있습니다.<br/><br/>
          - 헬스케어 분야에서 개설되는 프로젝트는 아래 표와 같습니다.</h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/healthCare.png"></StaticImage>
          <div className={Style.third_title}>게임</div>
          <h5 className={Style.h5_before_img}>- 게임산업에서 많이 사용되는 프로그램의 실습과 사용을 통해 현업 역량을 양성할 수 있으며, 슈팅 게임, 아케이드 게임, RPG 게임, 퍼즐 게임, 플랫폼 등의 프로젝트를 경험할 수 있습니다.<br/><br/>
          - 게임 분야에서 개설되는 프로젝트는 아래 표와 같습니다.</h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/game.png"></StaticImage>
        </div>

        <div className={Style.schedule_box}>
          <div className={Style.first_title}>교육일정</div>
          <h5 className={Style.schedule_h5}>7~8월(주 5일) 280시간 →오프라인<br/><br/>
          9월~ 12월 80시간 → 온라인 및 주말 (변동있음)<br/><br/>
          12월~2월(겨울방학 기업교육) → 무료셔틀<br/><br/><br/><br/>
          교육 시작일: 2022년 7월 15일
          </h5>
          <StaticImage className={Style.prg_img} src="../../assets/images/schedule.png"></StaticImage>
        </div>

        <div className={Style.faculty}>
          <div className={Style.faculty_title}>열정과 진심으로</div>
          <h5 className={Style.faculty_subtitle}>교육에 대한 열정과 학생들에 대한 진심으로<br/> 
          더 나은 &lt;K-Software BootCamp 2022&gt;를 만들어 갑니다</h5>
          <StaticImage className={Style.professors_img} src="../../assets/images/professors.png"></StaticImage>

          <div className={Style.first_title}>권장우</div>
          <div className={Style.faculty_box}>
            <StaticImage className={Style.faculty_img} src="../../assets/images/kjw2.png"></StaticImage>
            <div className={Style.faculty_description}>
              <div className={Style.faculty_pr}>교육생들의 꿈을 현실로</div>
              <div className={Style.faculty_info}>Career<br/>
              1996~1998특허청 사무관<br/>
              1998~2009동명대학교 부교수<br/>
              2005~2006정보통신연구진흥원 전문위원<br/>
              2006~2009정보통신연구진흥원 인력양성단장<br/>
              2009~2012정보통신산업진흥원 인재양성단장<br/>
              2012~인하대학교 교수<br/>
              2022~인하대학교 sw중심대학사업단 단장</div>
            </div>
          </div>



          <div className={Style.first_title}>이선우</div>
          <div className={Style.faculty_box}>
            <StaticImage className={Style.faculty_img} src="../../assets/images/lsw2.png"></StaticImage>
            <div className={Style.faculty_description}>
              <div className={Style.faculty_pr}>부드러운 카리스마</div>
              <div className={Style.faculty_info}>담당과목: 빅데이터분석, 기계학습, 인공지능, 데이터베이스</div>
            </div>
          </div>

          <div className={Style.first_title}>김태간</div>
          <div className={Style.faculty_box}>
            <StaticImage className={Style.faculty_img} src="../../assets/images/ktg2.png"></StaticImage>
            <div className={Style.faculty_description}>
              <div className={Style.faculty_pr}>다정히 그리고 친절히</div>
              <div className={Style.faculty_info}>담당과목: c++, JAVA, react, 컴퓨터 네트워크, python</div>
            </div>
          </div>

          <div className={Style.first_title}>이다영</div>
          <div className={Style.faculty_box}>
            <StaticImage className={Style.faculty_img} src="../../assets/images/ldy2.png"></StaticImage>
            <div className={Style.faculty_description}>
              <div className={Style.faculty_pr}>더 나은 수업을 위해</div>
              <div className={Style.faculty_info}>담당과목: OS</div>
            </div>
          </div>
          <div className={Style.first_title}>수업참여멘토</div>
          <div className={Style.mentor_name}>김종구 (인하대학교 대학원 전기컴퓨터공학과)<br/>양호준 (인하대학교 대학원 전기컴퓨터공학과)<br/>이문형 (인하대학교 대학원 전기컴퓨터공학과)<br/>정회준 (인하대학교 대학원 전기컴퓨터공학과)<br/>최정무 (인하대학교 컴퓨터공학과)<br/>소찬균 (인하대학교 컴퓨터공학과)<br/>김시진 (인하대학교 컴퓨터공학과)</div>
      </div>
        
        <div className={Style.FAQ}>
          <div className={Style.contact_title}>FAQ</div>
          <h5 className={Style.contact_h5}>자주 유입되는 문의사항은 FAQ에 업데이트 될 예정입니다.</h5>
          <div className={Style.second_title}>Q1. K-Software BootCamp는 누구를 위한 대상인가요?</div>
          <div className={Style.contact_h5}>A1. 인하대학교의 K-Software BootCamp는 비전공의 학생에 중점을 맞춘 커리큘럼으로써 IT관심이 있는 학생(복수,부전공, 연계,마이크로 전공 포함)이라면 누구나 지원이 가능하며 비전공자 우대합니다.</div>
          <div className={Style.second_title}>Q2. 신청서를 잘못 제출하였습니다. 어떻게 해야 하나요?</div>
          <div className={Style.contact_h5}>A2. 마지막에 접수된 신청서를 최종 신청서로 구별할 예정입니다.</div>
          <div className={Style.second_title}>Q3. 일정표(교육기간) , 교육과목, 장소 등이 궁금합니다.</div>
          <div className={Style.FAQ_last_h5}>A3. 현재 교육장소는 인하대학교내의 하이테크혹은 60주년 기념관 건물을 사용예정중에 있습니다. 또한, 교육과목은 기업과의 연계를 통해 협의하에 있습니다.</div>
        </div>

        <div className={Style.contact}>
          <div className={Style.contact_title}>Contact</div>
          <h5 className={Style.contact_h5}>기타 문의 사항이 있다면 연락 또는 방문 부탁드립니다.</h5>
          <div className={Style.contact_second_title}>이메일</div>
          <h5 className={Style.contact_h5}>x21999@inha.ac.kr</h5>
          <div className={Style.contact_second_title}>전화번호</div>
          <h5 className={Style.contact_h5}>032-860-9504</h5>
          <div className={Style.contact_second_title}>오시는 길</div>
          <h5 className={Style.h5_before_img}>인천광역시 남구 용현동 인하로 100 (60주년 기념관 1406호)</h5>
          <StaticImage className={Style.map_img} src="../../assets/images/map4here.png"></StaticImage>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default KSoftwareBootcamp
