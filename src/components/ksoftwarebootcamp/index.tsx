import React from "react"
import ContentWrapper from "../contentWrapper"
import * as Style from "./ksoftwarebootcamp.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { MdStickyNote2 } from "react-icons/md"

const KSoftwareBootcamp = () => {
  return (
    <ContentWrapper>
      <div className={Style.content_container}>
        <div className={Style.top_content}>
          <div className={Style.title}>
            K-Software
            <br />
            Empowerment
            <br />
            BootCamp
          </div>
          <h5 className={Style.first_h5}>
            인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의
            프로젝트를 경험할 수 있는 &lt;K-Software BootCamp 2022&gt;를
            시작합니다
          </h5>
        </div>

        <section className={Style.program_intro} id="prgintro">
          <div className={Style.first_title}>프로그램 소개</div>
          <StaticImage
            className={Style.prgintro_img}
            src="../../assets/images/prgintro.png"
            alt="프로그램 소개"
          ></StaticImage>
          <h5 className={Style.first_h5}>
            본 프로그램은 총 640시간으로 구성되어 있으며 280시간은 대학 연합으로
            프로그래밍, SW 기술에 대한 교육으로 360시간은 참여기업 주관의
            프로젝트 심화 과목으로 구성되어 있습니다.
          </h5>
          <div className={Style.second_title}>대학 연합 개설 교과목</div>
          <h5>
            3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어
            중심대학)에서 개설하는 실습 중심의 강좌를 통해, 프로그래밍 기술과
            SW전반에 대한 지식을 쌓을 수 있습니다.
            <br />
            <br />
            대학 연합에서 주관하는 SW 강좌는 크게
            프로그래밍(기초), SW이론교육(기초) , SW기술역량교육(심화) 으로 총
            280시간으로 구성되어 있으며 하부 강좌들이 존재합니다.
          </h5>
          <div className={Style.third_title}>프로그래밍 기초</div>
          <h5 className={Style.h5_before_img}>
            - SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중
            가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다.
            <br />
            <br />- 프로그래밍-기초 커리큘럼을 이수하기 위해서는 최소 2과목의
            선택과목을 수강하여야 합니다.
          </h5>
          <StaticImage
            className={Style.prg_img}
            src="../../assets/images/basicProgramming.png"
            alt="프로그래밍 기초"
          ></StaticImage>
          {/* 이제 SW이론 교육 기초 */}
          <div className={Style.third_title}>SW이론교육(기초)</div>
          <h5 className={Style.h5_before_img}>
            - SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수
            있는 능력이 중요합니다.
            <br />
            <br />
            - SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고
            데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.
            <br />
            <br />- SW이론교육-기초 커리큘럼을 이수하기 위해서는 2가지 필수
            과목을 수강하여야 합니다.
          </h5>
          <StaticImage
            className={Style.prg_img}
            src="../../assets/images/SWTheory.png"
            alt="SW이론교육"
          ></StaticImage>
          {/* 이제 SW기술역량 교육(심화) */}
          <div className={Style.third_title}>SW기술역량 교육(심화)</div>
          <h5 className={Style.h5_before_img}>
            - SW 개발은 여러가지 분야가 존재합니다. 현업에서 사용할 수 있는
            기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및
            실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다.
            <br />
            <br />- SW 기술역량 교육-심화 커리큘럼을 이수하기 위해서는 필수과목
            2개와 최소 1과목의 선택과목을 수강하여야 합니다.
          </h5>
          <StaticImage
            className={Style.prg_img}
            src="../../assets/images/SWTechAbility.png"
            alt="SW기술역량 교육"
          ></StaticImage>
        </section>
        {/* prgintro 끝  */}

        <section className={Style.company_project} id="projects">
          <div className={Style.first_title}>참여기업 프로젝트</div>
          <h5 className={Style.h5_before_title}>
            7개 참여기업( SK, 미디어로그, 쿠도커뮤니케이션, 오비고, 인텔리빅스, 메가존, 파인원커뮤니케이션즈 )의 현업 멘토들과 함께 실제
            기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업 역량을
            갖춘 SW 개발자로 거듭날 수 있습니다. <br />
            <br />
            프로젝트는 크게 `스마트 팩토리` `헬스케어` 로 구성되어 있으며
            각 주제 아래 세부 주제들의 프로젝트가 존재합니다.
            <br />
            <br />팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며,
            각 프로젝트당 60~90시간 정도가 소요됩니다.{" "}
          </h5>
          <div className={Style.third_title}>스마트 팩토리</div>
          <h5 className={Style.h5_before_img}>
            - 제조 산업을 주제로 SW개발을 수행하는 프로젝트로 하드웨어 기반,
            소프트웨어 기반, 디지털 트윈 기반의 프로젝트를 경험하고 현업 기술을
            기를 수 있습니다.
            <br />
            <br />- 스마트 팩토리 분야에서 개설되는 프로젝트는 아래 표와
            같습니다.
          </h5>
          <StaticImage
            className={Style.prg_img}
            src="../../assets/images/smartFactory.png"
            alt="스마트 팩토리"
          ></StaticImage>
          <div className={Style.third_title}>헬스케어</div>
          <h5 className={Style.h5_before_img}>
            - 의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수
            있으며, 임베디드 기반, 클라우드 기반 , 모바일 기반 개인 서비스 등의
            프로젝트를 경험할 수 있습니다.
            <br />
            <br />- 헬스케어 분야에서 개설되는 프로젝트는 아래 표와 같습니다.
          </h5>
          <StaticImage
            className={Style.prg_img}
            src="../../assets/images/healthCare.png"
            alt="헬스케어"
          ></StaticImage>
        </section>

        <section className={Style.schedule_box} id="schedule">
          <div className={Style.first_title}>교육일정</div>
          <h5 className={Style.schedule_h5}>
            2023.01.12 ~ 2023.02.28, 2023.03.13 ~ 2023.06.02 → 기초 교육 (오프라인)
            <br />
            <br />
            2023.06.05 ~ 2023.06.30 → 이론/실습 교육 (오프라인)
            <br />
            <br />
            2023.07.03 ~ 2023.09.01 → 프로젝트 교육 (오프라인)
            <br />
            <br />
            <br />
            <br />
            교육 시작일: 2023년 1월 12일
          </h5>
        </section>

        <section className={Style.faculty} id="faculty">
          <div className={Style.faculty_title}>열정과 진심으로</div>
          <h5 className={Style.faculty_subtitle}>
            교육에 대한 열정과 학생들에 대한 진심으로
            <br />더 나은 &lt;K-Software BootCamp 2022&gt;를 만들어 갑니다
          </h5>
         
          <div className={Style.professor_table}>
            <div className={Style.first_title}>단장</div>
            <div className={Style.mentor_name}>
              <div className={Style.box}>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/kjw2.png" alt="권장우"></StaticImage>
                <span>권장우 (컴퓨터공학)<br/><br/>
                    1996~1998특허청 사무관
                    <br />
                    1998~2009동명대학교 부교수
                    <br />
                    2005~2006정보통신연구진흥원 전문위원
                    <br />
                    2006~2009정보통신연구진흥원 인력양성단장
                    <br />
                    2009~2012정보통신산업진흥원 인재양성단장
                    <br />
                    2012~인하대학교 교수
                    <br />
                    2022~인하대학교 sw중심대학사업단 단장
                </span>
              </div>
            </div>
            <div className={Style.first_title}>교수진</div>
            <div className={Style.mentor_name}>
              <div className={Style.box}>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/lsw2.png" alt="이선우"></StaticImage>
                <span>이선우 (컴퓨터공학)<br/><br/>
                  담당과목: 인공지능
                </span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div className={Style.box}>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/ktg2.png" alt="김태간"></StaticImage>
                <span>김태간 (컴퓨터공학)<br/><br/>
                  담당과목: 자료구조/알고리즘
                </span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div className={Style.box}>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/강성관.png" alt="강성관"></StaticImage>
                <span>강성관 (인하대학교 박사, 디지털십 연구소장)<br/><br/>
                  담당과목: 네트워크, 데이터베이스
                </span>
              </div>
            </div>
            <div>
            <div className={Style.first_title}>참여교수</div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/김학일.png" alt="김학일"></StaticImage>
                <span>김학일 (스마트모빌리티공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/이종식.png" alt="이종식"></StaticImage>
                <span>이종식 (컴퓨터공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/이기복.png" alt="이기복"></StaticImage>
                <span>이기복 (스마트모빌리티공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/김승환.png" alt="김승환"></StaticImage>
                <span>김승환 (데이터사이언스학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/유상봉.png" alt="유상봉"></StaticImage>
                <span>유상봉 (컴퓨터공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/류춘우.png" alt="류춘우"></StaticImage>
                <span>류춘우 (스마트모빌리티공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/김유성.png" alt="김유성"></StaticImage>
                <span>김유성 (인공지능공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/정진만.png" alt="정진만"></StaticImage>
                <span>정진만 (컴퓨터공학)</span>
              </div>
            </div>
            <div className={Style.mentor_name}>
              <div>
                <StaticImage className={Style.faculty_img_small} src="../../assets/images/박재형.png" alt="박재형"></StaticImage>
                <span>박재형 (정보통신공학)</span>
              </div>
            </div>
          </div>
          </div>
          
          <div className={Style.first_title}>수업참여멘토</div>
          <div className={Style.mentor_name}>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/김종구.png" alt="김종구"></StaticImage>
              <span>김종구 (인하대학교 대학원 전기컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/양호준.png" alt="양호준"></StaticImage>
              <span>양호준 (인하대학교 대학원 전기컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/이문형.png" alt="이문형"></StaticImage>
              <span>이문형 (인하대학교 대학원 전기컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/정회준.png" alt="정회준"></StaticImage>
              <span>정회준 (인하대학교 대학원 전기컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/최정무.png" alt="최정무"></StaticImage>
              <span>최정무 (인하대학교 컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
            <StaticImage className={Style.faculty_img_small} src="../../assets/images/안나겸.jpg" alt="안나겸"></StaticImage>
              <span>안나겸 (인하대학교 컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/정여진.jpeg" alt="정여진"></StaticImage>
              <span>정여진 (인하대학교 컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/강종욱.jpeg" alt="강종욱"></StaticImage>
              <span>강종욱 (인하대학교 컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/전민혜.jpeg" alt="전민혜"></StaticImage>
              <span>전민혜 (인하대학교 컴퓨터공학과)</span>
            </div>
            <div className={Style.mentor_info}>
              {/* <StaticImage className={Style.faculty_img_small} src="../../assets/images/최정무.png" alt="최정무"></StaticImage> */}
              <span>최지민 (인하대학교 컴퓨터공학과)</span>
            </div>
          </div>
          <div className={Style.first_title}>성과관리위원회</div>
          <div className={Style.mentor_name}>
            <div className={Style.mentor_info}>
              <span>(주)오즈레이 백문기 이사</span>
            </div>
            <div className={Style.mentor_info}>
              <StaticImage className={Style.faculty_img_small} src="../../assets/images/백성현.png" alt="백성현"></StaticImage>
              <span>인하대 화학공학과 백성현 교수님</span>
            </div>
            <div className={Style.mentor_info}>
            <StaticImage className={Style.faculty_img_small} src="../../assets/images/오재덕.png" alt="오재덕"></StaticImage>
              <span>LG전자 오재덕연구원</span>
            </div>
            <div className={Style.mentor_info}>
              <span>(주)AI네트웍스 이현준이사</span>
            </div>
            <div className={Style.mentor_info}>
              <span>(주)이투엠쓰리 최종혁이사</span>
            </div>
          </div>
        </section>

        <div className={Style.FAQ}>
          <div className={Style.contact_title}>FAQ</div>
          <h5 className={Style.contact_h5}>
            자주 유입되는 문의사항은 FAQ에 업데이트 될 예정입니다.
          </h5>
          <div className={Style.second_title}>
            Q1. K-Software BootCamp는 누구를 위한 대상인가요?
          </div>
          <div className={Style.contact_h5}>
            A1. 인하대학교의 K-Software BootCamp는 비전공의 학생에 중점을 맞춘
            커리큘럼으로써 IT관심이 있는 학생(복수,부전공, 연계,마이크로 전공
            포함)이라면 누구나 지원이 가능하며 비전공자 우대합니다.
          </div>
          <div className={Style.second_title}>
            Q2. 신청서를 잘못 제출하였습니다. 어떻게 해야 하나요?
          </div>
          <div className={Style.contact_h5}>
            A2. 마지막에 접수된 신청서를 최종 신청서로 구별할 예정입니다.
          </div>
        </div>

        <div className={Style.contact}>
          <div className={Style.contact_title}>Contact</div>
          <h5 className={Style.contact_h5}>
            기타 문의 사항이 있다면 연락 또는 방문 부탁드립니다.
          </h5>
          <div className={Style.contact_second_title}>이메일</div>
          <h5 className={Style.contact_h5}>keb@inha.ac.kr</h5>
          <div className={Style.contact_second_title}>전화번호</div>
          <h5 className={Style.contact_h5}>032-860-9504</h5>
          <div className={Style.contact_second_title}>오시는 길</div>
          <h5 className={Style.h5_before_img}>
            인천광역시 미추홀구 인하로 100 (60주년 기념관 1406호)
          </h5>
          <iframe
            className={Style.map_img}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.7143148492391!2d126.65645353270287!3d37.45060046263068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79aa055402f5%3A0xc9f3109bcd6bd8a2!2z7J247LKc6rSR7Jet7IucIOyaqe2YhOuPmSDsnbjtlZjrjIDtlZnqtZAg7ZWY7J207YWM7YGs7IS87YSw!5e0!3m2!1sko!2skr!4v1615428174279!5m2!1sko!2skr"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default KSoftwareBootcamp
